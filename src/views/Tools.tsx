import { Card } from '../components/Card';
import { tools } from '../data/mockData';

export function Tools() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {tools.map((tool) => (
        <Card key={tool.id} className="flex min-h-64 flex-col justify-between">
          <div>
            <span className="rounded-2xl bg-champagne/15 px-3 py-2 font-black text-champagne">{tool.shortcut}</span>
            <h2 className="mt-6 text-2xl font-black">{tool.name}</h2>
            <p className="mt-3 text-stone-300">{tool.description}</p>
          </div>
          <button type="button" className="mt-8 min-h-14 rounded-[1.25rem] bg-white/10 font-bold text-stone-200">Mock launch</button>
        </Card>
      ))}
    </div>
  );
}
