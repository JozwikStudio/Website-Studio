import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Philosophy from "./sections/Philosophy";
import Gallery from "./sections/Gallery";
import Campaigns from "./sections/Campaigns";
import StudioSessions from "./sections/StudioSessions";
import Editorial from "./sections/Editorial";
import Portraits from "./sections/Portraits";
import Contact from "./sections/Contact";

import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("main > section")
    ) as HTMLElement[];

    let index = 0;
    let isAnimating = false;

    const goTo = (i: number) => {
      const target = sections[i];
      if (!target || isAnimating) return;

      isAnimating = true;
      index = i;

      gsap.to(window, {
        scrollTo: target.offsetTop,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    // 🔥 Wheel (Desktop + Trackpad + Mobile scroll emulation)
    const onWheel = (e: WheelEvent) => {
      if (isAnimating) return;

      if (e.deltaY > 0) {
        goTo(Math.min(index + 1, sections.length - 1));
      } else {
        goTo(Math.max(index - 1, 0));
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    // 📱 Touch Support (iOS / Android)
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) < 60) return;

      if (diff > 0) {
        goTo(Math.min(index + 1, sections.length - 1));
      } else {
        goTo(Math.max(index - 1, 0));
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    // initial sync (optional)
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative bg-noir">
      <Navigation />

      <main className="relative">
        <section><Hero /></section>
        <section><Philosophy /></section>
        <section><Gallery /></section>
        <section><Campaigns /></section>
        <section><StudioSessions /></section>
        <section><Editorial /></section>
        <section><Portraits /></section>
        <section><Contact /></section>
      </main>
    </div>
  );
}

export default App;