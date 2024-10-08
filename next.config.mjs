import createNextIntlPlugin from 'next-intl/plugin';

/**
 * Specify the path to your request.js file
 */
const withNextIntl = createNextIntlPlugin('src/app/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

