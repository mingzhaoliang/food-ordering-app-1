import Image from "next/image";

export default function OrderBriefImages({ imageSrcs, names }: { imageSrcs: string[], names: string[] }) {

    return (
        <div className={`relative rounded-xl max-xs:w-full xs:min-w-36 sm:min-w-40 xl:min-w-44 h-36 overflow-hidden`}>
            <div className={`relative ${imageSrcs.length === 1 ? "w-full" : "max-xs:w-11/12 xs:w-28 sm:w-32 xl:w-36"} h-36 rounded-xl`} style={{ zIndex: `${imageSrcs.length}` }}>
                <Image
                    src={imageSrcs[0]}
                    alt={names[0]}
                    fill
                    sizes="100% 100%"
                    className="rounded-xl border border-white/80 object-cover"
                />
            </div>
            {imageSrcs.slice(1).map((src, index) => (
                <div key={src} className={`absolute top-0 max-xs:w-11/12 xs:w-28 sm:w-32 xl:w-36 h-36 rounded-xl`} style={{ left: `${50 / imageSrcs.length * (index + 1)}px`, zIndex: `${imageSrcs.length - (index + 1)}` }}>
                    <Image
                        key={index}
                        src={src}
                        alt={names[index]}
                        fill
                        quality={20}
                        sizes="100% 100%"
                        className="rounded-xl border border-white/80 object-cover"
                        style={{ opacity: `${(1 / imageSrcs.length * (imageSrcs.length - (index + 1)))}` }}
                    />
                </div>
            ))}
        </div>
    )
}