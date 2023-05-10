import Header from "./Header.js";
import MainMenu from "./MainMenu.js";
import SearchBox from "./SearchBox.js";
import HomePageSlider from "./HomePageSlider.js";
import FeaturedServices from "./FeaturedServices.js";
import ChooseUS from "./ChooseUs.js";
import CountDownArea from "./CountDownArea.js";
import SpecialServices from "./SpecialServices.js";
import Testimonials from "./Testimonials.js";
import OurTeam from "./OurTeam.js";
import Appointment from "./Appointment.js";
import News from "./News.js";
import Footer from "./Footer.js";

function Home() {
  return (
    <>
      {/* Top Header Area */}
      <Header />

      {/* Main Menu Area  */}
      <MainMenu />

      {/* SearchBox Modal */}
      <SearchBox />

      {/* Homepage Slider */}
      <HomePageSlider />

      {/* Services Area */}
      <FeaturedServices />

      {/* Why Choose Us Area */}
      <ChooseUS />

      {/* Count-Down Area */}
      <CountDownArea />

      {/* Sepcial Services Area  */}
      <SpecialServices />

      {/* Our testimonials Area  */}
      <Testimonials />

      {/* Our team Area  */}
      <OurTeam />

      {/* Appointment Area */}
      <Appointment />

      {/* News Area */}
      <News />

      {/* Footer Area */}
      <Footer />
    </>
  );
}

export default Home;
