import React from 'react';
import Header from '../components/layout/Header';
import AlbumCard from '../components/ui/AlbumCard.jsx';
import albums from '../data/albums.js';

function Home() {
    return (
        <div className="min-h-screen relative bg-black">
            <Header />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-orange-900/70 to-black z-5"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-7xl mx-auto">
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        Album={album}
                    />
                ))}
                
            </div>
        </div>
    );
}


export default Home;
