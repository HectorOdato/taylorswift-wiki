import react from "react";
import {useState,useRef,useEffect} from "react"; 
import { Link } from "react-router-dom";
import albums from "../../data/AlbumsData";


function DropdownMenu({children}) {
    /* utilice para cerrar y abrir el menu si IsOpen = TRUE se abre */
    const [isOpen, setIsOpen] = useState(false); 
    /* useRef para referenciar el menu desplegable como tag HTML y asi  detectar los clicks fuera de el */
    const dropdownRef = useRef(null);

    /* Aca use UseEffect para cerrar el menu al hacer click fuera de el */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-orange-300 transition-colors duration-300"
            >
                Eras
            </button>
            {isOpen && (
                <div className="left-0 mt-2 w-48 bg-white shadow-lg rounded-md absolute z-50">
                    {children} {/* Aca use children para que se renderizen los links de la lista desplegable, es decir todo lo que ponga entre los tags de DropdownMenu */}
                </div>
            )}
        </div>
    );
}

const Header = () => {
    {/* Estado para manejar el menu movil */}
    const [isOpen, setIsOpen] = useState(false);
    {/* Estado para manejar el menu eras movil */}
    const [showAlbums, setShowAlbums] = useState(false);

    return (
        <header className="relative z-20 shadow-2xl p-3 sm:p-5">
            <img 
                src="https://res.cloudinary.com/deijzj2mb/image/upload/v1768883427/imagen_2026-01-20_013024052_flzobt.png" 
                alt="" 
                className='absolute top-0 left-0 w-full h-full object-cover z-0'/>
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col py-4 sm:py-8 lg:py-12">
                        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black italic text-white drop-shadow-lg tracking-wide">
                            Taylor Wiki
                        </h1>
                        <h2 className="text-sm sm:text-lg lg:text-2xl text-orange-300 mt-1 sm:mt-2 font-light">
                            ✨ Song Vault ✨
                        </h2>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6 lg:space-x-12 xl:space-x-20 font-bold text-lg lg:text-xl xl:text-2xl bg-black/70 p-5 rounded-xl">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-white hover:text-orange-300 transition-colors duration-300">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/biography" 
                                    className="text-white hover:text-orange-300 transition-colors duration-300">
                                    Biografía
                                </Link>
                            </li>
                            <li>
                                <DropdownMenu>
                                    {albums.map((album) => (
                                    <Link
                                        key={album.id}
                                        to={`/album/${album.id}`}
                                        className="block px-4 py-2  text-gray-800 hover:bg-gray-100 hover:text-orange-300 rounded-2xl">
                                        {album.title}
                                    </Link>
                                    ))}
                                </DropdownMenu>
                            </li>
                        </ul>
                    </nav>
                    <button 
                        className="md:hidden text-2xl sm:text-3xl text-white hover:text-orange-300 transition-colors duration-300 p-2" 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu">
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            
                {isOpen && (
                    <nav className="md:hidden mt-4 pb-4 bg-black/70 rounded-xl p-4">
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/" 
                                    className="block text-white hover:text-orange-300 transition-colors duration-300 py-2 text-lg font-semibold"
                                    onClick={() => setIsOpen(false)}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/biography" 
                                    className="block text-white hover:text-orange-300 transition-colors duration-300 py-2 text-lg font-semibold focus-within:outline-none"
                                    onClick={() => setIsOpen(false)}>
                                    Biografía
                                </Link>
                            </li>
                            <li>
                                <button 
                                onClick={() => setShowAlbums(!showAlbums)}
                                className="block text-white hover:text-orange-300 transition-colors duration-300 py-2 text-lg font-semibold w-full text-left">
                                Eras {showAlbums ? '▲' : '▼'}
                            </button>
                            {showAlbums && (
                                <ul className="mt-2 space-y-2 pl-4 border-l-2 border-orange-300 group-focus-within:block group-hover:block">
                                    {albums.map((album) => (
                                        <li key={album.id}>
                                            <Link
                                                to={`/album/${album.id}`}
                                                className="block text-orange-200 hover:text-orange-300 transition-colors duration-300 py-1"
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setShowAlbums(false);
                                                }}>
                                                {album.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            )}
            </div>
        </header>
    );
}

export default Header;