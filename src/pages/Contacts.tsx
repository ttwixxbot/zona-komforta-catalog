import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { LuxuryButton } from "../components/Button";
import { FrameLayout } from "../components/FrameLayout";
import { PageTransition } from "../components/PageTransition";
import { Seo } from "../components/Seo";
import { getProductById } from "../data/products";

export function Contacts() {
  const [searchParams] = useSearchParams();
  const selectedProduct = useMemo(() => getProductById(searchParams.get("product") ?? ""), [searchParams]);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    selectedProduct ? `Интересует ${selectedProduct.title}. Подскажите наличие и условия заказа.` : "",
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <PageTransition>
      <Seo
        title="Контакты — Зона Комфорта"
        description="Свяжитесь с Зоной Комфорта: телефон, мессенджеры, адрес и форма заявки."
      />
      <FrameLayout>
        <Header variant="solid" />
        <main className="inner-page">
          <section className="contacts-layout" aria-labelledby="contacts-title">
            <div className="contacts-info">
              <span>Контакты</span>
              <h1 id="contacts-title">Поможем собрать интерьер в нужном настроении</h1>
              <p>
                Напишите нам, если хотите уточнить наличие, подобрать ткань или собрать комплект мебели
                под комнату. Форма работает как демо и показывает красивое подтверждение.
              </p>
              <div className="contact-lines">
                <a href="tel:+79990000000">+7 999 000-00-00</a>
                <a href="https://wa.me/79990000000">WhatsApp</a>
                <a href="https://t.me/zonakomforta">Telegram</a>
                <span>Москва, мебельный шоурум, ул. Тёплая, 12</span>
                <span>Ежедневно 10:00–21:00</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Имя</span>
                <input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Как к вам обращаться" />
              </label>
              <label>
                <span>Телефон</span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  inputMode="tel"
                  placeholder="+7 999 000-00-00"
                />
              </label>
              <label>
                <span>Сообщение</span>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={5} />
              </label>
              <LuxuryButton type="submit" variant="terracotta">
                Отправить заявку
              </LuxuryButton>
              {sent ? (
                <div className="form-success" role="status">
                  Заявка сохранена в демо-режиме. Менеджерское уведомление можно подключить позже.
                </div>
              ) : null}
            </form>
          </section>
        </main>
      </FrameLayout>
    </PageTransition>
  );
}
