import React, { useState, useEffect } from "react";
const twBalance = { textWrap: "balance" } as React.CSSProperties;
import {
  Menu, X, ChevronDown, ChevronUp, Check,
  Cloud, FileText, Users, Target, Monitor,
  BookOpen, Lightbulb, Clock
} from "lucide-react";
// ─── Logo SVG components (inlined directly — no file import needed) ──────────

function HeaderLogo({ height = 20 }: { height?: number }) {
  const w = (187.32 / 22.28) * height;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 187.32 22.28"
      style={{ height, width: w, display: "block" }}
      aria-label="bizcre"
    >
      <g fill="#303333">
        <path d="M14.38,10.07c-.64-.58-1.39-1.03-2.21-1.32-.5-.18-1.02-.31-1.55-.38h0c-.16,0-.35-.03-.57-.04-.35-.03-.61-.02-.72-.02-.28,0-.55.03-.83.06-.35.05-.7.12-1.04.21-.46.13-.92.29-1.35.5C6.83,6.05,7.56,3.03,8.29,0H2.33L0,12.18h3.89l-1.3,10.1c2.07-3.59,4.14-7.17,6.21-10.76l-.17.29c.24-.07.49-.1.74-.1.4,0,.8.08,1.17.26.34.17.65.41.9.7.25.3.45.64.59,1.01.28.79.28,1.65,0,2.44-.13.37-.33.72-.59,1.01-.26.29-.57.52-.92.68-.38.17-.79.25-1.21.25-.42,0-.84-.08-1.23-.24-.46-.17-.88-.44-1.23-.78l-1.79,3.1c.52.42,1.12.74,1.76.93.83.29,1.71.43,2.59.42.93,0,1.86-.15,2.74-.45.82-.28,1.57-.73,2.21-1.31.63-.58,1.14-1.29,1.48-2.08.37-.88.55-1.82.54-2.77.02-.94-.17-1.88-.54-2.74-.34-.79-.85-1.5-1.48-2.08" />
        <path d="M8.29,0h0s0,0,0,0Z" />
        <rect x="37.36" y="8.2" width="3.52" height="10.69" />
        <path d="M52.22,10.84v-2.64h-9.12v2.7h4.83l-5.02,5.24v2.75h9.53v-2.73h-5.39l5.17-5.32Z" />
        <path d="M39.12,2.67c-1.19,0-2.16.96-2.16,2.16,0,1.19.96,2.16,2.16,2.16,1.19,0,2.16-.96,2.16-2.16h0c0-1.19-.96-2.16-2.15-2.16h0" />
        <path d="M61.64,11.97l1.86-2.67c-1.1-1.02-2.55-1.59-4.06-1.59-3.16-.09-5.79,2.41-5.88,5.57-.09,3.16,2.41,5.79,5.57,5.88.1,0,.21,0,.31,0,1.5,0,2.95-.56,4.06-1.59l-1.86-2.67c-.51.71-1.32,1.12-2.19,1.12-1.43.04-2.63-1.08-2.67-2.51-.04-1.43,1.08-2.63,2.51-2.67.05,0,.11,0,.16,0h0c.87,0,1.69.42,2.19,1.13" />
        <path d="M71.38,7.91h0c-.62-.03-1.23.16-1.74.51-.49.34-.89.8-1.16,1.34h-.04v-1.54h-3.39v10.68h3.52v-5.48c0-.25.05-.5.13-.75.09-.29.23-.56.42-.79.21-.26.48-.47.77-.62.37-.18.78-.27,1.19-.26.15,0,.29,0,.44.02.16.01.31.04.46.09l.15-3.11c-.11-.03-.22-.05-.34-.06-.14-.01-.28-.02-.42-.02" />
        <path d="M84.39,13.45c0-1.55-.62-3.02-1.74-4.1h.01c-.39-.38-.83-.7-1.3-.95,0,0-.01,0-.01,0-.15-.08-.31-.16-.47-.23-.02,0-.04-.02-.07-.03-.14-.06-.3-.11-.45-.16-.04-.01-.09-.03-.15-.04-.13-.04-.26-.07-.39-.1-.09-.02-.18-.03-.27-.04-.1-.01-.2-.03-.3-.04-.19-.02-.39-.03-.58-.03s-.39.01-.58.03c-.38.04-.75.11-1.12.23-2.39.74-4.02,2.96-4.02,5.46v.04c.02,3.15,2.59,5.7,5.74,5.68,1.76,0,3.42-.83,4.5-2.23l-2.48-1.74c-.46.68-1.22,1.09-2.04,1.11-1.12-.04-2.09-.78-2.42-1.85h8.04c.06-.33.09-.67.09-1M76.3,12.33h0c.06-.15.13-.29.21-.43.03-.04.06-.09.09-.13.06-.09.13-.18.2-.26.03-.04.07-.08.1-.12.1-.1.2-.2.31-.28.01,0,.02-.02.03-.03.12-.09.25-.17.39-.23.04-.02.08-.04.13-.06.1-.05.21-.08.32-.11.04-.01.09-.02.13-.03.15-.03.31-.05.47-.05.12,0,.25.01.37.03.04,0,.09.02.13.03.08.02.15.03.22.06.05.02.1.04.16.06.06.03.11.04.17.07s.11.06.17.09c.04.03.08.05.12.08.06.04.12.08.18.13.02.02.05.04.07.06.24.21.44.45.6.73.08.13.14.26.2.4h-4.77Z" />
        <path d="M30.52,7.72h0c-1.24.02-2.43.52-3.3,1.41V2.67h-3.52v16.23h3.52v-1.13c.87.89,2.06,1.39,3.3,1.4,2.79,0,5.04-2.56,5.04-5.72s-2.26-5.72-5.04-5.72M29.7,16.18h0c-1.28-.04-2.34-1.01-2.48-2.28v-.83c.15-1.27,1.21-2.24,2.48-2.28,1.49.1,2.61,1.38,2.52,2.87-.09,1.35-1.17,2.43-2.52,2.52" />
        <path d="M180.84,18.96V6.1h-4.98v-1.29h11.45v1.29h-4.98v12.86h-1.5Z" />
        <path d="M174.98,18.96h-1.64l-3.24-4.55c-.38.04-.75.06-1.13.06h-3.8v4.49h-1.5V4.8h5.3c3.6,0,5.79,1.82,5.79,4.85,0,2.23-1.17,3.78-3.24,4.45l3.46,4.85ZM168.93,13.2c2.83,0,4.33-1.31,4.33-3.54s-1.5-3.56-4.33-3.56h-3.76v7.1h3.76Z" />
        <path d="M154.06,19.09c-4.29,0-7.44-3.08-7.44-7.2s3.16-7.2,7.44-7.2,7.42,3.05,7.42,7.2-3.18,7.2-7.42,7.2M154.06,17.75c3.4,0,5.93-2.49,5.93-5.87s-2.53-5.87-5.93-5.87-5.97,2.49-5.97,5.87,2.55,5.87,5.97,5.87" />
        <path d="M138.65,4.8c3.6,0,5.79,1.82,5.79,4.85s-2.18,4.83-5.79,4.83h-3.8v4.47h-1.5V4.8h5.3ZM138.61,13.18c2.83,0,4.33-1.29,4.33-3.52s-1.5-3.56-4.33-3.56h-3.76v7.08h3.76Z" />
        <path d="M125.5,4.8c3.6,0,5.79,1.82,5.79,4.85s-2.18,4.83-5.79,4.83h-3.8v4.47h-1.5V4.8h5.3ZM125.46,13.18c2.83,0,4.33-1.29,4.33-3.52s-1.5-3.56-4.33-3.56h-3.76v7.08h3.76Z" />
        <path d="M111.83,19.08c-3.62,0-5.83-2.1-5.83-6.17V4.8h1.5v8.05c0,3.36,1.58,4.89,4.33,4.89s4.35-1.54,4.35-4.89V4.8h1.46v8.11c0,4.07-2.18,6.17-5.81,6.17" />
        <path d="M98.37,19.09c-2.12,0-4.21-.75-5.26-1.84l.59-1.15c1.01.99,2.81,1.72,4.67,1.72,2.65,0,3.8-1.11,3.8-2.51,0-3.88-8.72-1.5-8.72-6.74,0-2.08,1.62-3.88,5.22-3.88,1.55-.02,3.08.42,4.39,1.25l-.51,1.19c-1.16-.75-2.5-1.16-3.88-1.17-2.59,0-3.74,1.15-3.74,2.57,0,3.88,8.72,1.54,8.72,6.7,0,2.08-1.66,3.86-5.28,3.86" />
      </g>
    </svg>
  );
}

