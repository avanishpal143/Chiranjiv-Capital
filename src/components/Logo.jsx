import React from 'react';

export default function Logo({ variant = 'dark', size = 'md' }) {
  const sizes = {
    sm: { height: 36, fontSize: 13, tagSize: 9 },
    md: { height: 44, fontSize: 15, tagSize: 10 },
    lg: { height: 56, fontSize: 18, tagSize: 11 },
  };

  const { height, fontSize, tagSize } = sizes[size] || sizes.md;
  const textColor = variant === 'light' ? '#FFFFFF' : '#112E63';
  const tagColor = variant === 'light' ? 'rgba(255,255,255,0.65)' : '#6B7280';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height }}>
      {/* Logo Mark */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background */}
        <rect width="48" height="48" rx="6" fill="#112E63" />

        {/* Upward trend bars */}
        <rect x="8" y="30" width="6" height="10" rx="1.5" fill="#08B39C" opacity="0.9" />
        <rect x="17" y="22" width="6" height="18" rx="1.5" fill="#08B39C" />
        <rect x="26" y="16" width="6" height="24" rx="1.5" fill="#CFA84F" />

        {/* Ascending line */}
        <path
          d="M9 30 L22 20 L32 14"
          stroke="#CFA84F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* C letterform */}
        <path
          d="M36 20 C34 18 31 17 29 18"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: fontSize,
            fontWeight: 800,
            color: textColor,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Chiranjiv Capital
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: tagSize,
            fontWeight: 500,
            color: tagColor,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1.4,
            marginTop: 1,
          }}
        >
          Services Limited
        </div>
      </div>
    </div>
  );
}
