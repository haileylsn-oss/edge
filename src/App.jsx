
import Progress from "./components/Progress/Progress";
import Eco from "./components/Eco/Eco";
import ConnectorApp from "./components/Connect/ConnectorApp";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import StatsSection from "./components/Eco/stst";
import FeaturesSection from "./components/Eco/feat";
import SecurityComparison from "./components/Eco/security";
import PartnersTicker from "./components/Eco/part";
import SecuritySection from "./components/Eco/ssec";
import EducationCarousel from "./components/Eco/edu";

AOS.init({ duration: 1200 });


const App = () => {
  return (
    <>
      
          <Hero />
          <Eco/>
        <StatsSection/>
        <FeaturesSection/>
        <SecurityComparison/>
        <ConnectorApp/>
        <PartnersTicker/>
        <PartnersTicker/>
        <SecuritySection/>
        <EducationCarousel/>
     <Footer/>
   
     
        {/* <Progress /> */}
  
      
    </>
  );
};

export default App;
