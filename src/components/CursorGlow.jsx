import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        left: coords.x,
        top: coords.y,
        transform: "translate(-50%, -50%)",
      }}
      className="pointer-events-none fixed z-40 h-[500px] w-[500px] rounded-full bg-[#ff69f0]/10 blur-[120px] transition-transform duration-300 ease-out mix-blend-screen"
    />
  );
}
