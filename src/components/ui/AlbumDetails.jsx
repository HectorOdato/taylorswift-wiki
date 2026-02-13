import react from 'react';


const ContentDivider = ({ texto }) => {
  return (
    <div className="flex items-center my-10">
      {texto && (
        <p className=" text-black text-xl lg:text-3xl lg:mx-6 font-semibold tracking-wide">
          {texto}
        </p>
      )}
      <div className="lg:flex-grow h-px bg-black"></div>
    </div>
  );
};

function AlbumDetails({ parrafolinea1, parrafolinea2, parrafolinea3, citatextual, parrafofinal, imagen,momentosclave }) {
  return (
    <div className="max-w-7xl mx-auto mt-10 mb-10 px-6 relative z-10">
      <div className="text-black text-base md:text-base lg:text-lg xl:text-xl leading-relaxed text-left md:text-left ">
        <img
          src={imagen}
          alt="Album"
          className="float-left lg:w-75 lg:h-75 object-cover lg:rounded-full lg:mr-5 mb-3 shadow-lg lg:border-4 lg:border-pink-400"
        />

        <p>{parrafolinea1}</p>

        <p className="mt-4">{parrafolinea2}</p>

        <p className="mt-4">{parrafolinea3}</p>

        <p className="mt-4">{parrafofinal}</p>
        <p className="mt-4 italic text-pink-600 font-bold">
          {citatextual}
        </p>
        <ul>
            <ContentDivider texto="Momentos Importantes" />
            {momentosclave && momentosclave.map((momento, index) => (
              <li key={index} className="text-base  md:text-base lg:text-lg xl:text-xl leading-relaxed text-left md:text-left list-disc list-inside text-amber-500 font-bold">
                {momento}
              </li>
            ))}
        </ul>
        <div className="clear-both"></div>
      </div>
    </div>
  );
}

export default AlbumDetails;