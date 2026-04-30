import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://evacasino.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes = [
    "",
    "/slots",
    "/live",
    "/crash",
    "/tournaments",
    "/bonuses",
    "/promotions",
    "/vip",
    "/zerkalo",
    "/login",
    "/register",
    "/about",
    "/terms",
    "/privacy",
    "/responsible-gaming",
    "/support",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }))
}
