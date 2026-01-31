import React from 'react';
import AlbumCard from '../components/ui/AlbumCard.jsx';
import albums from '../data/AlbumsData.js';
import { AboutMe } from '../components/ui/AboutMe.jsx';
import SectionDivider from '../components/ui/SectionDivider.jsx';

function Home() {
    return (
        <div className="min-h-screen relative bg-black">
            <div className="absolute top-0 left-0 w-full h-full bg-stone-950"></div>
            <div className="flex justify-center mx-auto pt-10 pb-10">
                <img src="https://res.cloudinary.com/deijzj2mb/image/upload/v1769483226/pinot_noir_ezdwef.png" alt="welcome" className='relative z-10 w-350 h-150 rounded-xl' />
            </div>
            <SectionDivider title="Eras" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-7xl mx-auto">
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        album={album}
                    />
                ))}
            </div>
            <SectionDivider title="Sobre Mí" />
            <div className='pb-15 mt-20'>
                <AboutMe />
            </div>
        </div>
    );
}


export default Home;
