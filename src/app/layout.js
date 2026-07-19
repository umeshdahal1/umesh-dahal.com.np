import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://umesh-dahal.com.np"),

  title: {
    default: "Umesh Dahal | Physics Researcher",
    template: "%s | Umesh Dahal",
  },

  description:
    "Academic website of Umesh Dahal, a physics student at the Central Department of Physics, Tribhuvan University, Nepal.",

  keywords: [
    "Umesh Dahal",
    "Physics",
    "Tribhuvan University",
    "Computational Physics",
    "Density Functional Theory",
    "Graphene",
    "Nanomaterials",
    "Spectroscopy",
    "Biophysics",
  ],

  authors: [{ name: "Umesh Dahal" }],
  creator: "Umesh Dahal",
  publisher: "Umesh Dahal",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Umesh Dahal | Physics Researcher",
    description:
      "Academic website of Umesh Dahal, a physics student and aspiring researcher at Tribhuvan University, Nepal.",
    url: "https://umesh-dahal.com.np",
    siteName: "Umesh Dahal",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Umesh Dahal | Physics Researcher",
    description:
      "Academic website of Umesh Dahal, a physics student at Tribhuvan University, Nepal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
