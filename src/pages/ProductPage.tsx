import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  type Product,
} from "../data/products";

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const similarProducts = getProductsByCategory(product.category);
  const currentIndex = similarProducts.findIndex((item) => item.id === product.id);
  const hasCarousel = similarProducts.length > 1 && currentIndex >= 0;
  const previousProduct = hasCarousel
    ? similarProducts[(currentIndex - 1 + similarProducts.length) % similarProducts.length]
    : undefined;
  const nextProduct = hasCarousel ? similarProducts[(currentIndex + 1) % similarProducts.length] : undefined;
  const relatedProducts = similarProducts.filter((item) => item.id !== product.id).slice(0, 4);

  const openProduct = (target: Product | undefined) => {
    if (!target) {
      return;
    }

    navigate(`/product/${target.id}`);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!hasCarousel) {
      return;
    }

    const isStrongSwipe = Math.abs(info.offset.x) > 88 || Math.abs(info.velocity.x) > 560;

    if (!isStrongSwipe) {
      return;
    }

    openProduct(info.offset.x < 0 ? nextProduct : previousProduct);
  };

  return (
    <PageTransition>
      <Seo
        title={`${product.title} — Зона Комфорта`}
        description={`${product.title}: ${product.description}`}
      />
      <FrameLayout>
        <Header variant="solid" />
        <main className="inner-page">
          <section className="product-swipe-stage" aria-label="Карточка товара с переключением похожих товаров">
            {previousProduct ? (
              <button
                className="product-side-preview product-side-preview--prev"
                type="button"
                onClick={() => openProduct(previousProduct)}
                aria-label={`Предыдущий похожий товар: ${previousProduct.title}`}
              >
                <img src={previousProduct.image} alt="" aria-hidden="true" />
                <span>
                  <ChevronLeft size={22} strokeWidth={1.4} />
                  {previousProduct.title}
                </span>
              </button>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.article
                key={product.id}
                className="product-detail product-detail--swipe"
                aria-labelledby="product-title"
                drag={hasCarousel ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.985 }}
                whileTap={{ scale: hasCarousel ? 0.992 : 1 }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
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
                  {hasCarousel ? (
                    <div className="swipe-hint">
                      <MoveHorizontal size={18} strokeWidth={1.5} />
                      <span>Смахните карточку или нажмите на соседний товар</span>
                    </div>
                  ) : null}
                  <div className="product-detail__actions">
                    <LuxuryButton to={`/contacts?product=${product.id}`}>Связаться</LuxuryButton>
                    <LuxuryButton to="/catalog" variant="outline">
                      В каталог
                    </LuxuryButton>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {nextProduct ? (
              <button
                className="product-side-preview product-side-preview--next"
                type="button"
                onClick={() => openProduct(nextProduct)}
                aria-label={`Следующий похожий товар: ${nextProduct.title}`}
              >
                <img src={nextProduct.image} alt="" aria-hidden="true" />
                <span>
                  {nextProduct.title}
                  <ChevronRight size={22} strokeWidth={1.4} />
                </span>
              </button>
            ) : null}
          </section>

          {hasCarousel ? (
            <div className="product-stepper" aria-label="Переключение похожих товаров">
              <button type="button" onClick={() => openProduct(previousProduct)} aria-label="Предыдущий товар">
                <ChevronLeft size={20} strokeWidth={1.45} />
              </button>
              <span>
                {currentIndex + 1} / {similarProducts.length}
              </span>
              <button type="button" onClick={() => openProduct(nextProduct)} aria-label="Следующий товар">
                <ChevronRight size={20} strokeWidth={1.45} />
              </button>
            </div>
          ) : null}

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
