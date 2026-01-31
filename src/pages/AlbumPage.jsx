import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import SongCard from "../components/ui/SongCard.jsx";
import albums from "../data/AlbumsData.js";
import DescriptionsCard from "../components/ui/DescriptionCard.jsx";
import SectionDivider from "../components/ui/SectionDivider.jsx";
import Details from "../components/ui/AlbumDetails.jsx";
import detailsalbum from "../data/AlbumDetails.js";


function AlbumPage() {
  
  const { id } = useParams();
  const album = albums.find((album) => album.id === id);
  const detailsinfo = detailsalbum[id];


  if (!album) {
    return <div>Álbum no encontrado</div>;
  }
  return (
  <div className="min-h-screen relative bg-black text-white">
  <div className={`absolute inset-0 ${album.background} bg-cover bg-center`} />
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
  <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-12">    
    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
      <DescriptionsCard
        description={album.descripcion}
        src={album.imglogo}
        alt={album.title}
        title={album.title}
        año={album.año}
      />
    </section>
    <section className="space-y-6">
      <SectionDivider title="Datos Relevantes"/>
          <Details {...detailsinfo} />
    </section>
    <section className="flex justify-center">
      <img
        src={album.banner}
        alt={album.title}
        className="rounded-2xl w-full max-w-4xl shadow-2xl"
      />
    </section>
    <section className="space-y-6">
      <SectionDivider title="Canciones" />
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
        {album.songs.map((song, index) => (
          <SongCard key={song.id || index} song={song} index={index} />
        ))}
      </div>
    </section>
  </main>
</div>
  );
}

export default AlbumPage;