import type { TabKey } from '../data/mockData';

type NavItem = {
  key: TabKey;
  label: string;
  icon: string;
};

const items: NavItem[] = [
  { key: 'today', label: 'Today', icon: '◐' },
  { key: 'briefs', label: 'Briefs', icon: '▰' },
  { key: 'businesses', label: 'Businesses', icon: '◈' },
  { key: 'capture', label: 'Capture', icon: '＋' },
  { key: 'tools', label: 'Tools', icon: '⌘' },
];

type BottomNavProps = {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
};

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-5xl px-4 safe-bottom">
      <div className="grid grid-cols-5 gap-2 rounded-[2rem] border border-white/10 bg-ink/85 p-2 shadow-premium backdrop-blur-2xl">
        {items.map((item) => {
          const active = activeTab === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onTabChange(item.key)}
              className={`min-h-16 rounded-[1.4rem] px-2 text-center transition active:scale-95 ${
                active ? 'bg-gradient-to-br from-champagne to-ember text-ink' : 'text-stone-300 hover:bg-white/10'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <span className="block text-xl leading-6">{item.icon}</span>
              <span className="block text-[0.7rem] font-semibold sm:text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
