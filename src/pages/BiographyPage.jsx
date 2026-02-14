import React from "react";
import Details from "../components/ui/AlbumDetails";
import { PageBackground } from "../components/layout/PageBackground";
import { ContentSection } from "../components/ui/ContentSection";
import { Carousel } from "../components/ui/carousel/Carousel";

const images = [
    "https://res.cloudinary.com/deijzj2mb/image/upload/v1770177178/taylor-swift-the-eras-tour-hamburg-n1-tas-rights-management-13116.jpg_eufeep.webp",
    "https://res.cloudinary.com/deijzj2mb/image/upload/v1770177178/large_EH_UNA_FOTO_2025_10_13_T100501_262_73c3e8b221_adq5ga.jpg",
    "https://res.cloudinary.com/deijzj2mb/image/upload/v1770177178/a6ad0b40c31da97597f213b28c40ca00_3072x2049_c3d8a0e4_y5sr6d.jpg",
    "https://res.cloudinary.com/deijzj2mb/image/upload/v1770177473/GettyImages-1801112143.jpg11_lz2ukc.webp",
];

const floatimage = {
    float_left: "float-left w-75 h-75 object-cover rounded-full mr-6 mb-3 shadow-lg border-4 border-pink-400/40",
    float_right: "float-right w-75 h-75 object-cover rounded-full ml-6 mb-3 shadow-lg border-4 border-pink-400/40"
}

