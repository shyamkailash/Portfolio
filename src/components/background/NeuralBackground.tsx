import { useEffect, useRef, useState } from "react";
import AmbientOrb from "./AmbientOrb";

interface ConstellationNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
  shouldPulse: boolean;
}

interface PointerCoordinates {
  x: number;
  y: number;
  active: boolean;
}

const CONST_COLORS = [
  "rgba(34, 211, 238, 0.48)",  // Cyan
  "rgba(139, 92, 246, 0.42)", // Purple
  "rgba(99, 102, 241, 0.45)"   // Indigo
];

function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodesRef = useRef<ConstellationNode[]>([]);
  const pointerRef = useRef<PointerCoordinates>({ x: 0, y: 0, active: false });
  const animationFrameIdRef = useRef<number | null>(null);

  const [translateY, setTranslateY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [isTouchDevice] = useState(() =>
    typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );

  // Monitor prefers-reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Monitor scroll for Parallax Depth and Active Section Glow shifts
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Cap parallax scroll to 30px to prevent motion sickness
      if (!prefersReducedMotion) {
        setTranslateY(Math.min(scrolled * 0.05, 30));
      }

      // Detect active section closest to center of the viewport
      const sections = ["home", "about", "skills", "projects", "timeline", "certificates", "contact"];
      let closestSection = "home";
      let minDistance = Infinity;
      const centerOffset = window.innerHeight / 2;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - centerOffset);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  // Handle Section-based ambient glow hue shifts and position updates
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let hue = 260; // Indigo default
    let posY = 50;
    let posX = 50;

    // Shift glow coordinates dynamically matching section focus points
    switch (activeSection) {
      case "home":
        hue = 190; // Cyan
        posX = 70; // Hovering near profile image / portrait area
        posY = 20;
        break;
      case "about":
        hue = 270; // Purple
        posX = 30; // Shifted left
        posY = 35;
        break;
      case "skills":
        hue = 220; // Deep blue
        posX = 60;
        posY = 50;
        break;
      case "projects":
        hue = 250; // Royal indigo
        posX = 40;
        posY = 65;
        break;
      case "timeline":
        hue = 285; // Violet
        posX = 50; // Aligned with center vertical line
        posY = 75;
        break;
      case "certificates":
        hue = 195; // Teal/cyan
        posX = 30; // Aligned with heading area
        posY = 85;
        break;
      case "contact":
        hue = 265; // Lavender/purple
        posX = 75; // Focused on contact section edges
        posY = 95;
        break;
      default:
        break;
    }

    container.style.setProperty("--halo-hue", `${hue}deg`);
    container.style.setProperty("--halo-x-percent", `${posX}%`);
    container.style.setProperty("--halo-y-percent", `${posY}%`);
  }, [activeSection]);

  // Main canvas node network setup
  const getParticleCount = (width: number) => {
    if (width < 680) return 22; // Mobile (18-26 nodes)
    if (width < 980) return 36; // Tablet
    return 48; // Desktop (30-55 nodes)
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const initCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Create constellation nodes
      const count = getParticleCount(width);
      nodesRef.current = Array.from({ length: count }, () => {
        const shouldPulse = Math.random() > 0.6;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28, // Slow velocity
          vy: (Math.random() - 0.5) * 0.28,
          size: Math.random() * 2 + 1,
          color: CONST_COLORS[Math.floor(Math.random() * CONST_COLORS.length)],
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          shouldPulse
        };
      });
    };

    initCanvas();

    // Resize Observer for efficient resize handling
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        initCanvas();
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    // Mouse Tracking relative to viewport (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return;
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.active = true;

      const container = containerRef.current;
      if (container) {
        container.style.setProperty("--pointer-x", `${(e.clientX / width) * 100}%`);
        container.style.setProperty("--pointer-y", `${(e.clientY / height) * 100}%`);
      }
    };

    const handleMouseLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Drawing Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const pointer = pointerRef.current;
      const connectionDist = 135;
      const connectionDistSq = connectionDist * connectionDist;

      // Update and draw nodes
      nodes.forEach((n) => {
        if (!prefersReducedMotion) {
          // Slowly move coordinates
          n.x += n.vx;
          n.y += n.vy;

          // Parallax coordinate offset (translate3d handles this visually, vx/vy moves it continuously)
          // Gentle mouse repulsion (skip on touch devices)
          if (pointer.active && !isTouchDevice) {
            const dx = n.x - pointer.x;
            const dy = n.y - pointer.y;
            const distSq = dx * dx + dy * dy;
            const forceRadiusSq = 120 * 120;

            if (distSq < forceRadiusSq) {
              const dist = Math.sqrt(distSq) || 1;
              const force = (120 - dist) / 120;
              n.x += (dx / dist) * force * 1.2;
              n.y += (dy / dist) * force * 1.2;
            }
          }

          // Boundary bouncing
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          // Clamp bounds
          if (n.x < 0) n.x = 0;
          if (n.x > width) n.x = width;
          if (n.y < 0) n.y = 0;
          if (n.y > height) n.y = height;
        }

        // Draw node with pulsing effect
        ctx.beginPath();
        let drawSize = n.size;
        let opacity = 0.55;

        if (n.shouldPulse && !prefersReducedMotion) {
          n.pulsePhase += n.pulseSpeed;
          const pulseFactor = Math.sin(n.pulsePhase);
          drawSize = Math.max(1.0, n.size + pulseFactor * 0.7);
          opacity = 0.4 + (pulseFactor + 1) * 0.2;
        }

        ctx.arc(n.x, n.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = n.color.replace("0.48", `${opacity}`).replace("0.42", `${opacity}`).replace("0.45", `${opacity}`);
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq) || 1;
            let lineOpacity = (1 - dist / connectionDist) * 0.12;

            // Connective brightening near cursor
            if (pointer.active && !isTouchDevice) {
              const pDist1 = Math.hypot(n1.x - pointer.x, n1.y - pointer.y);
              const pDist2 = Math.hypot(n2.x - pointer.x, n2.y - pointer.y);
              const minDist = Math.min(pDist1, pDist2);

              if (minDist < 120) {
                const brightnessFactor = (1 - minDist / 120) * 1.5;
                lineOpacity = Math.min(lineOpacity * (1 + brightnessFactor), 0.18);
              }
            }

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Loop frame cycles unless motion is reduced
      if (!prefersReducedMotion) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
      }
    };

    // Tab visibility handling
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
          animationFrameIdRef.current = null;
        }
      } else {
        if (!prefersReducedMotion && !animationFrameIdRef.current) {
          animationFrameIdRef.current = requestAnimationFrame(animate);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial Trigger
    if (prefersReducedMotion) {
      animate(); // Static single frame
    } else {
      animationFrameIdRef.current = requestAnimationFrame(animate);
    }

    // Cleanup listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(resizeTimeout);

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [prefersReducedMotion, isTouchDevice]);

  return (
    <div
      ref={containerRef}
      className="neural-bg"
      aria-hidden="true"
    >
      {/* Layer 1: Deep Navy Gradient Base (controlled via global.css .neural-bg) */}

      {/* Layer 2: Aurora Floating blobs */}
      <AmbientOrb color="rgba(79, 70, 229, 0.14)" size="45vw" className="neural-bg__aurora--one" style={{ top: "-10%", left: "-10%" }} />
      <AmbientOrb color="rgba(139, 92, 246, 0.12)" size="50vw" className="neural-bg__aurora--two" style={{ bottom: "-10%", right: "-10%" }} />
      <AmbientOrb color="rgba(34, 211, 238, 0.08)" size="40vw" className="neural-bg__aurora--three" style={{ top: "30%", right: "15%" }} />
      <AmbientOrb color="rgba(59, 130, 246, 0.10)" size="45vw" className="neural-bg__aurora--four" style={{ bottom: "20%", left: "10%" }} />

      {/* Layer 3: Neural Constellation Canvas (with Parallax scroll translateY) */}
      <div
        className="neural-bg__canvas-wrapper"
        style={{ transform: `translate3d(0, -${translateY}px, 0)` }}
      >
        <canvas ref={canvasRef} className="neural-bg__canvas" />
      </div>

      {/* Layer 4: Perspective Grid */}
      <div className="neural-bg__grid" />

      {/* Layer 5: Mouse pointer glow overlay (active on desktop only) */}
      {!isTouchDevice && <div className="neural-bg__pointer-glow" />}

      {/* Layer 6: Scroll-reactive section halo */}
      <div className="neural-bg__section-halo" />

      {/* Extra: Scanning beam light */}
      {!prefersReducedMotion && <div className="neural-bg__scan" />}
    </div>
  );
}

export default NeuralBackground;
