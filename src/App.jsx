import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";
import BookingPage from "./pages/BookingPage";
import NewsWeatherPage from "./pages/NewsWeatherPage";
import HotelPage from "./pages/HotelPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flota" element={<FleetPage />} />
          <Route path="/reservas" element={<BookingPage />} />
          <Route path="/clima-novedades" element={<NewsWeatherPage />} />
          <Route path="/hotel-castillo-de-piedra" element={<HotelPage />} />
          <Route path="/empresa" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
