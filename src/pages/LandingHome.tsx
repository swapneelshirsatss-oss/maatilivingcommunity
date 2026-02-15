import PremiumNavbar from "../components/PremiumNavbar";
import HeroVideo from "../components/HeroVideo";
import Experience from "../components/Experience";
import StayCards from "../components/StayCards";
import NatureGallery from "../components/NatureGallery";
import PremiumCTA from "../components/PremiumCTA";
import PremiumFooter from "../components/PremiumFooter";
import Contact from "../components/Contact"

export default function LandingHome() {
  return (
    <>
      <PremiumNavbar />
      <HeroVideo />
      <Experience />
      <StayCards />
      <NatureGallery />
      <PremiumCTA />
      <Contact/>
      <PremiumFooter />
    </>
  );
}
