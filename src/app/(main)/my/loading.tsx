import Spinner from "@/components/ui/spinner";

export default function AccountLoading() {
	return (
		<div className="max-w-[50rem] p-10 place-content-center">
			<Spinner fallback="Loading..." />
		</div>
	);
}
