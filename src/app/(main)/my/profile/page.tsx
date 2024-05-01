"use client";

import ProfileForm from "@/components/my/profile/profile-form";
import { useState } from "react";

export default function ProfilePage() {
	const [resetForm, setResetForm] = useState(false);

	const toggleResetForm = () => {
		setResetForm((prevState) => !prevState);
	};

	return <ProfileForm key={resetForm.toString()} resetForm={toggleResetForm} />;
}
