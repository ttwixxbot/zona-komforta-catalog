import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { LuxuryButton } from "../components/Button";
import { FrameLayout } from "../components/FrameLayout";
import { PageTransition } from "../components/PageTransition";
import { Seo } from "../components/Seo";

export function Privacy() {
  return (
    <PageTransition>
      <Seo
        title="Политика конфиденциальности — Зона Комфорта"
        description="Как Зона Комфорта обрабатывает заявки, контактные данные и сообщения посетителей сайта."
      />
      <FrameLayout>
        <Header variant="solid" />
        <main className="inner-page">
          <article className="privacy-page" aria-labelledby="privacy-title">
            <span>Политика конфиденциальности</span>
            <h1 id="privacy-title">Бережно относимся к данным клиентов</h1>
            <p>
              Эта политика описывает, какие данные могут передаваться через сайт «Зона Комфорта» и как они
              используются для обработки обращений по мебели, подбору коллекций и обратной связи.
            </p>

            <div className="privacy-grid">
              <section>
                <h2>Какие данные собираются</h2>
                <p>
                  При отправке формы на сайте посетитель может указать имя, телефон и текст сообщения. Если
                  обращение отправлено со страницы товара, в сообщении может быть указан выбранный товар.
                </p>
              </section>
              <section>
                <h2>Для чего используются данные</h2>
                <p>
                  Данные нужны, чтобы связаться с клиентом, уточнить запрос, предложить подходящие позиции,
                  согласовать наличие, материалы, стоимость и условия заказа.
                </p>
              </section>
              <section>
                <h2>Передача третьим лицам</h2>
                <p>
                  Контактные данные не публикуются на сайте и не передаются сторонним сервисам для рекламных
                  рассылок. Для связи могут использоваться телефон, WhatsApp или Telegram.
                </p>
              </section>
              <section>
                <h2>Хранение и удаление</h2>
                <p>
                  Заявки хранятся только столько, сколько необходимо для ответа на обращение и сопровождения
                  заказа. Клиент может запросить удаление или уточнение своих данных через контакты сайта.
                </p>
              </section>
              <section>
                <h2>Карта и внешние сервисы</h2>
                <p>
                  На странице контактов встроена карта Яндекса. При открытии карты могут применяться правила
                  обработки данных сервиса Яндекс.Карты.
                </p>
              </section>
              <section>
                <h2>Обновление политики</h2>
                <p>
                  Политика может обновляться при изменении сайта, способов связи или порядка обработки заявок.
                  Актуальная версия опубликована на этой странице.
                </p>
              </section>
            </div>

            <div className="privacy-actions">
              <LuxuryButton to="/contacts" variant="terracotta">
                Связаться
              </LuxuryButton>
              <Link className="text-link" to="/catalog">
                Вернуться в каталог
              </Link>
            </div>
          </article>
        </main>
      </FrameLayout>
    </PageTransition>
  );
}
