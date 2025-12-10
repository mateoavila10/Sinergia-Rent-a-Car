import HeroHome from "../components/hero/HeroHome";
import FleetGrid from "../components/widgets/FleetGrid";
import HotelPromoBanner from "../components/hotel/HotelPromoBanner";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <FleetGrid />
      <HotelPromoBanner />
    </>
  );
}
