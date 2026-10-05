import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md transition-all">
      {/* Top micro banner with quick contact & factory status */}
      <div className="hidden lg:block border-b border-slate-800/80 bg-slate-900/60 px-6 py-1.5 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Завод-производитель ПВХ изделий в Республике Беларусь
            </span>
            <span className="text-slate-600">/</span>
            <span>г. Пинск, Брестская обл.</span>
            <span className="text-slate-600">/</span>
            <span>Прямые поставки по РБ, РФ и СНГ</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>ТУ BY 291244837.001-2019</span>
            </span>
            <span className="text-slate-600">/</span>
            <a
              href="tel:+375296345964"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white font-semibold tabular-nums transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              +375 29 634-59-64
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav links) — Zone 3 (Primary Action) */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand */}
        <a href="#screen-1" className="flex items-center gap-3 group focus:outline-none">
          <img
            src="./logo.png"
            alt="БЕЛЭКС — Завод ПВХ шпунта"
            className="h-9 sm:h-10 w-auto object-contain brightness-110"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              БЕЛЭКС
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono -mt-1 hidden sm:block">
              Шпунты и панели ПВХ
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (clean typography with hover) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#screen-1" className="hover:text-amber-400 transition-colors">
            1. Главная
          </a>
          <a href="#screen-2" className="hover:text-amber-400 transition-colors">
            2. Цены и каталог
          </a>
          <a href="#screen-3" className="hover:text-amber-400 transition-colors">
            3. Отзывы и гарантия
          </a>
          <a href="#screen-4" className="hover:text-amber-400 transition-colors">
            4. Контакты
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+375296345964"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-amber-400" />
            <span>+375 29 634-59-64</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-lg transition-all shadow-md shadow-amber-500/20 whitespace-nowrap cursor-pointer"
          >
            <span>Рассчитать смету</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-3">
          <a
            href="#screen-1"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Экран 1: Главная и УТП
          </a>
          <a
            href="#screen-2"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Экран 2: Блок цен и каталог продукции
          </a>
          <a
            href="#screen-3"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Экран 3: Social Proof, отзывы и сертификаты
          </a>
          <a
            href="#screen-4"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Экран 4: Лид-магнит, контакты и реквизиты
          </a>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:+375296345964"
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-900 rounded-lg"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              +375 29 634-59-64
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
