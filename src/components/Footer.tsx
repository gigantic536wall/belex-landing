import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onOpenGitHubGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHubGuide }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 pt-16 pb-12 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Descriptor */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./logo.png"
                alt="БЕЛЭКС"
                className="h-9 w-auto object-contain brightness-110"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xl font-extrabold text-white tracking-tight">БЕЛЭКС</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ведущий производитель и поставщик шпунтовых свай из ПВХ, комплектующих и агропанелей в Республике Беларусь и СНГ. Современные экструзионные линии, контроль геометрии по ТУ BY.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="text-slate-500 text-[11px]">Мы в мессенджерах:</span>
              <a
                href="https://t.me/+375296345964"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-white transition-colors"
                title="Telegram"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/375296345964"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-white transition-colors"
                title="WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B375296345964"
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-purple-400 hover:text-white transition-colors"
                title="Viber"
              >
                Viber
              </a>
            </div>
          </div>

          {/* Navigation Structure */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Разделы лендинга
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#screen-1" className="hover:text-amber-400 transition-colors">
                  Экран 1: Главная и УТП
                </a>
              </li>
              <li>
                <a href="#screen-2" className="hover:text-amber-400 transition-colors">
                  Экран 2: Каталог и цены
                </a>
              </li>
              <li>
                <a href="#screen-3" className="hover:text-amber-400 transition-colors">
                  Экран 3: Отзывы и сертификаты
                </a>
              </li>
              <li>
                <a href="#screen-4" className="hover:text-amber-400 transition-colors">
                  Экран 4: Лид-магнит и контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Products from belex.by */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Продукция завода
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Геошпунт ПВХ ГШ-500 (81,60 руб)</li>
              <li>Геошпунт ПВХ ГШ-300 (72,00 руб)</li>
              <li>Шпунт FSP SPU 500.7.240 (116,80 руб)</li>
              <li>Панели ПВХ для перегородок (45,00 руб)</li>
              <li>Угловой соединитель 90° / 135°</li>
              <li>Труба ПВХ квадратная профильная</li>
            </ul>
          </div>

          {/* Legal Information (Обязательно по ТЗ) */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Юридическая информация
            </div>
            <div className="space-y-1.5 text-slate-400 text-[11px] leading-relaxed">
              <div className="text-slate-200 font-semibold">ООО «БЕЛЭКС»</div>
              <div>УНП: 291244837</div>
              <div>Регистрация в Торговом реестре РБ</div>
              <div>ТУ BY 291244837.001-2019</div>
              <div className="pt-2 text-slate-500">
                Республика Беларусь, 225710, Брестская обл., Пинский район
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenGitHubGuide}
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  Как разместить на GitHub Pages →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Каталог продукции БЕЛЭКС (belex.by). Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Политика конфиденциальности
            </span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Пользовательское соглашение
            </span>
            <span>·</span>
            <span className="text-slate-400 font-mono">Беларусь / СНГ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
