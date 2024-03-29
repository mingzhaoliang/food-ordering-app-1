import clientPromise from "@/lib/clientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions, Session } from "next-auth";
import { Adapter, AdapterUser } from "next-auth/adapters";
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
                    phoneNumber: profile?.phoneNumber || "",
                    addressLine1: profile?.address?.streetAddress || "",
                    addressLine2: profile?.address?.extendedAddress || "",
                    city: profile?.address?.locality || "",
                    state: profile?.address?.region || "",
                    postcode: profile?.address?.postalCode || "",
                };
              },
        }),
    ],

    adapter: MongoDBAdapter(clientPromise, {databaseName: "my-database"}) as Adapter,

    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },

    callbacks: {
        async session({session, user}: {session: Session; user: AdapterUser}) {
            session.user.id = user.id;
            session.user.phoneNumber = user.phoneNumber;
            session.user.addressLine1 = user.addressLine1;
            session.user.addressLine2 = user.addressLine2;
            session.user.city = user.city;
            session.user.state = user.state;
            session.user.postcode = user.postcode;
            return session;
        },
      },
};