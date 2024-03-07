import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        typedRoutes: true,
        missingSuspenseWithCSRBailout: false,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default withVanillaExtract(nextConfig);
