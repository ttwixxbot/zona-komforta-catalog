import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { LuxuryButton } from "../components/Button";
import { FrameLayout } from "../components/FrameLayout";
import { PageTransition } from "../components/PageTransition";
import { ProductCard } from "../components/ProductCard";
import { Seo } from "../components/Seo";
import {
  categoryBySlug,
  formatPrice,
  getProductById,
  getProductsByCategory,
} from "../data/products";

export function ProductPage() {
  const { id } = useParams();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <PageTransition>
        <Seo title="Товар не найден — Зона Комфорта" description="Товар каталога не найден." />
        <FrameLayout>
          <Header variant="solid" />
          <main className="inner-page">
            <div className="empty-state empty-state--page">
              <h1>Товар не найден</h1>
              <p>Возможно, позиция была перемещена в другую коллекцию.</p>
              <Link to="/catalog">Вернуться в каталог</Link>
            </div>
          </main>
        </FrameLayout>
      </PageTransition>
    );
  }

  const category = categoryBySlug.get(product.category);
  const relatedProducts = getProductsByCategory(product.category)
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  return (
    <PageTransition>
      <Seo
        title={`${product.title} — Зона Комфорта`}
        description={`${product.title}: ${product.description}`}
      />
      <FrameLayout>
        <Header variant="solid" />
        <main className="inner-page">
          <article className="product-detail" aria-labelledby="product-title">
            <div className="product-detail__media">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-detail__content">
              <Link className="text-link" to={`/catalog/${product.category}`}>
                {category?.title}
              </Link>
              <h1 id="product-title">{product.title}</h1>
              <strong>{formatPrice(product.price)}</strong>
              <p>{product.description}</p>
              <ul>
                {product.characteristics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="product-detail__actions">
                <LuxuryButton to={`/contacts?product=${product.id}`}>Связаться</LuxuryButton>
                <LuxuryButton to="/catalog" variant="outline">
                  В каталог
                </LuxuryButton>
              </div>
            </div>
          </article>

          {relatedProducts.length > 0 ? (
            <section className="section-band" aria-labelledby="related-title">
              <div className="section-heading section-heading--row">
                <div>
                  <span>В той же коллекции</span>
                  <h2 id="related-title">Похожие позиции</h2>
                </div>
              </div>
              <div className="product-grid product-grid--compact">
                {relatedProducts.map((item, index) => (
                  <ProductCard key={item.id} product={item} index={index} />
                ))}
              </div>
            </section>
          ) : null}
        </main>
      </FrameLayout>
    </PageTransition>
  );
}
