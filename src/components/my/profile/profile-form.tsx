"use client";

import ProfileFormSubmit from "@/components/my/profile/profile-form-submit";
import Spinner from "@/components/ui/spinner";
import { updateProfile } from "@/lib/actions/users";
import { globalActions } from "@/lib/store/global-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

function FormInput({
	label,
	id,
	type,
	pattern,
	defaultValue,
	readOnly,
	required,
	onChange,
}: {
	label: string;
	id: string;
	type: string;
	pattern?: string;
	defaultValue: string;
	readOnly?: boolean;
	required?: boolean;
	onChange?: (field: string, value: string) => void;
}) {
	return (
		<div className="space-y-2">
			<label
				htmlFor={id}
				className={`block text-slate-800 ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""}`}
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				required={required}
				className={`block w-full p-2 border border-gray-300 rounded-md outline-none ${readOnly ? "text-slate-500" : "text-slate-800"}`}
				pattern={pattern}
				defaultValue={defaultValue}
				readOnly={readOnly}
				onChange={(e) => {
					onChange && onChange(id, e.target.value);
				}}
			/>
		</div>
	);
}

export default function ProfileForm({ resetForm }: { resetForm: () => void }) {
	const [state, formAction] = useFormState(updateProfile, { message: "", status: "" });

	const { data: session, status } = useSession();
	const { user } = useAppSelector((state) => state.global);
	const dispatch = useAppDispatch();

	const [formUser, setFormUser] = useState({
		username: user.username,
		mobileNumber: user.mobileNumber,
		street: user.street,
		city: user.city,
		state: user.state,
		postcode: user.postcode,
	});

	const inputChangeHandler = (field: string, value: string) => {
		setFormUser((prevState) => ({ ...prevState, [field]: value }));
	};

	useEffect(() => {
		if (session?.user && state.status) {
			if (state.status === "success") {
				dispatch(
					globalActions.setUser({
						...user,
						...formUser,
					})
				);
			}
			dispatch(globalActions.setToast({ status: state.status, message: state.message }));
			resetForm();
		}
	}, [dispatch, formUser, resetForm, session?.user, state, user]);

	if (status === "loading") {
		return (
			<div className="min-h-80 flex justify-center items-center">
				<Spinner fallback="Loading..." />
			</div>
		);
	}

	return (
		<form
			className="max-md:mx-auto max-xs:w-full max-sm:w-11/12 max-md:w-10/12 md:max-w-[50rem] p-6 pb-8 bg-white rounded-lg flex flex-col gap-4 font-lato max-md:text-md max-lg:text-base transition-all"
			action={formAction}
		>
			<h1 className="md:hidden text-xl font-bold">Profile</h1>
			<FormInput
				label="Name"
				id="username"
				type="text"
				defaultValue={user.username || ""}
				required
				onChange={inputChangeHandler}
			/>
			<div className="grid min-[480px]:grid-cols-2 gap-4">
				<FormInput
					label="Email"
					id="email"
					type="email"
					defaultValue={user.email || ""}
					readOnly
				/>
				<FormInput
					label="Phone"
					id="mobileNumber"
					type="tel"
					pattern="^[0]\d{9,9}$"
					defaultValue={user.mobileNumber || ""}
					onChange={inputChangeHandler}
				/>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-4">
				<FormInput
					label="Street"
					id="street"
					type="text"
					defaultValue={user.street || ""}
					onChange={inputChangeHandler}
				/>
				<FormInput
					label="City"
					id="city"
					type="text"
					defaultValue={user.city || ""}
					onChange={inputChangeHandler}
				/>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-4">
				<div className="space-y-2">
					<label htmlFor="state" className="block text-slate-800">
						State
					</label>
					<select
						key={user.state}
						id="state"
						name="state"
						className="block w-full p-2 border border-gray-300 rounded-md outline-none"
						defaultValue={user.state || "Select a state"}
						onChange={(e) => inputChangeHandler("state", e.target.value)}
					>
						<option value="Select a state" disabled hidden>
							Select a state
						</option>
						<option value="NSW">NSW</option>
						<option value="VIC">VIC</option>
						<option value="QLD">QLD</option>
						<option value="SA">SA</option>
						<option value="WA">WA</option>
						<option value="TAS">TAS</option>
						<option value="NT">NT</option>
					</select>
				</div>
				<FormInput
					label="Postcode"
					id="postcode"
					type="text"
					pattern="\d{4,4}"
					defaultValue={user.postcode || ""}
					onChange={inputChangeHandler}
				/>
			</div>
			{state.status && state.status === "error" && (
				<p className="text-rose-500">{state.message}</p>
			)}
			{/* {state.status === "success" && <p className="text-green-500">{state.message}</p>} */}
			<div className="mt-4 flex justify-center items-center">
				<ProfileFormSubmit />
			</div>
		</form>
	);
}
