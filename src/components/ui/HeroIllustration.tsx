'use client'

/**
 * @file     HeroIllustration.tsx
 * @layer    src > components > ui
 * @readme   ./README.md
 * @purpose  Animated SVG illustration for the homepage hero; connected operations systems
 * @depends  React
 */

export default function HeroIllustration() {
  return (
    <svg
      viewBox="40 50 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <style>{`
        .hero-node {
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease;
        }
        .hero-node:hover {
          filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.5));
        }
        .hero-node-erp { transform-origin: 260px 105px; }
        .hero-node-erp:hover { transform: scale(1.15); }
        .hero-node-crm { transform-origin: 420px 255px; }
        .hero-node-crm:hover { transform: scale(1.15); }
        .hero-node-wms { transform-origin: 260px 415px; }
        .hero-node-wms:hover { transform: scale(1.15); }
        .hero-node-api { transform-origin: 100px 255px; }
        .hero-node-api:hover { transform: scale(1.15); }
        .hero-node-bi { transform-origin: 408px 123px; }
        .hero-node-bi:hover { transform: scale(1.15); }
        .hero-node-ai { transform-origin: 112px 393px; }
        .hero-node-ai:hover { transform: scale(1.15); }
        .hero-hub { transform-origin: 260px 260px; }
        .hero-hub:hover {
          transform: scale(1.12);
          filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.6));
        }
        .hero-node .node-label,
        .hero-hub .node-label {
          transition: opacity 0.3s ease;
        }
        .hero-node:hover .node-label,
        .hero-hub:hover .node-label {
          opacity: 1 !important;
        }
      `}</style>

      <defs>
        <filter id="glow-amber" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Background ring pulses ── */}
      <circle cx="260" cy="260" r="200" stroke="#0F1D33" strokeWidth="0.5" opacity="0.08">
        <animate attributeName="r" values="200;210;200" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.08;0.04;0.08" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="260" r="160" stroke="#0F1D33" strokeWidth="0.5" opacity="0.06">
        <animate attributeName="r" values="160;168;160" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="260" r="120" stroke="#F59E0B" strokeWidth="0.5" opacity="0.1">
        <animate attributeName="r" values="120;126;120" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.05;0.1" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* ── Connection lines ── */}
      <line x1="260" y1="220" x2="260" y2="130" stroke="#F59E0B" strokeWidth="1" opacity="0.12" />
      <line x1="300" y1="260" x2="390" y2="255" stroke="#F59E0B" strokeWidth="1" opacity="0.12" />
      <line x1="260" y1="300" x2="260" y2="390" stroke="#F59E0B" strokeWidth="1" opacity="0.12" />
      <line x1="220" y1="260" x2="130" y2="255" stroke="#F59E0B" strokeWidth="1" opacity="0.12" />
      <line x1="295" y1="225" x2="385" y2="140" stroke="#F59E0B" strokeWidth="0.8" opacity="0.08" />
      <line x1="225" y1="295" x2="135" y2="375" stroke="#F59E0B" strokeWidth="0.8" opacity="0.08" />

      {/* ── Central hub; dashboard ── */}
      <g className="hero-node hero-hub">
        <rect x="220" y="220" width="80" height="80" rx="16" fill="#0F1D33" opacity="0.95">
          <animate attributeName="opacity" values="0.95;0.88;0.95" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="228" y="228" width="64" height="44" rx="4" fill="#1a2d4d" />
        <rect x="234" y="258" width="8" height="10" rx="1" fill="#F59E0B" opacity="0.9">
          <animate attributeName="height" values="10;14;10" dur="2s" repeatCount="indefinite" />
          <animate attributeName="y" values="258;254;258" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="246" y="252" width="8" height="16" rx="1" fill="#F59E0B" opacity="0.7">
          <animate attributeName="height" values="16;10;16" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="252;258;252" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="258" y="248" width="8" height="20" rx="1" fill="#F59E0B" opacity="0.8">
          <animate attributeName="height" values="20;24;20" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="248;244;248" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <rect x="270" y="254" width="8" height="14" rx="1" fill="#F59E0B" opacity="0.6">
          <animate attributeName="height" values="14;18;14" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="254;250;254" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="282" y="250" width="8" height="18" rx="1" fill="#F59E0B" opacity="0.75">
          <animate attributeName="height" values="18;12;18" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="250;256;250" dur="2.8s" repeatCount="indefinite" />
        </rect>
        <polyline points="236,256 248,250 260,246 272,252 284,248" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
        </polyline>
        <circle cx="238" cy="234" r="2" fill="#22c55e">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="246" cy="234" r="2" fill="#F59E0B" opacity="0.6" />
        <rect x="228" y="278" width="40" height="4" rx="2" fill="#ffffff" opacity="0.15" />
        <text className="node-label" x="260" y="290" textAnchor="middle" fill="#F59E0B" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.6">SOLUTIONS</text>
      </g>

      {/* ── Node: ERP (top) ── */}
      <g className="hero-node hero-node-erp">
        <rect x="230" y="80" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.78;0.85" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="246" y="92" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.7" />
        <rect x="260" y="92" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.5" />
        <rect x="246" y="106" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.5" />
        <rect x="260" y="106" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.3" />
        <text className="node-label" x="260" y="126" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.5">ERP</text>
      </g>

      {/* ── Node: CRM (right) ── */}
      <g className="hero-node hero-node-crm">
        <rect x="390" y="230" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.78;0.85" dur="3.5s" repeatCount="indefinite" />
        </rect>
        <circle cx="410" cy="250" r="5" fill="#F59E0B" opacity="0.6" />
        <circle cx="424" cy="250" r="5" fill="#F59E0B" opacity="0.4" />
        <circle cx="438" cy="250" r="5" fill="#F59E0B" opacity="0.2" />
        <line x1="407" y1="262" x2="441" y2="262" stroke="#F59E0B" strokeWidth="1" opacity="0.3" />
        <line x1="407" y1="266" x2="432" y2="266" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
        <text className="node-label" x="420" y="276" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.5">CRM</text>
      </g>

      {/* ── Node: Warehouse (bottom) ── */}
      <g className="hero-node hero-node-wms">
        <rect x="230" y="390" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.78;0.85" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <rect x="244" y="400" width="14" height="12" rx="2" fill="#F59E0B" opacity="0.5" stroke="#F59E0B" strokeWidth="0.5" />
        <rect x="250" y="394" width="14" height="12" rx="2" fill="#F59E0B" opacity="0.35" stroke="#F59E0B" strokeWidth="0.5" />
        <line x1="270" y1="402" x2="270" y2="414" stroke="#F59E0B" strokeWidth="1" opacity="0.4" />
        <line x1="274" y1="402" x2="274" y2="414" stroke="#F59E0B" strokeWidth="2" opacity="0.3" />
        <line x1="279" y1="402" x2="279" y2="414" stroke="#F59E0B" strokeWidth="1" opacity="0.5" />
        <line x1="282" y1="402" x2="282" y2="414" stroke="#F59E0B" strokeWidth="1.5" opacity="0.3" />
        <text className="node-label" x="260" y="436" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.5">WMS</text>
      </g>

      {/* ── Node: Integrations (left) ── */}
      <g className="hero-node hero-node-api">
        <rect x="70" y="230" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.78;0.85" dur="3.8s" repeatCount="indefinite" />
        </rect>
        <text x="100" y="260" textAnchor="middle" fill="#F59E0B" fontSize="22" fontFamily="monospace" opacity="0.5">{`{ }`}</text>
        <text className="node-label" x="100" y="276" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.5">API</text>
      </g>

      {/* ── Node: Analytics (top-right) ── */}
      <g className="hero-node hero-node-bi">
        <rect x="380" y="100" width="56" height="46" rx="12" fill="#0F1D33" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.72;0.8" dur="5s" repeatCount="indefinite" />
        </rect>
        <circle cx="408" cy="120" r="12" fill="none" stroke="#F59E0B" strokeWidth="3" opacity="0.3" strokeDasharray="25 75" strokeDashoffset="0">
          <animate attributeName="stroke-dashoffset" values="0;-75;0" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="408" cy="120" r="12" fill="none" stroke="#F59E0B" strokeWidth="3" opacity="0.6" strokeDasharray="45 75" strokeDashoffset="-25" />
        <text className="node-label" x="408" y="140" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="system-ui" fontWeight="600" opacity="0.4">BI</text>
      </g>

      {/* ── Node: Automation (bottom-left) ── */}
      <g className="hero-node hero-node-ai">
        <rect x="84" y="370" width="56" height="46" rx="12" fill="#0F1D33" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.72;0.8" dur="4.2s" repeatCount="indefinite" />
        </rect>
        <circle cx="112" cy="390" r="10" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" values="0 112 390;360 112 390" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="112" cy="390" r="4" fill="#F59E0B" opacity="0.3" />
        <g opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" values="0 112 390;360 112 390" dur="12s" repeatCount="indefinite" />
          <rect x="110" y="377" width="4" height="4" rx="1" fill="#F59E0B" />
          <rect x="110" y="399" width="4" height="4" rx="1" fill="#F59E0B" />
          <rect x="99" y="388" width="4" height="4" rx="1" fill="#F59E0B" />
          <rect x="121" y="388" width="4" height="4" rx="1" fill="#F59E0B" />
        </g>
        <text className="node-label" x="112" y="412" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="system-ui" fontWeight="600" opacity="0.4">AI</text>
      </g>

      {/* ── Animated data particles ── */}
      <circle r="3" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.8">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M260,220 L260,130" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M300,260 L390,255" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.8">
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M260,300 L260,390" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.8">
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M220,260 L130,255" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle r="2.5" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.6">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M295,225 L385,140" />
        <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle r="2.5" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.6">
        <animateMotion dur="4s" repeatCount="indefinite" path="M225,295 L135,375" />
        <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* ── Return particles ── */}
      <circle r="2" fill="#ffffff" opacity="0.3">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M260,130 L260,220" begin="1.2s" />
        <animate attributeName="opacity" values="0;0.3;0.3;0" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
      </circle>
      <circle r="2" fill="#ffffff" opacity="0.3">
        <animateMotion dur="4s" repeatCount="indefinite" path="M390,255 L300,260" begin="1.5s" />
        <animate attributeName="opacity" values="0;0.3;0.3;0" dur="4s" repeatCount="indefinite" begin="1.5s" />
      </circle>
      <circle r="2" fill="#ffffff" opacity="0.3">
        <animateMotion dur="3.8s" repeatCount="indefinite" path="M260,390 L260,300" begin="1s" />
        <animate attributeName="opacity" values="0;0.3;0.3;0" dur="3.8s" repeatCount="indefinite" begin="1s" />
      </circle>
      <circle r="2" fill="#ffffff" opacity="0.3">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M130,255 L220,260" begin="0.8s" />
        <animate attributeName="opacity" values="0;0.3;0.3;0" dur="3.2s" repeatCount="indefinite" begin="0.8s" />
      </circle>

      {/* ── Ambient floating dots ── */}
      <circle cx="180" cy="160" r="1.5" fill="#F59E0B" opacity="0.2">
        <animate attributeName="cy" values="160;150;160" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="340" cy="340" r="1.5" fill="#F59E0B" opacity="0.15">
        <animate attributeName="cy" values="340;350;340" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="320" r="1" fill="#ffffff" opacity="0.1">
        <animate attributeName="cx" values="150;155;150" dur="7s" repeatCount="indefinite" />
      </circle>
      <circle cx="370" cy="180" r="1" fill="#ffffff" opacity="0.1">
        <animate attributeName="cx" values="370;365;370" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="420" r="1.5" fill="#F59E0B" opacity="0.12">
        <animate attributeName="opacity" values="0.12;0.25;0.12" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="420" r="1" fill="#ffffff" opacity="0.08">
        <animate attributeName="cy" values="420;415;420" dur="5.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
