import React from "react";

export const ContentSection = ({ imagen, parrafo1, parrafo2, parrafo3, parrafo4, classFloatImage, titulo }) => {
      return (
<section className="mt-8 md:mt-12 lg:mt-16  mb-6 md:mb-8 lg:mb-20 px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
  <div className="text-black leading-relaxed text-base md:text-lg lg:text-xl max-w-7xl mx-auto">
    <img
      src={imagen}
      alt="Album"
      className={`${classFloatImage} w-full md:w-80 lg:w-96 h-auto object-cover rounded-lg lg:rounded-full shadow-xl mb-6 md:mb-0 md:ml-6 lg:ml-8 lg:mt-15`}
    />
    
    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 text-pink-400 text-center leading-relaxed">
      {titulo}
    </h2>
    
    <p className="mb-4 text-justify md:text-left">
      {parrafo1}
    </p>

    <p className="mb-4 text-justify md:text-left">
      {parrafo2}
    </p>

    <p className="mb-4 text-justify md:text-left">
      {parrafo3}
    </p>

    <p className="mb-4 text-justify md:text-left">
      {parrafo4}
    </p>
    
    <div className="clear-both"></div>
  </div>
</section>)

}
