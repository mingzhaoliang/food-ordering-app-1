export default function Card({ title, description }: { title: string, description: string | JSX.Element }) {
    return (
        <div className="w-full h-fit bg-white py-4 lg:py-6">
            <h2 className="pb-2 sm:pb-4 lg:pb-6 text-xl sm:text-2xl lg:text-3xl max-sm:leading-tight font-portLligatSans transition-all duration-300">{title}</h2>
            <p className="max-sm:text-sm xl:text-lg font-lato text-balance sm:text-justify tracking-wide sm:leading-relaxed xl:leading-relaxed 2xl:leading-loose">{description}</p>
        </div>
    )
}