export const BiographyPage = () => {
    return (
    <main className={`min-h-screen ${PageBackground.font_white} text-black p-8`}>
        <section className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:mt-10 lg:mb-10 px-4 lg:px-0">
        <div className="w-full lg:w-auto mb-6 lg:mb-0">
        <img 
            src="https://res.cloudinary.com/deijzj2mb/image/upload/v1770171269/GettyImages-2014750039-da654c28b8f84f3fb5c7db97106b1abc_yzricu.jpg" 
            alt="Taylor Swift Biography" 
            className="w-full lg:w-150 lg:h-150 object-cover rounded-xl shadow-lg animate-zoom-image"
        />
    </div>
        <div className="w-full lg:w-auto lg:ml-8 lg:p-10 flex flex-col gap-3 animate-fade-horizontal-left">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-5 text-center lg:text-left">
            Taylor Swift, historia y biografía
        </h1>
        <p className="text-sm lg:text-base text-center lg:text-left leading-relaxed">
            Cantante que se convirtió en una de las artistas más influyentes del siglo XXI.
        </p>
        <p className="text-sm lg:text-base text-center lg:text-left leading-relaxed">
            Sus inicios como compositora de música country y su llegada a la fama.
        </p>
    </div>
    </section>
            <ContentSection
                titulo="¿Quién es Taylor Swift ?"
                imagen="https://res.cloudinary.com/deijzj2mb/image/upload/v1769978160/taylor-swift-biografia-resumida_hyhgyj.webp"
                parrafo1="Taylor Swift es una cantante, compositora y productora estadounidense reconocida mundialmente por su capacidad para contar historias a través de la música. Nació el 13 de diciembre de 1989 en Pensilvania, Estados Unidos, y comenzó su carrera en la música country siendo adolescente, destacándose rápidamente por escribir canciones basadas en experiencias personales y emociones reales."
                parrafo2="Con el paso de los años, su estilo evolucionó más allá del country, explorando el pop, el indie folk, el alternative y otros géneros. Cada etapa de su carrera suele identificarse como una “era”, donde no solo cambia su sonido, sino también la estética, los temas de sus letras y su forma de expresarse artísticamente. Esta evolución constante es una de las razones por las que se convirtió en una de las artistas más influyentes de su generación."
                parrafo3="Además de su éxito musical, es conocida por su fuerte conexión con sus fans, su participación en la composición de la mayoría de sus canciones y su impacto en la industria, especialmente en temas de derechos de los artistas sobre su música. Su trabajo ha sido reconocido con múltiples premios y récords, consolidándola como una de las figuras más importantes de la música contemporánea. "
                parrafo4= "Taylor Swift enseña a sus fanáticos (Swifties) la importancia de la inteligencia emocional, la autenticidad y la resiliencia a través de sus letras autobiográficas y su carrera. Fomenta la creación de comunidad, el valor de la conexión personal, la creatividad mediante «easter eggs», y la capacidad de reinventarse constantemente. "
                classFloatImage={floatimage.float_right}
                />
                <br />
                <ContentSection
                    titulo="Su familia y vida personal"
                    imagen="https://res.cloudinary.com/deijzj2mb/image/upload/v1769836225/418301fa91314f0eb04d79d1db607e9c_xo7jvq.jpg"
                    parrafo1="Taylor Swift nació en Reading, Pensilvania, en una familia de clase media. Su padre, Scott Kingsley Swift, es un corredor de bolsa, y su madre, Andrea Gardner Swift, trabajaba como ejecutiva de marketing. Tiene un hermano menor llamado Austin Swift, quien también está involucrado en la industria del entretenimiento como actor."
                    parrafo2="Desde joven, Taylor mostró un gran interés por la música y la actuación. Su familia la apoyó en su carrera desde el principio, mudándose a Nashville, Tennessee, cuando ella tenía 14 años para que pudiera perseguir sus sueños en la música country."
                    parrafo3="A lo largo de los años, Taylor ha sido muy reservada sobre su vida personal, pero ha compartido algunos aspectos a través de su música y entrevistas. Ha tenido varias relaciones públicas que han sido objeto de atención mediática, pero siempre ha mantenido un enfoque en su carrera y su arte."
                    classFloatImage={floatimage.float_left}
                />
                <ContentSection 
                titulo="Su novio travis kelce"
                imagen="https://res.cloudinary.com/deijzj2mb/image/upload/v1770171363/taylor-swift-y-travis-kelce-la-historia-de-amor-IGMY5ZRXZVHTBPXT6Q2JOSJJL4_vazwgg.avif"
                parrafo1="La pareja actual de Taylor Swift es Travis Kelce, ala cerrada del equipo de la NFL, Kansas City Chiefs. Aunque no se sabe exactamente cuándo inició su relación, los registros de su relación comenzaron en septiembre de 2023, cuando Swift se presentó por primera vez en un partido de fútbol americano de los Kansas City Chiefs contra los Chicago Bears. A partir de ahí, sus apariciones juntos no cesaron, hasta que se les vio besándose en el concierto de The Eras Tour en Argentina. Su noviazgo ha estado lleno de momentos virales hasta la fecha, en el US Open."
                classFloatImage={floatimage.float_right}
                />
                <section className="flex flex-col items-center text-black leading-relaxed text-base md:text-lg lg:text-xl max-w-7xl mx-auto lg:mt-25 ">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 text-pink-400 text-center leading-relaxed">Como comenzo la carrera de Taylor Swift </h2>
                    <p className="mb-5">Motivada por la artista Shania Twain, Taylor decidió dejar las clases de actuación para enfocarse en cantar en festivales y eventos musicales. A los 11 años viajó junto a su madre a Tennessee con el objetivo de presentar grabaciones donde interpretaba canciones de Dolly Parton y de las Dixie Chicks a distintas compañías discográficas, aunque en ese momento no obtuvo respuesta positiva.
                        Más adelante, Taylor aprendió a tocar la guitarra y comenzó a dar sus primeros pasos en la composición de letras. Durante esa etapa, tuvo la oportunidad de participar como modelo en un programa de talentos emergentes de la marca Abercrombie & Fitch. Además, con el apoyo del representante artístico Dan Dymtrow, consiguió que una canción original suya fuera utilizada en una campaña de la marca Maybelline.
                    </p>
                    <p className="mb-5">La familia de Taylor se trasladó a Nashville para que ella pudiera participar en reuniones con compañías discográficas y sesiones de composición. Durante ese período, dedicaba alrededor de dos horas diarias a trabajar junto a compositores de música country vinculados a Music Row.
                    Con el tiempo, se convirtió en la artista más joven en firmar un contrato con la editorial musical Sony/ATV Music Publishing, aunque más adelante dejó ese acuerdo para integrarse al primer grupo de talentos de la nueva discográfica Big Machine Records. Bajo este sello, Taylor lanzó su álbum debut homónimo, Taylor Swift, publicado el 24 de octubre de 2006.</p>
                    <p className="mb-5"><strong>Taylor Swift</strong>inició su carrera discográfica con su álbum debut homónimo, Taylor Swift (2006). El sencillo principal fue <strong>“Tim McGraw”</strong>, y el disco logró una permanencia destacada en los rankings musicales. Entre 2006 y 2008 también se lanzaron otros sencillos del álbum, como “Teardrops on My Guitar”, “Our Song” y “Should’ve Said No”. Gracias a este primer trabajo, Taylor recibió una nominación como Mejor Nueva Artista en los Premios Grammy de 2008.
                        Su segundo álbum de estudio, Fearless (2008), marcó un crecimiento importante en su carrera y se presentó con el sencillo <strong>“Love Story”</strong>. De este disco también sobresalen canciones como <strong>“You Belong With Me”</strong>, <strong>“White Horse”</strong>, <strong>“Fifteen”</strong> y <strong>“Fearless”</strong>, que consolidaron su popularidad internacional.</p>
                    <p className="mb-5">En 2010 lanzó <strong>“Mine”</strong>, tema que adelantó su tercer álbum, Speak Now (2010). Este trabajo incluyó éxitos como <strong>“Back to December”</strong> y <strong>“Mean”</strong>, y se destacó porque todas las canciones fueron escritas únicamente por ella. El álbum también le permitió obtener un récord Guinness por la cantidad de descargas.
                        Dos años después presentó <strong>“We Are Never Ever Getting Back Together”</strong> como primer sencillo de Red (2012). Más tarde se sumaron otros lanzamientos del álbum, como <strong>“Begin Again”</strong>, <strong>“I Knew You Were Trouble”</strong>, <strong>“22”</strong> y <strong>“Everything Has Changed”</strong>, canciones que reforzaron su transición hacia un sonido más pop y lograron gran repercusión.</p>
                    <p className="mb-5"></p>
                    <img src="https://res.cloudinary.com/deijzj2mb/image/upload/v1770170902/taylor-swift-tijdens-de-grammy-uitreiking-in-februari-in-los-angeles_uojp96.avif" alt="image-content" className="mb-5"/>
                    <p className="mb-5">
                        En 2014, mientras se encontraba en Nueva York, Taylor trabajó en su álbum <strong>1989</strong>, que fue publicado el 27 de octubre de ese año. El primer sencillo fue <strong>“Shake It Off”</strong>, seguido por <strong>“Blank Space”</strong>, <strong>“Bad Blood”</strong> junto a Kendrick Lamar, y otros temas destacados como <strong>“Wildest Dreams”</strong> y <strong>“Out of the Woods”</strong>. El disco superó el millón de copias vendidas solo en Estados Unidos, y su gira, <strong>The 1989 World Tour</strong>, se convirtió en la más exitosa en recaudación durante 2015. El videoclip de <strong>“Bad Blood”</strong>, donde aparece acompañada por varias amigas y celebridades, alcanzó cifras récord de visualizaciones en plataformas digitales.
                    </p>
                    <p className="mb-5">
                        En 2017 presentó <strong>“Look What You Made Me Do”</strong>, sencillo con el que dio inicio a la era de <strong>Reputation</strong> (2017). El video tuvo un impacto masivo en su primer día de lanzamiento. Luego llegaron otros temas del álbum como <strong>“…Ready For It?”</strong>, <strong>“Gorgeous”</strong>, <strong>“Call It What You Want”</strong> y <strong>“End Game”</strong>, esta última en colaboración con Ed Sheeran y Future.
                    </p>
                    <p className="mb-5">
                        Su siguiente etapa fue <strong>Lover</strong> (2019), lanzado el 23 de agosto. El primer sencillo fue <strong>“Me!”</strong>, junto a Brendon Urie, vocalista de Panic! at the Disco. Después se publicaron <strong>“You Need to Calm Down”</strong>, <strong>“The Archer”</strong> y <strong>“Miss Americana & the Heartbreak Prince”</strong>, esta última vinculada al documental sobre su vida artística.
                    </p>
                    <p className="mb-5">
                        En 2020, Swift dio un giro sonoro importante con <strong>Folklore</strong>, explorando estilos como el indie folk y el alternative. El álbum incluye canciones como <strong>“The 1”</strong>, <strong>“Cardigan”</strong> y <strong>“Exile”</strong> junto a Bon Iver. Ese mismo año continuó esa línea musical con <strong>Evermore</strong> (2020), donde se encuentran temas como <strong>“Willow”</strong>, <strong>“No Body, No Crime”</strong> con Haim y <strong>“Coney Island”</strong> con The National.
                    </p>
                    <p className="mb-5">
                        Posteriormente regresó a un sonido más cercano al pop con influencias electrónicas en <strong>Midnights</strong> (2022), que contiene canciones como <strong>“Anti-Hero”</strong>, <strong>“Karma”</strong> y <strong>“Lavender Haze”</strong>. Más adelante, durante la gira <strong>The Eras Tour</strong>, anunció nuevos proyectos musicales, ampliando aún más su discografía.
                    </p>
                    <p className="mb-5">
                        En paralelo, debido a la disputa por los derechos de sus primeros seis álbumes, Taylor decidió regrabar su catálogo. Así surgieron <strong>Fearless (Taylor’s Version)</strong> y <strong>Red (Taylor’s Version)</strong> en 2021, seguidos por <strong>Speak Now (Taylor’s Version)</strong> y <strong>1989 (Taylor’s Version)</strong> en años posteriores. Aún quedan regrabaciones pendientes de sus primeros trabajos.
                    </p >
</section>
        <section>
            <ContentSection
            titulo="Cuantos grammys tiene Taylor Swift?"
            imagen="https://res.cloudinary.com/deijzj2mb/image/upload/v1770175716/taylor-swift-2023-grammys-red-carpet-roberto-cavalli-3_imoxms.jpg"
            parrafo1="Hasta la fecha, Taylor Swift ha ganado un total de 14 premios Grammy a lo largo de su carrera. Estos premios reflejan su talento y éxito en la industria musical, consolidándola como una de las artistas más reconocidas y premiadas de su generación."
            parrafo2="Sus primeros dos los ganó en 2010, cuando fue nominada a las categorías Álbum del año y Mejor álbum Country por el álbum Fearless (2008). También en 2010 Taylor ganó el Grammy por Mejor interpretación vocal de country y Mejor canción country por su canción White Horse (2008). Por la canción Mean (2010) la cantante ganó dos Grammy, por Mejor solo de country y Mejor canción country en la ceremonia del 2012. En 2013 Taylor junto a The Civil Wars ganó el premio Mejor canción para un medio visual con la canción Safe and Sound (2011)."
            parrafo3="Por su álbum 1989 (2014), Taylor ganó el premio Álbum del año y Mejor álbum pop. En 2016, por el video de su canción Bad Blood, ganó el Grammy a Mejor video musical. En 2021, Taylor Swift ganó Álbum del año por Folklore (2020) y para 2023, con la regrabación de Red y el videoclip de la canción All Too Well: The Short Film (2021), protagonizado por Sadie Sink y Dylan O’Brien, Taylor Swift se hizo de su doceavo Grammy por Mejor Videoclip."
            parrafo4="En 2023 ganó sus dos últimos Grammy en la categoría de Mejor álbum pop vocal y Álbum del año, ambos por Midnights."
            classFloatImage={floatimage.float_right}
            />

            </section>
            <section >
            <ContentSection
            titulo="El significado de The Eras Tour de Taylor Swift"
            imagen="https://res.cloudinary.com/deijzj2mb/image/upload/v1769836220/6510b956adcc4dd9d1eee35c95b22aa2_ngzvpr.gif"
            parrafo1="Ha sido habitual que la cantante estadounidense realizara giras principalmente dentro de su país y solo en contadas ocasiones en el extranjero con cada lanzamiento de sus álbumes de estudio. Sin embargo, al no poder salir de gira con Lover, Folklore y Evermore debido a la pandemia de COVID-19, la artista presentó un tour internacional que reúne canciones de todas sus etapas musicales, titulado The Eras Tour."
            parrafo2="The Eras Tour comenzó el 17 de marzo de 2023 en Glendale, Arizona, y finaliza el 23 de noviembre de 2024 en Toronto, Canadá. Con esta gira mundial, Taylor Swift recorre más de 50 ciudades a lo largo de 146 conciertos en Norteamérica, América Latina, Europa, Asia y Oceanía, incluyendo cuatro fechas en Ciudad de México y tres en Buenos Aires."
            parrafo3="La gira está proyectada para convertirse en una de las más exitosas de la historia entre artistas femeninas a nivel internacional, superando marcas establecidas previamente, y ha batido récords de preventa con una de las mayores cantidades de boletos vendidos por un artista en un solo día. En particular, en México, The Eras Tourconvirtió a Taylor Swift en el primer acto femenino en realizar cuatro fechas completamente agotadas dentro de una misma gira."
            classFloatImage={floatimage.float_left}
            />
            <div className="mt-10 mb-20 max-w-7xl mx-auto">
                <Carousel images={images} interval={2000} />
            </div>
            </section>
        </main>
    );
}