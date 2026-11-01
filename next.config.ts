import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Short social links: one per platform, each carrying that platform's UTMs.
  async redirects() {
    return [
      { source: "/fb", destination: "https://go.sellmorestudio.com/free-sample?utm_source=facebook&utm_medium=social&utm_campaign=free_sample", permanent: false },
      { source: "/ig", destination: "https://go.sellmorestudio.com/free-sample?utm_source=instagram&utm_medium=social_bio&utm_campaign=free_sample", permanent: false },
      { source: "/tt", destination: "https://go.sellmorestudio.com/free-sample?utm_source=tiktok&utm_medium=social_bio&utm_campaign=free_sample", permanent: false },
      { source: "/yt", destination: "https://go.sellmorestudio.com/free-sample?utm_source=youtube&utm_medium=video_desc&utm_campaign=free_sample", permanent: false },
    ];
  },
};

export default nextConfig;
