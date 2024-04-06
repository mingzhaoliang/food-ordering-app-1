"use client";

import { useEffect, useRef } from "react";

export default function Modal({ children, open, onClose }: { children: React.ReactNode, open: boolean, onClose: () => void }) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const modal = dialog.current;

        open ? modal?.showModal() : modal?.close();

        // return () => modal?.close();
    }, [open])

    return (
        <div className="lg:hidden">
            <div className={`${open ? "" : "hidden"} fixed rounded inset-0 z-50 bg-slate-500/75 backdrop-blur-sm transition-all`}></div>
            <dialog ref={dialog} onClose={onClose} className="fixed rounded-md inset-0 z-50 w-11/12 xs:w-10/12 md:w-8/12 outline-none">
                {children}
                <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-800 hover:translate-y-0.5 transition-transform">{"\u2715"}</button>
            </dialog>
        </div>
    )
}