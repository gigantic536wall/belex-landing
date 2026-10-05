import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Download, Send, CheckCircle2, MessageCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ContactScreenProps {
  onOpenQuoteModal: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenQuoteModal }) => {
  // Lead Magnet Form State
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);

  // Quick Direct Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail && !leadPhone) return;
    setLeadLoading(true);
    setTimeout(() => {
      setLeadLoading(false);
      setLeadSubmitted(true);
    }, 700);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone) return;
    setContactLoading(true);
    setTimeout(() => {
      setContactLoading(false);
      setContactSubmitted(true);
    }, 700);
  };

  return (
    <section id="screen-4" className="relative py-20 bg-slate-900/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Structure Anchor Marker */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 text-xs text-slate-500 border-b border-slate-800/80 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-amber-400">Экран 4</span>
            <span>·</span>
            <span className="text-slate-400">Четвёртый экран: Лид-магнит, Блок контактов, Повтор CTA</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Прямая связь с заводом</span>
            <span>·</span>
            <span className="text-emerald-400 font-mono">Пн-Пт 8:30 – 18:00</span>
          </div>
        </div>

        {/* 1. ЛИД-МАГНИТ (Обязательно по ТЗ: Четвёртый экран) */}
        <div className="mb-20 overflow-hidden rounded-3xl border border-amber-400/30 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 p-8 sm:p-12 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Лид-магнит для проектировщиков и строителей</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Скачайте «Альбом типовых узлов и решений монтажа шпунта ПВХ» + Скидка 7%
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Включает 18 готовых чертежей DWG/AutoCAD и PDF: схемы анкеровки, монтажные замковые узлы, стыковку с железобетонными оголовками и расчет гидростатического давления.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Чертежи DWG + PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Таблицы прочности</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Купон на скидку 7%</span>
                </div>
              </div>
            </div>

            {/* Lead Magnet Form Box */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-xl backdrop-blur-sm">
              {!leadSubmitted ? (
                <form onSubmit={handleLeadMagnetSubmit} className="space-y-4">
                  <h3 className="text-base font-bold text-white mb-2">
                    Получить материалы на почту или мессенджер
                  </h3>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Электронная почта (Email) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@company.by"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Телефон (для отправки ссылки и промокода) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+375 29 XXX-XX-XX"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={leadLoading}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
                  >
                    {leadLoading ? (
                      <span>Формирование альбома...</span>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        <span>Скачать альбом решений и получить 7%</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с законодательством РБ.
                  </p>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Материалы успешно отправлены!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ссылка на скачивание «Альбома типовых решений БЕЛЭКС (DWG+PDF)» и ваш индивидуальный промокод <strong className="text-amber-400 font-mono">BELEX-2026-7</strong> отправлены на указанные контакты.
                  </p>
                  <a
                    href="./images/hero_slide_1.jpg"
                    download="Belex_Sheet_Piling_Specs.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5 text-amber-400" />
                    <span>Скачать файл напрямую (PDF)</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. БЛОК КОНТАКТОВ И КАРТА (Обязательно по ТЗ) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                Контакты отдела продаж и завода
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Свяжитесь с нами для консультации инженера
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Наши специалисты готовы рассчитать раскладку шпунтового ряда по вашим геологическим изысканиям или проекту.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Телефон отдела продаж:</div>
                  <a
                    href="tel:+375296345964"
                    className="text-lg font-bold text-white hover:text-amber-400 transition-colors font-mono tabular-nums"
                  >
                    +375 29 634-59-64
                  </a>
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="text-slate-500">Мессенджеры:</span>
                    <a
                      href="https://t.me/+375296345964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Telegram
                    </a>
                    <span className="text-slate-600">·</span>
                    <a
                      href="https://wa.me/375296345964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      WhatsApp
                    </a>
                    <span className="text-slate-600">·</span>
                    <a
                      href="viber://chat?number=%2B375296345964"
                      className="text-purple-400 hover:underline"
                    >
                      Viber
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Электронная почта для заявок и чертежей:</div>
                  <a
                    href="mailto:viktor.kozich@mail.ru"
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors font-mono"
                  >
                    viktor.kozich@mail.ru
                  </a>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Ответ на технические запросы в течение 2 часов в рабочее время
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Производство и центральный склад:</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    Республика Беларусь, 225710, Брестская обл., Пинский район
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Удобный подъезд для длинномерного автотранспорта (фуры до 20 тонн)
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">График работы предприятия:</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    Понедельник — Пятница: с 08:30 до 18:00
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Суббота, воскресенье — дежурный прием заявок онлайн
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Consultation Form & CTA Repeat */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Обратная связь
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Заказать консультацию и расчет инженера
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Заполните краткую заявку, и наш инженер свяжется с вами для подбора марки шпунта или панелей.
            </p>

            {!contactSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Ваше имя или название организации *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Петров / ООО «СтройТех»"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Номер телефона *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+375 29 123-45-67"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Краткое описание задачи или объект
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Например: берегоукрепление пруда 60 м, глубина 2.5 м..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* 3. ПОВТОР КНОПКИ СТА (Обязательно по ТЗ: Первый экран, повтор в конце) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={contactLoading}
                    className="w-full py-3.5 px-6 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {contactLoading ? (
                      <span>Отправка заявки...</span>
                    ) : (
                      <>
                        <span>Рассчитать стоимость проекта</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Заявка успешно принята!</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Инженер завода БЕЛЭКС свяжется с вами по указанному телефону <strong className="text-white">{contactPhone}</strong> в ближайшее рабочее время.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-4 text-xs text-amber-400 hover:underline cursor-pointer"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Map / Logistics Transport Node Card */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-sm font-bold text-white">
                География отгрузок завода БЕЛЭКС
              </h4>
              <p className="text-xs text-slate-400">
                Собственный автотранспорт и партнерские транспортные компании. Быстрая доставка по всем регионам РБ и РФ.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Отгрузка со склада в день поступления оплаты</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50">
              <span className="font-semibold text-slate-200">Минск и обл.</span>
              <div className="text-[10px] text-slate-400 mt-0.5">от 24 часов</div>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50">
              <span className="font-semibold text-slate-200">Брест и обл.</span>
              <div className="text-[10px] text-slate-400 mt-0.5">от 12 часов</div>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50">
              <span className="font-semibold text-slate-200">Гродно и обл.</span>
              <div className="text-[10px] text-slate-400 mt-0.5">от 24 часов</div>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50">
              <span className="font-semibold text-slate-200">Гомель и обл.</span>
              <div className="text-[10px] text-slate-400 mt-0.5">от 24 часов</div>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50">
              <span className="font-semibold text-slate-200">Витебск/Могилев</span>
              <div className="text-[10px] text-slate-400 mt-0.5">от 36 часов</div>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50">
              <span className="font-semibold text-slate-200">Регионы РФ</span>
              <div className="text-[10px] text-slate-400 mt-0.5">от 2-4 дней</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
