import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Flanges | Your Informational Hub for Industrial Flanges",
  description:
    "Welcome to The Flanges, your informational hub dedicated to the world of industrial flanges. Learn about pipe flange types, materials, and specifications.",
  keywords:
    "flanges, pipe flanges, weld neck flanges, slip-on flanges, blind flanges, carbon steel flanges, stainless steel flanges, industrial flanges",
  openGraph: {
    title: "The Flanges | Your Informational Hub for Industrial Flanges",
    description:
      "Your informational hub dedicated to the world of industrial flanges. Learn about types, materials, and specifications.",
    url: "https://theflanges.com",
    siteName: "The Flanges",
    type: "website",
    images: [
      {
        url: "https://theflanges.com/hero-flanges.jpg",
        width: 1920,
        height: 1080,
        alt: "Industrial flanges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Flanges | Industrial Flange Information",
    description:
      "Your informational hub for industrial flanges. Types, materials, and specifications.",
  },
  alternates: { canonical: "https://theflanges.com" },
};

export default function Home() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            .rv { opacity: 1; transform: none; }
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Flanges",
            url: "https://theflanges.com",
            description:
              "Informational hub dedicated to the world of industrial flanges.",
            parentOrganization: {
              "@type": "Organization",
              name: "Texas Flange & Fitting Supply",
              url: "https://texasflange.com?ref=theflanges",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-281-484-8325",
              contactType: "sales",
              email: "sales@texasflange.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a flange?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A flange is a critical mechanical component used to connect pipes, valves, pumps, and other equipment to form a piping system. Typically made from forged or cast steel, a pipe flange allows for easy access for cleaning, inspection, or modification.",
                },
              },
              {
                "@type": "Question",
                name: "What are the types of flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The most frequently sourced types include Weld Neck flanges (for high pressure), Slip-On flanges (for easy installation), Blind flanges (to shut off a line), and Threaded flanges (for no-weld connections).",
                },
              },
              {
                "@type": "Question",
                name: "What materials are flanges made from?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The most common choice for general industrial use is Carbon Steel (such as ASTM A105). For corrosion resistance, Stainless Steel (like 304 or 316) is the standard. Alloy steel and specialty materials are available for extreme applications.",
                },
              },
              {
                "@type": "Question",
                name: "Why use weld neck flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weld neck flanges are the preferred choice for critical, high-stress applications. Their long tapered hub provides structural reinforcement and transfers stress from the flange to the pipe.",
                },
              },
              {
                "@type": "Question",
                name: "Where to buy flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We recommend Texas Flange for reliable, high-quality flange supplies.",
                },
              },
            ],
          }),
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#1a3a5c",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <span style={{ color: "#fff", fontSize: "20px", fontWeight: 700 }}>
          The Flanges
        </span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="/" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            Home
          </a>
          <a href="/blog" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            Blog
          </a>
          <a href="#about" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            About
          </a>
          <a href="#faq" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            FAQ
          </a>
          <a
            href="https://texasflange.com?ref=theflanges"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#e63946",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="rv"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,58,92,0.72), rgba(26,58,92,0.72)), url(/hero-flanges.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "520px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 24px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "52px",
            fontWeight: 800,
            marginBottom: "24px",
          }}
        >
          The Flanges
        </h1>
        <p
          style={{
            color: "#e0e0e0",
            fontSize: "18px",
            maxWidth: "750px",
            lineHeight: 1.7,
            marginBottom: "16px",
          }}
        >
          Welcome to The Flanges, your new informational hub dedicated to the
          world of industrial flanges. This site was created to be a clear and
          simple resource for anyone looking to understand the basics of a pipe
          flange, from its different types and materials to its critical role in
          connecting piping systems.
        </p>
        <p
          style={{
            color: "#ccc",
            fontSize: "16px",
            maxWidth: "700px",
            lineHeight: 1.7,
            marginBottom: "16px",
          }}
        >
          We cover the fundamentals of all pipe flanges, helping you learn the
          difference between weld neck, slip-on, and blind flanges. This site is
          for educational purposes only.
        </p>
        <p
          style={{
            color: "#ccc",
            fontSize: "16px",
            maxWidth: "700px",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          When you&apos;ve finished your research and are ready to source
          high-quality flanges from a trusted, world-class flange supplier, we
          proudly recommend visiting{" "}
          <a
            href="https://texasflange.com?ref=theflanges"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#82b1ff" }}
          >
            Texas Flange
          </a>{" "}
          for all your project needs.
        </p>
        <a
          href="https://texasflange.com?ref=theflanges"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#e63946",
            color: "#fff",
            padding: "14px 32px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Visit Texas Flange
        </a>
      </section>

      {/* About The Flanges */}
      <section
        id="about"
        className="rv"
        style={{
          padding: "80px 24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          About The Flanges
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#444",
            textAlign: "center",
          }}
        >
          Welcome to The Flanges, your expert guide for sourcing the right pipe
          flanges. This site is dedicated to helping you understand the critical
          specifications, materials (like carbon steel or stainless steel), and
          pressure ratings you need for your project. We cover all flange types so
          you can confidently define your requirements and dimensions. When you are
          ready to buy or request a quote, we recommend contacting the premier
          flange supplier,{" "}
          <a
            href="https://texasflange.com?ref=theflanges"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a3a5c", fontWeight: 600 }}
          >
            Texas Flange
          </a>
          , for all standard and custom flanges.
        </p>
      </section>

      {/* Our Mission */}
      <section
        className="rv"
        style={{
          padding: "80px 24px",
          backgroundColor: "#f5f7fa",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#1a3a5c",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#444",
              textAlign: "center",
            }}
          >
            Our mission is to be the web&apos;s best informational resource for
            industrial flanges. We simplify complex topics from pipe flange
            specifications and pressure ratings to different materials like carbon
            and stainless steel. We aim to help you fully understand your
            requirements so you can confidently source the exact pipe flanges you
            need. When you&apos;re ready for a quote, we guide you to the
            industry&apos;s premier flange supplier:{" "}
            <a
              href="https://texasflange.com?ref=theflanges"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1a3a5c", fontWeight: 600 }}
            >
              Texas Flange
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="rv"
        style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h2>
        {[
          {
            q: "What is a flange?",
            a: "A flange is a critical mechanical component used to connect pipes, valves, pumps, and other equipment to form a piping system. Typically made from forged or cast steel, a pipe flange allows for easy access for cleaning, inspection, or modification. When you are looking to buy flanges, understanding the correct dimensions and pressure class is essential to ensure a leak-proof seal for your industrial requirements.",
          },
          {
            q: "What are the types of flanges?",
            a: "There are several standard types designed for specific applications. The most frequently sourced types include Weld Neck flanges (for high pressure), Slip-On flanges (for easy installation), Blind flanges (to shut off a line), and Threaded flanges (for no-weld connections). Choosing the right type depends on your project's pressure specifications and the media flowing through the pipe.",
          },
          {
            q: "What materials are flanges made from?",
            a: "Flanges are manufactured in a variety of materials to match the pipe they connect to. The most common choice for general industrial use is Carbon Steel (such as ASTM A105). For environments requiring corrosion resistance, Stainless Steel (like 304 or 316) is the standard specification. You can also quote and purchase alloy steel and specialty materials for extreme temperature or chemical applications.",
          },
          {
            q: "Why use weld neck flanges?",
            a: "Weld neck flanges are the preferred choice for critical, high-stress applications. Their long tapered hub provides structural reinforcement and transfers stress from the flange to the pipe, making them ideal for high-pressure or high-temperature systems. If your project demands maximum reliability and safety, adding weld neck flanges to your purchase order is the industry standard.",
          },
          {
            q: "Where to buy flanges?",
            a: "We recommend Texas Flange for reliable, high-quality flange supplies.",
          },
        ].map((item, i) => (
          <details
            key={i}
            style={{
              marginBottom: "12px",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "12px",
            }}
          >
            <summary
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#1a3a5c",
                cursor: "pointer",
                padding: "12px 0",
              }}
            >
              {item.q}
            </summary>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#555",
                padding: "8px 0 16px 0",
              }}
            >
              {item.a}
            </p>
          </details>
        ))}
      </section>

      {/* CTA Section */}
      <section
        className="rv"
        style={{
          padding: "80px 24px",
          backgroundColor: "#1a3a5c",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Ready to Source Your Flanges?
          </h3>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#ccc",
              marginBottom: "32px",
            }}
          >
            When you&apos;re ready to buy or request a quote, contact the premier
            flange supplier for all standard and custom flanges.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a
              href="https://texasflange.com?ref=theflanges"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#e63946",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Visit Texas Flange
            </a>
            <a
              href="tel:281-484-8325"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #fff",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Call 281-484-8325
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0f2640",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "8px" }}>
          Phone:{" "}
          <a href="tel:281-484-8325" style={{ color: "#82b1ff" }}>
            +1 281 484-8325
          </a>{" "}
          | Fax: 281-484-8730 | Email:{" "}
          <a href="mailto:sales@texasflange.com" style={{ color: "#82b1ff" }}>
            sales@texasflange.com
          </a>
        </p>
        <p style={{ color: "#666", fontSize: "13px" }}>
          &copy; 2025. All rights reserved.
        </p>
      </footer>
    </>
  );
}
