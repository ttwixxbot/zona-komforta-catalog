import { motion } from "framer-motion";
import { Header } from "./Header";
import { LuxuryButton } from "./Button";

const publicAssetBase = import.meta.env.BASE_URL;
const heroVideoSrc = `${publicAssetBase}video/hero-video.mp4`;
const heroPosterSrc = `${publicAssetBase}images/hero-poster.webp`;

export function Hero() {
  return (
    <section className="hero-scene" aria-labelledby="hero-title">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPosterSrc}
        aria-hidden="true"
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <Header variant="hero" minimal />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
      >
        Премиальная мебель для дома и офиса.
        <br />
        Эстетика, комфорт и современный интерьер в одном пространстве.
      </motion.p>
      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <LuxuryButton to="/catalog">Смотреть каталог</LuxuryButton>
      </motion.div>
    </section>
  );
}
