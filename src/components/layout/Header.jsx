import react from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="relative overflow-hidden shadow-2xl p-5 mb-8">
            <img src="https://res.cloudinary.com/deijzj2mb/image/upload/v1768883427/imagen_2026-01-20_013024052_flzobt.png" alt="" className='absolute top-0 left-0 w-full h-full object-cover z-10 sepia opacity-20'/>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-orange-900/70 to-orange-950/80 -z-5"></div>
            <div className="max-w-6xl mx-auto flex justify-between items-center relative z-10 px-8">
                <div className="flex flex-col py-12">
                    <h1 className="text-6xl font-black italic text-white drop-shadow-lg tracking-wide">Taylor Wiki</h1>
                    <h2 className="text-2xl text-orange-300 mt-2 font-light">✨ Song Vault ✨</h2>
                </div>
                <nav>
                    <ul className="flex space-x-8 font-bold text-2xl">
                        <li><Link to="/" className="text-white hover:text-orange-300 transition-colors duration-300">Inicio</Link></li>
                        <li><Link to="/albums" className="text-white hover:text-orange-300 transition-colors duration-300">Eras</Link></li>
                        <li><Link to="/about" className="text-white hover:text-orange-300 transition-colors duration-300">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}   

export default Header;