import { type ReactNode } from "react";
import { Link } from "react-router-dom";

type FrameLayoutProps = {
  children: ReactNode;
  withFooter?: boolean;
};

export function FrameLayout({ children, withFooter = true }: FrameLayoutProps) {
  return (
    <div className="app-shell">
      <div className="luxury-frame">
        {children}
        {withFooter ? <Footer /> : null}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand-mark" to="/">
          Зона Комфорта
        </Link>
        <p>Премиальная мебель для дома, офиса и интерьеров с характером.</p>
      </div>
      <div className="footer-links">
        <Link to="/catalog">Каталог</Link>
        <Link to="/catalog/sofas">Диваны</Link>
        <Link to="/catalog/office-chairs">Офисные кресла</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
      <div className="footer-contact">
        <a href="tel:+79990000000">+7 999 000-00-00</a>
        <a href="https://wa.me/79990000000">WhatsApp</a>
        <a href="https://t.me/zonakomforta">Telegram</a>
      </div>
    </footer>
  );
}
