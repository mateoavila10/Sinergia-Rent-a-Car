import React from "react";

const AboutPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Sobre Sinergia Rent a Car</h1>
        <p>
          Un concepto profesional de alquiler de vehículos pensado para el Norte
          Argentino, con base en Tucumán.
        </p>
      </header>

      {/* Bloque principal: historia + cómo trabajamos */}
      <div className="page-two-columns" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Quiénes somos</h3>
          <p>
            Sinergia Rent a Car nace en San Miguel de Tucumán como un{" "}
            <strong>nuevo concepto profesional</strong> en el rubro de alquiler
            de vehículos. El foco siempre fue el mismo: hacer que alquilar un
            auto, SUV o camioneta sea{" "}
            <strong>simple, claro y sin letra chica</strong>, especialmente para
            quienes recorren Tucumán y todo el Norte Argentino.
          </p>
          <p>
            Desde nuestros inicios fuimos incorporando flota y puntos de
            entrega, acompañando el crecimiento turístico de la región y las
            necesidades de las empresas locales. Hoy somos una de las{" "}
            <strong>opciones de referencia en Tucumán y el NOA</strong> para
            quienes buscan movilidad confiable, tanto en viajes de ocio como de
            trabajo.
          </p>
          <p>
            Operamos todos los días en una franja horaria amplia, de{" "}
            <strong>07:30 a 23:30</strong>, para adaptarnos a horarios de
            vuelos, micros y traslados internos. Nuestro equipo combina
            experiencia en turismo, logística y atención al cliente para ofrecer
            un servicio ágil, cercano y resolutivo.
          </p>

          <h3 style={{ marginTop: 20 }}>Cómo trabajamos</h3>
          <ul>
            <li>
              <strong>Transparencia total:</strong> condiciones claras desde el
              primer contacto, sin sorpresas al retirar o devolver la unidad.
            </li>
            <li>
              <strong>Flexibilidad de retiro y devolución:</strong> podés
              coordinar en aeropuerto, ciudad, Yerba Buena, Tafí del Valle,
              Hotel Castillo de Piedra y otros puntos de la región.
            </li>
            <li>
              <strong>Asistencia 24/7:</strong> acompañamiento permanente por
              WhatsApp y teléfono durante todo el alquiler.
            </li>
            <li>
              <strong>Flota pensada para la región:</strong> autos compactos
              para ciudad, SUVs para rutas de montaña y pick-ups/camionetas para
              caminos más exigentes.
            </li>
            <li>
              <strong>Experiencia digital:</strong> reservas y seguimiento por
              web y WhatsApp, con confirmaciones ágiles y atención
              personalizada.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Servicios que ofrecemos</h3>
          <ul>
            <li>
              <strong>Alquiler diario y por tramo:</strong> ideal para escapadas
              de fin de semana, viajes cortos o visitas de trabajo.
            </li>
            <li>
              <strong>Turismo en el NOA:</strong> vehículos preparados para
              recorrer Tafí del Valle, Amaicha, Cafayate, Salta, Jujuy y otras
              rutas clásicas del Norte Argentino.
            </li>
            <li>
              <strong>Viajes corporativos:</strong> soluciones para empresas,
              eventos, equipos comerciales y traslados ejecutivos.
            </li>
            <li>
              <strong>Alquiler mensual / largo plazo:</strong> alternativas para
              quienes necesitan una unidad fija sin inmovilizar capital en un
              vehículo propio.
            </li>
            <li>
              <strong>Entrega donde estés:</strong> llevamos el auto a tu hotel,
              oficina o punto de encuentro acordado, para que ganes tiempo y
              comodidad.
            </li>
            <li>
              <strong>Combos Auto + Hotel:</strong> beneficios especiales al
              combinar tu alquiler de vehículo con estadías en{" "}
              <strong>Hotel Castillo de Piedra</strong> en Tafí del Valle.
            </li>
          </ul>

          <h3 style={{ marginTop: 20 }}>Nuestra filosofía</h3>
          <p>
            Sabemos que cuando alquilás un auto, nos confiás algo más que un
            vehículo: nos confiás tu viaje, tus horarios y a tu familia o tu
            equipo de trabajo. Por eso trabajamos con un enfoque muy concreto:
            <strong> resolver la movilidad sin complicaciones</strong>, con
            trato humano, respuestas rápidas y soporte real cuando más se
            necesita.
          </p>
          <p>
            Queremos que quienes nos eligen sientan que con Sinergia ganan{" "}
            <strong>tiempo, comodidad y libertad</strong>: el auto listo, en el
            lugar y momento acordados, para que solo quede disfrutar el camino.
          </p>
        </div>
      </div>

      {/* Bloque extra: cobertura y enfoque regional */}
      <section className="section">
        <div className="card">
          <h3>Cobertura en Tucumán y el Norte Argentino</h3>
          <p>
            Nuestra base operativa está en{" "}
            <strong>San Miguel de Tucumán</strong>, con operación habitual en el{" "}
            <strong>Aeropuerto Teniente Benjamín Matienzo</strong> y puntos
            estratégicos como Yerba Buena y Tafí del Valle. Desde allí
            coordinamos entregas y devoluciones en distintos puntos de la
            provincia y otras ciudades del NOA, según disponibilidad.
          </p>
          <p>
            Si estás planificando un viaje por el Norte, un evento corporativo o
            una estadía en <strong>Castillo de Piedra</strong>, nuestro equipo
            puede ayudarte a diseñar la mejor combinación de vehículo, rutas y
            tiempos de retiro/devolución para que tu experiencia sea lo más
            fluida posible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
