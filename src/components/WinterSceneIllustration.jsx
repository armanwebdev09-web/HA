import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WinterSceneIllustration = ({ sceneIndex = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  // Camera zoom/scale for scene 5 (zoom out)
  const isZoomedOut = sceneIndex === 5;
  const isHug = sceneIndex === 4;
  const isSmile = sceneIndex === 3;
  const isIceCream = sceneIndex === 2;
  const isPout = sceneIndex === 1;

  // Floating hearts for the hug scene
  const hugHearts = [
    { id: 1, x: 390, y: 260, delay: 0.1, icon: '🤍' },
    { id: 2, x: 420, y: 245, delay: 0.7, icon: '💖' },
    { id: 3, x: 375, y: 275, delay: 1.3, icon: '✨' },
    { id: 4, x: 435, y: 280, delay: 1.9, icon: '🤍' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '840px',
        margin: '0 auto',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(162, 210, 255, 0.12)',
        border: '1px solid rgba(162, 210, 255, 0.2)',
        background: '#070b19'
      }}
    >
      <motion.div
        animate={{
          scale: isZoomedOut ? 0.88 : 1,
          y: isZoomedOut ? 10 : 0
        }}
        transition={{
          duration: shouldReduceMotion ? 0.3 : 1.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 800 500"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        >
          <defs>
            {/* Midnight Sky Gradient */}
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#04060e" />
              <stop offset="45%" stopColor="#0a1224" />
              <stop offset="85%" stopColor="#121b33" />
              <stop offset="100%" stopColor="#1a2542" />
            </linearGradient>

            {/* Streetlight Radial Glow (Warm Amber) */}
            <radialGradient id="lampGlow" cx="50%" cy="20%" r="70%">
              <stop offset="0%" stopColor="#ffe699" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#ffc857" stopOpacity="0.45" />
              <stop offset="65%" stopColor="#ffa726" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffa726" stopOpacity="0" />
            </radialGradient>

            {/* Streetlight Light Cone on Snow */}
            <linearGradient id="lightCone" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#ffe494" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffe494" stopOpacity="0.02" />
            </linearGradient>

            {/* Secondary Lamp Light Cone */}
            <linearGradient id="lightConeSmall" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ffe699" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffe699" stopOpacity="0.01" />
            </linearGradient>

            {/* Snowy Ground Gradient */}
            <linearGradient id="snowGround" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dce8f5" />
              <stop offset="30%" stopColor="#c5d8ed" />
              <stop offset="100%" stopColor="#8ba5c9" />
            </linearGradient>

            {/* Snowbank Shading */}
            <linearGradient id="snowBank" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#edf4fc" />
              <stop offset="100%" stopColor="#b2c9e6" />
            </linearGradient>

            {/* Warm Hug Aura Glow */}
            <radialGradient id="hugAuraGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffe5ec" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#ffb3c6" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#d42b58" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#d42b58" stopOpacity="0" />
            </radialGradient>

            {/* Stall Awning Red & Cream */}
            <linearGradient id="awningRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b1532" />
              <stop offset="100%" stopColor="#ab1d42" />
            </linearGradient>
            <linearGradient id="awningCream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff8e7" />
              <stop offset="100%" stopColor="#faecd1" />
            </linearGradient>

            {/* Boy Coat Gradient */}
            <linearGradient id="boyCoat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252f4a" />
              <stop offset="100%" stopColor="#141a29" />
            </linearGradient>

            {/* Boy Scarf Gradient (Warm Burgundy) */}
            <linearGradient id="boyScarf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a32035" />
              <stop offset="100%" stopColor="#690f1f" />
            </linearGradient>

            {/* Girl Coat Gradient (Soft Cream Rose) */}
            <linearGradient id="girlCoat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#faecef" />
              <stop offset="60%" stopColor="#f2d5dc" />
              <stop offset="100%" stopColor="#e3b6c2" />
            </linearGradient>

            {/* Girl Scarf Gradient (Dusty Rose) */}
            <linearGradient id="girlScarf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5abb9" />
              <stop offset="100%" stopColor="#d87788" />
            </linearGradient>

            {/* Warm Window Glow */}
            <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffe699" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#ffb347" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ======================================================= */}
          {/* 1. SKY & DISTANT BACKGROUND                             */}
          {/* ======================================================= */}
          <rect width="800" height="500" fill="url(#skyGrad)" />

          {/* Distant Stars in the Crisp Winter Sky */}
          {[
            { cx: 70, cy: 45, r: 1.2, op: 0.6 },
            { cx: 160, cy: 30, r: 1.5, op: 0.8 },
            { cx: 250, cy: 55, r: 1.0, op: 0.5 },
            { cx: 340, cy: 25, r: 1.3, op: 0.7 },
            { cx: 480, cy: 40, r: 1.5, op: 0.8 },
            { cx: 620, cy: 30, r: 1.1, op: 0.6 },
            { cx: 720, cy: 60, r: 1.4, op: 0.75 },
            { cx: 560, cy: 70, r: 0.9, op: 0.4 },
            { cx: 200, cy: 80, r: 1.0, op: 0.5 },
          ].map((star, i) => (
            <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill="#ffffff" opacity={star.op} />
          ))}

          {/* Distant Town Silhouette with Glowing Windows */}
          <g opacity="0.35">
            {/* Distant Buildings */}
            <rect x="80" y="160" width="70" height="150" fill="#0b1122" rx="2" />
            <polygon points="75,160 115,130 155,160" fill="#080c1a" />
            <rect x="95" y="180" width="14" height="18" fill="#ffe082" opacity="0.7" rx="1" />
            <rect x="120" y="210" width="14" height="18" fill="#ffe082" opacity="0.5" rx="1" />

            <rect x="175" y="180" width="85" height="130" fill="#090f20" rx="2" />
            <polygon points="170,180 217,145 265,180" fill="#060a16" />
            <rect x="195" y="200" width="16" height="20" fill="#ffe082" opacity="0.65" rx="1" />
            <rect x="225" y="200" width="16" height="20" fill="#ffe082" opacity="0.4" rx="1" />

            {/* Distant building on right */}
            <rect x="650" y="170" width="90" height="140" fill="#0a1022" rx="2" />
            <polygon points="645,170 695,135 745,170" fill="#070b18" />
            <rect x="670" y="195" width="16" height="20" fill="#ffe082" opacity="0.6" rx="1" />
            <rect x="705" y="195" width="16" height="20" fill="#ffe082" opacity="0.5" rx="1" />
          </g>

          {/* Distant Snow-Dusted Pine Trees */}
          <g opacity="0.45">
            {/* Pine 1 */}
            <polygon points="40,290 65,220 90,290" fill="#0c162b" />
            <polygon points="48,260 65,225 82,260" fill="#dce8f5" opacity="0.4" />
            <polygon points="42,285 65,250 88,285" fill="#dce8f5" opacity="0.3" />

            {/* Pine 2 */}
            <polygon points="270,300 295,230 320,300" fill="#0d182e" />
            <polygon points="278,270 295,235 312,270" fill="#dce8f5" opacity="0.4" />

            {/* Pine 3 */}
            <polygon points="600,295 625,235 650,295" fill="#0c162b" />
            <polygon points="608,265 625,240 642,265" fill="#dce8f5" opacity="0.4" />
          </g>

          {/* ======================================================= */}
          {/* 2. DISTANT BACKGROUND COUPLES                           */}
          {/* ======================================================= */}
          {/* Distant Couple 1 (Strolling on far left under distant snow) */}
          <g opacity="0.4">
            {/* Person A */}
            <circle cx="210" cy="275" r="5" fill="#1b253d" />
            <path d="M 205 280 L 215 280 L 217 305 L 203 305 Z" fill="#141c2e" />
            {/* Person B */}
            <circle cx="221" cy="276" r="4.5" fill="#25304a" />
            <path d="M 217 281 L 225 281 L 227 304 L 215 304 Z" fill="#1c263c" />
            {/* Holding hands line */}
            <path d="M 212 288 Q 216 292 219 288" stroke="#141c2e" strokeWidth="2" fill="none" />
          </g>

          {/* Distant Couple 2 (Strolling on far right) */}
          <g opacity="0.35">
            <circle cx="560" cy="272" r="4.5" fill="#1e2942" />
            <path d="M 556 277 L 564 277 L 566 300 L 554 300 Z" fill="#172033" />
            <circle cx="570" cy="274" r="4" fill="#293652" />
            <path d="M 567 278 L 573 278 L 575 299 L 565 299 Z" fill="#1e283d" />
            <path d="M 562 284 Q 565 288 568 284" stroke="#172033" strokeWidth="1.8" fill="none" />
          </g>

          {/* ======================================================= */}
          {/* 3. SNOWY STREET & SIDEWALK GROUND                       */}
          {/* ======================================================= */}
          {/* Distant snow path */}
          <path
            d="M 0 310 Q 250 285 500 295 T 800 290 L 800 500 L 0 500 Z"
            fill="url(#snowGround)"
          />

          {/* Snowy curbed sidewalk / foreground bank */}
          <path
            d="M 0 340 C 200 330 400 345 800 330 L 800 500 L 0 500 Z"
            fill="url(#snowBank)"
          />

          {/* Fresh soft snow drifts and curves */}
          <ellipse cx="400" cy="380" rx="360" ry="40" fill="#edf4fc" opacity="0.6" />
          <ellipse cx="200" cy="420" rx="220" ry="35" fill="#dce8f5" opacity="0.7" />
          <ellipse cx="620" cy="410" rx="240" ry="35" fill="#dce8f5" opacity="0.7" />

          {/* Soft Footprints in the snow */}
          <g opacity="0.35">
            <ellipse cx="320" cy="375" rx="5" ry="2.5" fill="#8ba5c9" />
            <ellipse cx="335" cy="372" rx="4" ry="2" fill="#8ba5c9" />
            <ellipse cx="350" cy="376" rx="5" ry="2.5" fill="#8ba5c9" />
            <ellipse cx="365" cy="373" rx="4" ry="2" fill="#8ba5c9" />
          </g>

          {/* ======================================================= */}
          {/* 4. COZY ICE-CREAM STALL (Mid-ground right)               */}
          {/* ======================================================= */}
          <g id="ice-cream-stall">
            {/* Stall Glow when active/noticed in scene 2 onwards */}
            <motion.circle
              cx="670"
              cy="310"
              r="110"
              fill="url(#lampGlow)"
              animate={{
                opacity: isIceCream ? 0.95 : 0.45,
                scale: isIceCream ? [1, 1.08, 1] : 1
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Stall Wooden Cart Body */}
            <rect x="615" y="310" width="110" height="70" fill="#3a2318" rx="4" />
            <rect x="620" y="315" width="100" height="60" fill="#523223" rx="2" />

            {/* Wooden Planks */}
            <line x1="620" y1="335" x2="720" y2="335" stroke="#3a2318" strokeWidth="2" />
            <line x1="620" y1="355" x2="720" y2="355" stroke="#3a2318" strokeWidth="2" />

            {/* Stall Countertop (Snow dusted) */}
            <rect x="610" y="306" width="120" height="8" fill="#dce8f5" rx="3" />

            {/* Striped Awning (Burgundy & Cream) */}
            <g>
              <polygon points="605,260 625,275 618,278 600,265" fill="url(#awningRed)" />
              <polygon points="618,260 638,275 631,278 612,265" fill="url(#awningCream)" />
              <polygon points="632,260 652,275 645,278 626,265" fill="url(#awningRed)" />
              <polygon points="646,260 666,275 659,278 640,265" fill="url(#awningCream)" />
              <polygon points="660,260 680,275 673,278 654,265" fill="url(#awningRed)" />
              <polygon points="674,260 694,275 687,278 668,265" fill="url(#awningCream)" />
              <polygon points="688,260 708,275 701,278 682,265" fill="url(#awningRed)" />
              <polygon points="702,260 722,275 715,278 696,265" fill="url(#awningCream)" />
              <polygon points="716,260 735,275 728,278 710,265" fill="url(#awningRed)" />

              {/* Snow on awning top */}
              <path
                d="M 605 260 Q 670 252 735 260 L 735 264 Q 670 256 605 264 Z"
                fill="#ffffff"
                opacity="0.9"
              />
            </g>

            {/* Stall Sign: "Ice Cream" */}
            <rect x="635" y="278" width="70" height="20" fill="#1b120c" rx="4" stroke="#d4af37" strokeWidth="1" />
            <text
              x="670"
              y="292"
              textAnchor="middle"
              fill="#ffe8a3"
              fontSize="9"
              fontWeight="600"
              fontFamily="sans-serif"
              letterSpacing="0.05em"
            >
              ICE CREAM 🍦
            </text>

            {/* Cozy Hanging Lantern on Stall */}
            <line x1="625" y1="285" x2="625" y2="295" stroke="#1b120c" strokeWidth="1.5" />
            <circle cx="625" cy="298" r="4" fill="#ffd166" />
            <circle cx="625" cy="298" r="12" fill="url(#windowGlow)" />

            {/* Cart Wheels */}
            <circle cx="638" cy="385" r="14" fill="#24160f" stroke="#8b654c" strokeWidth="3" />
            <circle cx="702" cy="385" r="14" fill="#24160f" stroke="#8b654c" strokeWidth="3" />
            <circle cx="638" cy="385" r="3" fill="#8b654c" />
            <circle cx="702" cy="385" r="3" fill="#8b654c" />
          </g>

          {/* ======================================================= */}
          {/* 5. WARM STREETLIGHTS (Main Foreground Lampposts)        */}
          {/* ======================================================= */}
          {/* Left Background Lamppost */}
          <g id="left-lamp" opacity="0.85">
            {/* Light Cone */}
            <polygon points="120,230 40,390 200,390" fill="url(#lightConeSmall)" />
            {/* Lamp Base & Post */}
            <rect x="117" y="225" width="6" height="150" fill="#182033" rx="2" />
            <rect x="113" y="370" width="14" height="8" fill="#121828" rx="2" />
            {/* Lamp Lantern */}
            <polygon points="112,225 128,225 125,205 115,205" fill="#121828" />
            {/* Glowing Bulb */}
            <circle cx="120" cy="215" r="18" fill="url(#lampGlow)" />
            <circle cx="120" cy="215" r="4" fill="#fff5cc" />
            {/* Snow on Lamp Cap */}
            <ellipse cx="120" cy="204" rx="8" ry="2.5" fill="#ffffff" />
          </g>

          {/* Center-Right Main Lamppost (Illuminating the couple) */}
          <g id="main-lamp">
            {/* Warm Golden Light Cone spreading downward over couple */}
            <polygon points="430,170 240,430 620,430" fill="url(#lightCone)" />
            <ellipse cx="430" cy="425" rx="180" ry="40" fill="url(#lampGlow)" opacity="0.3" />

            {/* Lamppost Pillar */}
            <rect x="426" y="165" width="8" height="230" fill="#111726" rx="2" />
            <rect x="420" y="390" width="20" height="12" fill="#0b0f19" rx="3" />
            <ellipse cx="430" cy="392" rx="12" ry="4" fill="#dce8f5" opacity="0.5" />

            {/* Ornate Arm Details */}
            <path d="M 426 185 Q 410 190 415 175 Q 426 170 426 185" fill="#111726" />
            <path d="M 434 185 Q 450 190 445 175 Q 434 170 434 185" fill="#111726" />

            {/* Main Lamp Lantern Housing */}
            <polygon points="418,165 442,165 438,135 422,135" fill="#0d1320" stroke="#25324d" strokeWidth="1" />
            <polygon points="421,163 439,163 436,138 424,138" fill="#ffefa6" opacity="0.9" />

            {/* Golden Bulb & Volumetric Radial Glow */}
            <circle cx="430" cy="150" r="85" fill="url(#lampGlow)" opacity="0.9" />
            <circle cx="430" cy="150" r="7" fill="#ffffff" />

            {/* Snow on Lamp Cap */}
            <path d="M 419 135 Q 430 128 441 135 L 443 138 Q 430 132 417 138 Z" fill="#ffffff" />
          </g>

          {/* ======================================================= */}
          {/* 6. CHARACTERS: THE COUPLE                               */}
          {/* ======================================================= */}
          {/* If Hugging (Scene 4), show the unified warm hug group */}
          {isHug ? (
            <g id="couple-hug-group">
              {/* Hug Aura Glow (Romantic Bloom) */}
              <motion.circle
                cx="405"
                cy="330"
                r="110"
                fill="url(#hugAuraGlow)"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: [0.65, 0.9, 0.7],
                  scale: [0.95, 1.12, 0.98]
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Heartbeat & Breathing scale wrapper */}
              <motion.g
                animate={{
                  scale: [1, 1.025, 1, 1.018, 1],
                  y: [0, -1.8, 0, -1, 0]
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '405px', originY: '350px' }}
              >
                {/* Shadow under couple */}
                <ellipse cx="405" cy="382" rx="38" ry="8" fill="rgba(10, 15, 30, 0.45)" />

                {/* Boy Body (Left side of hug) */}
                <path
                  d="M 378 305
                     C 368 312, 362 335, 366 365
                     C 368 376, 395 378, 404 374
                     C 406 350, 404 320, 396 305 Z"
                  fill="url(#boyCoat)"
                />
                {/* Boy Head nuzzling */}
                <circle cx="388" cy="290" r="14" fill="#fcf5ea" />
                {/* Boy Hair */}
                <path d="M 374 290 C 374 274, 402 274, 402 290 C 395 284, 382 284, 374 290 Z" fill="#2d1c14" />
                {/* Boy Peaceful Closed Eye */}
                <path d="M 386 292 Q 390 295 394 292" stroke="#5c4033" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                {/* Boy Warm Scarf */}
                <path d="M 378 302 Q 394 308 404 302 L 405 312 Q 394 318 376 312 Z" fill="url(#boyScarf)" />

                {/* Girl Body (Right side of hug, stepped close) */}
                <path
                  d="M 406 308
                     C 416 315, 424 336, 420 366
                     C 418 376, 395 378, 388 374
                     C 388 350, 398 322, 406 308 Z"
                  fill="url(#girlCoat)"
                />
                {/* Girl Head leaning on boy's shoulder */}
                <circle cx="414" cy="294" r="13" fill="#fdf6f0" />
                {/* Girl Hair & Beanie */}
                <path d="M 404 290 C 404 276, 426 276, 426 290 C 426 305, 422 312, 420 322" stroke="#4a2e1b" strokeWidth="3" fill="none" />
                <path d="M 404 286 Q 416 276, 426 286 Z" fill="#d87788" />
                <circle cx="415" cy="279" r="3.5" fill="#ffffff" />
                {/* Girl Peaceful Closed Eye */}
                <path d="M 408 296 Q 412 299 416 296" stroke="#6b442a" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                {/* Girl Rosy Cheek */}
                <ellipse cx="414" cy="301" rx="4" ry="2.5" fill="#f497a7" opacity="0.65" />
                {/* Girl Warm Scarf */}
                <path d="M 404 306 Q 416 312 422 306 L 424 316 Q 416 322 402 316 Z" fill="url(#girlScarf)" />

                {/* Boy's Arm wrapping around Girl's back */}
                <path
                  d="M 374 322
                     C 378 335, 400 345, 422 340
                     C 428 338, 428 330, 420 330
                     C 402 332, 386 324, 374 322 Z"
                  fill="url(#boyCoat)"
                />
                {/* Boy's glove on girl's back */}
                <ellipse cx="423" cy="336" rx="5" ry="4" fill="#141a29" />

                {/* Girl's Arm wrapping around Boy's neck/waist */}
                <path
                  d="M 420 324
                     C 412 334, 394 340, 374 338
                     C 368 337, 368 329, 376 329
                     C 392 330, 408 326, 420 324 Z"
                  fill="url(#girlCoat)"
                />
                {/* Girl's mitten on boy's back */}
                <ellipse cx="372" cy="334" rx="4.5" ry="3.5" fill="#f5abb9" />
              </motion.g>

              {/* Floating Hearts & Sparkles around the hug */}
              {!shouldReduceMotion && hugHearts.map((item) => (
                <motion.text
                  key={item.id}
                  x={item.x}
                  y={item.y}
                  fontSize="16"
                  initial={{ opacity: 0, y: item.y }}
                  animate={{
                    opacity: [0, 0.95, 0],
                    y: [item.y, item.y - 38],
                    x: [item.x, item.x + (item.id % 2 === 0 ? 8 : -8)]
                  }}
                  transition={{
                    duration: 3.0,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: 'easeOut'
                  }}
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(212, 43, 88, 0.4))',
                    userSelect: 'none'
                  }}
                >
                  {item.icon}
                </motion.text>
              ))}
            </g>
          ) : (
            /* Non-Hug Scenes (Scenes 0, 1, 2, 3, 5): Independent Boy & Girl figures */
            <g id="couple-standing-group">
              {/* BOY FIGURE */}
              <motion.g
                id="boy-figure"
                animate={{
                  // In scene 2 (ice cream errand), boy walks toward the stall (x: +90) and comes back
                  x: isIceCream ? [0, 90, 80, 0] : 0,
                  y: isIceCream ? [0, -4, 0, -4, 0] : 0,
                  rotate: isPout ? 4 : 0
                }}
                transition={{
                  duration: isIceCream ? 3.8 : 0.8,
                  ease: 'easeInOut'
                }}
                style={{ originX: '365px', originY: '370px' }}
              >
                {/* Shadow */}
                <ellipse cx="365" cy="380" rx="22" ry="6" fill="rgba(10, 15, 30, 0.35)" />

                {/* Body / Coat */}
                <path
                  d="M 350 305
                     L 380 305
                     L 384 365
                     L 346 365 Z"
                  fill="url(#boyCoat)"
                />
                {/* Legs */}
                <line x1="358" y1="365" x2="358" y2="380" stroke="#121828" strokeWidth="6" strokeLinecap="round" />
                <line x1="372" y1="365" x2="372" y2="380" stroke="#121828" strokeWidth="6" strokeLinecap="round" />

                {/* Head */}
                <circle cx="365" cy="288" r="14" fill="#fcf5ea" />
                {/* Boy Hair */}
                <path d="M 351 288 C 351 272, 379 272, 379 288 C 374 282, 360 282, 351 288 Z" fill="#2d1c14" />

                {/* Eyes & Expression */}
                {isPout ? (
                  // Awkward / apologetic sweet smile
                  <>
                    <circle cx="361" cy="288" r="1.6" fill="#42291d" />
                    <circle cx="371" cy="288" r="1.6" fill="#42291d" />
                    {/* Nervous / apologetic little smile */}
                    <path d="M 363 294 Q 367 297 371 294" stroke="#5c4033" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    {/* Sweat drop / laugh mark */}
                    <text x="376" y="284" fontSize="9">😅</text>
                  </>
                ) : (
                  // Happy, calm eyes
                  <>
                    <path d="M 359 288 Q 362 285 365 288" stroke="#42291d" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    <path d="M 367 288 Q 370 285 373 288" stroke="#42291d" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    <path d="M 362 293 Q 366 297 370 293" stroke="#5c4033" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                  </>
                )}

                {/* Warm Burgundy Scarf */}
                <path d="M 352 300 Q 365 306 378 300 L 379 312 Q 365 318 351 312 Z" fill="url(#boyScarf)" />
                <rect x="368" y="310" width="8" height="18" fill="url(#boyScarf)" rx="2" />

                {/* Left Arm (Gesturing or holding ice cream) */}
                {isIceCream || isSmile ? (
                  // Arm extending ice cream forward
                  <g>
                    <path d="M 378 316 L 396 322" stroke="url(#boyCoat)" strokeWidth="6" strokeLinecap="round" />
                    {/* Ice cream cone held in hand */}
                    <polygon points="398,328 393,318 403,318" fill="#d4af37" />
                    <circle cx="398" cy="315" r="5.5" fill="#ffb3c6" />
                    <circle cx="398" cy="311" r="2.5" fill="#fff" />
                  </g>
                ) : isPout ? (
                  // Hands scratching back of head / apologizing gesture
                  <path d="M 378 316 Q 388 305 382 292" stroke="url(#boyCoat)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
                ) : (
                  // Relaxed natural arm
                  <path d="M 378 314 L 382 342" stroke="url(#boyCoat)" strokeWidth="5.5" strokeLinecap="round" />
                )}
              </motion.g>

              {/* GIRL FIGURE */}
              <motion.g
                id="girl-figure"
                animate={{
                  // In pout scene, girl turns away slightly (rotate: -4)
                  rotate: isPout ? -5 : (isSmile ? 2 : 0),
                  x: isSmile ? -4 : 0
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ originX: '425px', originY: '370px' }}
              >
                {/* Shadow */}
                <ellipse cx="425" cy="380" rx="20" ry="5.5" fill="rgba(10, 15, 30, 0.35)" />

                {/* Coat */}
                <path
                  d="M 412 308
                     L 438 308
                     L 442 366
                     L 408 366 Z"
                  fill="url(#girlCoat)"
                />
                {/* Legs */}
                <line x1="419" y1="366" x2="419" y2="380" stroke="#251a24" strokeWidth="5.5" strokeLinecap="round" />
                <line x1="431" y1="366" x2="431" y2="380" stroke="#251a24" strokeWidth="5.5" strokeLinecap="round" />

                {/* Head */}
                <circle cx="425" cy="292" r="13.5" fill="#fdf6f0" />
                {/* Hair & Beanie */}
                <path d="M 414 286 C 414 270, 436 270, 436 286 C 436 304, 432 314, 430 324" stroke="#4a2e1b" strokeWidth="3" fill="none" />
                <path d="M 414 284 Q 425 274, 436 284 Z" fill="#d87788" />
                <circle cx="425" cy="277" r="3.5" fill="#ffffff" />

                {/* Girl Face Expression based on Scene */}
                {isPout ? (
                  // Cute pretend-angry face: puffed cheeks, closed huff eyes `> <` or stern little brow
                  <g>
                    {/* Cute puffed cheek blush */}
                    <ellipse cx="418" cy="298" rx="5" ry="3.5" fill="#ff758f" opacity="0.8" />
                    <ellipse cx="432" cy="298" rx="4.5" ry="3" fill="#ff758f" opacity="0.6" />
                    {/* Cute stern eyebrows */}
                    <path d="M 418 288 L 423 290" stroke="#5a3520" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 430 290 L 434 288" stroke="#5a3520" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Pout eyes `> <` */}
                    <path d="M 418 292 L 422 294 L 418 296" stroke="#42291d" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    {/* Tiny cute pout mouth */}
                    <circle cx="425" cy="299" r="1.5" fill="#d84a6b" />
                  </g>
                ) : isSmile || isZoomedOut ? (
                  // Radiant, blissful happy smile
                  <g>
                    {/* Soft Rosy Cheeks */}
                    <ellipse cx="419" cy="298" rx="5" ry="3.2" fill="#f497a7" opacity="0.75" />
                    <ellipse cx="431" cy="298" rx="5" ry="3.2" fill="#f497a7" opacity="0.75" />
                    {/* Happy curved eyes `⌒ ⌒` */}
                    <path d="M 417 292 Q 421 287 425 292" stroke="#5a3520" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    <path d="M 427 292 Q 431 287 435 292" stroke="#5a3520" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    {/* Sweet joyful smile */}
                    <path d="M 421 297 Q 426 303 431 297" stroke="#94364c" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  </g>
                ) : (
                  // Neutral / pleasant walking smile
                  <g>
                    <ellipse cx="420" cy="298" rx="4" ry="2.5" fill="#f497a7" opacity="0.55" />
                    <ellipse cx="430" cy="298" rx="4" ry="2.5" fill="#f497a7" opacity="0.55" />
                    <circle cx="421" cy="292" r="1.5" fill="#42291d" />
                    <circle cx="429" cy="292" r="1.5" fill="#42291d" />
                    <path d="M 422 297 Q 425 299 428 297" stroke="#94364c" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                  </g>
                )}

                {/* Girl Dusty Rose Scarf */}
                <path d="M 413 304 Q 425 310 437 304 L 438 316 Q 425 322 412 316 Z" fill="url(#girlScarf)" />
                <rect x="416" y="314" width="7" height="16" fill="url(#girlScarf)" rx="2" />

                {/* Girl Arms */}
                {isPout ? (
                  // Crossed arms across chest (adorable pretend-angry posture)
                  <g>
                    <path d="M 412 318 Q 426 330 438 318" stroke="url(#girlCoat)" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <ellipse cx="414" cy="324" rx="4" ry="3" fill="#f5abb9" />
                    <ellipse cx="436" cy="324" rx="4" ry="3" fill="#f5abb9" />
                  </g>
                ) : isSmile ? (
                  // Holding the ice cream delightedly
                  <g>
                    <path d="M 412 320 L 406 332" stroke="url(#girlCoat)" strokeWidth="5.5" strokeLinecap="round" />
                    <ellipse cx="406" cy="333" rx="4" ry="3.5" fill="#f5abb9" />
                    {/* Ice cream cone in hand */}
                    <polygon points="405,330 401,320 409,320" fill="#d4af37" />
                    <circle cx="405" cy="317" r="4.5" fill="#ffb3c6" />
                  </g>
                ) : (
                  // Natural arm by side
                  <path d="M 412 318 L 410 344" stroke="url(#girlCoat)" strokeWidth="5.5" strokeLinecap="round" />
                )}
              </motion.g>
            </g>
          )}

          {/* ======================================================= */}
          {/* 7. SOFT FALLING SNOW PARTICLES IN FOREGROUND            */}
          {/* ======================================================= */}
          <g id="foreground-snow">
            {[
              { cx: 80, cy: 90, r: 2.2, op: 0.75 },
              { cx: 150, cy: 190, r: 3.0, op: 0.85 },
              { cx: 230, cy: 120, r: 1.8, op: 0.6 },
              { cx: 310, cy: 220, r: 2.5, op: 0.8 },
              { cx: 380, cy: 140, r: 3.2, op: 0.9 },
              { cx: 450, cy: 260, r: 2.0, op: 0.7 },
              { cx: 520, cy: 180, r: 2.8, op: 0.8 },
              { cx: 610, cy: 230, r: 3.0, op: 0.85 },
              { cx: 690, cy: 150, r: 2.2, op: 0.75 },
              { cx: 740, cy: 250, r: 2.6, op: 0.8 },
              { cx: 390, cy: 320, r: 1.9, op: 0.8 },
              { cx: 430, cy: 350, r: 2.1, op: 0.85 },
            ].map((s, idx) => (
              <motion.circle
                key={idx}
                cx={s.cx}
                cy={s.cy}
                r={s.r}
                fill="#ffffff"
                opacity={s.op}
                animate={shouldReduceMotion ? {} : {
                  y: [0, 45, 90],
                  x: [0, idx % 2 === 0 ? 8 : -8, 0],
                  opacity: [0.2, s.op, 0.2]
                }}
                transition={{
                  duration: 4.5 + (idx % 3),
                  repeat: Infinity,
                  ease: 'linear',
                  delay: (idx * 0.4) % 3
                }}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default WinterSceneIllustration;
