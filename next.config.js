/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    QUIZARD_USERS_API: 'http://127.0.0.1:3006/api/v1',
  },
};

module.exports = nextConfig;
