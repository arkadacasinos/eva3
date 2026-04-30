"use client"

import { Menu, Search } from "lucide-react"
import { EvaLogo } from "@/components/eva-logo"

type Props = {
  onToggleSidebar: () => void
}

export function SiteHeader({ onToggleSidebar }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-background via-background/95 to-transparent backdrop-blur-md py-3 px-4 md:px-6 border-b border-border/60">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 hover:bg-surface-3 rounded-full transition-colors"
            aria-label="Открыть меню"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
          <a href="/" className="flex items-center gap-2 group" aria-label="На главную">
            <EvaLogo className="text-foreground group-hover:scale-105 transition-transform" />
          </a>
        </div>

        <div className="hidden md:flex relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск игр, провайдеров…"
            className="w-full bg-surface-2 border border-border rounded-2xl pl-10 pr-4 h-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="px-4 py-2 h-10 rounded-2xl border border-gold-300/50 text-foreground font-bold text-xs md:text-sm hover:bg-surface-3 transition-colors">
            Вход
          </button>
          <button className="px-4 py-2 h-10 rounded-2xl bg-gradient-to-b from-gold-300 to-gold-500 text-background font-bold text-xs md:text-sm hover:brightness-110 transition-all shadow-lg shadow-gold-500/20">
            Регистрация
          </button>
        </div>
      </div>
    </header>
  )
}
