import FilledButton from "@/components/ui/button/filled-button";
import Link from "next/link";

export default function CancelledOrderActions() {
	return (
		<Link href="/menu" className="block" draggable={false}>
			<FilledButton colour="teal" type="button">
				Go to menu
			</FilledButton>
		</Link>
	);
}
