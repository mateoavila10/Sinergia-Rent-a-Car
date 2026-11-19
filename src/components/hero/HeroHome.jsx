import { useState } from "react";
import SplitFlap from "../board/SplitFlap";
import QuoteTicket from "../booking/QuoteTicket";
import { pickupPoints } from "../../data/locations";
import { site } from "../../data/site";
import { StarIcon } from "../common/Icons";

// Tablero de arribos: cada punto de entrega es una fila.
const HeroHome = () => {
  const [pickupId, setPickupId] = useState(pickupPoints[0].id);
  const current = pickupPoints.find((p) => p.id === pickupId);

  return (
    <section className="board" aria-labelledby="board-title">
      <div className="board-inner">
        <div className="board-main">
          <h1 id="board-title" className="board-title">
            <SplitFlap text="Tu auto te espera en" className="board-title-top" />
            <SplitFlap text={current.board} className="board-title-dest" />
          </h1>
          <p className="board-lede">
            Alquiler de autos, SUVs, pick-ups y vans en Tucumán y el Norte
            Argentino. Elegí dónde lo retirás y te lo dejamos listo.
          </p>

          <div className="board-table" role="group" aria-label="Puntos de entrega">
            <div className="board-row board-row-head" aria-hidden="true">
              <span>N°</span>
              <span>Entrega</span>
              <span>Estado</span>
            </div>
            {pickupPoints.map((p, i) => {
              const selected = p.id === pickupId;
              return (
                <button
                  key={p.id}
                  type="button"
                  className={`board-row${selected ? " is-selected" : ""}`}
                  aria-pressed={selected}
                  onClick={() => setPickupId(p.id)}
                >
                  <span className="row-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="row-place">
                    {p.board}
                    <span className="row-detail">{p.detail}</span>
                  </span>
                  <span className="row-status">{p.status}</span>
                </button>
              );
            })}
          </div>

          <a className="board-rating" href={site.mapsUrl} target="_blank" rel="noreferrer">
            <span className="rating-value">
              {site.rating.value}
              <StarIcon className="rating-star" />
            </span>
            <span>
              {site.rating.count} opiniones en Google
              <span className="rating-when"> · {site.rating.checked}</span>
            </span>
          </a>
        </div>

        <QuoteTicket pickupId={pickupId} onPickupChange={setPickupId} />
      </div>
    </section>
  );
};

export default HeroHome;
