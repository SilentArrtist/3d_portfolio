import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Background from "./components/Background";

const App = () => {
  const blobRef = useRef();
  const divRef = useRef();
  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    blobRef.current.animate({
      left: `${clientX}px`,
      top: `${clientY + winScroll}px`
    }, { duration: 1500, fill: "forwards" });
  }
  return (
    <BrowserRouter>
      <div
        ref={divRef}
        onPointerMove={(e) => mouseMoveHandler(e)}
        className='relative z-0 bg-primary'>
        <Background blobRef={blobRef} />
        <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
