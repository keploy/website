const injectWhyDidYouRender = require('./scripts/why-did-you-render');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  webpack: (config, context) => {
    // only run in dev mode and client build
    if (context.dev && !context.isServer) {
      console.log('Injecting why-did-you-render...');
      // inject the why-did-you-render script
      config.optimization.minimize = false;

      injectWhyDidYouRender(config, context);
    }

		return config;
	},
  // swcMinify: false,
  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/",
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
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "web-stories.keploy.io.s3.amazonaws.com",
      //   port: "",
      //   pathname: "**",
      // },
    ],
    domains: ["web-stories.keploy.io.s3.amazonaws.com"],
    unoptimized: true,
  },
});