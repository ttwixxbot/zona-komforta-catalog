import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const menuLinks = [
  { to: "/", label: "Главная" },
  { to: "/catalog", label: "Каталог" },
  { to: "/catalog/sofas", label: "Диваны" },
  { to: "/catalog/designer-chairs", label: "Стулья" },
  { to: "/contacts", label: "Контакты" },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <motion.nav
            className="mobile-menu__panel"
            aria-label="Мобильная навигация"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__top">
              <span className="brand-mark">Зона Комфорта</span>
              <button className="icon-button icon-button--dark" type="button" onClick={onClose} aria-label="Закрыть меню">
                <X size={23} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mobile-menu__links">
              {menuLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={onClose}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link className="mobile-menu__contact" to="/contacts" onClick={onClose}>
              Связаться с дизайнером
            </Link>
          </motion.nav>
          <button className="mobile-menu__backdrop" type="button" onClick={onClose} aria-label="Закрыть меню" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
