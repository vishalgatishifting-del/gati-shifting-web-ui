import React, { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";
import "./DiwaliFireworks.scss";

const DiwaliFireworks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        rocketsPoint: 50,
        hue: { min: 0, max: 360 },
        delay: { min: 20, max: 40 },
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.2,
        particles: 100,
        trace: 3,
        explosion: 5,
        autoresize: true,
      });

      fireworks.start();

      return () => fireworks.stop();
    }
  }, []);

  return <div ref={containerRef} className="fireworks-container"></div>;
};

export default DiwaliFireworks;
