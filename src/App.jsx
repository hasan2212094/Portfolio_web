import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


const App = () => {
  return (
    <>
    <BlurBackground/>
    <Navbar/>
    <Hero/>
    <Projects/>
    <About/>
    <Experience/>
    <Contacts/>
    {/* <Testimonial/> */}
    </>
  );
};

export default App;
