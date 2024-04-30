export default function FilledButton({
	colour,
	type,
	disabled,
	onClick,
	children,
}: {
	colour: string;
	type: "button" | "submit";
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`${disabled ? `bg-${colour}-700/60 cursor-not-allowed` : `bg-${colour}-700 hover:bg-${colour}-900`} p-2 w-full text-white rounded transition-all`}
		>
			{children}
		</button>
	);
}
