export default function PaidOrderActions() {
    return (
        <div className="flex gap-2 text-sm xs:text-base lg:text-lg xl:text-xl">
            <button className="w-full text-center p-2 rounded font-lato text-slate-800 border border-slate-800 hover:text-white hover:bg-slate-800 transition-all duration-300">
                Cancel
                <span className="hidden xs:inline"> Order</span>
            </button>
            <button className="w-full text-center p-2 rounded font-lato text-white border border-teal-700 bg-teal-700 hover:text-white hover:border-teal-900 hover:bg-teal-900 transition-all duration-300">
                Track
                <span className="hidden xs:inline"> Order</span>
            </button>
        </div>
    )
}