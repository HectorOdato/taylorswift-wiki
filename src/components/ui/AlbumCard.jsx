import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`}>
          <div className="w-75 h-75 perspective group relative z-10 border-2 border-white ">
      <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Cara frontal */}
        <img
          src={album.img}
          alt={album.title}
          className="absolute w-full h-full object-cover backface-hidden"
        />
        {/* Cara trasera */}
        <img
          src={album.imglogo}
          alt={album.title}
          className="absolute w-full h-full object-cover backface-hidden rotate-y-180 sepia opacity-50"
        />
      </div>
    </div>
    </Link>
  );
};

export default AlbumCard;