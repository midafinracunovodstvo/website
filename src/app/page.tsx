import Navbar from "./../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/DefaultHome/MainBanner";
import Services from "../components/HomePages/DefaultHome/Services";
import About from "../components/HomePages/DefaultHome/About";
import Footer from "../components/Layouts/Footer";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";
import WorkProcess from "../components/HomePages/DefaultHome/WorkProcess";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />
      <WorkProcess />

      <About />

      <PricingStyleThree />

      <Footer />
    </>
  );
}
