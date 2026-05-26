'use client';

import React, { useEffect, useRef, useState } from 'react';

type CursorMode = 'hidden' | 'default';

export function CustomCursor() {
  const tailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cursorModeRef = useRef<CursorMode>('hidden');
  
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [cursorMode, setCursorMode] = useState<CursorMode>('hidden');

  useEffect(() => {
    // Only run on desktop, not on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrameId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const updateCursorMode = (nextMode: CursorMode) => {
      if (cursorModeRef.current === nextMode) {
        return;
      }

      cursorModeRef.current = nextMode;
      setCursorMode(nextMode);
    };

    // Smooth following variables for the cursor tails (5 squares)
    const tails = Array.from({ length: 5 }).map(() => ({ x: mouseX, y: mouseY }));
    
    // History array to keep the boxes separated like a train
    const history: { x: number; y: number }[] = [];
    for(let i = 0; i < 50; i++) {
      history.push({ x: mouseX, y: mouseY });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateCursorMode('default');
    };

    const onMouseLeave = () => {
      updateCursorMode('hidden');
    };

    const animate = () => {
      // Continuously push current mouse position to history so it collapses when stopped
      history.push({ x: mouseX, y: mouseY });
      if (history.length > 50) {
        history.shift();
      }

      // Spacing between train cars (in frames)
      const spacing = 6; 

      tails.forEach((tail, index) => {
        // Target a specific point in the history to maintain distance while moving
        const historyIndex = Math.max(0, history.length - 1 - (index * spacing) - 4);
        const targetPos = history[historyIndex] || { x: mouseX, y: mouseY };

        // Lerp towards the target history point for smoothness
        tail.x += (targetPos.x - tail.x) * 0.4;
        tail.y += (targetPos.y - tail.y) * 0.4;

        const el = tailRefs.current[index];
        if (el) {
          el.style.transform = `translate3d(${tail.x}px, ${tail.y}px, 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseDown = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      
      // Clean up ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600); // 600ms matches CSS animation duration
    };

    // Inject custom colored SVGs for the cursor
    const arrowSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23FFDD00" stroke="%2318181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>`;
    const handSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23FFDD00" stroke="%2318181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v4"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V3a2 2 0 0 0-4 0v9"/><path d="M18 13.5V16a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-6a2 2 0 0 1 4 0v4"/><path d="M18 11h2a2 2 0 0 1 2 2v3"/></svg>`;

    const customCursorStyle = document.createElement('style');
    customCursorStyle.innerHTML = `
      body, html {
        cursor: url('${arrowSvg}') 4 4, auto !important;
      }
      a, button, [role="button"], input[type="submit"], input[type="button"] {
        cursor: url('${handSvg}') 10 4, pointer !important;
      }
    `;
    document.head.appendChild(customCursorStyle);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseleave', onMouseLeave);
    
    // Start animation loop
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(customCursorStyle)) {
        document.head.removeChild(customCursorStyle);
      }
    };
  }, []);

  if (cursorMode === 'hidden' || typeof window === 'undefined') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 5 ROTATING SQUARES (TAIL) */}
      {[0, 1, 2, 3, 4].map((index) => {
        // Different sizes for the 5 boxes
        const sizes = [32, 48, 32, 24, 16];
        const size = sizes[index];
        const offset = size / 2;
        const opacity = 1 - index * 0.15;

        // Same spin animation for all, or slightly different
        const spinClasses = [
          'animate-[spin_4s_linear_infinite]', 
          'animate-[spin_3s_linear_infinite_reverse]', 
          'animate-[spin_2s_linear_infinite]',
          'animate-[spin_3s_linear_infinite]',
          'animate-[spin_4s_linear_infinite_reverse]'
        ];

        return (
          <div
            key={index}
            ref={(el) => {
              tailRefs.current[index] = el;
            }}
            className="absolute top-0 left-0 pointer-events-none ease-out"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `-${offset}px`,
              marginTop: `-${offset}px`,
              opacity: opacity,
              willChange: 'transform',
              zIndex: 10 - index // ensure index 0 is on top
            }}
          >
            <div
              className={`h-full w-full border-2 border-playdate-yellow ${spinClasses[index]}`}
            />
          </div>
        );
      })}

      {/* RIPPLES */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute top-0 left-0 rounded-full border-[3px] border-playdate-yellow animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '30px',
            height: '30px',
            marginLeft: '-15px',
            marginTop: '-15px',
          }}
        />
      ))}
    </div>
  );
}
