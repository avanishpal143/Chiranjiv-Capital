import React from 'react';

export default function Logo({ variant = 'dark', size = 'md' }) {
  const sizes = {
    sm: { height: 22 },
    md: { height: 28 },
    lg: { height: 38 },
  };

  const { height } = sizes[size] || sizes.md;
  const logoSrc = variant === 'light' ? '/logo_light.png' : '/logo_dark.png';

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: `${height}px` }}>
      <img
        src={logoSrc}
        alt="Chiranjiv Capital Services Limited"
        style={{
          height: '100%',
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

