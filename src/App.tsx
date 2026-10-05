import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScreen } from './components/HeroScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { ProofScreen } from './components/ProofScreen';
import { ContactScreen } from './components/ContactScreen';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Product } from './data/products';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [quoteQuantity, setQuoteQuantity] = useState<number>(50);

  const handleOpenProductQuote = (product: Product, quantity: number = 50) => {
    setSelectedProductForQuote(product);
    setQuoteQuantity(quantity);
    setIsQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Floating scroll to top button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          aria-label="Наверх"
          className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-all cursor-pointer"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      {/* Top Bar Navigation */}
      <Navbar
        onOpenQuoteModal={() => {
          setSelectedProductForQuote(null);
          setIsQuoteModalOpen(true);
        }}
      />

      {/* Main 4-Screen Landing Page */}
      <main className="flex-1">
        {/* Экран 1: Первый экран (Логотип, Дескриптор, УТП, CTA) */}
        <HeroScreen
          onOpenQuoteModal={() => {
            setSelectedProductForQuote(null);
            setIsQuoteModalOpen(true);
          }}
        />

        {/* Экран 2: Второй экран (Блок цен, каталог, подробное описание продукции) */}
        <CatalogScreen
          onSelectProductForQuote={handleOpenProductQuote}
        />

        {/* Экран 3: Третий экран (Social Proof: отзывы, рейтинги, сертификаты) */}
        <ProofScreen />

        {/* Экран 4: Четвёртый экран (Лид-магнит, контакты, повтор CTA, реквизиты) */}
        <ContactScreen
          onOpenQuoteModal={() => {
            setSelectedProductForQuote(null);
            setIsQuoteModalOpen(true);
          }}
        />
      </main>

      {/* Подвал (юридическая информация, ссылки на соцсети) */}
      <Footer />

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedProduct={selectedProductForQuote}
        initialQuantity={quoteQuantity}
      />
    </div>
  );
}
