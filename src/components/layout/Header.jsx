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
    return (
        <header className="relative z-20 shadow-2xl p-5">
            <img src="https://res.cloudinary.com/deijzj2mb/image/upload/v1768883427/imagen_2026-01-20_013024052_flzobt.png" alt="" className='absolute top-0 left-0 w-full h-full object-cover z-10  opacity-50'/>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-orange-900/70 to-orange-950/80 -z-5"></div>
            <div className="max-w-6xl mx-auto flex justify-between items-center relative z-10 px-8">
                <div className="flex flex-col py-12">
                    <h1 className="text-6xl font-black italic text-white drop-shadow-lg tracking-wide">Taylor Wiki</h1>
                    <h2 className="text-2xl text-orange-300 mt-2 font-light">✨ Song Vault ✨</h2>
                </div>
                <nav>
                    <ul className="flex space-x-20 font-bold text-2xl">
                        <li><Link to="/" className="text-white hover:text-orange-300 transition-colors duration-300">Inicio</Link></li>
                        <li><DropdownMenu>{albums.map((album) => (
                        <Link
                            key={album.id}
                            to={`/album/${album.id}`}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orange-300">
                            {album.title}
                        </Link>
                    ))}</DropdownMenu></li>
                        <li><Link to="/about" className="text-white hover:text-orange-300 transition-colors duration-300">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}   

export default Header;