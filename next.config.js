/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/blog/understanding-complete-solutions-design-and-specifications", destination: "/blog/choosing-the-right-flange-a-guide-to-types-materials-and-specifications", permanent: true },
      { source: "/blog/industrial-applications-for-complete-solutions", destination: "/blog/choosing-the-right-flange-a-guide-to-types-materials-and-specifications", permanent: true },
      { source: "/blog/standards-and-quality-assurance-in-complete-solutions", destination: "/blog/choosing-the-right-flange-a-guide-to-types-materials-and-specifications", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/services", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
