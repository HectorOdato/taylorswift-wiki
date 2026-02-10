import react from "react";


export const AboutMe = () => {
    return (
        <div className="flex flex-col max-w-sm md:max-w-2xl lg:flex-row lg:max-w-7xl xl:max-w-6xl relative z-5 items-center justify-center bg-orange-600/80 p-10 rounded-lg  mx-auto ">
            <div>
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQF1HpqeGhLRUQ/profile-displayphoto-scale_200_200/B4DZtYlY0FHQAY-/0/1766717755794?e=1770854400&v=beta&t=YtGNB92wYg5R5owyJNFW3K8wqWE48k6Uv2h1bYxfoWg" alt="perfil" className="w-75 h-75 rounded-full shadow-2xl" />
            </div>
            <div>
                <p className="text-black max-w-4xl text-center mt-5">
                    Hola , Soy Hector , desarrollador en formacion y fan de taylor swift, La música siempre fue una forma de acompañarme en distintas etapas de mi vida, y las canciones de Taylor tienen esa capacidad única de contar historias, transmitir emociones y hacer que uno se sienta entendido incluso en los momentos más personales.
                    Esta página nació como la unión de dos cosas que hoy son parte de quién soy: mi camino en el mundo de la programación y mi admiración por su arte. Quise crear un espacio donde se pueda recorrer su música de una forma organizada, clara y visualmente atractiva.
                    Espero que disfruten navegando por este sitio tanto como yo disfruté creándolo. ¡Gracias por visitarlo!
                </p>
            </div>
        </div>
    );
}