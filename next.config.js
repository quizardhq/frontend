/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    QUIZARD_USERS_API: process.env.NODE_ENV === 'development' ? 'http://localhost:3006/api/v1' :'https://api.quizardhq.com/api/v1',
  },
};

module.exports = nextConfig;
