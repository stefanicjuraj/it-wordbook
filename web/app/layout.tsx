import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "IT Wordbook",
  description: "IT Wordbook",
  keywords: [
    "IT Wordbook",
    "IT Dictionary",
    "IT Terms",
    "IT Definitions",
    "IT Glossary",
    "IT Vocabulary",
    "IT Language",
    "IT Terminology",
    "IT Jargon",
    "IT Acronyms",
    "IT Abbreviations",
    "Tech Terms",
    "Tech Definitions",
    "Tech Glossary",
    "Tech Vocabulary",
    "Tech Language",
    "Tech Terminology",
    "Tech Jargon",
  ],
  openGraph: {
    title: "IT wordbook",
    description: "IT wordbook",
    url: "https://it-wordbook.web.app",
    siteName: "IT wordbook",
    images: [
      {
        url: "https://itwordbook.web.app/assets/images/it-wordbook.jpg",
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
        <link rel="icon" href="/assets/icons/wordbook-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
