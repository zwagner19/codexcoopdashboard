import { Card } from '../components/Card';
import { briefs } from '../data/mockData';

export function Briefs() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {briefs.map((brief) => (
        <Card key={brief.id} className="min-h-72">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-ember/15 px-3 py-1 text-sm font-bold text-ember">{brief.impact} impact</span>
            <span className="text-sm text-stone-400">{brief.minutes} min</span>
          </div>
          <h2 className="mt-5 text-2xl font-black">{brief.title}</h2>
          <p className="mt-4 text-stone-300">{brief.summary}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-champagne/80">{brief.source}</p>
        </Card>
      ))}
    </div>
  );
}
