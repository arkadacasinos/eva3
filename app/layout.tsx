import type { Metadata, Viewport } from "next"
import { Inter, Unbounded } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://evacasino.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eva Casino — официальный сайт онлайн казино | Ева казино играть",
    template: "%s | Eva Casino",
  },
  description:
    "Eva Casino (Ева казино) — официальный сайт онлайн казино. Рабочее зеркало Eva Casino, более 5000 лицензионных слотов, live казино, бонусы за регистрацию, кешбек до 20%. Ева казино играть онлайн без блокировок.",
  keywords: [
    "eva casino",
    "eva casino официальный сайт",
    "eva casino зеркало",
    "eva casino играть",
    "eva casino официальный",
    "eva казино",
    "ева казино",
    "ева казино зеркало",
    "ева казино зеркало рабочее",
    "ева казино играть",
    "ева казино онлайн",
    "ева казино официальный",
    "ева казино официальный сайт",
  ],
  authors: [{ name: "Eva Casino" }],
  creator: "Eva Casino",
  publisher: "Eva Casino",
  applicationName: "Eva Casino",
  category: "gambling",
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Eva Casino",
    title: "Eva Casino — официальный сайт онлайн казино | Ева казино играть",
    description:
      "Eva Casino (Ева казино) — официальный сайт онлайн казино. Рабочее зеркало, тысячи слотов, live казино, бонусы и кешбек.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eva Casino — официальный сайт онлайн казино",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Casino — официальный сайт онлайн казино",
    description:
      "Ева казино официальный сайт. Рабочее зеркало Eva Casino, слоты, live, бонусы и кешбек до 20%.",
    images: ["/og-image.jpg"],
    creator: "@evacasino",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg" },
      { url: "/favicon.jpg", type: "image/jpeg", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: ["/favicon.jpg"],
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
    { media: "(prefers-color-scheme: light)", color: "#0B0B0B" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Eva Casino",
      alternateName: ["Ева казино", "Eva Casino официальный сайт"],
      url: siteUrl,
      logo: `${siteUrl}/icon.jpg`,
      description:
        "Eva Casino — официальный сайт онлайн казино с лицензионными слотами, live играми и крупными бонусами.",
      sameAs: [
        "https://t.me/evacasino",
        "https://twitter.com/evacasino",
        "https://instagram.com/evacasino",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Eva Casino",
      description: "Официальный сайт Eva Casino — играть онлайн, рабочее зеркало, бонусы.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ru-RU",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} bg-background scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Eva Casino" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="rating" content="adult" />
        <meta name="age" content="18+" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: SEO JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
