import FilledButton from "@/components/ui/button/filled-button";
import Link from "next/link";

export default function PaidOrderActions() {
	return (
		// <FilledButton colour="teal" type="button">
		// 	Track
		// 	<span className="hidden xs:inline"> Order</span>
		// </FilledButton>
		<Link href="/menu" className="block" draggable={false}>
			<FilledButton colour="teal" type="button">
				Place another order
			</FilledButton>
		</Link>
	);
}
