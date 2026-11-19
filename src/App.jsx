import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";
import BookingPage from "./pages/BookingPage";
import NewsWeatherPage from "./pages/NewsWeatherPage";
import HotelPage from "./pages/HotelPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Al cambiar de página, volver arriba.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <ScrollToTop />
      <Header />
      <main className="app-main" id="contenido">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flota" element={<FleetPage />} />
          <Route path="/reservas" element={<BookingPage />} />
          <Route path="/clima-novedades" element={<NewsWeatherPage />} />
          <Route path="/hotel-castillo-de-piedra" element={<HotelPage />} />
          <Route path="/empresa" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
