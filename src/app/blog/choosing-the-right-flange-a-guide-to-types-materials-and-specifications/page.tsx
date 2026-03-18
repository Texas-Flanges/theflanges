import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Choosing the Right Flange: A Guide to Types, Materials, and Specifications | The Flanges",
  description:
    "Selecting the right pipe flange for your project is more than just matching a pipe size. This guide covers flange types, materials, and key specifications.",
  openGraph: {
    title:
      "Choosing the Right Flange: A Guide to Types, Materials, and Specifications",
    description:
      "A guide to selecting the right pipe flange - types, materials, and specifications.",
    url: "https://theflanges.com/blog/choosing-the-right-flange-a-guide-to-types-materials-and-specifications",
    type: "article",
    images: [
      {
        url: "https://theflanges.com/blog-flanges.jpg",
        width: 1920,
        height: 1080,
        alt: "Industrial flanges",
      },
    ],
  },
  alternates: {
    canonical:
      "https://theflanges.com/blog/choosing-the-right-flange-a-guide-to-types-materials-and-specifications",
  },
};

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
      name: "Blog",
      item: "https://theflanges.com/blog"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Choosing the Right Flange: A Guide to Types, Materials, and Specifications",
      item: "https://theflanges.com/blog/choosing-the-right-flange-a-guide-to-types-materials-and-specifications"
    }
  ]
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
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
            "@type": "Article",
            headline:
              "Choosing the Right Flange: A Guide to Types, Materials, and Specifications",
            datePublished: "2025-11-19",
            description:
              "A guide to selecting the right pipe flange for your project.",
            publisher: {
              "@type": "Organization",
              name: "The Flanges",
              url: "https://theflanges.com",
            },
            image: "https://theflanges.com/blog-flanges.jpg",
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
        <Link
          href="/"
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          The Flanges
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link
            href="/"
            style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}
          >
            Home
          </Link>
          <Link
            href="/blog"
            style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}
          >
            Blog
          </Link>
          <a
            href="https://texasflange.com"
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

      {/* Article Header */}
      <header
        className="rv"
        style={{ padding: "60px 24px 0", maxWidth: "800px", margin: "0 auto" }}
      >
        <Link
          href="/blog"
          style={{
            color: "#e63946",
            fontSize: "14px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          &larr; Back to Blog
        </Link>
        <h1
          style={{
            fontSize: "38px",
            fontWeight: 800,
            color: "#1a3a5c",
            marginTop: "16px",
            marginBottom: "16px",
            lineHeight: 1.3,
          }}
        >
          Choosing the Right Flange: A Guide to Types, Materials, and
          Specifications
        </h1>
        <p style={{ fontSize: "14px", color: "#888", marginBottom: "32px" }}>
          November 19, 2025 &middot; 2 min read
        </p>
        <img
          src="/blog-flanges.jpg"
          alt="Industrial flanges close-up"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        />
      </header>

      {/* Article Content */}
      <article
        className="rv"
        style={{
          padding: "0 24px 80px",
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "17px",
          lineHeight: 1.8,
          color: "#444",
        }}
      >
        <p>
          Selecting the right pipe flange for your project is more than just
          matching a pipe size. It&apos;s a critical decision that impacts the
          safety, efficiency, and longevity of your entire piping system. Choosing
          the wrong flange can lead to leaks, costly downtime, and potential
          hazards.
        </p>
        <p style={{ marginTop: "16px" }}>
          This guide will walk you through the key factors to consider&#8202;&#8212;&#8202;the
          type, the material, and the core specifications&#8202;&#8212;&#8202;to ensure you get your
          requirements right the first time.
        </p>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginTop: "40px",
            marginBottom: "16px",
          }}
        >
          1. Start with the Flange Type
        </h2>
        <p>
          The flange type defines how it attaches to the pipe and its overall
          strength. While there are many specialty designs, you will most often
          encounter these three:
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Weld Neck Flange:</strong> Easily
          identified by its long, tapered hub, this flange is designed to be
          butt-welded directly to the pipe. This transfers stress from the flange
          to the pipe itself, providing a high-strength connection ideal for
          high-pressure, high-temperature, or critical applications.
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Slip-On Flange:</strong> This pipe
          flange is designed to slip over the end of the pipe. It&apos;s then
          welded in two places&#8202;&#8212;&#8202;once on the outside hub and once on the inside.
          These are generally easier to align than weld neck flanges but are
          typically used for lower-pressure applications.
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Blind Flange:</strong> A blind
          flange is a solid disc with bolt holes. It has no center bore and is used
          to seal or &quot;blank off&quot; the end of a pipe flanges system, a
          valve, or a pressure vessel opening.
        </p>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginTop: "40px",
            marginBottom: "16px",
          }}
        >
          2. Choose the Right Material
        </h2>
        <p>
          What is your flange made of? This choice depends entirely on your
          application&apos;s environment, temperature, and the media (like water,
          gas, or chemicals) flowing through the pipes.
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Carbon Steel Flanges:</strong> This
          is the workhorse of the industry. Carbon steel flanges (like the common
          A105 specification) are strong, durable, and cost-effective, making them
          the top choice for oil and gas, power generation, and general
          manufacturing. For maximum reliability, a forged flange is the industry
          standard for strength and durability.
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Stainless Steel Flanges:</strong>{" "}
          When you need corrosion resistance, stainless steel flanges are the
          answer. Their ability to resist rust and chemical attack makes them
          essential for industries like chemical processing, food and beverage, and
          water treatment.
        </p>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginTop: "40px",
            marginBottom: "16px",
          }}
        >
          3. Confirm the Key Specifications
        </h2>
        <p>
          Once you know your type and material, you must nail down the technical
          specifications to ensure a perfect, leak-proof fit.
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Pressure Rating (Class):</strong>{" "}
          This is one of the most important requirements. Expressed as a class
          (e.g., 150#, 300#, 600#), this rating defines the maximum pressure the
          flange can safely handle at different temperatures.
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Dimensions (Size):</strong> This
          must match your pipe&apos;s nominal size (e.g., 4-inch, 12-inch). You
          also need to confirm the dimensions of the bolt hole pattern to ensure it
          aligns with the connecting flange.
        </p>
        <p style={{ marginTop: "16px" }}>
          <strong style={{ color: "#1a3a5c" }}>Flange Face &amp; Gasket:</strong>{" "}
          The face of the flange must be compatible with your flange gasket. The
          most common type is a &quot;Raised Face&quot; (RF), which provides a
          strong, concentrated sealing area when the flange is bolted.
        </p>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginTop: "40px",
            marginBottom: "16px",
          }}
        >
          Conclusion: From Knowledge to Sourcing
        </h2>
        <p>
          Getting the right flange means understanding your system&apos;s needs. By
          correctly identifying the flange type, material, and critical
          specifications, you ensure a safe and leak-free system.
        </p>
        <p style={{ marginTop: "16px" }}>
          This site is here to help you learn, but when you&apos;re ready to buy
          or get a quote for your next project, you need a trusted flange supplier.
          For a complete inventory of all flange and fittings and expert advice, we
          recommend visiting{" "}
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
      </article>

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
