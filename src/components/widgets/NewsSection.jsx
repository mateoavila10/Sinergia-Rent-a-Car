import { newsData } from "../../data/newsData";

const NewsSection = () => {
  return (
    <section className="section" aria-labelledby="news-title">
      <div className="section-head">
        <div>
          <h2 id="news-title" className="section-title">Novedades del camino</h2>
          <p className="section-sub">
            Información útil para planificar tu viaje por Tucumán y el Norte.
          </p>
        </div>
      </div>
      <ul className="news-grid">
        {newsData.map((item) => (
          <li key={item.id} className="card news-card">
            <span className="badge">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsSection;
