import { getProviders } from "next-auth/react";
import { restaurantName } from "@/utils/data";
import SignInForm from "@/components/auth/signin-form";
import AuthContent from "@/components/auth/auth-content";

export default async function SignInPage() {
    const providers = await getProviders();

    return (
        <AuthContent title="Welcome" message={`Sign in to continue to ${restaurantName}.`}>
            <SignInForm providers={providers} />
        </AuthContent>
    );
}
