import { reviews } from "../../data/reviews";
import { site } from "../../data/site";
import { ArrowIcon, StarIcon } from "../common/Icons";

// Reseñas como una tira impresa: la calificación a la izquierda, las voces en fila.
export default function ReviewsSection() {
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="reviews-strip">
        <div className="reviews-score">
          <h2 id="reviews-title" className="section-title">Lo que dicen en Google</h2>
          <p className="score">
            <span className="score-value">{site.rating.value}</span>
            <StarIcon className="score-star" />
          </p>
          <p className="score-meta">
            {site.rating.count} opiniones · {site.rating.checked}
          </p>
          <a className="link-arrow" href={site.mapsUrl} target="_blank" rel="noreferrer">
            Ver todas en Google Maps
            <ArrowIcon className="link-arrow-icon" />
          </a>
        </div>
        <ul className="reviews-list">
          {reviews.map((r) => (
            <li key={r.id} className="review">
              <blockquote className="review-text">“{r.text}”</blockquote>
              <p className="review-meta">
                <span className="review-author">{r.author}</span> · {r.meta}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
