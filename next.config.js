const injectWhyDidYouRender = require('./scripts/why-did-you-render');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  webpack: (config, context) => {
    // Only run in dev mode and client build
    if (context.dev && !context.isServer) {
      console.log('Injecting why-did-you-render...');
      config.optimization.minimize = false;
      injectWhyDidYouRender(config, context);
    }

    // Add support for importing SVG files as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/",
      },
      // {
      //   source: '/blog/:slug*',
      //   destination: 'https://blog-website-phi-eight.vercel.app/blog/:slug*',
      // },
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
    ],
    domains: ["web-stories.keploy.io.s3.amazonaws.com"],
    unoptimized: true,
  },
});