function FooterLogo({ height = 56 }: { height?: number }) {
  const w = (78.66 / 106.61) * height;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 78.66 106.61"
      style={{ height, width: w, display: "block" }}
      aria-label="bizcre"
    >
      <g fill="#9d9b7e">
        <path d="M40.83,40.82c.83-.23,1.69-.34,2.55-.34,1.4-.02,2.79.29,4.05.9,1.19.59,2.24,1.41,3.1,2.41.88,1.03,1.56,2.21,2.02,3.49.49,1.35.74,2.78.73,4.22,0,1.44-.22,2.86-.69,4.22-.44,1.29-1.12,2.47-2.02,3.49-.89,1-1.97,1.81-3.19,2.37-1.31.59-2.74.89-4.17.86-1.46,0-2.91-.28-4.26-.82-1.41-.54-3.37-1.67-4.23-2.71l-6.18,10.72c1.79,1.45,3.85,2.55,6.06,3.22,2.88.99,5.91,1.48,8.95,1.46,3.23.03,6.43-.5,9.48-1.55,2.83-.97,5.43-2.51,7.65-4.52,2.19-2.01,3.93-4.46,5.11-7.19,1.28-3.02,1.92-6.28,1.86-9.56.05-3.25-.59-6.48-1.86-9.47-1.18-2.73-2.92-5.18-5.11-7.19-2.22-2.01-4.82-3.57-7.65-4.57-1.73-.62-3.53-1.07-5.35-1.32" />
        <path d="M39.64,0h-20.59l-8.06,42.07h13.43l-4.48,34.91c9.25-16.01,18.5-32.01,27.74-48.02-.55-.07-1.23-.15-2.01-.21-1.2-.08-2.13-.07-2.49-.06-.96.02-1.92.09-2.87.22-1.21.16-2.41.41-3.58.73-1.6.44-3.17,1.02-4.67,1.73,2.53-10.45,5.05-20.91,7.58-31.37" />
        <rect x="17.71" y="92.4" width="4.56" height="13.85" />
        <path d="M36.97,95.82v-3.42h-11.82v3.5h6.26l-6.51,6.79v3.56h12.35v-3.53h-6.98l6.7-6.9Z" />
        <path d="M19.99,85.23c-1.54,0-2.8,1.25-2.8,2.8,0,1.54,1.25,2.8,2.8,2.8,1.54,0,2.8-1.25,2.8-2.8h0c0-1.54-1.25-2.8-2.8-2.8h0" />
        <path d="M46.32,95.84c1.13,0,2.19.54,2.84,1.45l2.42-3.45c-1.43-1.33-3.31-2.06-5.26-2.05-4.09-.11-7.5,3.11-7.61,7.2-.11,4.09,3.11,7.5,7.2,7.61.14,0,.27,0,.41,0,1.95,0,3.83-.73,5.26-2.05l-2.42-3.45c-.66.92-1.72,1.46-2.84,1.45-1.85.04-3.39-1.42-3.44-3.28-.04-1.85,1.42-3.39,3.28-3.44.05,0,.11,0,.16,0" />
        <path d="M61.79,92.01c-.8-.02-1.59.22-2.25.67-.64.44-1.16,1.04-1.5,1.74h-.06v-2h-4.39v13.83h4.56v-7.1c0-.33.06-.66.17-.97.11-.37.3-.72.54-1.03.27-.33.62-.61,1-.81.48-.24,1.01-.35,1.54-.33.19,0,.38.01.57.03.2.02.4.06.6.11l.2-4.03c-.14-.04-.28-.07-.43-.08-.18-.02-.36-.03-.54-.03" />
        <path d="M76.41,93.89h0c-.5-.49-1.07-.9-1.69-1.23h-.02c-.2-.11-.41-.21-.62-.3-.03-.01-.06-.02-.09-.03-.19-.08-.38-.15-.58-.21-.06-.02-.12-.03-.19-.05-.17-.05-.34-.1-.51-.13-.11-.02-.23-.03-.34-.05-.13-.02-.25-.04-.38-.06-.25-.02-.5-.04-.75-.04-4.09,0-7.41,3.32-7.41,7.41,0,.02,0,.04,0,.05.02,4.09,3.36,7.38,7.44,7.36,2.28-.01,4.43-1.08,5.82-2.89l-3.22-2.26c-.59.88-1.58,1.42-2.64,1.44-1.45-.04-2.71-1.01-3.13-2.4h10.42c.45-2.42-.35-4.91-2.13-6.61M68.17,97.74c.07-.19.16-.37.27-.55.03-.06.07-.12.11-.18.08-.12.16-.23.25-.34.04-.05.09-.11.13-.15.12-.13.26-.26.4-.37.01-.01.03-.02.04-.03.16-.12.33-.22.51-.3.05-.03.11-.05.17-.07.13-.06.27-.11.42-.14.06-.02.12-.03.18-.04.36-.08.73-.09,1.09-.03.06,0,.11.02.17.04.1.02.19.04.29.07.07.02.13.05.2.07s.15.06.22.1.15.08.22.12c.05.03.11.07.16.1.08.05.16.11.23.17.03.03.06.05.09.08.31.27.57.59.78.94h0c.1.17.18.34.26.52h-6.18Z" />
        <path d="M8.84,91.79c-1.61.02-3.15.67-4.28,1.82v-8.38H0v21.02h4.56v-1.46c1.13,1.15,2.67,1.8,4.28,1.82,3.61,0,6.54-3.32,6.54-7.41s-2.93-7.41-6.54-7.41M7.78,102.74c-1.66-.05-3.03-1.3-3.22-2.95v-1.07c.19-1.65,1.56-2.9,3.22-2.95,1.93.13,3.38,1.79,3.26,3.71-.11,1.75-1.51,3.15-3.26,3.26" />
      </g>
    </svg>
  );
}

