import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { Search, SlidersHorizontal, Info, Calculator, CheckCircle2, ArrowRight, Layers, FileSpreadsheet } from 'lucide-react';

interface CatalogScreenProps {
  onSelectProductForQuote: (product: Product, quantity?: number) => void;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  // Quick Wall Calculator State
  const [calcWallLength, setCalcWallLength] = useState<number>(30); // meters
  const [calcWallHeight, setCalcWallHeight] = useState<number>(3.5); // meters
  const [calcProductChoice, setCalcProductChoice] = useState<string>('gsh-500');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Calculation logic for Sheet Wall
  const calcResult = useMemo(() => {
    const selectedProd = PRODUCTS.find((p) => p.id === calcProductChoice) || PRODUCTS[0];
    // Each sheet width: for GSH-500 it is 0.5m; for GSH-300 it is 0.3m; for panels 0.5m
    const widthInMeters = calcProductChoice === 'gsh-300' ? 0.3 : 0.5;
    const piecesCount = Math.ceil(calcWallLength / widthInMeters);
    const totalRunningMeters = piecesCount * calcWallHeight;
    const estimatedCost = totalRunningMeters * selectedProd.price;
    const steelCostComparison = estimatedCost * 1.55; // 35-40% savings compared to Larssen steel
    const savings = steelCostComparison - estimatedCost;

    return {
      product: selectedProd,
      piecesCount,
      totalRunningMeters: Math.round(totalRunningMeters * 10) / 10,
      estimatedCost: Math.round(estimatedCost * 100) / 100,
      savings: Math.round(savings * 100) / 100,
    };
  }, [calcWallLength, calcWallHeight, calcProductChoice]);

