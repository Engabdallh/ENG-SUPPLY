
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import "../styles/Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
  };

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.categories"), href: "/categories" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <span>ENG</span> SUPPLY
        </a>

        <div className="navbar-actions">
          <button
            className="language-button"
            onClick={toggleLanguage}
          >
            {i18n.language === "ar" ? "EN" : "AR"}
          </button>

          <button className="login-button">
            {t("nav.login")}
          </button>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-dropdown"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
            <span>{i18n.language === "ar" ? "القائمة" : "Menu"}</span>
            <ChevronDown
              size={15}
              className="menu-chevron"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="navbar-dropdown"
            className="navbar-dropdown"
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="dropdown-header">
              <span>
                {i18n.language === "ar"
                  ? "استكشف ENG SUPPLY"
                  : "Explore ENG SUPPLY"}
              </span>
              <span className="dropdown-indicator" />
            </div>

            <div className="dropdown-links">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.25,
                  }}
                >
                  <span className="dropdown-number">
                    0{index + 1}
                  </span>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="dropdown-footer">
              <span>ENG SUPPLY</span>
              <span>Wholesale Distribution</span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;