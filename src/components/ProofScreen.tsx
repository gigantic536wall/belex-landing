import React, { useState } from 'react';
import { TESTIMONIALS, CERTIFICATES, COMPLETED_PROJECTS, Certificate } from '../data/proof';
import {
  Star,
  ShieldCheck,
  Award,
  FileCheck2,
  Building2,
  CheckCircle2,
  ChevronRight,
  PackageCheck,
  Factory,
  Sparkles,
  Layers,
  TrendingDown,
  Clock,
  CheckSquare2,
  Shield
} from 'lucide-react';

export const ProofScreen: React.FC = () => {
  const [activeCertificateModal, setActiveCertificateModal] = useState<Certificate | null>(null);

  // 3 facts about the product
  const productFacts = [
    {
      num: '01',
      title: 'Срок службы 50+ лет и нулевая коррозия',
      desc: 'Материал 100% устойчив к пресной и соленой воде, ледоходу, ультрафиолету (УФ-стабилизатор) и агрессивным средам с pH от 2 до 12. Не требует покраски и антикоррозийной обработки.',
      highlight: '50+ лет без коррозии'
    },
    {
      num: '02',
      title: 'Экономия до 40% по смете проекта',
      desc: 'Вес полимерного шпунта в 5 раз легче стального Ларсена. За счет этого затраты на логистику, тяжелую технику и вибропогружение снижаются до 40%, а замок исключает протечки.',
      highlight: 'До 40% дешевле стали'
    },
    {
      num: '03',
      title: 'Заводская нарезка в точный размер (1-15 м)',
      desc: 'Изготавливаем сваи нужной длины под конкретный проект заказчика без отходов на объекте. Точность геометрии замков строго по ТУ BY 291244837.001-2019.',
      highlight: 'Длина до 15 м без остатков'
    }
  ];

  // 3 facts about the company
  const companyFacts = [
    {
      num: '01',
      title: 'Прямой завод-производитель в Беларуси (г. Пинск)',
      desc: 'Собственные экструзионные мощности полного цикла в Брестской области. Отгрузка со склада завода без наценок посредников и дилеров по ценам от производителя.',
      highlight: 'Собственный завод в РБ'
    },
    {
      num: '02',
      title: '140+ реализованных объектов в РБ и СНГ',
      desc: 'Поставки для крупнейших трестов («Брестводстрой», дорожные управления, агрокомплексы). За все годы эксплуатации — 0 рекламаций по качеству замка и прочности.',
      highlight: '140+ объектов без нареканий'
    },
    {
      num: '03',
      title: '25 лет официальной заводской гарантии',
      desc: 'К каждой партии прилагается паспорт заводского контроля, протоколы испытаний на разрыв замкового соединения и сертификат соответствия нормам ЕАЭС.',
      highlight: 'Гарантия 25 лет по договору'
    }
  ];

  return (
    <section id="screen-3" className="relative py-20 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Structure Anchor Marker */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 text-xs text-slate-500 border-b border-slate-800/80 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-amber-400">Экран 3</span>
            <span>·</span>
            <span className="text-slate-400">Третий экран: Блок фактов (50/50) + Social Proof</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Надежность подтверждена лабораторными тестами</span>
            <span>·</span>
            <span className="text-emerald-400 font-mono">140+ объектов без рекламаций</span>
          </div>
        </div>

        {/* Header & Rating Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Award className="h-4 w-4" />
              <span>Факты и подтвержденная надежность решений БЕЛЭКС</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Блок фактов и Social Proof: продукция, завод, отзывы и сертификаты
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Объективные цифры о материале и заводе-изготовителе, а также реальный опыт применения крупнейшими строительными управлениями Республики Беларусь.
            </p>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="lg:col-span-4 p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-400">
                Средняя оценка клиентов: <strong className="text-white">4.9 / 5.0</strong>
              </div>
            </div>
            <div className="text-right pl-4 border-l border-slate-800">
              <div className="text-2xl font-mono font-extrabold text-white">140+</div>
              <div className="text-[11px] text-slate-400">сданных объектов</div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* НОВЫЙ ОБЯЗАТЕЛЬНЫЙ ЭЛЕМЕНТ: БЛОК ФАКТОВ (50/50)          */}
        {/* 3 факта про продукт + 3 факта про компанию               */}
        {/* ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Блок ключевых фактов (50/50)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                3 подтверждённых факта о продукции и 3 факта о заводе-производителе
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-semibold">
              Формат: 50% Продукт / 50% Компания
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Левая колонка 50%: 3 Факта о продукте */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  <PackageCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    50% · Факты о продукции
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Шпунт ПВХ и полимерные панели
                  </h4>
                </div>
              </div>

              <div className="space-y-5">
                {productFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 hover:border-amber-400/40 hover:bg-slate-900/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-400/10">
                          Факт #{fact.num}
                        </span>
                        <h5 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {fact.title}
                        </h5>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-1">
                      {fact.desc}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{fact.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка 50%: 3 Факта о компании */}
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-blue-400/10 text-blue-400 border border-blue-400/20">
                  <Factory className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                    50% · Факты о компании
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Завод ООО «БЕЛЭКС» (Беларусь)
                  </h4>
                </div>
              </div>

              <div className="space-y-5">
                {companyFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 hover:border-blue-400/40 hover:bg-slate-900/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-blue-400 font-bold px-1.5 py-0.5 rounded bg-blue-400/10">
                          Факт #{fact.num}
                        </span>
                        <h5 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                          {fact.title}
                        </h5>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-1">
                      {fact.desc}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{fact.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 1. Verified Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400"></span>
            Social Proof: отзывы главных инженеров и руководителей проектов
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{t.year}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    «{t.text}»
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-4">
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                  <div className="text-[11px] text-amber-400/90 font-medium">{t.company}</div>

                  <div className="mt-3 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px]">
                    <div className="text-slate-500 text-[10px]">Объект: {t.project}</div>
                    <div className="text-emerald-400 font-mono font-semibold mt-0.5">{t.metrics}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Official Quality Certificates & Standards */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Официальные сертификаты качества и протоколы испытаний
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Соответствие ГОСТ и ТУ Республики Беларусь
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATES.map((c) => (
              <div
                key={c.id}
                onClick={() => setActiveCertificateModal(c)}
                className="group p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mb-1">{c.docNumber}</div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {c.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {c.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/80 pt-3">
                  <span>{c.validUntil}</span>
                  <span className="flex items-center gap-1 text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    Подробнее <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Completed Objects Showcase */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            Реализованные объекты с применением продукции БЕЛЭКС
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {COMPLETED_PROJECTS.map((p) => (
              <div
                key={p.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                      {p.location}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                      {p.title}
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-400">
                      <div>
                        <strong className="text-slate-300">Объем:</strong> {p.scope}
                      </div>
                      <div>
                        <strong className="text-slate-300">Материалы:</strong> {p.materials}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-emerald-400 flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-400" />
                    <span>{p.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {activeCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveCertificateModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Официальный документ завода</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {activeCertificateModal.title}
            </h3>
            <div className="text-xs font-mono text-amber-400 mb-4">
              {activeCertificateModal.docNumber}
            </div>

            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs mb-6">
              <div>
                <span className="text-slate-500">Кем выдан:</span>
                <div className="text-slate-200 font-medium">{activeCertificateModal.authority}</div>
              </div>
              <div>
                <span className="text-slate-500">Срок действия:</span>
                <div className="text-slate-200 font-medium">{activeCertificateModal.validUntil}</div>
              </div>
              <div>
                <span className="text-slate-500">Суть документа:</span>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  {activeCertificateModal.description}
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mb-6">
              Оригиналы сертификатов, протоколы разрывных нагрузок и паспорта партий предоставляются с каждой отгрузкой со склада завода.
            </p>

            <button
              onClick={() => setActiveCertificateModal(null)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
            >
              Закрыть просмотр
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