  return (
    <section id="screen-2" className="relative py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Structure Anchor Marker */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 text-xs text-slate-500 border-b border-slate-800/80 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-amber-400">Экран 2</span>
            <span>·</span>
            <span className="text-slate-400">Второй экран: Блок цен, каталог и подробное описание продукции</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Официальные отпускные цены завода</span>
            <span>·</span>
            <span className="text-emerald-400 font-mono">Белорусский рубль (BYN)</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Каталог продукции БЕЛЭКС: цены производителя и характеристики
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Вся продукция выпускается по техническим условиям ТУ BY 291244837.001-2019 из первичного непластифицированного ПВХ. Отгрузка напрямую с завода со склада в Пинске с полным комплектом паспортов качества и сертификатов.
          </p>
        </div>

        {/* Interactive Wall Project Quick Calculator Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-950/80 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
                <Calculator className="h-3.5 w-3.5" />
                <span>Интерактивный экспресс-расчет проекта</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Рассчитайте ориентировочный метраж и стоимость стены
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Задайте длину и высоту укрепляемого участка или перегородки, чтобы мгновенно узнать необходимое количество погонных метров и экономию по сравнению со сталью.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Длина стены: <span className="text-amber-400 font-mono font-bold">{calcWallLength} м</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={calcWallLength}
                    onChange={(e) => setCalcWallLength(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>5 м</span>
                    <span>100 м</span>
                    <span>200 м</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Высота сваи / панели: <span className="text-amber-400 font-mono font-bold">{calcWallHeight} м</span>
                  </label>
                  <input
                    type="range"
                    min="1.5"
                    max="12"
                    step="0.5"
                    value={calcWallHeight}
                    onChange={(e) => setCalcWallHeight(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>1.5 м</span>
                    <span>6 м</span>
                    <span>12 м</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Модель профиля
                  </label>
                  <select
                    value={calcProductChoice}
                    onChange={(e) => setCalcProductChoice(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-amber-400 outline-none"
                  >
                    <option value="gsh-500">ГШ 500 (81,60 руб/м)</option>
                    <option value="gsh-300">ГШ 300 (72,00 руб/м)</option>
                    <option value="fsp-spu-500-7-240">FSP SPU 500 (116,80 руб/м)</option>
                    <option value="paneli-pvh">Панели агро (45,00 руб/м²)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="w-full lg:w-80 p-5 rounded-xl border border-slate-700/80 bg-slate-900 flex flex-col justify-between shrink-0">
              <div className="space-y-2.5 border-b border-slate-800 pb-4 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Количество свай:</span>
                  <span className="text-white font-mono font-semibold">{calcResult.piecesCount} шт</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Общий погонаж:</span>
                  <span className="text-white font-mono font-semibold">{calcResult.totalRunningMeters} м.п.</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Ориентировочная сумма:</span>
                  <span className="text-amber-400 font-mono font-extrabold text-base">
                    {calcResult.estimatedCost.toLocaleString('ru-RU')} руб.
                  </span>
                </div>
                <div className="flex justify-between text-xs text-emerald-400">
                  <span>Экономия к шпунту Ларсена:</span>
                  <span className="font-mono font-semibold">~{calcResult.savings.toLocaleString('ru-RU')} руб.</span>
                </div>
              </div>

              <button
                onClick={() => onSelectProductForQuote(calcResult.product, calcResult.piecesCount)}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Запросить проектную смету</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Все товары ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('sheet')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'sheet'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Геошпунт ПВХ (5)
            </button>
            <button
              onClick={() => setSelectedCategory('panel')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'panel'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Панели для перегородок (1)
            </button>
            <button
              onClick={() => setSelectedCategory('connector')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'connector'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Комплектующие и анкеры (3)
            </button>
            <button
              onClick={() => setSelectedCategory('pipe')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'pipe'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Трубы ПВХ (1)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Поиск по названию или характеристике..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 overflow-hidden"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Fallback pattern */}
                  <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-4 text-center bg-slate-900">
                    <Layers className="h-10 w-10 text-slate-600 mb-2" />
                    <span className="text-xs text-slate-400">{product.name}</span>
                  </div>

                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {product.badge}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700/80">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {product.shortDesc}
                  </p>

                  {/* Highlights specs preview */}
                  <div className="space-y-1.5 border-t border-slate-800/80 pt-3 mb-4 text-xs">
                    {product.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-slate-400">
                        <span>{spec.label}:</span>
                        <span className="text-slate-200 font-medium font-mono tabular-nums">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Price and Actions Bar */}
              <div className="p-5 pt-0 mt-auto">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-slate-400">Отпускная цена:</span>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-white font-mono tabular-nums">
                      {product.price > 0 ? `${product.price.toFixed(2)} руб.` : 'По запросу'}
                    </span>
                    <span className="text-[11px] text-slate-400 ml-1 font-normal">{product.priceUnit}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveProductModal(product)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors cursor-pointer"
                  >
                    <Info className="h-3.5 w-3.5 text-slate-400" />
                    <span>Паспорт изделия</span>
                  </button>

                  <button
                    onClick={() => onSelectProductForQuote(product)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer shadow-sm shadow-amber-500/20"
                  >
                    <span>В расчет</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl p-8">
            <p className="text-slate-400 text-sm">По вашему запросу товары не найдены.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline cursor-pointer"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>

      {/* Detailed Product Specifications Modal (Описание продукта) */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveProductModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white text-lg p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer"
              aria-label="Закрыть"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              <span>{activeProductModal.categoryLabel}</span>
              <span>·</span>
              <span>ТУ BY 291244837.001-2019</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-8">
              {activeProductModal.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="sm:col-span-1 rounded-xl overflow-hidden border border-slate-800 aspect-square bg-slate-950">
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="sm:col-span-2 space-y-3">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeProductModal.fullDesc}
                </p>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">Заводская цена:</span>
                  <span className="text-lg font-bold text-amber-400 font-mono">
                    {activeProductModal.price > 0 ? `${activeProductModal.price.toFixed(2)} руб.` : 'По запросу'}{' '}
                    <span className="text-xs text-slate-400 font-normal">{activeProductModal.priceUnit}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-amber-400" />
                Технические характеристики
              </h4>
              <div className="rounded-xl border border-slate-800 bg-slate-950 divide-y divide-slate-800/80 text-xs">
                {activeProductModal.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between p-2.5 px-3.5">
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="text-slate-200 font-mono font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages and Applications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/40">
                <div className="font-semibold text-slate-200 mb-2">Ключевые преимущества:</div>
                <ul className="space-y-1.5 text-slate-400">
                  {activeProductModal.advantages.map((adv, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/40">
                <div className="font-semibold text-slate-200 mb-2">Области применения:</div>
                <ul className="space-y-1.5 text-slate-400">
                  {activeProductModal.applications.map((app, apIdx) => (
                    <li key={apIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-mono">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3 justify-end border-t border-slate-800 pt-4">
              <button
                onClick={() => setActiveProductModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg cursor-pointer"
              >
                Закрыть
              </button>
              <button
                onClick={() => {
                  onSelectProductForQuote(activeProductModal);
                  setActiveProductModal(null);
                }}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Заказать расчет стоимости этой позиции
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
