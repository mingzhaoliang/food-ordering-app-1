export default function Card({ title, description }: { title: string, description: string | JSX.Element }) {
    return (
        <div className="p-1 border-4 border-slate-200">
            <div className="p-4 lg:p-6 border-2 border-slate-100">
                <h2 className="pb-6 text-xl xs:text-2xl lg:text-2xl xl:text-3xl font-portLligatSans transition-all duration-300">{title}</h2>
                <p className="text-sm xs:text-base xl:text-lg font-lato hyphens-auto text-justify tracking-wide leading-relaxed text-pretty">{description}</p>
            </div>
        </div>
    )
}