import { motion } from "framer-motion";
import { CategoryCard } from "../components/CategoryCard";
import { FrameLayout } from "../components/FrameLayout";
import { Hero } from "../components/Hero";
import { PageTransition } from "../components/PageTransition";
import { ProductCard } from "../components/ProductCard";
import { Seo } from "../components/Seo";
import { LuxuryButton } from "../components/Button";
import { categories, products } from "../data/products";

const heroCategories = categories.slice(0, 4);
const popularProducts = products.filter((product) => product.isPopular).slice(0, 4);

export function Home() {
  return (
    <PageTransition>
      <Seo
        title="Зона Комфорта — премиальный каталог мебели"
        description="Диваны, дизайнерские стулья и кресла в тёплой luxury-эстетике для дома и офиса."
      />
      <FrameLayout>
        <Hero />
        <section className="home-showcase" aria-labelledby="comfort-title">
          <div className="home-category-grid">
            {heroCategories.map((category, index) => (
              <CategoryCard key={category.slug} category={category} index={index} />
            ))}
          </div>
          <motion.div
            className="comfort-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2 id="comfort-title">Зона Комфорта — мебель для жизни со вкусом</h2>
              <p>
                Мы создаём коллекции, в которых форма, функциональность и уют существуют в
                идеальном балансе. Каждое изделие — это деталь вашего пространства и вашего настроения.
              </p>
            </div>
            <LuxuryButton to="/catalog">Смотреть каталог</LuxuryButton>
          </motion.div>
        </section>

        <section className="section-band section-band--cream" aria-labelledby="collections-title">
          <div className="section-heading">
            <span>Коллекции</span>
            <h2 id="collections-title">Тёплая мебель для дома, офиса и камерных лаунж-зон</h2>
            <p>
              Выберите готовое направление или перейдите в каталог: все карточки собраны на реальных
              фото из исходников и приведены к единой sunset-палитре.
            </p>
          </div>
          <div className="category-strip">
            {categories.slice(4).map((category, index) => (
              <CategoryCard key={category.slug} category={category} index={index} variant="catalog" />
            ))}
          </div>
        </section>

        <section className="section-band" aria-labelledby="popular-title">
          <div className="section-heading section-heading--row">
            <div>
              <span>Выбор клиентов</span>
              <h2 id="popular-title">Популярные позиции</h2>
            </div>
            <LuxuryButton to="/catalog" variant="outline">
              Весь каталог
            </LuxuryButton>
          </div>
          <div className="product-grid product-grid--home">
            {popularProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </FrameLayout>
    </PageTransition>
  );
}
