import React, { useState } from 'react';
import { TESTIMONIALS, CERTIFICATES, COMPLETED_PROJECTS, Certificate } from '../data/proof';
import { Star, ShieldCheck, Award, FileCheck2, Building2, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

export const ProofScreen: React.FC = () => {
  const [activeCertificateModal, setActiveCertificateModal] = useState<Certificate | null>(null);

  return (
    <section id="screen-3" className="relative py-20 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Structure Anchor Marker */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 text-xs text-slate-500 border-b border-slate-800/80 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-amber-400">Экран 3</span>
            <span>·</span>
            <span className="text-slate-400">Третий экран: Social proof (отзывы, рейтинги, сертификаты)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Надежность подтверждена лабораторными тестами</span>
            <span>·</span>
            <span className="text-emerald-400 font-mono">140+ объектов без рекламаций</span>
          </div>
        </div>

        {/* Header & Rating Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Award className="h-4 w-4" />
              <span>Доказанная надежность полимерных решений БЕЛЭКС</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Социальное доказательство: реальные отзывы, сертификаты и реализованные объекты
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Материалы БЕЛЭКС успешно эксплуатируются крупнейшими строительными управлениями Республики Беларусь и России в сложных гидрологических условиях.
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
                Средняя оценка: <strong className="text-white">4.9 / 5.0</strong>
              </div>
            </div>
            <div className="text-right pl-4 border-l border-slate-800">
              <div className="text-2xl font-mono font-extrabold text-white">140+</div>
              <div className="text-[11px] text-slate-400">сданных объектов</div>
            </div>
          </div>
        </div>

        {/* 1. Verified Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400"></span>
            Отзывы главных инженеров и руководителей проектов
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
