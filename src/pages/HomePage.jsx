import HeroHome from "../components/hero/HeroHome";
import BoardStats from "../components/widgets/BoardStats";
import FleetGrid from "../components/widgets/FleetGrid";
import ReviewsSection from "../components/widgets/ReviewsSection";
import HotelPromoBanner from "../components/hotel/HotelPromoBanner";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <BoardStats />
      <FleetGrid />
      <div className="page-body">
        <ReviewsSection />
        <HotelPromoBanner />
      </div>
    </>
  );
}
