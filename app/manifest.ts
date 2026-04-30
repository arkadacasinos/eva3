import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eva Casino — официальный сайт онлайн казино",
    short_name: "Eva Casino",
    description:
      "Eva Casino (Ева казино) — официальный сайт онлайн казино. Рабочее зеркало, слоты, live, бонусы.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0B",
    theme_color: "#0B0B0B",
    orientation: "portrait",
    lang: "ru-RU",
    categories: ["games", "entertainment"],
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/apple-icon.jpg",
        sizes: "180x180",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  }
}
