"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Modal from "./modal";
import { useCallback, useEffect, useRef, useState } from "react";
import { VscPass } from "react-icons/vsc";
import { BiSolidErrorCircle } from "react-icons/bi";
import { globalActions } from "@/lib/store/global-slice";

const COUNT_DOWN = 10;

export default function Toast() {
    const [countDown, setCountDown] = useState(COUNT_DOWN);
    const { toast } = useAppSelector((state) => state.global);
    const dispatch = useAppDispatch();
    const timer = useRef<NodeJS.Timeout>();
    const interval = useRef<NodeJS.Timeout>();

    const onClose = useCallback(() => {
        dispatch(globalActions.clearToast());
        setCountDown(COUNT_DOWN);
        clearTimeout(timer.current);
        clearInterval(interval.current);
    }, [dispatch]);

    useEffect(() => {
        if (toast) {
            timer.current = setTimeout(() => {
                onClose();
            }, 1000 * COUNT_DOWN);

            interval.current = setInterval(() => {
                setCountDown((prev) => prev - 1);
            }, 1000);
        }

        return () => {
            clearTimeout(timer.current);
            clearInterval(interval.current);
        };
    }, [onClose, toast]);

    return (
        <Modal open={!!toast} onClose={onClose}>
            {toast && (
                <div className="relative max-w-80 p-6 bg-white text-center flex flex-col justify-center items-center gap-4">
                    {toast.status === "success" ? (
                        <VscPass className="text-4xl sm:text-5xl text-teal-700" />
                    ) : (
                        <BiSolidErrorCircle className="text-4xl sm:text-5xl text-rose-400" />
                    )}
                    <p className="lg:text-lg leading-relaxed">{toast.message}</p>
                    <p className="text-sm text-slate-500">Auto closing in {countDown} seconds</p>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-slate-800 outline-none"
                    >
                        {"\u2715"}
                    </button>
                </div>
            )}
        </Modal>
    );
}
