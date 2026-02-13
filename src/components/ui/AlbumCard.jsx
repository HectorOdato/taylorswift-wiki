import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`}>
      <div className="w-80 h-60 lg:w-75 lg:h-75 group border border-black ">
      <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Cara frontal */}
        <img
          src={album.imgcard}
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