// ─── Shared helpers ──────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <span style={{
      fontSize: "0.6875rem",
      letterSpacing: "0.28em",
      color: "#4a90d9",
      fontWeight: 700,
      textTransform: "uppercase" as const,
      display: "inline-block",
      whiteSpace: "nowrap" as const,
    }}>
      {label}
    </span>
  );
}

// ─── Hero SVG Illustration ────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[520px]"
      aria-hidden="true"
    >
      {/* Soft background shapes */}
      <circle cx="270" cy="230" r="198" fill="#eef4fb" opacity="0.65" />
      <circle cx="340" cy="155" r="72" fill="#dde9f8" opacity="0.45" />

      {/* ── Laptop screen ── */}
      <rect x="88" y="118" width="304" height="200" rx="10" fill="#ffffff" stroke="#c5d5e8" strokeWidth="1.5" />
      <rect x="98" y="128" width="284" height="180" rx="6" fill="#f5f8ff" />

      {/* Browser chrome */}
      <rect x="98" y="128" width="284" height="26" rx="6" fill="#eef4fb" />
      <circle cx="114" cy="141" r="5" fill="#fbb4b4" />
      <circle cx="128" cy="141" r="5" fill="#fdd9a0" />
      <circle cx="142" cy="141" r="5" fill="#b3e5c0" />
      <rect x="158" y="136" width="130" height="10" rx="3" fill="#d1dff0" />

      {/* Strategy flow nodes */}
      <rect x="108" y="166" width="72" height="30" rx="5" fill="#ddeaff" stroke="#4a90d9" strokeWidth="1.2" />
      <text x="144" y="186" textAnchor="middle" fontSize="8.5" fill="#1e4d8c" fontFamily="sans-serif" fontWeight="600">経営者の構想</text>

      <line x1="180" y1="181" x2="196" y2="181" stroke="#4a90d9" strokeWidth="1.5" />
      <polygon points="194,177 202,181 194,185" fill="#4a90d9" />

      <rect x="200" y="166" width="72" height="30" rx="5" fill="#ddeaff" stroke="#4a90d9" strokeWidth="1.2" />
      <text x="236" y="186" textAnchor="middle" fontSize="8.5" fill="#1e4d8c" fontFamily="sans-serif" fontWeight="600">専門家との対話</text>

      <line x1="272" y1="181" x2="288" y2="181" stroke="#4a90d9" strokeWidth="1.5" />
      <polygon points="286,177 294,181 286,185" fill="#4a90d9" />

      <rect x="292" y="162" width="80" height="38" rx="5" fill="#1e4d8c" />
      <text x="332" y="179" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif" fontWeight="600">戦略の</text>
      <text x="332" y="191" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif" fontWeight="600">企業資産化</text>

      {/* Chart panel */}
      <rect x="108" y="208" width="108" height="82" rx="5" fill="white" stroke="#d8e8f4" strokeWidth="1" />
      <text x="115" y="221" fontSize="7.5" fill="#8a9bb0" fontFamily="sans-serif">業績推移</text>
      <rect x="118" y="260" width="13" height="22" rx="2" fill="#c5d5e8" />
      <rect x="136" y="248" width="13" height="34" rx="2" fill="#4a90d9" opacity="0.7" />
      <rect x="154" y="238" width="13" height="44" rx="2" fill="#2d6ab4" opacity="0.85" />
      <rect x="172" y="230" width="13" height="52" rx="2" fill="#1e4d8c" />
      <line x1="114" y1="284" x2="200" y2="284" stroke="#d8e8f4" strokeWidth="1" />

      {/* Document panel */}
      <rect x="226" y="208" width="146" height="82" rx="5" fill="white" stroke="#d8e8f4" strokeWidth="1" />
      <text x="234" y="221" fontSize="7.5" fill="#8a9bb0" fontFamily="sans-serif">経営戦略書</text>
      <rect x="234" y="228" width="96" height="5" rx="2" fill="#1e4d8c" opacity="0.15" />
      <rect x="234" y="238" width="80" height="3" rx="1.5" fill="#1e4d8c" opacity="0.08" />
      <rect x="234" y="245" width="88" height="3" rx="1.5" fill="#1e4d8c" opacity="0.08" />
      <rect x="234" y="252" width="72" height="3" rx="1.5" fill="#1e4d8c" opacity="0.08" />
      <rect x="234" y="262" width="96" height="4" rx="2" fill="#2d6ab4" opacity="0.22" />
      <rect x="234" y="271" width="82" height="3" rx="1.5" fill="#1e4d8c" opacity="0.08" />
      <rect x="234" y="278" width="74" height="3" rx="1.5" fill="#1e4d8c" opacity="0.08" />

      {/* Laptop stand */}
      <rect x="68" y="318" width="344" height="14" rx="5" fill="#d1dff0" />
      <rect x="186" y="332" width="108" height="7" rx="2" fill="#b8cce0" />

      {/* Sticky note – top-left */}
      <g transform="rotate(-6, 56, 96)">
        <rect x="46" y="86" width="82" height="72" rx="3" fill="#fffde7" />
        <rect x="46" y="86" width="82" height="9" fill="#ffe082" rx="3" />
        <rect x="55" y="104" width="58" height="3" rx="1.5" fill="#7b6400" opacity="0.22" />
        <rect x="55" y="112" width="44" height="3" rx="1.5" fill="#7b6400" opacity="0.16" />
        <rect x="55" y="120" width="52" height="3" rx="1.5" fill="#7b6400" opacity="0.16" />
        <rect x="55" y="128" width="40" height="3" rx="1.5" fill="#7b6400" opacity="0.14" />
        <rect x="55" y="136" width="48" height="3" rx="1.5" fill="#7b6400" opacity="0.14" />
        <rect x="55" y="144" width="34" height="3" rx="1.5" fill="#7b6400" opacity="0.12" />
      </g>

      {/* Sticky note – top-right */}
      <g transform="rotate(5, 394, 78)">
        <rect x="384" y="68" width="78" height="68" rx="3" fill="#e8f5e9" />
        <rect x="384" y="68" width="78" height="9" fill="#a5d6a7" rx="3" />
        <rect x="392" y="87" width="55" height="3" rx="1.5" fill="#1b5e20" opacity="0.18" />
        <rect x="392" y="95" width="40" height="3" rx="1.5" fill="#1b5e20" opacity="0.13" />
        <rect x="392" y="103" width="50" height="3" rx="1.5" fill="#1b5e20" opacity="0.13" />
        <rect x="392" y="111" width="36" height="3" rx="1.5" fill="#1b5e20" opacity="0.11" />
        <rect x="392" y="119" width="46" height="3" rx="1.5" fill="#1b5e20" opacity="0.11" />
      </g>

      {/* Cloud badge */}
      <rect x="396" y="196" width="90" height="58" rx="9" fill="white" stroke="#d8e8f4" strokeWidth="1.5" />
      <path d="M 416 234 Q 416 224 426 222 Q 427 214 436 214 Q 445 214 447 222 Q 454 224 454 232 Q 454 239 447 240 L 418 240 Q 412 240 412 235 Z" fill="#e8f0fa" stroke="#4a90d9" strokeWidth="1.2" />
      <text x="441" y="253" textAnchor="middle" fontSize="7.5" fill="#5a6a80" fontFamily="sans-serif">戦略を蓄積</text>

      {/* Consultation avatars */}
      <circle cx="52" cy="388" r="20" fill="#c5d5e8" />
      <circle cx="52" cy="382" r="10" fill="#f0f4fb" />
      <path d="M 36 406 Q 36 396 52 396 Q 68 396 68 406" fill="#c5d5e8" />

      <rect x="72" y="376" width="26" height="16" rx="5" fill="#4a90d9" opacity="0.82" />
      <polygon points="78,392 82,398 86,392" fill="#4a90d9" opacity="0.82" />
      <rect x="75" y="381" width="16" height="2.5" rx="1" fill="white" />
      <rect x="77" y="385.5" width="12" height="2" rx="1" fill="white" opacity="0.7" />

      <circle cx="118" cy="388" r="20" fill="#1e4d8c" opacity="0.45" />
      <circle cx="118" cy="382" r="10" fill="#e8f0fa" />
      <path d="M 102 406 Q 102 396 118 396 Q 134 396 134 406" fill="#1e4d8c" opacity="0.45" />

      {/* Dot grids */}
      {Array.from({ length: 5 }, (_, i) =>
        Array.from({ length: 4 }, (_, j) => (
          <circle key={`dr${i}${j}`} cx={415 + i * 14} cy={360 + j * 14} r="2" fill="#c5d5e8" opacity="0.55" />
        ))
      )}
      {Array.from({ length: 4 }, (_, i) =>
        Array.from({ length: 3 }, (_, j) => (
          <circle key={`dl${i}${j}`} cx={70 + i * 14} cy={418 + j * 14} r="2" fill="#c5d5e8" opacity="0.45" />
        ))
      )}
    </svg>
  );
}

