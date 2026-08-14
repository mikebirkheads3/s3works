/** @type {import('next').NextConfig} */
const nextConfig = {
  // jQuery plugins mutate the DOM directly; StrictMode's double-invoke would
  // double-initialize them, so we disable it for this faithful port.
  reactStrictMode: false,
};

export default nextConfig;
