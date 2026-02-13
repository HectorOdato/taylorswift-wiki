import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SongCard from "../components/ui/SongCard.jsx";
import albums from "../data/AlbumsData.js";
import DescriptionsCard from "../components/ui/DescriptionCard.jsx";
import SectionDivider from "../components/ui/SectionDivider.jsx";
import AlbumDetails from "../components/ui/AlbumDetails.jsx";
import AlbumDetailsContent  from "../data/AlbumDetails.js";
import {Carousel} from "../components/ui/carousel/Carousel.jsx";
import imagesCarousel from "../components/ui/carousel/carouselImages.js";

function AlbumPage() {
  const { id } = useParams();
  const album = albums.find((album) => album.id === id);
  const detailsinfo = AlbumDetailsContent[id];
  const albumCarousel = imagesCarousel.find((item) => item.id === id);


  if (!album) {
    return <div>Álbum no encontrado</div>;
  }

    /*Para ver que cancion esta selecionada*/
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
  <div className="min-h-screen relative ">
    <div className={`absolute inset-0 ${album.background} bg-cover bg-center `} />
    <main className={`relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-10 lg:space-y-16 `}>
    <section className="bg-white/5 border border-white/10 rounded-2xl p-10 mt-10 shadow-lg max-w-7xl mx-auto">
      <DescriptionsCard
        description={album.descripcion}
        src={album.imglogo}
        alt={album.title}
        title={album.title}
        año={album.año}
      />
    </section>
    <section className="space-y-6 max-w-7xl mx-auto">
      <SectionDivider title="Datos Relevantes"/>
          <AlbumDetails {...detailsinfo} />
    </section>
    <section className="flex justify-center">
      <img
        src={album.banner}
        alt={album.title}
        className="rounded-2xl w-full max-w-4xl shadow-2xl"
      />
    </section>
    <section>
      <SectionDivider title="Galería de Imágenes" />
      <div className="max-w-7xl mx-auto">
          {albumCarousel && (<Carousel images={albumCarousel.images} /> )}
      </div>
    </section>
    <section className="space-y-5">
      <SectionDivider title="Canciones" />
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 space-y-4">
        {album.songs.map((song, index) => (
          <SongCard
            key={song.id || index}
            song={song}
            index={index}
            isOpen={openIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  </main>
  </div>
  );
}

export default AlbumPage;