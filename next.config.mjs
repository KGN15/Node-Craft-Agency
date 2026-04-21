/** @type {import('next').NextConfig} */
const nextConfig = {
    httpAgentOptions: {
        keepAlive: true,
    },
        images: {   
        domains: ['i.pinimg.com'],
    },
};
export default nextConfig;
