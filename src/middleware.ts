import withAuth from "next-auth/middleware";

export const config = { matcher: ["/account/:path*"] }

export default withAuth({
    pages: {
        signIn: "/auth/signin",
    }
})