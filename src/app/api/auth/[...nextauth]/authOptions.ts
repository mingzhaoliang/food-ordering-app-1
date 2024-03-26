import clientPromise from "@/lib/clientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Auth0Provider from "next-auth/providers/auth0";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import dbConnect from "@/lib/dbConnect";
// import User from "@/models/user";


export const authOptions: NextAuthOptions = {
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
            issuer: process.env.AUTH0_ISSUER_BASE_URL as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: { label: "Email", type: "text" },
        //         password: { label: "Password", type: "password" },
        //     },
        //     async authorize(credentials, req) {
        //         await dbConnect();

        //         if (!credentials?.email || !credentials?.password) {
        //             return null;
        //         }

        //         const user =  await User.findOne({email: credentials.email});

        //         if (user && user.email === credentials.email && user.password === credentials.password) {
        //             return user;
        //         }

        //         return null;
        //     }
        // })
    ],

    adapter: MongoDBAdapter(clientPromise, {databaseName: "my-database"}) as Adapter,

    // callbacks: {
    //     async signIn({user}) {
    //         // console.log("inside callback")
    //         // console.log(user)

    //         await dbConnect();

    //         const existingUser = await User.findOne({email: user.email});
    //         // console.log(existingUser);

    //         if (!existingUser) {
    //             const newUser = new User({
    //                 email: user.email,
    //                 name: user.name,
    //             });

    //             await newUser.save();
    //         }

    //         return true;
    //     }
    // }
};