import clientPromise from "@/lib/clientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],

    adapter: MongoDBAdapter(clientPromise, {databaseName: "my-database"}) as Adapter,

    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },
};