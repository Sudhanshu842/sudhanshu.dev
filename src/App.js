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
import { useState, useEffect } from "react";
import Loader from "./components/Loader";



function App() {

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])


  return (
    <>
      
        <div className={(loading ? 'block' : 'hidden')}>
        <Loader />
        </div>
        <div className={(loading ? 'opacity-0 ' : 'block')}>
          <div className="h-full scrollbar scrollbar-thumb-blue-700 scrollbar-track-gray-100"></div>
          <AnimatedCursor />
          <Particlesbackground />
          <Header />
          <Home />
          <Social />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>

    </>


  );
}

export default App;
