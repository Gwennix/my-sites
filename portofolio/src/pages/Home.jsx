import React from 'react';
import images from "../ImagesData";
import CV from '../assets/CV.pdf'

const Home = () => {
    return (
      <div>
        <div className="flex flex-row justify-center gap-60 relative mt-20">
  
          <section className="font-sans text-3xl">
            <h2>Hoi, ik ben Gwen</h2>
            <h3>Front-End Developer</h3>
          </section>

          <section>
            <img src={images.laptopgirl} alt="Me working on a laptop" className="w-full max-w-lg" />
          </section>

          <div className="w-3/4 h-0.5 bg-white absolute top-2/2 transform -translate-y-1/2"></div>

          <section className="flex flex-row gap-3 w-3/4 absolute top-2/2 m-5">
          <a href={CV} download="MyCV" target='_blank'>
            <div className="text-2xl border rounded-lg border-black w-36 h-20 text-center bg-white flex items-center justify-center shadow-md active:scale-95 transition-all duration-150 hover:bg-black hover:text-white">Download CV</div>
            </a>
            <a href={'/projects/${project.id}'}>
            <div className="text-1xl font-bold border rounded-lg border-black w-36 h-20 text-center bg-white flex items-center justify-center shadow-md active:scale-95 transition-all duration-150 hover:bg-black hover:text-white">Meest Recente Project</div>
            </a>
          </section>

          

          
        </div>
      </div>
    );
  };
  
  export default Home;