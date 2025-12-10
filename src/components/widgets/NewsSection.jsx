import React from "react";
import { newsData } from "../../data/newsData";

const NewsSection = () => {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Clima & novedades del camino</h2>
          <p>
            Información útil para planificar tu viaje por Tucumán y el Norte.
          </p>
        </div>
      </div>
      <div className="news-grid">
        {newsData.map((item) => (
          <article key={item.id} className="card news-card">
            <span className="badge badge-soft">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
