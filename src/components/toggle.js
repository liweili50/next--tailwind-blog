import { useEffect } from "react";

import { themeChange } from "theme-change";

export default function Toggle() {
  useEffect(() => {
    themeChange(false);
  },[]);
  return (
    <button
      class="theme-toggle  js-theme-toggle"
      title="Toggles light & dark"
      aria-label="light"
      aria-live="polite"
      data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"
    >
      <svg
        class="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask class="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="0" cy="10" r="6" fill="black" />
        </mask>

        <circle
          class="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g class="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
      <style jsx>{`
        
:where(html) {
  --ease: cubic-bezier(.25, 0, 0.3, 1);
  --ease-out: cubic-bezier(0, 0, 0, 1);
  --ease-elastic-1: cubic-bezier(0.5, 1.25, 0.75, 1.25);
  --ease-elastic-2: cubic-bezier(0.5, 1.5, 0.75, 1.25);
}

html {
  block-size: 100%;
  data-theme: light;
}
html[data-theme=dark] {
  data-theme: dark;
}
@supports not (data-theme: dark) {
  html[data-theme=dark] {
    background: #111;
  }
}

body {
  min-block-size: 100%;
  font-family: system-ui, sans-serif;
  display: grid;
  place-content: center;
}

.sun-and-moon > :is(.moon, .sun, .sun-beams) {
  transform-origin: center center;
}
.sun-and-moon > :is(.moon, .sun) {
  fill: var(--icon-fill);
}
.sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
  stroke-width: 0.125rem;
}
@media (hover: hover) and (pointer: fine) {
  .theme-toggle:is(:hover, :focus-visible) > .sun-and-moon > :is(.moon, .sun) {
    fill: var(--icon-fill-hover);
  }
  .theme-toggle:is(:hover, :focus-visible) .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill-hover);
  }
}
[data-theme=dark] .sun-and-moon > .sun {
  transform: scale(1.75);
}
[data-theme=dark] .sun-and-moon > .sun-beams {
  opacity: 0;
}
[data-theme=dark] .sun-and-moon > .moon > circle {
  transform: translateX(7px);
}
@supports (cx: 1) {
  [data-theme=dark] .sun-and-moon > .moon > circle {
    transform: translateX(0);
    cx: 7;
  }
}
@media (prefers-reduced-motion: no-preference) {
  .sun-and-moon > .sun {
    transition: transform 0.5s var(--ease-elastic-1);
  }
  .sun-and-moon > .sun-beams {
    transition: transform 0.5s var(--ease-elastic-2), opacity 0.5s var(--ease);
  }
  .sun-and-moon .moon > circle {
    transition: transform 0.25s var(--ease-out);
  }
  @supports (cx: 1) {
    .sun-and-moon .moon > circle {
      transition: cx 0.25s var(--ease-out);
    }
  }
  [data-theme=dark] .sun-and-moon > .sun {
    transform: scale(1.75);
    transition-timing-function: var(--ease);
    transition-duration: 0.25s;
  }
  [data-theme=dark] .sun-and-moon > .sun-beams {
    transform: rotateZ(-25deg);
    transition-duration: 0.15s;
  }
  [data-theme=dark] .sun-and-moon > .moon > circle {
    transition-delay: 0.25s;
    transition-duration: 0.5s;
  }
}

.theme-toggle {
  --size: 12rem;
  --icon-fill: hsl(74 1% 30%);
  --icon-fill-hover: hsl(74 5% 10%);
  background: none;
  border: none;
  padding: 0;
  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 0.25rem;
}
.theme-toggle > svg {
  inline-size: 100%;
  block-size: 100%;
  stroke-linecap: round;
}
[data-theme=dark] .theme-toggle {
  --icon-fill: hsl(74 5% 80%);
  --icon-fill-hover: hsl(74 5% 96%);
}
@media (hover: none) {
  .theme-toggle {
    --size: 48px;
  }
}

      `}</style>
    </button>
  );
}
