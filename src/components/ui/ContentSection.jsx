import React from "react";

export const ContentSection = ({ imagen, parrafo1, parrafo2, parrafo3, parrafo4, classNameImage, titulo }) => {
      return (
    <section className="mt-16 mb-10 px-6 relative z-10">
      <div className="text-gray-200 leading-relaxed text-lg ">
        <img
          src={imagen}
          alt="Album"
          className={classNameImage}
        />
        <h2 className="text-3xl font-bold mb-8 text-pink-400 text-center">{titulo}</h2>
        <p>{parrafo1}</p>

        <p className="mt-4">{parrafo2}</p>

        <p className="mt-4">{parrafo3}</p>

        <p className="mt-4">{parrafo4}</p>
        <div className="clear-both"></div>
      </div>
    </section>);

}
