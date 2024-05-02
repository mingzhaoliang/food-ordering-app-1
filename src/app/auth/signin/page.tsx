"use client";

import { ClientSafeProvider, LiteralUnion, getProviders } from "next-auth/react";
import { restaurantName } from "@/utils/data";
import SignInForm from "@/components/auth/signin-form";
import AuthContent from "@/components/auth/auth-content";
import { useEffect, useState } from "react";
import { BuiltInProviderType } from "next-auth/providers/index";

export default function SignInPage() {
	const [providers, setProviders] = useState<Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null>(null);

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
		})();
	}, []);

	return (
		<AuthContent title="Welcome" message={`Sign in to continue to ${restaurantName}.`}>
			<SignInForm providers={providers} />
		</AuthContent>
	);
}
