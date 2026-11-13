import { Card } from '../components/Card';
import { businesses } from '../data/mockData';

export function Businesses() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {businesses.map((business) => (
        <Card key={business.id}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">{business.priority}</p>
              <h2 className="mt-2 text-3xl font-black">{business.name}</h2>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold">{business.status}</span>
          </div>
          <p className="mt-6 text-4xl font-black text-champagne">{business.revenue}</p>
          <div className="mt-5 rounded-[1.4rem] bg-ink/60 p-4">
            <p className="text-sm text-stone-400">Next action</p>
            <p className="mt-1 font-semibold">{business.nextAction}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
