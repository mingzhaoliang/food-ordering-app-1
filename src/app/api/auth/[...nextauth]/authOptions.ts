import clientPromise from "@/lib/clientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions, Session } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile(profile: GoogleProfile) {
				return {
					// Return the default fields
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
					// Add new fields
					username: profile.name,
					mobileNumber: profile?.mobileNumber || "",
					street: profile?.address?.streetAddress || "",
					city: profile?.address?.locality || "",
					state: profile?.address?.region || "",
					postcode: profile?.address?.postalCode || "",
				};
			},
		}),
	],

	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },

	adapter: MongoDBAdapter(clientPromise, { databaseName: "authentication" }) as Adapter,

	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
	},

	callbacks: {
		async jwt({ token, user }) {
			if (!token.user) {
				token.user = {};
			}

			if (user) {
				token.user = { ...user };
			}

			return token;
		},
		async session({ session, token }: { session: Session; token: any }) {
			session.user = {
				...session.user,
				...token.user,
			};

			return session;
		},
	},
};