// ─── 1. Header ────────────────────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = [
    { label: "専門家サポーター", href: "#supporter" },
    { label: "ビズクリの特徴", href: "#feature" },
    { label: "相談の流れ", href: "#flow" },
    { label: "よくある質問", href: "#faq" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#fff",
        transition: "box-shadow 0.25s",
        boxShadow: scrolled
          ? "0 1px 16px rgba(30,77,140,0.09)"
          : "0 1px 0 rgba(30,77,140,0.07)",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          paddingLeft: "clamp(1.25rem, 5vw, 4rem)",
          paddingRight: "clamp(1.25rem, 5vw, 4rem)",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <HeaderLogo height={20} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: 32, alignItems: "center" }}>
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: 13,
                color: "#5a6a80",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#1a2340")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5a6a80")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          className="hidden lg:block"
          style={{
            background: "#1e4d8c",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            padding: "10px 20px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "background 0.18s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#1a4278")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#1e4d8c")}
        >
          30分無料相談
        </button>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#1a2340", padding: 4 }}
          aria-label="メニュー"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(30,77,140,0.07)",
            padding: "20px 20px 24px",
          }}
          className="lg:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "block",
                fontSize: 14,
                color: "#5a6a80",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(30,77,140,0.06)",
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            style={{
              width: "100%",
              marginTop: 16,
              background: "#1e4d8c",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              padding: "14px 0",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            30分無料相談を申し込む
          </button>
        </div>
      )}
    </header>
  );
}

// ─── 2. Hero ──────────────────────────────────────────────────────────────────

function HeroSection() {
  const badges = [
    { icon: <Clock size={13} />, label: "30分無料" },
    { icon: <Monitor size={13} />, label: "オンライン対応" },
    { icon: <Users size={13} />, label: "事務局がご案内" },
    { icon: <Check size={13} />, label: "無理な営業なし" },
  ];

  return (
    <section
      style={{
        paddingTop: "clamp(5.5rem, 11vw, 9rem)",
        paddingBottom: "clamp(3rem, 7vw, 6rem)",
        background: "#fff",
        overflow: "hidden",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div
        style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "#4a90d9",
                fontWeight: 600,
                background: "#eef4fb",
                padding: "6px 12px",
                borderRadius: 4,
                marginBottom: 24,
                textTransform: "uppercase",
              }}
            >
              情シス・IT担当者向け 30分無料相談
            </span>

            <h1
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                fontWeight: 700,
                color: "#1a2340",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                marginBottom: 24,
              }}
            >
              IT・DXの課題を、戦略で解決する。
            </h1>

            <p
              style={{
                fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                color: "#5a6a80",
                lineHeight: 2,
                marginBottom: 36,
                ...twBalance,
              }}
            >
              日々の問い合わせ対応、システム運用、DX推進、セキュリティ対策、ベンダー調整——情シス・IT担当者が抱える課題は、社内のあらゆる部門に関わっています。課題が多すぎて優先順位がつけにくい。経営層に必要性をうまく説明できない。そんな状態を整理し、社内で動かせる形にするための30分無料相談を行っています。
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
              <button
                style={{
                  background: "#1e4d8c",
                  color: "#fff",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  padding: "15px 28px",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.18s, box-shadow 0.18s",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "#1a4278";
                  t.style.boxShadow = "0 4px 18px rgba(30,77,140,0.28)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "#1e4d8c";
                  t.style.boxShadow = "none";
                }}
              >
                30分無料相談を申し込む
              </button>
              <button
                style={{
                  background: "none",
                  color: "#1e4d8c",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  padding: "15px 24px",
                  border: "1.5px solid #c5d5e8",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "#f0f4fa";
                  t.style.borderColor = "#2d6ab4";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "none";
                  t.style.borderColor = "#c5d5e8";
                }}
              >
                <a href="#flow" style={{ color: "inherit", textDecoration: "none" }}>相談の流れを見る</a>
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {badges.map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#5a6a80",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#4a90d9", display: "flex" }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Issue ─────────────────────────────────────────────────────────────────

function IssueSection() {
  const cards = [
    {
      icon: <Users size={22} />,
      title: "DXを進めたいが、\n現場の協力が得られない",
      desc: "部門ごとに課題感が異なり、何を優先すべきか合意形成が進まない。",
    },
    {
      icon: <FileText size={22} />,
      title: "システム刷新の必要性を\n社内に説明しづらい",
      desc: "費用対効果や経営インパクトを、社内向けにうまく整理・言語化できない。",
    },
    {
      icon: <Target size={22} />,
      title: "日々の運用に追われ、\nIT戦略を考える時間がない",
      desc: "問い合わせ・障害対応・ベンダー調整に追われ、先回りした改善活動まで手が回らない。",
    },
  ];

  return (
    <section
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#fff",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div style={{ marginBottom: "clamp(2.5rem, 5.5vw, 3.5rem)" }}>
          <SectionLabel label="ISSUE" />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              marginTop: 12,
              fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400,
              color: "#1a2340",
              lineHeight: 1.45,
              ...twBalance,
            }}
          >
            情シスだけでは、進めきれないIT課題はありませんか。
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: "0.9375rem",
              color: "#5a6a80",
              lineHeight: 1.95,
              ...twBalance,
            }}
          >
            ITやDXの課題は、単なるシステムの問題ではありません。業務フロー、部門間の連携、経営判断、予算、セキュリティ、外部ベンダーとの調整など、会社全体に関わるテーマです。だからこそ、情シス・IT担当者だけで抱え込むのではなく、課題を整理し、社内で動かせる形にしていくことが大切です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                border: "1px solid rgba(30,77,140,0.1)",
                borderRadius: 14,
                padding: "28px 28px 32px",
                boxShadow: "0 2px 20px rgba(30,77,140,0.05)",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.boxShadow = "0 6px 28px rgba(30,77,140,0.1)";
                t.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.boxShadow = "0 2px 20px rgba(30,77,140,0.05)";
                t.style.transform = "none";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "#eef4fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2d6ab4",
                  marginBottom: 20,
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#1a2340",
                  lineHeight: 1.7,
                  marginBottom: 12,
                  whiteSpace: "pre-line",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#5a6a80", lineHeight: 1.85 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Consultation steps ────────────────────────────────────────────────────

