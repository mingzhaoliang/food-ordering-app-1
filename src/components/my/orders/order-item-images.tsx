import Image from "next/image";

export default function OrderItemImages({ imageSrcs, names }: { imageSrcs: string[], names: string[] }) {

    return (
        <div className={`relative rounded-xl min-w-44 h-36 overflow-hidden`}>
            <div className={`relative ${imageSrcs.length === 1 ? "min-w-36" : "w-36"} h-36 rounded-xl`}>
                <Image
                    src={imageSrcs[0]}
                    alt={names[0]}
                    fill
                    sizes="100% 100%"
                    className="rounded-xl border border-white/80 object-cover z-50"
                />
            </div>
            {imageSrcs.slice(1).map((src, index) => (
                <div key={src} className={`absolute top-0 w-36 h-36 rounded-xl`} style={{ left: `${40 / imageSrcs.length * (index + 1)}px`, zIndex: `${imageSrcs.length - (index + 1)}` }}>
                    <Image
                        key={index}
                        src={src}
                        alt={names[index]}
                        fill
                        sizes="100% 100%"
                        className="rounded-xl border border-white/80 object-cover"
                        style={{ opacity: `${(1 / imageSrcs.length * (imageSrcs.length - (index + 1)))}` }}
                    />
                </div>
            ))}
        </div>
    )
}