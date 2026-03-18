import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | The Flanges',
  description: 'Get in touch with The Flanges for quotes, technical support, and more information.',
  alternates: {
    canonical: "https://theflanges.com/contact",
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://theflanges.com/contact"
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
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">We're here to help with your flange needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-lg"><a href="tel:+1-281-484-8325" className="text-blue-600 hover:text-blue-800">281-484-8325</a></p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-lg"><a href="mailto:sales@texasflange.com" className="text-blue-600 hover:text-blue-800">sales@texasflange.com</a></p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Website</h3>
                  <p className="text-lg"><a href="https://texasflange.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">texasflange.com</a></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Quote Request</h2>
              <p className="mb-6 text-gray-700">
                For detailed quotes and rush orders, please visit our main website or call our sales team directly.
                We provide rapid response times for all inquiries.
              </p>
              <a href="https://www.texasflange.com/contact-us/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Request a Quote
              </a>
              <p className="mt-6 text-sm text-gray-600">
                Providing professional-grade complete solutions and expert technical support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}