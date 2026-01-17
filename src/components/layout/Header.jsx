import react from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-pink-100">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex flex-col p-10">
                <h1 className="text-3xl font-bold italic ">Taylor Wiki</h1>
                <h2 className="text-xl text-gray-100">-----Song vault-----</h2>
                </div>
                <nav>
                    <ul className="flex space-x-4 font-bold text-2xl gap-15">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/songs">Canciones</Link></li>
                    <li><Link to="/albums">Eras</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}   

export default Header;