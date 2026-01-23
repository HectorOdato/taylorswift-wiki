import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import SongCard from "../components/ui/SongCard.jsx";
import albums from "../data/albums.js";


function AlbumPage() {
  const { id } = useParams();
  const album = albums.find((album) => album.id === id);


  if (!album) {
    return <div>Álbum no encontrado</div>;
  }

  return (
    <div className="min-h-screen relative bg-black">
      <Header className="relative z-10" />
      <div className={`absolute inset-0 ${album.background} z-0`} ></div>
      <div className="max-w-4xl mx-auto p-4 z-10 relative">
        <h1 className="text-3xl font-bold mb-4">{album.title} ({album.año})</h1>
        <img src={album.banner} alt={album.title} className="w-full h-auto mb-4 rounded-lg" />
        <p className="mb-4">{album.descripcion}</p>
        <h2 className="text-2xl font-semibold mb-4">Canciones:</h2>
        <div className="space-y-2">
          {album.songs.map((song, index) => (
            <SongCard key={index} song={song} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumPage;