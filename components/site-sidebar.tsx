"use client"

import {
  Crown,
  Gift,
  Medal,
  MessageCircle,
  Send,
  Users,
  X,
  Sparkles,
  Trophy,
  Joystick,
  Radio,
  Rocket,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const mainLinks = [
  { icon: Medal, label: "Уровни", color: "group-hover:text-gold-400" },
  { icon: Crown, label: "V.I.P", color: "group-hover:text-gold-400" },
  { icon: Gift, label: "Бонусы", color: "group-hover:text-gold-400" },
]

const categories = [
  { icon: Sparkles, label: "Новые", color: "group-hover:text-gold-400" },
  { icon: Trophy, label: "Топ", color: "group-hover:text-gold-400" },
  { icon: Joystick, label: "Слоты", color: "group-hover:text-emerald-400" },
  { icon: Radio, label: "Лайв", color: "group-hover:text-rose-400" },
  { icon: Rocket, label: "Краш", color: "group-hover:text-sky-400" },
]

const footerLinks = [
  { icon: MessageCircle, label: "Помощь", color: "group-hover:text-emerald-400" },
  { icon: Send, label: "Телеграм", color: "group-hover:text-sky-400" },
  { icon: Users, label: "Партнерка", color: "group-hover:text-fuchsia-400" },
]

export function SiteSidebar({ isOpen, onClose }: Props) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/70 z-40 transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border transform transition-transform duration-300 flex flex-col",
          "lg:static lg:translate-x-0 lg:z-auto",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={onClose} className="p-2 hover:bg-surface-3 rounded-full" aria-label="Закрыть меню">
            <X className="text-muted-foreground" />
          </button>
        </div>

        <div className="mx-4 mb-4 relative h-24 bg-surface-3 rounded-2xl overflow-hidden group cursor-pointer border border-border">
          <img
            src="/images/date-widget.jpg"
            alt="Свидание с Евой"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <div className="absolute bottom-2 left-3 text-foreground z-10">
            <p className="text-sm font-bold text-shadow-sm font-display leading-tight">
              Свидание
              <br />с Евой
            </p>
          </div>
          <div className="absolute top-2 right-2 bg-card/80 px-2 py-0.5 rounded-lg text-[10px] font-bold text-gold-400 border border-gold-400/30">
            Level 1/21
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
          {mainLinks.map(({ icon: Icon, label, color }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Icon className={cn("w-5 h-5 text-muted-foreground transition-colors", color)} />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}

          <div className="my-2 h-px bg-border mx-2" />
          <p className="px-3 text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Категории</p>

          {categories.map(({ icon: Icon, label, color }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Icon className={cn("w-5 h-5 text-muted-foreground transition-colors", color)} />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}

          <div className="my-2 h-px bg-border mx-2" />

          {footerLinks.map(({ icon: Icon, label, color }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Icon className={cn("w-5 h-5 text-muted-foreground transition-colors", color)} />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
