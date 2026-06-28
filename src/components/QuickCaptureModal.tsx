import { useEffect, useState } from 'react';

export type CaptureItem = {
  id: string;
  text: string;
  createdAt: string;
};

const STORAGE_KEY = 'codex-coop-captures';

export function loadCaptures(): CaptureItem[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as CaptureItem[];
  } catch {
    return [];
  }
}

export function saveCaptures(items: CaptureItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

type QuickCaptureModalProps = {
  open: boolean;
  onClose: () => void;
  onSaved: (items: CaptureItem[]) => void;
};

export function QuickCaptureModal({ open, onClose, onSaved }: QuickCaptureModalProps) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSave = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const nextItems = [
      { id: crypto.randomUUID(), text: trimmed, createdAt: new Date().toISOString() },
      ...loadCaptures(),
    ];
    saveCaptures(nextItems);
    onSaved(nextItems);
    setText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-black/60 p-4 backdrop-blur-sm sm:place-items-center" role="dialog" aria-modal="true">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-graphite p-5 shadow-premium">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-champagne/80">Quick Capture</p>
            <h2 className="text-2xl font-bold">Save an idea, decision, or follow-up</h2>
          </div>
          <button className="min-h-12 rounded-full bg-white/10 px-4 text-stone-200" type="button" onClick={onClose}>Close</button>
        </div>
        <textarea
          autoFocus
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="min-h-40 w-full resize-none rounded-[1.5rem] border border-white/10 bg-ink/80 p-4 text-lg outline-none ring-champagne/40 placeholder:text-stone-500 focus:ring-4"
          placeholder="What should Future You remember?"
        />
        <button className="mt-4 min-h-14 w-full rounded-[1.25rem] bg-gradient-to-r from-champagne to-ember font-bold text-ink" type="button" onClick={handleSave}>
          Save capture
        </button>
      </div>
    </div>
  );
}
