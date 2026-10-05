import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScreen } from './components/HeroScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { ProofScreen } from './components/ProofScreen';
import { ContactScreen } from './components/ContactScreen';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { GitHubGuideModal } from './components/GitHubGuideModal';
import { Product } from './data/products';
import { FileCode2, ArrowUp, Phone } from 'lucide-react';

export default function App() {
  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState(false);
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
      {/* Fixed quick GitHub Pages floating helper button in the corner */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <button
          onClick={() => setIsGitHubGuideOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-amber-400 hover:text-amber-300 border border-amber-400/30 shadow-xl backdrop-blur-md transition-all cursor-pointer text-xs font-semibold"
          title="Как выложить сайт на GitHub Pages"
        >
          <FileCode2 className="h-4 w-4" />
          <span className="hidden sm:inline">Инструкция GitHub Pages</span>
        </button>

        <button
          onClick={scrollToTop}
          aria-label="Наверх"
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-all cursor-pointer"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      {/* Top Bar Contract Navigation */}
      <Navbar
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
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
          onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
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
      <Footer onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedProduct={selectedProductForQuote}
        initialQuantity={quoteQuantity}
      />

      <GitHubGuideModal
        isOpen={isGitHubGuideOpen}
        onClose={() => setIsGitHubGuideOpen(false)}
      />
    </div>
  );
}
