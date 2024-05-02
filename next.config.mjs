/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "mks-sistemas.nyc3.digitaloceanspaces.com" 
        ],
    },
    output: "standalone",
};

export default nextConfig;
