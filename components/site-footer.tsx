import { EvaLogo } from "@/components/eva-logo"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border mt-auto py-8 px-4">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="md:max-w-lg">
          <div className="flex items-center gap-4 mb-4 opacity-70">
            <EvaLogo className="w-8 h-7" />
            <span className="text-foreground font-bold">18+</span>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Eva-casino.com принадлежит и управляется компанией 3-102-937610 SRL. Компания зарегистрирована в Коста-Рике.
            Противодействие отмыванию денег и мошенничеству.
          </p>
        </div>
        <div className="flex gap-8 md:gap-16 text-xs">
          <div>
            <h4 className="font-bold text-foreground/80 mb-3">Информация</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика KYC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Ответственная игра
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground/80 mb-3">Помощь</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Чат поддержки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  support@eva-casino.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Партнёрка
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
