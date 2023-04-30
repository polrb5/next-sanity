/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'es', 'ca'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
