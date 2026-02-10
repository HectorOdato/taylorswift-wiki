import react from 'react';


const ContentDivider = ({ texto }) => {
  return (
    <div className="flex items-center my-10">
      {texto && (
        <p className="mx-6 text-black text-2xl md:text-2xl font-semibold tracking-wide">
          {texto}
        </p>
      )}
      <div className="flex-grow h-px bg-black"></div>
    </div>
  );
};

function AlbumDetails({ parrafolinea1, parrafolinea2, parrafolinea3, citatextual, parrafofinal, imagen,momentosclave }) {
  return (
    <section className="max-w-7xl mx-auto mt-10 mb-10 px-6 relative z-10">
      <div className="  p-8 text-black leading-relaxed text-lg ">
        <img
          src={imagen}
          alt="Album"
          className="float-left w-75 h-75 object-cover rounded-full mr-6 mb-3 shadow-lg border-4 border-pink-400"
        />

        <p>{parrafolinea1}</p>

        <p className="mt-4">{parrafolinea2}</p>

        <p className="mt-4">{parrafolinea3}</p>

        <p className="mt-4">{parrafofinal}</p>
        <p className="mt-4 italic font-bold text-pink-300">
          {citatextual}
        </p>
        <ul>
            <ContentDivider texto="Momentos Importantes" />
            {momentosclave && momentosclave.map((momento, index) => (
              <li key={index} className="ml-10 mt-5 list-disc list-inside text-amber-500 font-bold">
                {momento}
              </li>
            ))}
        </ul>
        <div className="clear-both"></div>
      </div>
    </section>
  );
}

export default AlbumDetails;