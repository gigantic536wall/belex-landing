import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Factory, Ruler, Clock, ChevronRight } from 'lucide-react';

interface HeroScreenProps {
  onOpenQuoteModal: () => void;
  onOpenGitHubGuide: () => void;
}

export const HeroScreen: React.FC<HeroScreenProps> = ({ onOpenQuoteModal, onOpenGitHubGuide }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Берегоукрепление и гидротехника',
      sub: 'Шпунт ПВХ ГШ-500 и FSP SPU с высокой гидроизоляцией и стойкостью к ледоходу',
      image: './images/hero_slide_1.jpg',
      tag: 'Гидротехнические сооружения'
    },
    {
      title: 'Агропромышленные перегородки',
      sub: 'Ударопрочные гигиенические панели ПВХ для свинокомплексов, коровников и птичников',
      image: './images/hero_slide_2.jpg',
      tag: 'Агропромышленный комплекс'
    },
    {
      title: 'Защита транспортной инфраструктуры',
      sub: 'Противооползневые барьеры, подпорные стенки выемок и мостовых насыпей',
      image: './images/hero_slide_4.jpg',
      tag: 'Дорожное строительство'
    }
  ];

  return (
    <section id="screen-1" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-slate-800 bg-slate-950 pt-8 pb-16">
      {/* Background architectural glow & subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        {/* Structure requirement verification tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-6 text-xs text-slate-500 border-b border-slate-800/60 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-amber-400">Экран 1</span>
            <span>·</span>
            <span className="text-slate-400">Первый экран: Логотип, Дескриптор, УТП, CTA</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Собственное производство в РБ</span>
            <span>·</span>
            <span className="text-emerald-400 font-mono">ТУ BY 291244837.001-2019</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Descriptor, USP, Offer, CTA buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* 1. Дескриптор (Обязательно по ТЗ) */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              <span>Дескриптор: Завод-производитель полимерного шпунта и панелей ПВХ в Республике Беларусь</span>
            </div>

            {/* 2. УТП (заголовок-оффер) (Обязательно по ТЗ) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance mb-6">
              Экологичный геошпунт и агропанели ПВХ с долговечностью{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                50+ лет
              </span>{' '}
              напрямую от завода БЕЛЭКС
            </h1>

            {/* Sub-offer detailing benefits */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Снижаем стоимость берегоукрепления и строительства подпорных стен до <strong className="text-white font-semibold">40%</strong> по сравнению со стальным шпунтом Ларсена. 100% не подвержен коррозии, агрессивным солям и аммиаку. Полный комплекс: от инженерного расчета раскладки до оперативной отгрузки со склада в Пинске по всей Беларуси и РФ.
            </p>

            {/* 3. Кнопка CTA (Обязательно по ТЗ, повтор на 4-м экране) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-lg shadow-amber-500/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Рассчитать стоимость проекта</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#screen-2"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Каталог продукции и цены</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>

            {/* 4 Trust Markers / Hard Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">50+ лет</div>
                <div className="text-xs text-slate-400 mt-0.5">срок службы без коррозии</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">до 40%</div>
                <div className="text-xs text-slate-400 mt-0.5">дешевле шпунта Ларсена</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">140+</div>
                <div className="text-xs text-slate-400 mt-0.5">сданных объектов в РБ и РФ</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">25 лет</div>
                <div className="text-xs text-slate-400 mt-0.5">заводская гарантия</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with real Belex project slides */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={heroSlides[activeSlide].image}
                  alt={heroSlides[activeSlide].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Styled resilient fallback
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Fallback container in case of asset failure */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 -z-10">
                  <Factory className="h-12 w-12 text-amber-400 mb-2" />
                  <span className="text-sm font-semibold text-white">БЕЛЭКС — Производство ПВХ</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-400/20">
                    {heroSlides[activeSlide].tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1.5 leading-snug">
                    {heroSlides[activeSlide].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {heroSlides[activeSlide].sub}
                  </p>
                </div>
              </div>

              {/* Slide Switcher */}
              <div className="flex border-t border-slate-800 bg-slate-900/90 divide-x divide-slate-800 text-xs">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`flex-1 py-2.5 px-3 text-left transition-colors cursor-pointer ${
                      activeSlide === idx
                        ? 'bg-amber-400/10 text-amber-400 font-semibold border-b-2 border-amber-400'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="block truncate font-mono text-[11px]">0{idx + 1}. {slide.tag.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick feature callouts */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">100% не ржавеет</div>
                  <div className="text-slate-400 text-[11px]">Стойкость в пресной и соленой воде</div>
                </div>
              </div>
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 flex items-start gap-2.5">
                <Factory className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Заводская резка в размер</div>
                  <div className="text-slate-400 text-[11px]">Длина свай до 15 метров без отходов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
