"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

interface CinematicHeroBackgroundProps {
  image: string;
  imageAlt: string;
  theme: "handoff" | "trade-rush" | "drone-o-mania" | "prompt-wars" | "case-exe";
  videoSrc?: string;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function CinematicHeroBackground({
  image,
  imageAlt,
  theme,
  videoSrc,
}: CinematicHeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );

  // Theme-specific canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    // Theme: Prompt Wars (Neural Nodes)
    const neuralNodes = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.5,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    // Theme: Trade Rush (Market chart waves & tickers)
    const marketPoints = Array.from({ length: 24 }, (_, i) => ({
      x: (i / 23) * width,
      baseY: height * 0.65,
      offset: Math.random() * Math.PI * 2,
    }));

    // Theme: Handoff (Code streams)
    const codeChars = "01010101<>{}[]/*===>&|~^0xFF";
    const codeColumns = Math.floor(width / 36);
    const codeDrops = Array.from({ length: codeColumns }, () => Math.random() * -100);

    // Theme: Drone-O-Mania (Speed vectors)
    const droneVectors = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 3 + 2,
      angle: -Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      if (theme === "handoff") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.font = "11px ui-monospace, SFMono-Regular, monospace";
        for (let i = 0; i < codeDrops.length; i++) {
          const char = codeChars[Math.floor(Math.random() * codeChars.length)];
          const x = i * 36;
          const y = codeDrops[i];
          ctx.fillText(char, x, y);
          if (y > height && Math.random() > 0.98) {
            codeDrops[i] = 0;
          } else {
            codeDrops[i] += 1.8;
          }
        }
      } else if (theme === "trade-rush") {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
        ctx.lineWidth = 1.5;
        marketPoints.forEach((pt, i) => {
          const y = pt.baseY + Math.sin(time + pt.offset) * 35 + Math.cos(time * 0.5 + i) * 20;
          if (i === 0) ctx.moveTo(pt.x, y);
          else ctx.lineTo(pt.x, y);
        });
        ctx.stroke();

        const barCount = 18;
        for (let b = 0; b < barCount; b++) {
          const bx = (b / barCount) * width;
          const barHeight = Math.sin(time * 2 + b) * 25 + 30;
          ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
          ctx.fillRect(bx, height - barHeight - 120, width / barCount - 12, barHeight);
        }
      } else if (theme === "drone-o-mania") {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;

        const cx = width * 0.5;
        const cy = height * 0.45;
        const roll = Math.sin(time * 0.5) * 0.08;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(roll);

        ctx.beginPath();
        ctx.arc(0, 0, 42, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-60, 0);
        ctx.lineTo(-20, 0);
        ctx.moveTo(20, 0);
        ctx.lineTo(60, 0);
        ctx.moveTo(0, -20);
        ctx.lineTo(0, -10);
        ctx.stroke();
        ctx.restore();

        droneVectors.forEach((v) => {
          v.x += Math.cos(v.angle) * v.speed;
          v.y += Math.sin(v.angle) * v.speed;
          if (v.x < 0 || v.y > height) {
            v.x = Math.random() * width + 100;
            v.y = Math.random() * height * 0.5 - 50;
          }
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${v.alpha})`;
          ctx.moveTo(v.x, v.y);
          ctx.lineTo(v.x + Math.cos(v.angle) * v.length, v.y + Math.sin(v.angle) * v.length);
          ctx.stroke();
        });
      } else if (theme === "prompt-wars") {
        neuralNodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${node.alpha})`;
          ctx.fill();
        });

        ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
        ctx.lineWidth = 0.8;
        for (let i = 0; i < neuralNodes.length; i++) {
          for (let j = i + 1; j < neuralNodes.length; j++) {
            const dx = neuralNodes[i].x - neuralNodes[j].x;
            const dy = neuralNodes[i].y - neuralNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              ctx.beginPath();
              ctx.moveTo(neuralNodes[i].x, neuralNodes[i].y);
              ctx.lineTo(neuralNodes[j].x, neuralNodes[j].y);
              ctx.stroke();
            }
          }
        }
      } else if (theme === "case-exe") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.025)";
        for (let y = 0; y < height; y += 4) {
          ctx.fillRect(0, y, width, 1);
        }

        const cx = width * 0.5;
        const cy = height * 0.48;
        const radius = Math.min(width, height) * 0.28;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.6, 0, Math.PI * 2);
        ctx.stroke();

        const sweepAngle = time * 1.2;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(sweepAngle) * radius, cy + Math.sin(sweepAngle) * radius);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* ─── Video or High-Resolution Visual Stage ─────────────────────────── */}
      {videoSrc && !videoFailed ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={image}
          onError={() => setVideoFailed(true)}
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform scale-105 transition-transform duration-1000 brightness-75"
          />
        </div>
      )}

      {/* ─── Dynamic Canvas Overlays ─────────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-screen opacity-70"
      />

      {/* ─── Apple-Style Multi-Layer Cinematic Shading ───────────────────── */}
      {/* Deep Radial Vignette for Center Text Clarity */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.75) 60%, rgba(8,8,8,0.96) 100%)",
        }}
      />

      {/* Seamless Bottom Gradient Fade into Page Content */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />

      {/* Subtle Top Gradient for Navigation Contrast */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent" />
    </div>
  );
}
