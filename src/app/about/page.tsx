import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | The Flanges',
  description: 'Learn about The Flanges and our commitment to quality complete solutions.',
  alternates: {
    canonical: "https://theflanges.com/about",
  },
};

export default function AboutPage() {
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
        name: "About",
        item: "https://theflanges.com/about"
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
          <h1 className="text-4xl font-bold">About The Flanges</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg mb-4">
            The Flanges is a leading supplier of premium complete solutions.
            With a commitment to quality, reliability, and customer service, we have established ourselves as a trusted partner
            for engineers and procurement professionals across multiple industries.
          </p>
          <p className="text-lg mb-4">
            We combine decades of manufacturing expertise with cutting-edge production capabilities
            to deliver products that exceed industry standards. Whether you need standard specifications or custom-engineered solutions,
            our team is equipped to meet your requirements.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Commitment</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Quality First:</strong> Every product undergoes rigorous testing and inspection.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Expert Support:</strong> Our engineers are available to help with technical questions and specifications.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Competitive Pricing:</strong> Direct manufacturing means better value for our customers.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Fast Delivery:</strong> Extensive inventory and rapid fulfillment capabilities.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">Serving Multiple Industries</h2>
          <p className="text-lg">
            We proudly serve customers across multiple industries, delivering products and expertise to leading industrial companies,
            engineering firms, and equipment manufacturers. Our understanding of industry needs allows us to provide
            tailored solutions that meet specific requirements and preferences.
          </p>
        </div>
      </section>
    </div>
  );
}