function ConsultationSection() {
  const steps = [
    {
      num: "01",
      title: "課題を聞く",
      desc: "現在抱えているIT・DX・システム運用・セキュリティ・ベンダー管理などの課題をお聞きします。",
    },
    {
      num: "02",
      title: "優先順位を整理する",
      desc: "すぐ対応すべき課題、経営判断が必要な課題、現場調整が必要な課題を切り分けます。",
    },
    {
      num: "03",
      title: "社内で動かすための方向性を確認する",
      desc: "経営層や関係部署に説明しやすい形で、次に整理すべきことを確認します。必要に応じてビズクリの活用方法もご案内します。",
    },
  ];

  return (
    <section
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#f2f6fb",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div style={{ marginBottom: "clamp(2.5rem, 5.5vw, 3.5rem)" }}>
          <SectionLabel label="CONSULTATION" />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              marginTop: 12,
              fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400,
              color: "#1a2340",
              lineHeight: 1.45,
              ...twBalance,
            }}
          >
            30分で、IT・DX課題の現在地を整理します。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "28px 28px 32px",
                boxShadow: "0 2px 20px rgba(30,77,140,0.06)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  color: "#eef4fb",
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: "-0.03em",
                  userSelect: "none",
                }}
              >
                {num}
              </div>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  color: "#4a90d9",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                STEP {num}
              </span>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#1a2340",
                  marginBottom: 12,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#5a6a80", lineHeight: 1.85 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <button
            style={{
              background: "#1e4d8c",
              color: "#fff",
              fontSize: "0.9375rem",
              fontWeight: 600,
              padding: "15px 36px",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.18s, box-shadow 0.18s",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.background = "#1a4278";
              t.style.boxShadow = "0 4px 18px rgba(30,77,140,0.28)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.background = "#1e4d8c";
              t.style.boxShadow = "none";
            }}
          >
            30分無料相談を申し込む
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── 5. Concept ───────────────────────────────────────────────────────────────

