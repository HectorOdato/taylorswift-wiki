import React from 'react';
import Header from '../components/layout/Header';
import AlbumCard from '../components/ui/AlbumCard.jsx';
import albums from '../data/albums.js';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <h1 className="text-2xl font-bold bg-red-500">Welcome to the Home Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-7xl mx-auto">
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
