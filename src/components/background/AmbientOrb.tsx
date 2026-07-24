import React from "react";

interface AmbientOrbProps {
  color: string;
  size: string;
  className?: string;
  style?: React.CSSProperties;
}

function AmbientOrb({ color, size, className = "", style = {} }: AmbientOrbProps) {
  const orbStyle: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${color} 0%, rgba(2, 6, 23, 0) 70%)`,
    filter: "blur(90px)",
    pointerEvents: "none",
    opacity: 0.85,
    ...style,
  };

  return <div className={`neural-bg__aurora ${className}`} style={orbStyle} />;
}

export default AmbientOrb;
