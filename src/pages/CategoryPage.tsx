import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { FrameLayout } from "../components/FrameLayout";
import { PageTransition } from "../components/PageTransition";
import { ProductCard } from "../components/ProductCard";
import { Seo } from "../components/Seo";
import {
  categories,
  categoryBySlug,
  getProductsByCategory,
  type CategorySlug,
} from "../data/products";

export function CategoryPage() {
  const { category: categoryParam } = useParams();
  const category = categoryBySlug.get(categoryParam as CategorySlug);

  if (!category) {
    return (
      <PageTransition>
        <Seo title="Категория не найдена — Зона Комфорта" description="Категория каталога не найдена." />
        <FrameLayout>
          <Header variant="solid" />
          <main className="inner-page">
            <div className="empty-state empty-state--page">
              <h1>Категория не найдена</h1>
              <p>Вернитесь в каталог и выберите доступное направление мебели.</p>
              <Link to="/catalog">Открыть каталог</Link>
            </div>
          </main>
        </FrameLayout>
      </PageTransition>
    );
  }

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <PageTransition>
      <Seo
        title={`${category.title} — Зона Комфорта`}
        description={`${category.title}: премиальная подборка мебели в каталоге Зона Комфорта.`}
      />
      <FrameLayout>
        <Header variant="solid" />
        <main className="inner-page">
          <section className="category-page-hero" aria-labelledby="category-title">
            <div>
              <span>{category.accent}</span>
              <h1 id="category-title">{category.title}</h1>
              <p>{category.productLine}. Подберите модель и оставьте заявку на консультацию.</p>
            </div>
            <img src={category.image} alt={category.title} />
          </section>

          <nav className="category-chips" aria-label="Категории каталога">
            {categories.map((item) => (
              <Link key={item.slug} className={item.slug === category.slug ? "active" : ""} to={`/catalog/${item.slug}`}>
                {item.shortTitle}
              </Link>
            ))}
          </nav>

          <section className="catalog-results" aria-labelledby="category-products-title">
            <div className="results-topline">
              <h2 id="category-products-title">{categoryProducts.length} позиций</h2>
              <Link className="text-link" to="/catalog">
                Все товары
              </Link>
            </div>
            <div className="product-grid">
              {categoryProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        </main>
      </FrameLayout>
    </PageTransition>
  );
}
