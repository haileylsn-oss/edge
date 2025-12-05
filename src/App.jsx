
import Progress from "./components/Progress/Progress";
import Eco from "./components/Eco/Eco";
import ConnectorApp from "./components/Connect/ConnectorApp";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1200 });


const App = () => {
  return (
    <>
      
          <Hero />
          <Eco/>
          <ConnectorApp/>
     {/* <Footer/> */}
   
     
        {/* <Progress /> */}
  
      
    </>
  );
};

export default App;
