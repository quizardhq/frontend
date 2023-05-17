/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    QUIZARD_USERS_API: 'https://api.quizardhq.com/api/v1',
  },
};

module.exports = nextConfig;
