import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTradeBinance } from "./useTradeBinance";

export default function LiveChart({ range }) {
  const { data, loading, error } = useTradeBinance();

  let filteredData = data;
  if (range === "1m") {
    filteredData = data.slice(-60);
  } else if (range === "5m") {
    filteredData = data.slice(-300);
  }

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center text-sm text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-sky-400" />
          <span>Binance&apos;ten canlı veri bekleniyor...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-2 rounded-lg border border-red-500/40 bg-red-500/5 text-sm text-red-400">
        <span>Veri alınırken bir hata oluştu.</span>
        <span className="text-xs text-red-300/80">Detay: {error}</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          Toplam işlem:{" "}
          <span className="font-medium text-zinc-100">{filteredData.length}</span>
        </span>
        <span className="hidden gap-1 rounded-full bg-zinc-800/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-400 md:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Canlı fiyat akışı
        </span>
      </div>
      <div className="h-[380px] rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-3 shadow-inner shadow-black/40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: "#a1a1aa" }}
              tickLine={{ stroke: "#27272a" }}
              axisLine={{ stroke: "#27272a" }}
            />
            <YAxis
              domain={["auto", "auto"]}
              tick={{ fontSize: 10, fill: "#a1a1aa" }}
              tickLine={{ stroke: "#27272a" }}
              axisLine={{ stroke: "#27272a" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                borderColor: "#27272a",
                borderRadius: 8,
                padding: 8,
              }}
              labelStyle={{ color: "#a1a1aa", fontSize: 11 }}
            />
            <Line
              type="monotone"
              dataKey="price" /* fiyat verisini göstermek için */
              stroke="#38bdf8"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}