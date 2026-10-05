import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Globe, Github, CheckCircle2, AlertCircle } from 'lucide-react';

interface GitHubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubGuideModal: React.FC<GitHubGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      num: '01',
      title: 'Создайте новый репозиторий на GitHub',
      desc: 'Зайдите на сайт github.com и создайте новый публичный репозиторий.',
      items: [
        'Перейдите по ссылке: https://github.com/new',
        'Введите имя репозитория, например: belex-landing или pvc-sheet-piling',
        'Обязательно выберите статус Public (Публичный), чтобы сайт открывался у всех пользователей бесплатно',
        'Нажмите зеленую кнопку «Create repository»'
      ]
    },
    {
      num: '02',
      title: 'Инициализируйте Git и отправьте файлы в репозиторий',
      desc: 'Выполните следующие команды в терминале папки проекта:',
      code: `git init
git add .
git commit -m "feat: landing page Belex for GitHub Pages"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git
git push -u origin main`
    },
    {
      num: '03',
      title: 'Включите GitHub Pages в настройках репозитория',
      desc: 'Мы уже добавили в проект файл автоматической сборки .github/workflows/deploy.yml и настроили base: "./" в vite.config.ts, поэтому сайт соберется автоматически!',
      items: [
        'В вашем репозитории на GitHub перейдите во вкладку «Settings» (Настройки вверху)',
        'В левом боковом меню нажмите на раздел «Pages»',
        'В пункте «Build and deployment» -> «Source» выберите «GitHub Actions»',
        'GitHub автоматически запустит сборку и развертывание вашего сайта!'
      ]
    },
    {
      num: '04',
      title: 'Альтернативный быстрый способ: сборка в ветку gh-pages',
      desc: 'Если вы хотите опубликовать готовую статическую папку dist одной командой:',
      code: `npm run build
npx gh-pages -d dist`
    },
    {
      num: '05',
      title: 'Готово! Ваш сайт доступен всему миру',
      desc: 'Через 1-2 минуты во вкладке Settings -> Pages появится ссылка вида:',
      linkExample: 'https://ваш-логин.github.io/имя-репозитория/'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title & Badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
          <Github className="h-4 w-4" />
          <span>Пошаговое руководство по публикации</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
          Как выложить этот сайт на GitHub Pages, чтобы его видели другие
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Этот проект полностью адаптирован для работы на GitHub Pages: в <code className="text-amber-400 font-mono">vite.config.ts</code> прописан параметр <code className="text-amber-400 font-mono">base: './'</code>, поэтому все пути к стилям, скриптам и картинкам относительные и сайт откроется без 404 ошибок на любом адресе.
        </p>

        {/* Important Notice Box */}
        <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/25 mb-8 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white block font-semibold mb-0.5">Всё уже настроено в коде!</strong>
            Файл workflow <code className="text-amber-300 font-mono">.github/workflows/deploy.yml</code> уже включен в проект. Как только вы отправите код на GitHub, Actions автоматически соберет и опубликует лендинг.
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-950/60"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-bold font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Шаг {step.num}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {step.title}
                </h4>
              </div>

              <p className="text-xs text-slate-400 mb-3">{step.desc}</p>

              {step.items && (
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {step.items.map((item, iIdx) => (
                    <li key={iIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {step.code && (
                <div className="relative mt-3 rounded-xl border border-slate-800 bg-slate-900 p-3.5 font-mono text-xs text-slate-200">
                  <button
                    onClick={() => copyToClipboard(step.code!, idx)}
                    className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 text-[11px] font-sans text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Копировать</span>
                      </>
                    )}
                  </button>
                  <pre className="overflow-x-auto pr-24 whitespace-pre-wrap">{step.code}</pre>
                </div>
              )}

              {step.linkExample && (
                <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Globe className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>{step.linkExample}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Также полная инструкция продублирована в файле <code className="text-white font-mono">README.md</code> в корне проекта.
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
          >
            Понятно, закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
