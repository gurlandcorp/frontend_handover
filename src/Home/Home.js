import Header from "../Shared/Header";
import Banner from "./Banner";
import BrandSection from "./BrandSection";
import PropertySection from "./PropertySection";
import AboutSection from "./AboutSection";
import LocationSection from "./LocationSection";
import PropertyBanner from "./PropertyBanner";
// import TeamSection from "./TeamSection";
// import ActionStartSection from "./ActionStartSection";
// import ProgressStartSection from "./ProgressStartSection";
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogSection";
import JoiningBanner from "./JoiningBanner";
import LatestListing from "./LatestListing";
import FooterSection from "../Shared/FooterSection";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <BrandSection />
      <AboutSection />
      {/* <PropertySection /> */}
      <LocationSection />
      <PropertyBanner />
      <LatestListing />
      {/* <TestimonialSection /> */}
      <BlogSection />
      <JoiningBanner />

      {/* <TeamSection />
      <ActionStartSection />
      <ProgressStartSection /> */}

      <FooterSection />
    </>
  );
};

export default Home;