function ConceptSection() {
  const flow = [
    { label: "現場・情シスの課題", sub: "IT運用・DX・セキュリティ・ベンダー調整" },
    { label: "専門家との対話", sub: "30分の無料相談からはじまる" },
    { label: "IT・DX課題の整理", sub: "優先順位と論点を明確化" },
    { label: "経営・関係部署に伝わる言語化", sub: "社内提案・稟議に活かせる形へ" },
    { label: "実行計画・優先順位の明確化", sub: "継続的な見直しと伴走" },
    { label: "企業に残る戦略資産へ", sub: "ITの取り組みを経営に活きる判断軸に", highlight: true },
  ];

  return (
    <section
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#fff",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <SectionLabel label="CONCEPT" />
            <h2
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                marginTop: 12,
                fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
                fontWeight: 400,
                color: "#1a2340",
                lineHeight: 1.45,
                marginBottom: 24,
              }}
            >
              ITの課題を、経営の言葉に変える。
            </h2>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "#5a6a80",
                lineHeight: 1.95,
                marginBottom: 20,
                ...twBalance,
              }}
            >
              情シス・IT担当者が感じている課題は、単なるシステムの不便さではなく、会社の生産性、意思決定、リスク管理、成長に直結しています。
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#5a6a80", lineHeight: 1.95, ...twBalance }}>
              ビズクリは、専門家との対話を通じて、現場で見えているIT課題を整理し、経営層や関係部署に伝わる形へと言語化します。ITやDXの取り組みを、会社全体で共有し、実行し、改善していくための判断軸へ。「戦略」を、企業の揺るぎない「資産」へ育てる第一歩を支援します。
            </p>
          </div>

          {/* Flow */}
          <div style={{ paddingLeft: 8 }}>
            {flow.map(({ label, sub, highlight }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "stretch", gap: 16 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: highlight ? "#1e4d8c" : "#eef4fb",
                      border: highlight ? "none" : "1.5px solid #c5d5e8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      color: highlight ? "#fff" : "#2d6ab4",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < flow.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        flex: 1,
                        minHeight: 28,
                        background: "#d8e8f4",
                        margin: "4px 0",
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingTop: 8, paddingBottom: i < flow.length - 1 ? 0 : 0 }}>
                  <p
                    style={{
                      fontWeight: 700,
                      color: highlight ? "#1e4d8c" : "#1a2340",
                      fontSize: highlight ? 17 : 15,
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "#8a9bb0",
                      marginBottom: i < flow.length - 1 ? 12 : 0,
                    }}
                  >
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Features ──────────────────────────────────────────────────────────────

function FeatureSection() {
  const features = [
    {
      icon: <BookOpen size={22} />,
      title: "課題を経営視点で整理できる",
      desc: "システム単体の課題ではなく、業務・組織・コスト・リスク・成長性の観点から整理します。",
    },
    {
      icon: <FileText size={22} />,
      title: "社内説明に必要な論点を明確にできる",
      desc: "経営層、現場部門、管理部門など、関係者に説明すべきポイントを整理します。",
    },
    {
      icon: <Users size={22} />,
      title: "必要に応じて専門家が伴走できる",
      desc: "ITコーディネーター、中小企業診断士、社労士、税理士など、課題に応じた専門家が支援します。",
    },
  ];

  return (
    <section
      id="feature"
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#f2f6fb",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div style={{ marginBottom: "clamp(2.5rem, 5.5vw, 3.5rem)" }}>
          <SectionLabel label="FEATURE" />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              marginTop: 12,
              fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400,
              color: "#1a2340",
              lineHeight: 1.45,
              ...twBalance,
            }}
          >
            IT・DXの取り組みを、社内で前に進めるために。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "28px 28px 32px",
                boxShadow: "0 2px 20px rgba(30,77,140,0.05)",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.boxShadow = "0 6px 28px rgba(30,77,140,0.1)";
                t.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.boxShadow = "0 2px 20px rgba(30,77,140,0.05)";
                t.style.transform = "none";
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "#eef4fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2d6ab4",
                  marginBottom: 20,
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#1a2340",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#5a6a80", lineHeight: 1.85 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. Supporters ────────────────────────────────────────────────────────────

function SupporterSection() {
  const supporters = [
    {
      role: "中小企業診断士 / MBA / PMP",
      name: "外屋敷 竜一",
      tags: ["DX推進", "業務改善", "システム導入"],
      photo: "https://bizcre.cloud/support/wp-content/uploads/2025/07/HokayashikiRyuichi202511.png",
    },
    {
      role: "中小企業診断士 / MBA / 事業承継士",
      name: "西田 雄一郎",
      tags: ["経営戦略", "社内提案整理", "組織・人事"],
      photo: "https://bizcre.cloud/support/wp-content/uploads/2025/08/yuichiro_nishida-1.jpg",
    },
    {
      role: "財務パートナー（財務顧問・社外CFO）",
      name: "礒 亮次",
      tags: ["コスト最適化", "IT投資判断", "経営改善"],
      photo: "https://bizcre.cloud/support/wp-content/uploads/2025/07/IsoRyouji202511.png",
    },
  ];

  return (
    <section
      id="supporter"
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#fff",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div style={{ marginBottom: "clamp(2.5rem, 5.5vw, 3.5rem)" }}>
          <SectionLabel label="SUPPORTER" />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              marginTop: 12,
              fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400,
              color: "#1a2340",
              lineHeight: 1.45,
              ...twBalance,
            }}
          >
            ITだけでなく、経営・業務・組織の視点から支援します。
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: "0.9375rem",
              color: "#5a6a80",
              lineHeight: 1.95,
              ...twBalance,
            }}
          >
            DXやシステム導入は、ツールを入れれば終わりではありません。業務プロセスの見直し、社内の合意形成、費用対効果の整理、運用定着まで含めて考える必要があります。ビズクリでは、ITコーディネーターや中小企業診断士をはじめ、課題に応じた専門家が情シス・IT担当者の取り組みを支援します。どの専門家に相談すべきか分からない場合も、ビズクリ事務局がご案内します。
          </p>
        </div>

        <p
          style={{
            fontSize: 13,
            color: "#8a9bb0",
            marginBottom: 24,
            paddingLeft: 2,
          }}
        >
          ※ 以下は専門家の一例です。相談内容に応じて、最適な専門家をご案内します。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {supporters.map(({ role, name, tags, photo }) => (
            <div
              key={name}
              style={{
                background: "#fff",
                border: "1px solid rgba(30,77,140,0.1)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 2px 20px rgba(30,77,140,0.05)",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.boxShadow = "0 6px 28px rgba(30,77,140,0.1)";
                t.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.boxShadow = "0 2px 20px rgba(30,77,140,0.05)";
                t.style.transform = "none";
              }}
            >
              <div
                style={{
                  height: 240,
                  background: "#eef4fb",
                  overflow: "hidden",
                }}
              >
                <img
                  src={photo}
                  alt={name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 8%",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <p style={{ fontSize: 11.5, color: "#8a9bb0", marginBottom: 6, lineHeight: 1.6 }}>
                  {role}
                </p>
                <p style={{ fontSize: 18, fontWeight: 700, color: "#1a2340", marginBottom: 14 }}>
                  {name}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11.5,
                        padding: "4px 10px",
                        background: "#eef4fb",
                        color: "#2d6ab4",
                        borderRadius: 4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More supporters note */}
        <div
          style={{
            marginTop: 36,
            padding: "20px 28px",
            background: "#f2f6fb",
            borderRadius: 10,
            borderLeft: "3px solid #4a90d9",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Users size={16} color="#4a90d9" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: 13.5, color: "#5a6a80", lineHeight: 1.75 }}>
            このほかにも、税理士・社会保険労務士・ITコーディネーターなど
            <strong style={{ color: "#1a2340", fontWeight: 700 }}>35名以上の専門家</strong>
            が在籍しています。相談内容やご状況に応じて、ビズクリ事務局が最適な専門家をご案内します。
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 8. Flow ──────────────────────────────────────────────────────────────────

function FlowSection() {
  const steps = [
    {
      num: "01",
      title: "フォームから申し込み",
      desc: "現在抱えているIT・DX課題や相談したい内容を入力してください。数分で完了します。",
    },
    {
      num: "02",
      title: "日程調整",
      desc: "担当者より、オンライン相談の日程についてご連絡します。",
    },
    {
      num: "03",
      title: "オンラインで30分相談",
      desc: "IT・DX課題の状況をお聞きし、優先順位や整理すべき論点を一緒に確認します。",
    },
    {
      num: "04",
      title: "必要に応じて次のステップへ",
      desc: "ビズクリサポートや専門家支援が役立つ場合のみ、具体的な活用方法をご案内します。",
    },
  ];

  return (
    <section
      id="flow"
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#f2f6fb",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div style={{ marginBottom: "clamp(2.5rem, 5.5vw, 3.5rem)" }}>
          <SectionLabel label="FLOW" />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              marginTop: 12,
              fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400,
              color: "#1a2340",
            }}
          >
            無料相談の流れ
          </h2>
        </div>

        {/* Desktop timeline */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            position: "relative",
          }}
        >
          {/* Connector */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "#c5d5e8",
              zIndex: 0,
            }}
          />

          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "#fff",
                  border: "2px solid #c5d5e8",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  boxShadow: "0 2px 14px rgba(30,77,140,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: 9.5,
                    color: "#4a90d9",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  STEP
                </span>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#1e4d8c",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </span>
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a2340", marginBottom: 8 }}>
                {title}
              </h3>
              <p style={{ fontSize: 12.5, color: "#5a6a80", lineHeight: 1.8 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden">
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} style={{ display: "flex", gap: 20 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#1e4d8c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      flex: 1,
                      minHeight: 36,
                      background: "#c5d5e8",
                      margin: "6px 0",
                    }}
                  />
                )}
              </div>
              <div style={{ paddingTop: 10, paddingBottom: i < steps.length - 1 ? 0 : 0 }}>
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#1a2340",
                    marginBottom: 6,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#5a6a80",
                    lineHeight: 1.8,
                    marginBottom: i < steps.length - 1 ? 20 : 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 9. Assurance ─────────────────────────────────────────────────────────────

