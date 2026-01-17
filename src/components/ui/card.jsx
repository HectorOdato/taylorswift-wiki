import React from "react";

const Card = ({titulo, img, año}) => {
  return (
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center max-w-xs">
      <img src={img} alt={titulo} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2>{titulo}</h2>
      <p>{año}</p>
      <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors">Ver canciones</button>
    </div>
  );
};

export default Card;