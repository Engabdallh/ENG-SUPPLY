
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Package,
} from "lucide-react";

import MainLayout from "./layouts/MainLayout";
import "./App.css";

import heroImage from "./assets/eng-supply-hero.jpg";


function AnimatedText({ text, className = "" }) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  if (isArabic) {
    return (
      <motion.span
        className={className}
        style={{ display: "block" }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={className}
      style={{ display: "block" }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.035 },
        },
      }}
    >
      {Array.from(text).map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          style={{
            display: "inline-block",
            whiteSpace: character === " " ? "pre" : "normal",
          }}
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55 },
            },
          }}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.span>
  );
}


function App() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <MainLayout>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Package size={16} />
              {t("hero.badge")}
            </motion.span>

            <h1>
              <AnimatedText text={t("hero.title")} />
              <AnimatedText
                text={t("hero.highlight")}
                className="hero-highlight"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <button className="hero-primary-button">
                {t("hero.explore")}
                {isArabic ? (
                  <ArrowLeft size={18} />
                ) : (
                  <ArrowRight size={18} />
                )}
              </button>

              <button className="hero-secondary-button">
                {t("hero.contact")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default App;
