import type { CaptureItem } from '../components/QuickCaptureModal';
import { Card } from '../components/Card';

type CaptureProps = {
  captures: CaptureItem[];
  onOpenCapture: () => void;
};

export function Capture({ captures, onOpenCapture }: CaptureProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <Card>
        <p className="text-sm uppercase tracking-[0.28em] text-champagne/80">Inbox</p>
        <h1 className="mt-3 text-4xl font-black">Fast capture, zero friction</h1>
        <p className="mt-4 text-stone-300">Items are stored locally in this browser using localStorage. Nothing is sent to a server.</p>
        <button type="button" onClick={onOpenCapture} className="mt-6 min-h-16 w-full rounded-[1.4rem] bg-gradient-to-r from-champagne to-ember text-lg font-black text-ink">
          Open quick capture
        </button>
      </Card>
      <Card>
        <h2 className="text-2xl font-bold">Saved captures</h2>
        <div className="mt-4 space-y-3">
          {captures.length === 0 ? (
            <p className="rounded-[1.4rem] bg-white/[0.06] p-5 text-stone-300">No captures yet. Add the first operating note.</p>
          ) : (
            captures.map((item) => (
              <article key={item.id} className="rounded-[1.4rem] bg-white/[0.06] p-4">
                <p className="text-sm text-stone-400">{new Date(item.createdAt).toLocaleString()}</p>
                <p className="mt-2 text-lg">{item.text}</p>
              </article>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