function AssuranceSection() {
  const points = [
    "オンライン相談",
    "30分無料",
    "無理な営業なし",
    "情シス・IT担当者からの相談歓迎",
    "相談内容に応じて専門家または事務局が案内",
    "社内説明前の壁打ち相談にも対応",
    "必要な場合のみ有料支援をご提案",
  ];

  return (
    <section
      style={{
        padding: "clamp(3rem, 7vw, 5.5rem) 0",
        background: "#e8f0fa",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          textAlign: "center",
          paddingLeft: "clamp(1.25rem, 5vw, 4rem)",
          paddingRight: "clamp(1.25rem, 5vw, 4rem)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
            fontWeight: 400,
            color: "#1a2340",
            marginBottom: 12,
            ...twBalance,
          }}
        >
          まずは30分、無料でご相談いただけます。
        </h2>
        <p style={{ fontSize: 14, color: "#5a6a80", marginBottom: 36 }}>
          経営の課題を整理するところから、一緒に考えます。
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            maxWidth: 740,
            margin: "0 auto",
          }}
        >
          {points.map((point) => (
            <div
              key={point}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                borderRadius: 100,
                padding: "10px 18px",
                boxShadow: "0 1px 10px rgba(30,77,140,0.06)",
              }}
            >
              <Check size={14} color="#2d6ab4" strokeWidth={2.5} />
              <span style={{ fontSize: 13.5, color: "#1a2340" }}>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 10. FAQ ──────────────────────────────────────────────────────────────────

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "情シス担当者だけで相談してもよいですか？",
      a: "はい。経営層への提案前、関係部署との調整前の段階でもご相談いただけます。現在感じている課題を整理するところから支援します。",
    },
    {
      q: "まだ具体的なシステム導入が決まっていなくても相談できますか？",
      a: "はい。導入するツールやシステムが決まっていない段階でも問題ありません。まずは課題や目的を整理し、何から検討すべきかを確認します。",
    },
    {
      q: "社内稟議や提案に向けた相談もできますか？",
      a: "はい。経営層や関係部署に説明するために、整理すべき論点や伝え方を一緒に確認できます。",
    },
    {
      q: "ベンダー選定や既存システムの見直しも相談できますか？",
      a: "はい。相談内容に応じて、IT・業務改善・経営支援の視点から整理します。",
    },
    {
      q: "相談したら契約しなければいけませんか？",
      a: "いいえ。無料相談後に契約を迫ることはありません。貴社の状況をお聞きしたうえで、必要な場合のみご提案します。",
    },
  ];

  return (
    <section
      id="faq"
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#fff",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel label="FAQ" />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              marginTop: 12,
              fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400,
              color: "#1a2340",
            }}
          >
            よくあるご質問
          </h2>
        </div>

        <div>
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(30,77,140,0.08)",
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "20px 4px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "background 0.15s",
                  borderRadius: 4,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fafbfd")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "none")}
              >
                <span style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#4a90d9",
                      flexShrink: 0,
                      marginTop: 1,
                      minWidth: 16,
                    }}
                  >
                    Q
                  </span>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "#1a2340",
                      lineHeight: 1.65,
                    }}
                  >
                    {q}
                  </span>
                </span>
                <span style={{ flexShrink: 0, color: "#8a9bb0", marginTop: 2 }}>
                  {openIdx === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              {openIdx === i && (
                <div style={{ padding: "0 4px 20px 32px" }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#2d6ab4",
                        flexShrink: 0,
                        minWidth: 16,
                      }}
                    >
                      A
                    </span>
                    <p style={{ fontSize: 14.5, color: "#5a6a80", lineHeight: 1.85 }}>{a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 11. Form ─────────────────────────────────────────────────────────────────

function FormSection() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    position: "",
    email: "",
    phone: "",
    content: "",
    situation: "",
    preferred: "",
    howFound: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };


  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    border: "1.5px solid rgba(30,77,140,0.14)",
    borderRadius: 8,
    fontSize: 14.5,
    color: "#1a2340",
    background: "#fff",
    fontFamily: "'Noto Sans JP', sans-serif",
    transition: "border-color 0.18s, box-shadow 0.18s",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13.5,
    fontWeight: 600,
    color: "#1a2340",
    marginBottom: 6,
  };

  const RequiredBadge = () => (
    <span
      style={{
        marginLeft: 6,
        fontSize: 10.5,
        fontWeight: 600,
        color: "#c0323d",
        background: "#fff0f1",
        padding: "2px 6px",
        borderRadius: 3,
      }}
    >
      必須
    </span>
  );

  const focusStyle = {
    borderColor: "#2d6ab4",
    boxShadow: "0 0 0 3px rgba(45,106,180,0.1)",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(4rem, 9vw, 7rem) 0",
        background: "#f2f6fb",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        <div style={{ marginBottom: 40 }}>
          <SectionLabel label="CONTACT" />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              marginTop: 12,
              fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
              fontWeight: 400,
              color: "#1a2340",
              lineHeight: 1.45,
              ...twBalance,
            }}
          >
            IT・DX課題の30分無料相談を申し込む
          </h2>
          <p style={{ marginTop: 16, fontSize: "0.9375rem", color: "#5a6a80", lineHeight: 1.9 }}>
            システム導入、DX推進、業務改善、セキュリティ、ベンダー対応、社内提案など、情シス・IT担当者が抱える課題をお聞かせください。どの専門家に相談すべきか分からない場合も、ビズクリ事務局が内容に応じてご案内します。
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: "48px 52px",
            boxShadow: "0 4px 36px rgba(30,77,140,0.08)",
          }}
          className="px-6 lg:px-[52px]"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {/* Company + Name */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>
                  会社名
                  <RequiredBadge />
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(30,77,140,0.14)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>
                  お名前
                  <RequiredBadge />
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(30,77,140,0.14)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Dept + Position */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>部署名</label>
                <input
                  type="text"
                  name="dept"
                  value={(form as any).dept || ""}
                  onChange={handleChange}
                  placeholder="情報システム部"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(30,77,140,0.14)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>役職</label>
                <input
                  type="text"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="課長"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(30,77,140,0.14)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>
                  メールアドレス
                  <RequiredBadge />
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="taro@example.co.jp"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(30,77,140,0.14)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>電話番号</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="03-0000-0000"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(30,77,140,0.14)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <label style={labelStyle}>
                相談したい内容
                <RequiredBadge />
              </label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={5}
                placeholder="現在抱えているIT・DX課題や相談したい内容をご記入ください"
                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.75 }}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(30,77,140,0.14)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Situation */}
            <div>
              <label style={labelStyle}>現在のIT・DX課題の状況</label>
              <select
                name="situation"
                value={form.situation}
                onChange={handleChange}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(30,77,140,0.14)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <option value="">選択してください</option>
                <option value="notstarted">課題はあるが何から手をつければよいか分からない</option>
                <option value="considering">課題は整理できているが社内で進められていない</option>
                <option value="documented">経営層への提案・稟議を準備している</option>
                <option value="running">導入済みシステムの見直しや改善を検討中</option>
              </select>
            </div>

            {/* Theme checkboxes */}
            <div>
              <label style={labelStyle}>検討中のテーマ（複数選択可）</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px", marginTop: 8 }}>
                {["DX推進", "業務改善", "システム刷新", "クラウド活用", "セキュリティ", "ベンダー選定", "社内稟議・提案", "その他"].map((theme) => (
                  <label key={theme} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#1a2340", cursor: "pointer" }}>
                    <input type="checkbox" style={{ width: 16, height: 16, accentColor: "#2d6ab4", cursor: "pointer" }} />
                    {theme}
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred date */}
            <div>
              <label style={labelStyle}>希望日時</label>
              <input
                type="text"
                name="preferred"
                value={form.preferred}
                onChange={handleChange}
                placeholder="例：平日午前中、月曜以外など"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(30,77,140,0.14)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* How found */}
            <div>
              <label style={labelStyle}>ビズクリを知ったきっかけ</label>
              <select
                name="howFound"
                value={form.howFound}
                onChange={handleChange}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(30,77,140,0.14)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <option value="">選択してください</option>
                <option value="email">メール</option>
                <option value="search">検索エンジン</option>
                <option value="sns">SNS</option>
                <option value="referral">知人の紹介</option>
                <option value="seminar">セミナー・イベント</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* Privacy consent */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingTop: 4 }}>
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
                style={{
                  width: 18,
                  height: 18,
                  marginTop: 2,
                  accentColor: "#2d6ab4",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              />
              <label
                htmlFor="agreed"
                style={{ fontSize: 13.5, color: "#5a6a80", lineHeight: 1.75, cursor: "pointer" }}
              >
                <a href="#" style={{ color: "#2d6ab4", textDecoration: "underline" }}>
                  個人情報保護方針
                </a>
                に同意する
                <span
                  style={{
                    marginLeft: 6,
                    fontSize: 10.5,
                    fontWeight: 600,
                    color: "#c0323d",
                    background: "#fff0f1",
                    padding: "2px 6px",
                    borderRadius: 3,
                  }}
                >
                  必須
                </span>
              </label>
            </div>

            {/* Submit */}
            <div style={{ paddingTop: 8 }}>
              <button
                style={{
                  width: "100%",
                  background: "#1e4d8c",
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "18px 0",
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.18s, box-shadow 0.18s",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "#1a4278";
                  t.style.boxShadow = "0 6px 24px rgba(30,77,140,0.3)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "#1e4d8c";
                  t.style.boxShadow = "none";
                }}
              >
                無料相談を申し込む
              </button>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 12.5,
                  color: "#8a9bb0",
                  marginTop: 12,
                }}
              >
                送信後、事務局より2営業日以内にご連絡します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 12. Closing CTA ──────────────────────────────────────────────────────────

