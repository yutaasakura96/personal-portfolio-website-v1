import createNextIntlPlugin from 'next-intl/plugin';

/**
 * Specify the path to your request.js file
 */
const withNextIntl = createNextIntlPlugin("src/lib/i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

