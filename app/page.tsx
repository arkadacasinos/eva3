"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteSidebar } from "@/components/site-sidebar"
import { HeroSection } from "@/components/hero-section"
import { LiveWinnings } from "@/components/live-winnings"
import { GamesSection } from "@/components/games-section"
import { SeoContent } from "@/components/seo-content"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <SiteHeader onToggleSidebar={() => setSidebarOpen((s) => !s)} />

      <div className="flex-1 max-w-[1920px] mx-auto w-full flex relative">
        <SiteSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 overflow-x-hidden pb-8 lg:ml-4 lg:mr-4 px-4 lg:px-0">
          <HeroSection />
          <section className="px-2 md:px-0">
            <LiveWinnings />
            <GamesSection />
            <SeoContent />
          </section>
        </main>
      </div>

      <SiteFooter />
    </>
  )
}
