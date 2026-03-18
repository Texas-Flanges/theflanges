import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Flanges',
  description: 'Privacy Policy for The Flanges.',
  alternates: {
    canonical: "https://theflanges.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://theflanges.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: "https://theflanges.com/privacy-policy"
      }
    ]
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy for The Flanges</h2>

            <p className="mb-4">
              This Privacy Policy describes how The Flanges (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses your information.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Information We Collect</h3>
            <p className="mb-4">
              We may collect information about you when you visit our website, including your IP address, browser type, and pages visited.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">How We Use Your Information</h3>
            <p className="mb-4">
              We use the information we collect to improve our website and provide better service to our customers.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Contact Us</h3>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us at sales@texasflange.com or call 281-484-8325.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
