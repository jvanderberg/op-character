import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://character.yesoakpark.org"),
  title: "The Character of Oak Park",
  description:
    "A collage of embedded apartment buildings woven into Oak Park's residential blocks.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "The Character of Oak Park",
    description:
      "Embedded apartment buildings are already part of Oak Park's residential fabric.",
    url: "/",
    siteName: "Oak Park, Explained",
    type: "website",
    images: [{ url: "/og.png", width: 2400, height: 1260, alt: "The Character of Oak Park" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Character of Oak Park",
    description:
      "Embedded apartment buildings are already part of Oak Park's residential fabric.",
    images: ["/og.png"],
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
