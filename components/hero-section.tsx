import { Gift, Disc3, Coins, Trophy } from "lucide-react"

const bonuses = [
  { icon: Gift, label: "Подарки от Евы" },
  { icon: Disc3, label: "Колесо фортуны" },
  { icon: Coins, label: "Кешбек до 20%" },
  { icon: Trophy, label: "Крупные турниры" },
]

export function HeroSection() {
  return (
    <section className="relative mb-6 mt-2 md:mt-6">
      <div className="relative h-[320px] md:h-[450px] w-full bg-card rounded-3xl overflow-hidden border border-border">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/60 via-transparent to-emerald-deep/60 z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-12">
          <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gold-400 mb-3 md:mb-4 bg-emerald-deep/80 px-3 py-1.5 rounded-full border border-gold-400/30">
            Официальный сайт
          </span>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4 text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            Eva Casino
          </h1>
          <p className="max-w-md md:max-w-xl text-sm md:text-base text-foreground/90 text-pretty drop-shadow">
            Лицензионные слоты, лайв-игры и щедрые бонусы. Играй на реальные деньги — забирай выигрыши без задержек.
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[480px] pointer-events-none z-10 opacity-90">
          <img src="/images/eva-mascot.jpg" alt="Маскот Eva Casino" className="w-full h-auto object-contain" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-20" />
      </div>

      <div className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar -mt-16 md:-mt-24 px-4 relative z-30 pb-6">
        {bonuses.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            className="bonus-card flex-shrink-0 w-[160px] md:w-[280px] h-[100px] md:h-[150px] bg-emerald-deep/85 backdrop-blur-md border border-emerald-500/25 rounded-[2rem] flex flex-col items-center justify-center transition-transform hover:scale-105 group cursor-pointer"
          >
            <div className="w-14 h-14 md:w-20 md:h-20 -mt-4 md:-mt-6 rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              <Icon className="w-7 h-7 md:w-10 md:h-10 text-emerald-deep" strokeWidth={2.5} />
            </div>
            <span className="text-foreground text-xs md:text-sm font-bold mt-2 md:mt-3 px-2 text-center">{label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
