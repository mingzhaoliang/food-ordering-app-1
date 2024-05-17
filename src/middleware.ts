import withAuth from "next-auth/middleware";

export const config = { matcher: ["/my/:path*"] };

export default withAuth({
	pages: {
		signIn: "/auth/signin",
	},
});
