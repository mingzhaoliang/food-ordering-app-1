import Image from "next/image";

export default function IconButton({ children, src, alt, className, onClick }: { children?: React.ReactNode, src: string, alt: string, className?: string, onClick?: () => void }) {

    return (
        <div className={`rounded-full bg-white hover:bg-stone-100 shadow-md p-[0.6rem] cursor-pointer flex gap-1 items-center ${className}`} onClick={onClick}>
            <div className="w-4 h-4 xs:w-5 xs:h-5">
                <Image src={src} alt={alt} draggable={false} className={`m-auto w-full h-full`} />
            </div>
            {children}
        </div>
    )
}

// w-[2.15rem] xs:w-[2.4rem] h-[2.15rem] xs:h-[2.4rem]