import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { FrameLayout } from "../components/FrameLayout";
import { PageTransition } from "../components/PageTransition";
import { ProductCard } from "../components/ProductCard";
import { Seo } from "../components/Seo";
import { categories, formatPrice, products, type CategorySlug, type Product } from "../data/products";

type SortMode = "popular" | "price-asc" | "price-desc";
type CategoryFilter = "all" | CategorySlug;

export function Catalog() {
  const maxPrice = Math.max(...products.map((product) => product.price));
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [price, setPrice] = useState(maxPrice);
  const [sort, setSort] = useState<SortMode>("popular");

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => category === "all" || product.category === category)
      .filter((product) => product.price <= price)
      .filter((product) => product.title.toLowerCase().includes(normalizedQuery))
      .sort((first, second) => sortProducts(first, second, sort));
  }, [category, price, query, sort]);

  return (
    <PageTransition>
      <Seo
        title="Каталог мебели — Зона Комфорта"
        description="Премиальный каталог мебели: диваны, кресла, стулья, кухни, спальни и офисные кресла."
      />
      <FrameLayout>
        <Header variant="solid" />
        <main className="inner-page">
          <section className="catalog-hero" aria-labelledby="catalog-title">
            <span>Каталог</span>
            <h1 id="catalog-title">Мебель, которая собирает интерьер в цельное настроение</h1>
            <p>
              Фильтруйте коллекции по категории, бюджету и названию. Без корзины и checkout — только
              удобный просмотр и быстрый переход к связи.
            </p>
          </section>

          <section className="filters-panel" aria-label="Фильтры каталога">
            <label>
              <span>Поиск</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Например, Boston"
              />
            </label>
            <label>
              <span>Категория</span>
              <select value={category} onChange={(event) => setCategory(event.target.value as CategoryFilter)}>
                <option value="all">Все категории</option>
                {categories.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="range-label">
              <span>Цена до {formatPrice(price)}</span>
              <input
                type="range"
                min="10000"
                max={maxPrice}
                step="5000"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
              />
            </label>
            <label>
              <span>Сортировка</span>
              <select value={sort} onChange={(event) => setSort(event.target.value as SortMode)}>
                <option value="popular">Популярные</option>
                <option value="price-asc">Цена по возрастанию</option>
                <option value="price-desc">Цена по убыванию</option>
              </select>
            </label>
          </section>

          <section className="catalog-results" aria-labelledby="catalog-results-title">
            <div className="results-topline">
              <h2 id="catalog-results-title">Найдено: {visibleProducts.length}</h2>
              <button className="reset-button" type="button" onClick={() => resetFilters(maxPrice, setQuery, setCategory, setPrice, setSort)}>
                Сбросить фильтры
              </button>
            </div>
            {visibleProducts.length > 0 ? (
              <div className="product-grid">
                {visibleProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>Коллекция не найдена</h3>
                <p>Попробуйте изменить категорию, цену или поисковый запрос.</p>
              </div>
            )}
          </section>
        </main>
      </FrameLayout>
    </PageTransition>
  );
}

function sortProducts(first: Product, second: Product, sort: SortMode) {
  if (sort === "price-asc") {
    return first.price - second.price;
  }

  if (sort === "price-desc") {
    return second.price - first.price;
  }

  return Number(second.isPopular) - Number(first.isPopular) || Number(second.isNew) - Number(first.isNew);
}

function resetFilters(
  maxPrice: number,
  setQuery: (value: string) => void,
  setCategory: (value: CategoryFilter) => void,
  setPrice: (value: number) => void,
  setSort: (value: SortMode) => void,
) {
  setQuery("");
  setCategory("all");
  setPrice(maxPrice);
  setSort("popular");
}
