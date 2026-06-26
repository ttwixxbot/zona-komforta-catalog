import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { type Category } from "../data/products";
import { IconArrow } from "./Button";

type CategoryCardProps = {
  category: Category;
  index?: number;
  variant?: "home" | "catalog";
};

export function CategoryCard({ category, index = 0, variant = "home" }: CategoryCardProps) {
  return (
    <motion.article
      className={`category-card category-card--${variant}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.012 }}
      whileTap={{ scale: 0.986 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/catalog/${category.slug}`} aria-label={`Открыть категорию ${category.title}`}>
        <img src={category.image} alt={category.title} loading={index < 4 ? "eager" : "lazy"} />
        <span className="category-card__shade" aria-hidden="true" />
        <IconArrow label={`Открыть ${category.title}`} className="category-card__arrow" />
        <span className="category-card__content">
          <span className="category-card__title">{category.title}</span>
          <span className="category-card__line" aria-hidden="true" />
          <span className="category-card__accent">{category.accent}</span>
        </span>
      </Link>
    </motion.article>
  );
}
