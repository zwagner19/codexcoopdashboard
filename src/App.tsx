import { useEffect, useMemo, useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { CaptureItem, loadCaptures, QuickCaptureModal } from './components/QuickCaptureModal';
import type { TabKey } from './data/mockData';
import { Briefs } from './views/Briefs';
import { Businesses } from './views/Businesses';
import { Capture } from './views/Capture';
import { Today } from './views/Today';
import { Tools } from './views/Tools';

const titles: Record<TabKey, string> = {
  today: 'Today',
  briefs: 'Briefs',
  businesses: 'Businesses',
  capture: 'Capture',
  tools: 'Tools',
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('today');
  const [captureOpen, setCaptureOpen] = useState(false);
  const [captures, setCaptures] = useState<CaptureItem[]>([]);

  useEffect(() => {
    setCaptures(loadCaptures());
  }, []);

  const view = useMemo(() => {
    switch (activeTab) {
      case 'briefs':
        return <Briefs />;
      case 'businesses':
        return <Businesses />;
      case 'capture':
        return <Capture captures={captures} onOpenCapture={() => setCaptureOpen(true)} />;
      case 'tools':
        return <Tools />;
      case 'today':
      default:
        return <Today />;
    }
  }, [activeTab, captures]);

  return (
    <div className="min-h-screen pb-32 text-stone-50">
      <header className="safe-top mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-champagne/70">Codex Coop</p>
          <h1 className="mt-1 text-2xl font-black sm:text-3xl">{titles[activeTab]}</h1>
        </div>
        <button
          type="button"
          onClick={() => setCaptureOpen(true)}
          className="min-h-14 rounded-full border border-white/10 bg-white/10 px-5 font-bold text-champagne shadow-premium backdrop-blur-xl active:scale-95"
        >
          + Capture
        </button>
      </header>
      <main className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">{view}</main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      <QuickCaptureModal open={captureOpen} onClose={() => setCaptureOpen(false)} onSaved={setCaptures} />
    </div>
  );
}
