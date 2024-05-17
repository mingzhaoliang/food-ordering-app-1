/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/menu",
                destination: "/menu/antipasti",
                permanent: true
            },
            {
                source: "/my",
                destination: "/my/orders",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
