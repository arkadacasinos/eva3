import { Flame } from "lucide-react"
import { liveWins } from "@/lib/games-data"

export function LiveWinnings() {
  // duplicate list for seamless marquee
  const items = [...liveWins, ...liveWins]
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px bg-border flex-1" />
        <div className="flex items-center gap-2 px-2">
          <Flame className="w-4 h-4 text-gold-400" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Лайв выигрыши</span>
          <Flame className="w-4 h-4 text-gold-400" />
        </div>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="overflow-hidden relative">
        <div
          className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <ul className="marquee flex gap-2 w-max">
          {items.map((win, i) => (
            <li
              key={`${win.user}-${i}`}
              className="flex-shrink-0 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center text-[10px] font-bold text-emerald-deep">
                {win.user.charAt(0)}
              </div>
              <span className="text-xs text-foreground/80">{win.user}</span>
              <span className="text-xs text-gold-400 font-bold">{win.amount}</span>
              <span className="text-[10px] text-muted-foreground">in {win.game}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
