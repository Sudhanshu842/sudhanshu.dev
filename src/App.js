import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Particlesbackground from "./components/Particlesbackground";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";
import AnimatedCursor from "react-animated-cursor"



function App() {
  return (
    <>
    <div className="h-full scrollbar scrollbar-thumb-blue-700 scrollbar-track-gray-100"></div>
    <AnimatedCursor />
    <Particlesbackground/>
    <Header/>
    <Home/>
    <Social/>
    <About/>
    <Education/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    
    </>
    
    
  );
}

export default App;
