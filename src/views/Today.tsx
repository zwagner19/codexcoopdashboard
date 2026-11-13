import { Card } from '../components/Card';
import { agenda, todayStats } from '../data/mockData';

export function Today() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
      <Card className="bg-gradient-to-br from-white/10 to-white/[0.035]">
        <p className="text-sm uppercase tracking-[0.3em] text-champagne/80">Command Center</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Today’s operating dashboard</h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-300">A calm, mock-data-only overview for decisions, action loops, and business context.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {todayStats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] bg-ink/55 p-4">
              <p className="text-sm text-stone-400">{stat.label}</p>
              <p className="mt-2 text-4xl font-black text-champagne">{stat.value}</p>
              <p className="text-sm text-stone-300">{stat.detail}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="text-2xl font-bold">Agenda</h2>
        <div className="mt-4 space-y-3">
          {agenda.map((item) => (
            <article key={item.time} className="rounded-[1.4rem] bg-white/[0.06] p-4">
              <p className="text-sm font-bold text-ember">{item.time}</p>
              <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-stone-300">{item.note}</p>
            </article>
          ))}
        </div>
      </Card>
    </div>
  );
}
