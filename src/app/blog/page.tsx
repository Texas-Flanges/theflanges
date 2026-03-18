import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | The Flanges",
  description:
    "Read our latest articles about industrial flanges, pipe flange types, materials, and specifications.",
  alternates: { canonical: "https://theflanges.com/blog" },
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
    }
  ]
};

export default function BlogPage() {
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
          style={{ color: "#fff", fontSize: "20px", fontWeight: 700, textDecoration: "none" }}
        >
          The Flanges
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            Home
          </Link>
          <Link href="/blog" style={{ color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}>
            Blog
          </Link>
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

      {/* Blog Header */}
      <section
        className="rv"
        style={{
          backgroundColor: "#1a3a5c",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "42px", fontWeight: 800, marginBottom: "12px" }}>
          Blog
        </h1>
        <p style={{ color: "#ccc", fontSize: "17px" }}>
          Articles and guides about industrial flanges
        </p>
      </section>

      {/* Blog Posts */}
      <section
        className="rv"
        style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}
      >
        <Link
          href="/blog/choosing-the-right-flange-a-guide-to-types-materials-and-specifications"
          style={{ textDecoration: "none", display: "block" }}
        >
          <article
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "box-shadow 0.2s",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "300px 1fr" }}>
              <img
                src="/blog-flanges.jpg"
                alt="Industrial flanges close-up"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ padding: "32px" }}>
                <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                  November 19, 2025 &middot; 2 min read
                </p>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#1a3a5c",
                    marginBottom: "12px",
                  }}
                >
                  Choosing the Right Flange: A Guide to Types, Materials, and
                  Specifications
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#555" }}>
                  Selecting the right pipe flange for your project is more than
                  just matching a pipe size. This guide walks you through the key
                  factors to consider.
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    color: "#e63946",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Read More &rarr;
                </span>
              </div>
            </div>
          </article>
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0f2640",
          padding: "40px 24px",
          textAlign: "center",
          marginTop: "80px",
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
