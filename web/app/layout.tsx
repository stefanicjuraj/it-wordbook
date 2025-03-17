import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "TechBook",
  description:
    "searchable database collection of IT keywords, terms, and concepts with descriptive explanations.",
  keywords: [
    "TechBook",
    "Tech Dictionary",
    "Tech Terms",
    "Tech Definitions",
    "Tech Glossary",
    "Tech Vocabulary",
    "Tech Language",
    "Tech Terminology",
    "Tech Jargon",
    "Tech Acronyms",
    "Tech Abbreviations",
    "Tech Terms",
    "Tech Definitions",
    "Tech Glossary",
    "Tech Vocabulary",
    "Tech Language",
    "Tech Terminology",
    "Tech Jargon",
  ],
  openGraph: {
    title: "TechBook",
    description:
      "searchable database collection of IT keywords, terms, and concepts with descriptive explanations.",
    url: "https://techbook.digital",
    siteName: "TechBook",
    images: [
      {
        url: "https://techbook.digital/assets/images/techbook.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/icons/techbook-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
