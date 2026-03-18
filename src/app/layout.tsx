import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Flanges",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://theflanges.com"),
  openGraph: {
    type: "website",
    siteName: "The Flanges",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
