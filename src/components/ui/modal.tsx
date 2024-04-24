"use client";

import { useEffect, useRef } from "react";

export default function Modal({
    children,
    open,
    onClose,
    onCancel,
}: {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    onCancel?: boolean;
}) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const modal = dialog.current;

        open ? modal?.showModal() : modal?.close();

        // return () => modal?.close();
    }, [open]);

    return (
        <div
            className={`${open ? "" : "hidden"} fixed inset-0 z-50 bg-slate-500/75 backdrop-blur-sm transition-all`}
        >
            <dialog
                ref={dialog}
                onClose={onClose}
                onCancel={(event) => {
                    onCancel && event.preventDefault();
                }}
                className={`rounded-md max-sm:mx-4 place-self-center z-50 outline-none`}
            >
                {children}
            </dialog>
        </div>
    );
}
