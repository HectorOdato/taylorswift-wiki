import react from 'react';

export function Footer(){
    return(
        <footer>
        <div className='bg-orange-600 w-full h-2 '></div>
        <div className='flex  flex-col items-center justify-center bg-emerald-400 h-50 w-full p-4 text-center'>
        <div className='text-black text-sm lg:text-xl '>
            <p>Este sitio es un proyecto con fines educativos y de práctica en desarrollo web.</p>
            <p>La información mostrada es de carácter informativo.</p>
            <p>Todos los derechos de las canciones, imágenes y contenido relacionado pertenecen a Taylor Swift y a sus respectivos propietarios.</p>
            <p>Sitio no oficial</p>
        </div>
        </div>
        </footer>
    )
}