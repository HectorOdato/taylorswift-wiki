import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ Album }) => {
  return (
    <Link to={`/album/${Album.id}`}>
      <div className="bg-white  shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
        <img 
          src={Album.img} 
          alt={Album.title} 
          className="w-full h-64 object-cover" 
        />
      </div>
    </Link>
  );
};

export default AlbumCard;