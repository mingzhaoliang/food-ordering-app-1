"use client";

import { useEffect, useRef } from "react";

export default function Modal({ children, open, onClose, isFlexible }: { children: React.ReactNode, open: boolean, onClose: () => void, isFlexible: boolean }) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const modal = dialog.current;

        open ? modal?.showModal() : modal?.close();

        // return () => modal?.close();
    }, [open])

    return (
        <div className={`${open ? "" : "hidden"} fixed inset-0 z-50 bg-slate-500/75 backdrop-blur-sm transition-all`}>
            <dialog ref={dialog} onClose={onClose} className={`rounded-md z-50 ${isFlexible ? "w-11/12 xs:w-10/12 md:w-8/12" : "max-w-80"} outline-none`}>
                {children}
            </dialog>
        </div>
    )
}