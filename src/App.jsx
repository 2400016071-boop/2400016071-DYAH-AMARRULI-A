import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import PillarsSection from "./components/PillarsSection";
import ProgramSection from "./components/ProgramSection";
import ShowcaseSection from "./components/ShowcaseSection";
import SmallProgramCards from "./components/SmallProgramCards";
import TestimonialsSection from "./components/TestimonialsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <ProgramSection />
      <ShowcaseSection />
      <SmallProgramCards/>
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}

export default App;
