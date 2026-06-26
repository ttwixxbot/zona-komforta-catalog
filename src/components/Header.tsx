import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/catalog", label: "Каталог" },
  { to: "/contacts", label: "Контакты" },
];

type HeaderProps = {
  variant?: "hero" | "solid";
  minimal?: boolean;
};

export function Header({ variant = "solid", minimal = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`site-header site-header--${variant}`}>
        <Link className="brand-mark" to="/" aria-label="Зона Комфорта — на главную">
          Зона Комфорта
        </Link>
        {!minimal ? (
          <nav className="site-nav" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
        <div className="header-actions">
          <Link className="icon-button icon-button--search" to="/catalog" aria-label="Поиск по каталогу">
            <Search size={24} strokeWidth={1.5} />
          </Link>
          <button
            className="icon-button"
            type="button"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} strokeWidth={1.35} />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
