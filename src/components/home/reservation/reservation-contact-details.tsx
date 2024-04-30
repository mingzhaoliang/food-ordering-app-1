"use client";

import FilledButton from "@/components/ui/button/filled-button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { reservationActions } from "@/lib/store/reservation-slice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function ReservationContactDetails() {
	const { data: session, status } = useSession();
	const { user } = useAppSelector((state) => state.user);
	const { contactDetails, invalidFields, availableTimes, selectedTime } = useAppSelector(
		(state) => state.reservation
	);
	const dispatch = useAppDispatch();

	const changeHandler = (label: string, value: string) => {
		dispatch(reservationActions.setContactDetails({ [label]: value }));
	};

	const clickHandler = () => {
		dispatch(
			reservationActions.setInvalidFields({
				name: "",
				email: "",
				mobileNumber: "",
				specialRequests: "",
				selectedTime: "",
			})
		);

		let valid = true;

		Object.keys(contactDetails).forEach((key) => {
			const value = contactDetails[key as keyof typeof contactDetails];
			if (!value && key !== "specialRequests" && key !== "selectedTime") {
				dispatch(
					reservationActions.setInvalidFields({ [key]: `A valid ${key} is required.` })
				);
				valid = false;
			}
		});

		if (contactDetails.name && contactDetails.name.length < 3) {
			dispatch(
				reservationActions.setInvalidFields({
					name: "Name must be at least 3 characters long.",
				})
			);
			valid = false;
		}

		if (
			contactDetails.mobileNumber &&
			!String(contactDetails.mobileNumber).match(/^[0]\d{9,9}$/)
		) {
			dispatch(
				reservationActions.setInvalidFields({
					mobileNumber: "Invalid phone number. Must start with 0 and be 10 digits long.",
				})
			);
			valid = false;
		}

		if (
			contactDetails.email &&
			!String(contactDetails.email).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
		) {
			dispatch(reservationActions.setInvalidFields({ email: "Invalid email address." }));
			valid = false;
		}

		if (contactDetails.specialRequests && contactDetails.specialRequests.length > 2000) {
			dispatch(
				reservationActions.setInvalidFields({
					specialRequests: "Requests must be less than 2000 characters.",
				})
			);
			valid = false;
		}

		if (!availableTimes.includes(selectedTime)) {
			dispatch(
				reservationActions.setInvalidFields({
					selectedTime: "Please select a valid time.",
				})
			);
			valid = false;
		}

		if (!valid) return;

		dispatch(reservationActions.setReadyToSubmit(true));
	};

	useEffect(() => {
		dispatch(
			reservationActions.setContactDetails({
				name: user.name,
				email: user.email,
				mobileNumber: user.phoneNumber,
			})
		);
	}, [dispatch, user]);

	return (
		<div className="w-full h-full flex flex-col gap-3">
			<div className="w-full space-y-2">
				<label
					htmlFor="name"
					className="block after:content-['*'] after:ml-0.5 after:text-rose-500"
				>
					Name
				</label>
				<input
					type="text"
					required
					name="name"
					id="name"
					className="block w-full rounded-md border border-slate-400 p-2 outline-none"
					value={contactDetails.name}
					onChange={(e) => changeHandler("name", e.target.value)}
				/>
				{invalidFields.name && (
					<p className="text-rose-500 text-sm">{invalidFields.name}</p>
				)}
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,_1fr))] gap-4">
				<div className="w-full space-y-2">
					<label
						htmlFor="email"
						className="block after:content-['*'] after:ml-0.5 after:text-rose-500"
					>
						Email
					</label>
					<input
						type="email"
						// readOnly
						name="email"
						id="email"
						className="block w-full rounded-md border border-slate-400 p-2 text-slate-500 outline-none"
						value={contactDetails.email}
						onChange={(e) => changeHandler("email", e.target.value)}
					/>
					{invalidFields.email && (
						<p className="text-rose-500 text-sm">{invalidFields.email}</p>
					)}
				</div>
				<div className="w-full space-y-2">
					<label
						htmlFor="mobileNumber"
						className="block after:content-['*'] after:ml-0.5 after:text-rose-500"
					>
						Mobile Number
					</label>
					<input
						type="tel"
						required
						name="mobileNumber"
						id="mobileNumber"
						className="block w-full rounded-md border border-slate-400 p-2 outline-none"
						value={contactDetails.mobileNumber}
						onChange={(e) => changeHandler("mobileNumber", e.target.value)}
					/>
					{invalidFields.mobileNumber && (
						<p className="text-rose-500 text-sm">{invalidFields.mobileNumber}</p>
					)}
				</div>
			</div>
			<div className="w-full flex-1 space-y-2 flex flex-col">
				<label htmlFor="specialRequests" className="block">
					Special Requests
				</label>
				<textarea
					name="specialRequests"
					id="specialRequests"
					className="block flex-1 w-full rounded-md border border-slate-400 p-2 outline-none"
					value={contactDetails.specialRequests}
					maxLength={2000}
					onChange={(e) => changeHandler("specialRequests", e.target.value)}
				/>
				<p className="text-xs md:text-sm text-slate-500">
					{2000 - contactDetails.specialRequests.length} of 2000 characters remaining
				</p>
				{invalidFields.specialRequests && (
					<p className="text-rose-500 text-sm">{invalidFields.specialRequests}</p>
				)}
			</div>
			{invalidFields.selectedTime && (
				<p className="text-rose-500 text-sm">{invalidFields.selectedTime}</p>
			)}
			{status === "authenticated" && (
				// <button
				//     className="block w-full rounded-md border border-slate-400 px-2 py-1 mt-2 bg-teal-600 text-white"
				//     onClick={clickHandler}
				// >
				//     Reserve
				// </button>
				<FilledButton colour="teal" type="button" onClick={clickHandler}>
					Reserve
				</FilledButton>
			)}
			{status === "loading" && (
				<div
					className="block w-full rounded-md border border-slate-400 px-2 py-1 mt-2 bg-teal-600 text-white text-center"
					onClick={clickHandler}
				>
					Loading...
				</div>
			)}
			{status === "unauthenticated" && (
				<Link
					href="/api/auth/signin"
					className="block w-full rounded-md border border-slate-400 px-2 py-1 mt-2 bg-teal-600 text-white text-center"
				>
					Sign In to Reserve
				</Link>
			)}
		</div>
	);
}
