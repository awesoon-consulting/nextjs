/**
 * @file     HeroIllustrationStatic.tsx
 * @layer    src > components > ui
 * @purpose  Static (no animations) version of the hero illustration for
 *           mobile. Same visual structure as the animated version but zero
 *           SMIL animations so iPhone Safari doesn't choke. Server component.
 * @depends  none
 */

interface HeroIllustrationStaticProps {
  locale?: string
}

export default function HeroIllustrationStatic(_props: HeroIllustrationStaticProps) {
  return (
    <svg
      viewBox="40 50 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background ring (static) */}
      <circle cx="260" cy="260" r="200" stroke="#0F1D33" strokeWidth="0.5" opacity="0.08" />
      <circle cx="260" cy="260" r="160" stroke="#0F1D33" strokeWidth="0.5" opacity="0.06" />
      <circle cx="260" cy="260" r="120" stroke="#F59E0B" strokeWidth="0.5" opacity="0.1" />

      {/* Connection lines */}
      <line x1="260" y1="220" x2="260" y2="130" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
      <line x1="300" y1="260" x2="390" y2="255" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
      <line x1="260" y1="300" x2="260" y2="390" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
      <line x1="220" y1="260" x2="130" y2="255" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
      <line x1="295" y1="225" x2="385" y2="140" stroke="#F59E0B" strokeWidth="0.8" opacity="0.15" />
      <line x1="225" y1="295" x2="135" y2="375" stroke="#F59E0B" strokeWidth="0.8" opacity="0.15" />

      {/* Central hub */}
      <rect x="220" y="220" width="80" height="80" rx="16" fill="#0F1D33" opacity="0.95" />
      <rect x="228" y="228" width="64" height="44" rx="4" fill="#1a2d4d" />
      <rect x="234" y="258" width="8" height="10" rx="1" fill="#F59E0B" opacity="0.9" />
      <rect x="246" y="252" width="8" height="16" rx="1" fill="#F59E0B" opacity="0.7" />
      <rect x="258" y="248" width="8" height="20" rx="1" fill="#F59E0B" opacity="0.8" />
      <rect x="270" y="254" width="8" height="14" rx="1" fill="#F59E0B" opacity="0.6" />
      <rect x="282" y="250" width="8" height="18" rx="1" fill="#F59E0B" opacity="0.75" />
      <polyline points="236,256 248,250 260,246 272,252 284,248" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
      <circle cx="238" cy="234" r="2" fill="#22c55e" />
      <circle cx="246" cy="234" r="2" fill="#F59E0B" opacity="0.6" />

      {/* ERP node */}
      <rect x="230" y="80" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.9" />
      <rect x="246" y="92" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.8" />
      <rect x="260" y="92" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.6" />
      <rect x="246" y="106" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.6" />
      <rect x="260" y="106" width="10" height="10" rx="2" fill="#F59E0B" opacity="0.4" />
      <text x="260" y="126" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.6">ERP</text>

      {/* CRM node */}
      <rect x="390" y="230" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.9" />
      <circle cx="410" cy="250" r="5" fill="#F59E0B" opacity="0.7" />
      <circle cx="424" cy="250" r="5" fill="#F59E0B" opacity="0.5" />
      <circle cx="438" cy="250" r="5" fill="#F59E0B" opacity="0.3" />
      <line x1="407" y1="262" x2="441" y2="262" stroke="#F59E0B" strokeWidth="1" opacity="0.4" />
      <line x1="407" y1="266" x2="432" y2="266" stroke="#F59E0B" strokeWidth="1" opacity="0.3" />
      <text x="420" y="276" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.6">CRM</text>

      {/* WMS node */}
      <rect x="230" y="390" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.9" />
      <rect x="244" y="400" width="14" height="12" rx="2" fill="#F59E0B" opacity="0.6" stroke="#F59E0B" strokeWidth="0.5" />
      <rect x="250" y="394" width="14" height="12" rx="2" fill="#F59E0B" opacity="0.45" stroke="#F59E0B" strokeWidth="0.5" />
      <line x1="270" y1="402" x2="270" y2="414" stroke="#F59E0B" strokeWidth="1" opacity="0.5" />
      <line x1="274" y1="402" x2="274" y2="414" stroke="#F59E0B" strokeWidth="2" opacity="0.4" />
      <line x1="279" y1="402" x2="279" y2="414" stroke="#F59E0B" strokeWidth="1" opacity="0.6" />
      <line x1="282" y1="402" x2="282" y2="414" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4" />
      <text x="260" y="436" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.6">WMS</text>

      {/* API node */}
      <rect x="70" y="230" width="60" height="50" rx="12" fill="#0F1D33" opacity="0.9" />
      <text x="100" y="260" textAnchor="middle" fill="#F59E0B" fontSize="22" fontFamily="monospace" opacity="0.6">{`{ }`}</text>
      <text x="100" y="276" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="system-ui" fontWeight="600" opacity="0.6">API</text>

      {/* BI node */}
      <rect x="380" y="100" width="56" height="46" rx="12" fill="#0F1D33" opacity="0.85" />
      <circle cx="408" cy="120" r="12" fill="none" stroke="#F59E0B" strokeWidth="3" opacity="0.35" strokeDasharray="25 75" />
      <circle cx="408" cy="120" r="12" fill="none" stroke="#F59E0B" strokeWidth="3" opacity="0.65" strokeDasharray="45 75" strokeDashoffset="-25" />
      <text x="408" y="140" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="system-ui" fontWeight="600" opacity="0.5">BI</text>

      {/* AI node */}
      <rect x="84" y="370" width="56" height="46" rx="12" fill="#0F1D33" opacity="0.85" />
      <circle cx="112" cy="390" r="10" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.6" />
      <circle cx="112" cy="390" r="4" fill="#F59E0B" opacity="0.4" />
      <rect x="110" y="377" width="4" height="4" rx="1" fill="#F59E0B" opacity="0.5" />
      <rect x="110" y="399" width="4" height="4" rx="1" fill="#F59E0B" opacity="0.5" />
      <rect x="99" y="388" width="4" height="4" rx="1" fill="#F59E0B" opacity="0.5" />
      <rect x="121" y="388" width="4" height="4" rx="1" fill="#F59E0B" opacity="0.5" />
      <text x="112" y="412" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="system-ui" fontWeight="600" opacity="0.5">AI</text>
    </svg>
  )
}
