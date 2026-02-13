import react from "react";
import {useState,useRef,useEffect} from "react"; 
import { Link } from "react-router-dom";
import albums from "../../data/AlbumsData";


function DropdownMenu({children}) {
    /* utilice para cerrar y abrir el menu si IsOpen = TRUE se abre */
    const [isOpen, setIsOpenMenu] = useState(false); 
    /* useRef para referenciar el menu desplegable como tag HTML y asi  detectar los clicks fuera de el */
    const dropdownRef = useRef(null);

    /* Aca use UseEffect para cerrar el menu al hacer click fuera de el */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenMenu(false);
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
                onClick={() => setIsOpenMenu(!isOpen)}
                className="text-white hover:text-orange-300 transition-all duration-300 hover:scale-110"
            >
                Eras
            </button>
            {isOpen && (
                <div className="left-0 mt-2 w-50 bg-black/70 shadow-lg rounded-md absolute z-50 animate-fade-vertical-down">
                    {children} {/* Aca use children para que se renderizen los links de la lista desplegable, es decir todo lo que ponga entre los tags de DropdownMenu */}
                </div>
            )}
        </div>
    );
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
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

                    {/* Navegación Desktop */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6 lg:space-x-12 xl:space-x-20 font-bold text-lg lg:text-xl xl:text-2xl bg-black/70 p-5 rounded-xl backdrop-blur-sm">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-white hover:text-orange-300 transition-all duration-300 hover:scale-110 inline-block">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/biography" 
                                    className="text-white hover:text-orange-300 transition-all duration-300 hover:scale-110 inline-block">
                                    Biografía
                                </Link>
                            </li>
                            <li>
                                <DropdownMenu>
                                    {albums.map((album) => (
                                        <Link
                                            key={album.id}
                                            to={`/album/${album.id}`}
                                            onClick={() => setIsOpenMenu=false}
                                            className="block px-4 py-2 text-orange-400 hover:bg-orange-100 hover:text-orange-600 rounded-xl transition-all duration-200 transform hover:translate-x-1">
                                            {album.title}
                                        </Link>
                                    ))}
                                </DropdownMenu>
                            </li>
                        </ul>
                    </nav>
                    {/* Botón de menú móvil */}
                    <button 
                        className="md:hidden text-2xl sm:text-3xl text-white hover:text-orange-300 transition-all duration-300 p-2 hover:scale-110" 
                        onClick={() => setIsOpen(!isOpen)}>
                        <span className={`inline-block transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                            {isOpen ? '✕' : '☰'}
                        </span>
                    </button>
                </div>
                {/* Navegación Móvil */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity- '
                    }`}>
                    <nav className="mt-4 pb-4 p-5 bg-black/70 rounded-2xl">
                        <ul className="space-y-3">
                            <li className="transform transition-all duration-300 hover:translate-x-2">
                                <Link 
                                    to="/" 
                                    className="block text-white hover:text-orange-300 transition-colors duration-300 py-2 text-lg font-semibold"
                                    onClick={() => setIsOpen(false)}>
                                    Inicio
                                </Link>
                            </li>
                            <li className="transform transition-all duration-300 hover:translate-x-2">
                                <Link 
                                    to="/biography" 
                                    className="block text-white hover:text-orange-300 transition-colors duration-300 py-2 text-lg font-semibold"
                                    onClick={() => setIsOpen(false)}>
                                    Biografía
                                </Link>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setShowAlbums(!showAlbums)}
                                    className="flex items-center justify-between w-full text-white hover:text-orange-300 transition-all duration-300 py-2 text-lg font-semibold group">
                                    <span className="transform transition-all duration-300 group-hover:translate-x-2">
                                        Eras
                                    </span>
                                    <span className={`transform transition-transform duration-300 ${showAlbums ? 'rotate-180' : 'rotate-0'}`}>
                                        ▼
                                    </span>
                                </button>
                                <div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        showAlbums ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}>
                                    <ul className="space-y-2 pl-4 border-l-2 border-orange-300">
                                        {albums.map((album, index) => (
                                            <li 
                                                key={album.id}
                                                className="transform transition-all duration-300 hover:translate-x-2"
                                                style={{
                                                    transitionDelay: showAlbums ? `${index * 50}ms` : '0ms'
                                                }}>
                                                <Link
                                                    to={`/album/${album.id}`}
                                                    className="block text-orange-400 hover:text-orange-300 transition-colors duration-300 py-1"
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setShowAlbums(false);
                                                    }}>
                                                {album.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;