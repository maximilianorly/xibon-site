/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Accept-CH',
                value: 'Sec-CH-Prefers-Color-Scheme',
              },
            ],
          },
        ];
    },
};

export default nextConfig;
