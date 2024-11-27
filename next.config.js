const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'components/atg/demo-projects'),
              to: path.resolve(__dirname, '.next/demo-projects'),
            },
          ],
        })
      );
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/",
      },
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
    ],
    domains: ["web-stories.keploy.io.s3.amazonaws.com"],
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);