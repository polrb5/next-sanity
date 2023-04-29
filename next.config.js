/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: process.env.NEXT_PUBLIC_I18N_LOCALES.split(','),
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
