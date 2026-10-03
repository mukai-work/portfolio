type Node = {
  x: number;
  y: number;
  w: number;
  h: number;
  caption: string;
  label: string;
  note?: string;
  accent?: boolean;
  delay: number;
};

const nodes: Node[] = [
  { x: 130, y: 16, w: 180, h: 60, caption: "CLIENT", label: "Vue.js 2 / 3", delay: 0.2 },
  {
    x: 100,
    y: 152,
    w: 240,
    h: 64,
    caption: "SERVER",
    label: "ASP.NET MVC / Web API",
    accent: true,
    delay: 0.9,
  },
  {
    x: 20,
    y: 324,
    w: 180,
    h: 64,
    caption: "DATABASE",
    label: "Oracle",
    note: "SQL ≈3min → ≈20s",
    delay: 1.6,
  },
  {
    x: 240,
    y: 324,
    w: 180,
    h: 64,
    caption: "STORAGE · SAS",
    label: "Azure Blob",
    note: "100GB+ streaming",
    delay: 1.8,
  },
];

const paths = [
  { id: "arch-p1", d: "M220 76 V152", label: "HTTPS", lx: 228, ly: 104, delay: 0.5 },
  { id: "arch-p2", d: "M180 216 V270 H110 V324", label: "SQL", lx: 118, ly: 296, delay: 1.2 },
  { id: "arch-p3", d: "M260 216 V270 H330 V324", label: "SAS TOKEN", lx: 338, ly: 296, delay: 1.35 },
];

/** 現案件の構成図。描画→ノード点灯→経路上をデータが流れる順に再生する */
export function ArchDiagram() {
  return (
    <figure className="relative w-full max-w-[460px]">
      <svg
        viewBox="0 0 440 430"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-labelledby="arch-title"
      >
        <title id="arch-title">
          現案件の構成：Vue.js のクライアントから IIS 上の ASP.NET MVC / Web API を経由し、Oracle と Azure Blob Storage に接続
        </title>

        {/* IIS の境界 */}
        <g className="arch-node" style={{ animationDelay: "0.7s" }}>
          <rect
            x="8"
            y="120"
            width="424"
            height="128"
            rx="4"
            fill="none"
            stroke="oklch(100% 0 0 / 0.18)"
            strokeDasharray="4 5"
          />
          <text x="20" y="140" className="fill-white/45 font-mono" fontSize="10" letterSpacing="1.5">
            IIS
          </text>
        </g>

        {paths.map((p) => (
          <g key={p.id}>
            <path
              id={p.id}
              d={p.d}
              pathLength={1}
              fill="none"
              stroke="oklch(76% 0.12 262 / 0.6)"
              strokeWidth="1.25"
              className="arch-draw"
              style={{ animationDelay: `${p.delay}s` }}
            />
            <text
              x={p.lx}
              y={p.ly}
              className="arch-node fill-white/45 font-mono"
              fontSize="9"
              letterSpacing="1.2"
              style={{ animationDelay: `${p.delay + 0.3}s` }}
            >
              {p.label}
            </text>
          </g>
        ))}

        {nodes.map((n) => (
          <g key={n.label} className="arch-node" style={{ animationDelay: `${n.delay}s` }}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="4"
              fill={n.accent ? "oklch(55% 0.24 262 / 0.14)" : "oklch(26% 0.055 250)"}
              stroke={n.accent ? "oklch(76% 0.12 262 / 0.9)" : "oklch(100% 0 0 / 0.22)"}
            />
            <text
              x={n.x + 14}
              y={n.y + 22}
              className="font-mono"
              fontSize="9"
              letterSpacing="1.5"
              fill={n.accent ? "oklch(76% 0.12 262)" : "oklch(100% 0 0 / 0.5)"}
            >
              {n.caption}
            </text>
            <text x={n.x + 14} y={n.y + 45} fontSize="15" fontWeight="500" fill="white">
              {n.label}
            </text>
            {n.note && (
              <text
                x={n.x}
                y={n.y + n.h + 22}
                className="font-mono"
                fontSize="10"
                fill="oklch(76% 0.12 262 / 0.85)"
              >
                {n.note}
              </text>
            )}
          </g>
        ))}

        {/* 経路を流れるデータ（SMIL。モーション削減時は CSS で非表示） */}
        {paths.map((p, i) => (
          <circle key={p.id} r="3" className="arch-packet" fill="oklch(76% 0.12 262)" opacity="0">
            <set attributeName="opacity" to="1" begin={`${2.4 + i * 0.4}s`} />
            <animateMotion
              dur={i === 0 ? "1.8s" : "2.4s"}
              begin={`${2.4 + i * 0.4}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#${p.id}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>
      <figcaption className="mt-3 label-mono text-[0.65rem] text-white/40">
        Fig. 現案件の構成（概略）
      </figcaption>
    </figure>
  );
}
