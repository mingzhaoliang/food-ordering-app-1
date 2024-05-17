export default function FilledButton({
	colour,
	type,
	disabled,
	onClick,
	children,
}: {
	colour: "teal" | "slate";
	type: "button" | "submit";
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}) {
	let normalColour, hoveredColour, disabledColour;
	switch (colour) {
		case "teal":
			normalColour = "bg-teal-700";
			hoveredColour = "bg-teal-900";
			disabledColour = "bg-teal-700/60";
			break;
		case "slate":
			normalColour = "bg-slate-700";
			hoveredColour = "bg-slate-900";
			disabledColour = "bg-slate-700/60";
			break;
	}

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`${disabled ? `${disabledColour} cursor-not-allowed` : `${normalColour} hover:${hoveredColour}`} p-2 w-full text-white rounded transition-color duration-200`}
		>
			{children}
		</button>
	);
}
