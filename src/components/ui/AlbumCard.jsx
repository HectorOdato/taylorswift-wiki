import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`}>
      <div className="shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
        <img 
          src={album.img} 
          alt={album.title} 
          className="w-full h-64 object-cover" 
        />
      </div>
    </Link>
  );
};

export default AlbumCard;