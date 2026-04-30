"use client"

import { useState, useMemo } from "react"
import { Search, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { games, type Game } from "@/lib/games-data"

type Category = "new" | "top" | "slots" | "live" | "crash"

const tabs: { id: Category; label: string }[] = [
  { id: "new", label: "Новые" },
  { id: "top", label: "Топ" },
  { id: "slots", label: "Слоты" },
  { id: "live", label: "Лайв" },
  { id: "crash", label: "Краш" },
]

export function GamesSection() {
  const [active, setActive] = useState<Category>("new")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return games.filter((g) => {
      const matchesCat = g.category === active
      const matchesQuery =
        query.trim().length === 0 ||
        g.title.toLowerCase().includes(query.toLowerCase()) ||
        g.provider.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [active, query])

  return (
    <div>
      {/* Desktop tabs + search */}
      <div className="hidden md:flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 bg-card p-1 rounded-2xl border border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "px-4 py-1.5 rounded-xl text-sm font-medium transition-all",
                active === t.id
                  ? "bg-surface-4 text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Поиск игр…"
            className="bg-card border border-border rounded-xl pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-400 w-48 transition-all"
          />
        </div>
      </div>

      {/* Mobile tabs */}
      <div className="flex md:hidden gap-2 overflow-x-auto no-scrollbar mb-4 pb-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "flex-shrink-0 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors",
              active === t.id ? "bg-gold-400 text-background shadow-sm" : "bg-surface-3 text-muted-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {filtered.length === 0 ? (
          <div className="col-span-full py-16 text-center text-muted-foreground text-sm">
            Ничего не найдено. Попробуйте другой запрос.
          </div>
        ) : (
          filtered.map((game) => <GameCard key={game.id} game={game} />)
        )}
      </div>
    </div>
  )
}

function GameCard({ game }: { game: Game }) {
  return (
    <div className="group relative aspect-[9/10] w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-border bg-surface-3 shadow-md hover:border-gold-400 hover:shadow-[0_8px_0_0_var(--gold-400)] transition-all duration-300">
      <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors" />
      <img
        src={`/placeholder.svg?height=400&width=360&query=${encodeURIComponent(game.title + " slot game thumbnail")}`}
        alt={game.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {game.hot && (
        <div className="absolute top-2 left-2 z-20 bg-gold-400 text-background text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow-sm">
          New
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-20 p-3 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end h-full">
        <h3 className="text-foreground font-bold text-sm text-center leading-tight mb-1 line-clamp-2">{game.title}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span className="text-emerald-400 font-bold">DEMO</span>
          <span className="mx-1">|</span>
          <span>{game.provider}</span>
        </div>
        <button className="mt-3 w-full py-2 bg-gold-400 text-background rounded-xl font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2">
          <Play className="w-3 h-3 fill-current" />
          <span>Играть</span>
        </button>
      </div>
    </div>
  )
}
