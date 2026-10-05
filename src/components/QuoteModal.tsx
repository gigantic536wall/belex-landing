import React, { useState } from 'react';
import { Product } from '../data/products';
import { PRODUCTS } from '../data/products';
import { CheckCircle2, ArrowRight, Calculator, X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
  initialQuantity?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  initialQuantity = 50,
}) => {
  const [chosenProductId, setChosenProductId] = useState<string>(
    selectedProduct ? selectedProduct.id : PRODUCTS[0].id
  );
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [wallHeight, setWallHeight] = useState<number>(3.5);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [region, setRegion] = useState('Минск и Минская область');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === chosenProductId) || PRODUCTS[0];
  const totalCost = currentProduct.price > 0 ? currentProduct.price * quantity * (currentProduct.category === 'sheet' ? wallHeight : 1) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              <Calculator className="h-4 w-4" />
              <span>Экспресс-расчет стоимости объекта</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Расчет сметы на продукцию БЕЛЭКС
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Выберите позицию и ориентировочный объем. Мы подготовим коммерческое предложение с учетом оптовой скидки и доставки.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Select */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Выбранный материал / марка изделия
                </label>
                <select
                  value={chosenProductId}
                  onChange={(e) => setChosenProductId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl px-3.5 py-2.5 focus:ring-1 focus:ring-amber-400 outline-none"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name} ({prod.price > 0 ? `${prod.price.toFixed(2)} руб.` : 'По запросу'})
                    </option>
                  ))}
                </select>
              </div>

              {/* Volume / Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {currentProduct.category === 'sheet' ? 'Длина стены (м.п.)' : 'Количество / Площадь (м² / шт)'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-mono"
                  />
                </div>

                {currentProduct.category === 'sheet' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Высота шпунтовой сваи (м)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="15"
                      step="0.5"
                      value={wallHeight}
                      onChange={(e) => setWallHeight(Number(e.target.value))}
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-mono"
                    />
                  </div>
                )}
              </div>

              {/* Quick Price Estimate Box */}
              {totalCost > 0 && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Предварительная стоимость материалов:</span>
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    {Math.round(totalCost).toLocaleString('ru-RU')} руб. BYN
                  </span>
                </div>
              )}

              {/* Contact info fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Ваше имя или компания *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Алексей"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
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
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Регион доставки
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl px-3.5 py-2"
                >
                  <option value="Минск и Минская область">Минск и Минская область</option>
                  <option value="Брест и Брестская область (Пинск)">Брест и Брестская область (Пинск)</option>
                  <option value="Гродно и Гродненская область">Гродно и Гродненская область</option>
                  <option value="Гомель и Гомельская область">Гомель и Гомельская область</option>
                  <option value="Витебск и Витебская область">Витебск и Витебская область</option>
                  <option value="Могилев и Могилевская область">Могилев и Могилевская область</option>
                  <option value="Самовывоз со склада (г. Пинск)">Самовывоз со склада завода (г. Пинск)</option>
                  <option value="Российская Федерация (РФ)">Доставка в Российскую Федерацию</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Формирование расчета...</span>
                  ) : (
                    <>
                      <span>Получить официальную смету со скидкой</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Расчет отправлен в инженерный отдел!</h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
              Спасибо, <strong className="text-white">{customerName || 'заказчик'}</strong>! Менеджер сформирует проектное предложение на {currentProduct.name} с учетом оптовой скидки и свяжется с вами по номеру <span className="text-amber-400 font-mono">{customerPhone}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
            >
              Отлично, понятно
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
