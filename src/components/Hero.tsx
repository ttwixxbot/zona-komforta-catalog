import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { LuxuryButton } from "./Button";

const publicAssetBase = import.meta.env.BASE_URL;
const heroVideoSrc = `${publicAssetBase}video/hero-video.mp4`;
const heroPosterSrc = `${publicAssetBase}images/hero-poster.webp`;
const heroFallbackRevealMs = 7600;

const getHeroRevealTime = (duration: number) => {
  if (!Number.isFinite(duration) || duration <= 0) {
    return heroFallbackRevealMs / 1000;
  }

  return Math.max(duration * 0.74, duration - 2.2);
};

export function Hero() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const revealTimeoutRef = useRef<number | null>(null);

  const clearRevealTimer = useCallback(() => {
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
      revealTimeoutRef.current = null;
    }
  }, []);

  const revealContent = useCallback(() => {
    clearRevealTimer();
    setIsContentVisible(true);
  }, [clearRevealTimer]);

  const scheduleReveal = useCallback(
    (video: HTMLVideoElement | null) => {
      if (!video || isContentVisible) {
        return;
      }

      clearRevealTimer();
      const duration = video.duration;
      const revealAt = getHeroRevealTime(duration);
      const delay = Number.isFinite(duration) && duration > 0
        ? Math.max((revealAt - video.currentTime) * 1000, 0)
        : heroFallbackRevealMs;

      revealTimeoutRef.current = window.setTimeout(revealContent, delay);
    },
    [clearRevealTimer, isContentVisible, revealContent],
  );

  const handleVideoTimeUpdate = useCallback(
    (video: HTMLVideoElement) => {
      if (isContentVisible) {
        return;
      }

      const duration = video.duration;
      if (Number.isFinite(duration) && video.currentTime >= getHeroRevealTime(duration)) {
        revealContent();
      }
    },
    [isContentVisible, revealContent],
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      revealContent();
      return undefined;
    }

    revealTimeoutRef.current = window.setTimeout(revealContent, heroFallbackRevealMs);
    return clearRevealTimer;
  }, [clearRevealTimer, revealContent]);

  const hiddenContent = { opacity: 0, y: 22, filter: "blur(10px)" };
  const visibleContent = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <section
      className={`hero-scene${isContentVisible ? " hero-scene--content-visible" : ""}`}
      aria-labelledby="hero-title"
    >
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPosterSrc}
        aria-hidden="true"
        onLoadedMetadata={(event) => scheduleReveal(event.currentTarget)}
        onPlay={(event) => scheduleReveal(event.currentTarget)}
        onTimeUpdate={(event) => handleVideoTimeUpdate(event.currentTarget)}
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <Header variant="hero" minimal />
      <motion.div
        className="hero-copy"
        initial={hiddenContent}
        animate={isContentVisible ? visibleContent : hiddenContent}
        transition={{ duration: isContentVisible ? 0.92 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 id="hero-title" aria-label="Furniture That BREATHES STYLE">
          <span>Furniture That</span>
          {" "}
          <span>BREATHES</span>
          {" "}
          <span>STYLE</span>
        </h1>
      </motion.div>
      <motion.p
        className="hero-description"
        initial={hiddenContent}
        animate={isContentVisible ? visibleContent : hiddenContent}
        transition={{ duration: isContentVisible ? 0.88 : 0.2, delay: isContentVisible ? 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        Премиальная мебель для дома и офиса.
        <br />
        Эстетика, комфорт и современный интерьер в одном пространстве.
      </motion.p>
      <motion.div
        className="hero-cta"
        initial={hiddenContent}
        animate={isContentVisible ? visibleContent : hiddenContent}
        style={{ pointerEvents: isContentVisible ? "auto" : "none" }}
        transition={{ duration: isContentVisible ? 0.76 : 0.2, delay: isContentVisible ? 0.26 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <LuxuryButton to="/catalog">Смотреть каталог</LuxuryButton>
      </motion.div>
    </section>
  );
}
