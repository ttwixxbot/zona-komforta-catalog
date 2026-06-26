import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categoryBySlug, formatPrice, type Product } from "../data/products";
import { IconArrow } from "./Button";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const category = categoryBySlug.get(product.category);

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.035, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link className="product-card__media" to={`/product/${product.id}`} aria-label={`Подробнее о ${product.title}`}>
        <img src={product.image} alt={product.title} loading={index < 6 ? "eager" : "lazy"} />
        <span className="product-card__wash" aria-hidden="true" />
        <IconArrow label={`Подробнее о ${product.title}`} className="product-card__arrow" />
        <span className="product-card__badges">
          {product.isNew ? <span>Новинка</span> : null}
          {product.isPopular ? <span>Популярное</span> : null}
        </span>
      </Link>
      <div className="product-card__body">
        <span className="product-card__category">{category?.title}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-card__bottom">
          <strong>{formatPrice(product.price)}</strong>
          <div className="product-card__actions">
            <Link to={`/product/${product.id}`}>Подробнее</Link>
            <Link to={`/contacts?product=${product.id}`}>Связаться</Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
