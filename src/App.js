import "./App.css";
import LiveChart from "./liveChart";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { Badge } from "./components/ui/badge";

function App() {
  const [selectedRange, setSelectedRange] = useState("live");

  const ranges = [
    { id: "live", label: "Tüm İşlemler" },
    { id: "1m", label: "Son 60 İşlem" },
    { id: "5m", label: "Son 300 İşlem" },
  ];

  return (
    <div className="App bg-zinc-950 text-zinc-100 min-h-screen flex flex-col">
      {/* Üst bölüm: başlık, istatistikler ve kontroller */}
      <header className="w-full border-b border-zinc-800 bg-zinc-900/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
          {/* Başlık ve sembol */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                BTCUSDT Live Chart
              </h1>
              <p className="text-sm text-white">
                Binance BTC/USDT işlemlerinden anlık fiyat hareketleri
              </p>
            </div>

            {/* Bağlantı durumu ve sembol etiketi */}
            <div className="flex items-center gap-3 justify-between md:justify-end">
              {/* Badge: Canlı veri bağlı */}
              <Badge className="bg-emerald-500/10 border-emerald-500/40 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="ml-2 text-xs font-medium tracking-wide uppercase">
                  Canlı veri bağlı
                </span>
              </Badge>
              <Badge className="bg-zinc-800/80 border-zinc-700 text-xs text-zinc-200">
                Sembol:
                <span className="ml-1 font-semibold tracking-wide">BTCUSDT</span>
              </Badge>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 mr-1">
              İşlem aralığı
            </span>
            <ToggleGroup
              type="single"
              value={selectedRange}
              onValueChange={(val) => val && setSelectedRange(val)}
            >
              {ranges.map((range) => (
                <ToggleGroupItem
                  key={range.id}
                  value={range.id}
                >
                  {range.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
      </header>

      {/* Alt bölüm: grafik kartı */}
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-zinc-950 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
            <LiveChart range={selectedRange} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
