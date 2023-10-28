/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    distDir: '_static',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
