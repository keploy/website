/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/index.html',
                destination: '/',
            },
            // {
            //     source: '/blog/:slug*', // Match any path after /blog
            //     destination: 'https://blog-website-phi-eight.vercel.app/blog/:slug*', // Replace with your actual blog deployment URL
            //   },
            
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
                port: '',
                pathname: '**',
            },
        ],
    },
   
};