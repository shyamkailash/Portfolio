import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const radial = `radial-gradient(600px at ${x}px ${y}px, rgba(34, 211, 238, 0.05), transparent 80%)`;
      document.body.style.background = `
        ${radial},
        radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.12), transparent 40%),
        radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1), transparent 40%),
        radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08), transparent 40%),
        #020617
      `;
    };

    let timeoutId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => handleMouseMove(e), 20);
    };

    window.addEventListener("mousemove", throttledMouseMove);
    return () => window.removeEventListener("mousemove", throttledMouseMove);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;