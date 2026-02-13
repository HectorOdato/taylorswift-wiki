import React from "react";

const DescriptionsCard = ({ src,alt, description, title, año }) => {
    return (
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 rounded-lg max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
    {/* Imagen */}
    <div className="w-full md:w-auto">
        <img 
            className="w-full md:w-64 lg:w-80 xl:w-96 h-auto rounded-lg shadow-lg object-cover" 
            src={src} 
            alt={alt}
        />
    </div>
    
    {/* Contenido de texto */}
    <div className="flex flex-col w-full md:w-2/3 lg:w-auto lg:flex-1 p-4 md:p-5 lg:p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 text-black text-center md:text-left">
            {title} ({año})
        </h1>
        <p className="text-black text-base md:text-base lg:text-lg xl:text-xl leading-relaxed text-left md:text-left">
            {description}
        </p>
    </div>
</div>
    )
}

export default DescriptionsCard;