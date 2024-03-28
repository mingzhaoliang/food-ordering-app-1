"use client";

import { logos } from "@/utils/data";
import { BuiltInProviderType } from "next-auth/providers/index";
import { signIn, LiteralUnion, ClientSafeProvider } from "next-auth/react";
import Image from "next/image";
import BackButton from "./back-button";

export default function SignInForm({ providers }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null }) {

    return (
        <div className="flex flex-col gap-4 w-full px-2">
            {providers &&
                Object.values(providers).map(provider => (
                    <button
                        key={provider.name}
                        onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                        className="sm:min-w-56 xl:min-w-80 max-[480px]:p-2 max-[480px]:text-sm p-4 border flex justify-center items-center gap-2 rounded hover:bg-slate-200 transition-all"
                    >
                        <Image src={logos[provider.id]?.src || logos.default.src} alt={provider.name} width={30} height={30} />
                        Continue with{' '} {provider.name}
                    </button>
                ))
            }
            <BackButton />
        </div>
    )
}