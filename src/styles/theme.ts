// Theme configuration for AlexOS 95 portfolio

export const COLORS = {
  primary: {
    skyBlue: '#ADD9F4',
    goldenYellow: '#D7B377',
    forestGreen: '#214F4B',
    deepBlue: '#235789',
  },
  secondary: {
    white: '#FFFFFF',
    offWhite: '#F4F4F4',
    lightGray: '#E0E0E0',
    darkGray: '#333333',
    black: '#000000',
  },
  status: {
    success: '#4CAF50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196F3',
  },
};

export const SHADOWS = {
  retro: {
    outer: '0 2px 4px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
    pressed: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
    raised: '0 2px 0 rgba(0, 0, 0, 0.3)',
  },
  scanline: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 2px)',
};

export const BORDERS = {
  retro: '3px solid',
  thin: '1px solid',
  thick: '4px solid',
};

export const TRANSITIONS = {
  fast: '0.1s ease-in-out',
  normal: '0.2s ease-in-out',
  slow: '0.4s ease-in-out',
};

export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

export const FONTS = {
  heading: '"Press Start 2P", cursive',
  body: '"VT323", monospace',
  fallback: 'Courier New, monospace',
};

export const Z_INDEX = {
  backdrop: 900,
  menu: 1000,
  modal: 1100,
  tooltip: 1200,
};

export const ANIMATION = {
  wiggle: `
    @keyframes wiggle {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-2deg); }
      75% { transform: rotate(2deg); }
    }
  `,
  slideIn: `
    @keyframes slideIn {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `,
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `,
};
