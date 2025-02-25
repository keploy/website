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
  
  // `assetPrefix` ensures correct asset loading for old pages when redirected from the new production landing page.  

  // Comment out the line below during local development to load assets locally. 
  assetPrefix: 'https://keploy-websites.vercel.app', 
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