function ClosingCTA() {
  return (
    <section
      style={{
        padding: "104px 0",
        background: "linear-gradient(135deg, #172847 0%, #1e4d8c 60%, #2d6ab4 100%)",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div
        style={{ maxWidth: 1440, margin: "0 auto", textAlign: "center", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.5,
              ...twBalance,
              marginBottom: 28,
            }}
          >
            IT・DXの課題を、社内で前に進めるために。
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "rgba(255,255,255,0.68)",
              lineHeight: 1.95,
              marginBottom: 44,
              ...twBalance,
            }}
          >
            情シス・IT担当者が抱える課題は、会社の業務・組織・リスク・成長に関わる重要なテーマです。まずは現在の課題を整理し、社内で説明・提案しやすい形にするところから始めませんか。「戦略」を、企業の揺るぎない「資産」へ。ビズクリは、IT・DXの取り組みを経営に活きる戦略へと育てる第一歩を支援します。
          </p>
          <button
            style={{
              background: "#fff",
              color: "#1e4d8c",
              fontSize: 16,
              fontWeight: 700,
              padding: "17px 44px",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: "inherit",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              transition: "background 0.18s, box-shadow 0.18s",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.background = "#eef4fb";
              t.style.boxShadow = "0 6px 32px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.background = "#fff";
              t.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
            }}
          >
            30分無料相談を申し込む
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        background: "#0f1e3c",
        padding: "48px 0 32px",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div
        style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 24,
            paddingBottom: 28,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <div style={{ marginBottom: 12, opacity: 0.8 }}>
              <FooterLogo height={56} />
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
              IT・DXの課題を、経営に活きる戦略へ。
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center" }}>
            {["プライバシーポリシー", "利用規約", "お問い合わせ"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 12.5,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 11.5,
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
          }}
        >
          &copy; 2024 bizcre All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Mobile sticky CTA ────────────────────────────────────────────────────────

function MobileStickyBar() {
  return (
    <div
      className="lg:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "#fff",
        borderTop: "1px solid rgba(30,77,140,0.09)",
        padding: "12px 16px",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
        boxShadow: "0 -2px 20px rgba(30,77,140,0.09)",
      }}
    >
      <button
        style={{
          width: "100%",
          background: "#1e4d8c",
          color: "#fff",
          fontSize: "0.9375rem",
          fontWeight: 700,
          padding: "14px 0",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontFamily: "'Noto Sans JP', sans-serif",
        }}
      >
        無料相談を申し込む
      </button>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "'Noto Sans JP', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Header />
      <main>
        <HeroSection />
        <IssueSection />
        <ConsultationSection />
        <ConceptSection />
        <FeatureSection />
        <SupporterSection />
        <FlowSection />
        <AssuranceSection />
        <FAQSection />
        <FormSection />
        <ClosingCTA />
      </main>
      <Footer />
      <MobileStickyBar />
      {/* Mobile bottom padding so content isn't hidden behind sticky bar */}
      <div className="lg:hidden" style={{ height: 72 }} />
    </div>
  );
}
