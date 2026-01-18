import { taylorSwiftImg, fearlessImg, speakNowImg, redImg, img1989, reputationImg, loverImg, folkloreImg, evermoreImg, midnightsImg, theTorturedPoetsDepartmentImg, theLifeOfAShowgirlImg } from "../assets/images/img.jsx";
import ttpdsong from "../data/Songs/Ttpd.json";


const albums = [
  {
    id: "taylor_swift",
    title: "Taylor Swift",
    año: 2006,
    img: taylorSwiftImg,
    descripcion: "Su álbum debut que la presentó al mundo con canciones emotivas sobre la adolescencia y el primer amor.",
    songs: ["Tim McGraw", "Teardrops on My Guitar", "Our Song", "Mary's Song", "Tied Together with a Smile", "Stay Beautiful", "Should've Said No", "Picture to Burn", "Cold as Stone", "The Outside", "A Perfectly Good Heart"],
  },
  {
    id: "fearless",
    title: "Fearless",
    año: 2008,
    img: fearlessImg,
    descripcion: "Un álbum sobre la valentía en el amor y la vida, con éxitos como Love Story y White Horse.",
    songs: ["Fearless", "Love Story", "White Horse", "You Belong With Me", "Fifteen", "Enchanted", "Back to December", "Champagne Problems", "Goodbye Summer", "The Last Time"],
  },
  {
    id: "speak_now",
    title: "Speak Now",
    año: 2010,
    img: speakNowImg,
    descripcion: "Su tercer álbum de estudio completamente escrito por Taylor, explorando temas de traición y venganza romántica.",
    songs: ["Mine", "Sparks Fly", "Back to December", "Innocent", "Enchanted", "Better Than Revenge", "Haunted", "Last Kiss", "Long Live", "Dear John"],
  },
  {
    id: "red",
    title: "Red",
    año: 2012,
    img: redImg,
    descripcion: "Un álbum que explora el rango completo de emociones en una relación, desde el amor apasionado hasta la ruptura dolorosa.",
    songs: ["State of Grace", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22", "I Almost Do", "We Are Never Getting Back Together", "Stay Stay Stay", "The Last Time", "Begin Again"],
  },
  {
    id: "1989",
    title: "1989",
    año: 2014,
    img: img1989,
    descripcion: "Su primer álbum completamente pop, marcando su transición de country a pop. Incluye algunos de sus mayores éxitos.",
    songs: ["Welcome to New York", "Blank Space", "Style", "Out of the Woods", "Shake It Off", "How You Get the Girl", "1989", "Bad Blood", "Wildest Dreams", "You Are in Love"],
  },
  {
    id: "reputation",
    title: "Reputation",
    año: 2017,
    img: reputationImg,
    descripcion: "Un álbum oscuro que enfrenta la controversia y la mala reputación que Taylor experimentó, con una estética de serpiente.",
    songs: ["...Ready For It?", "End Game", "Don't Call Me 'Angel'", "King of My Heart", "Delicate", "Gorgeous", "Getaway Car", "So It Goes...", "Reputation", "Dress"],
  },
  {
    id: "lover",
    title: "Lover",
    año: 2019,
    img: loverImg,
    descripcion: "Un álbum romántico y colorido que celebra el amor en todas sus formas. Incluye éxitos como ME! y Lover.",
    songs: ["ME!", "The Archer", "The Man", "Lover", "Cornelia Street", "Daylight", "The Story of Us", "Afterglow", "Invisible String", "Calm Down"],
  },
  {
    id: "folklore",
    title: "Folklore",
    año: 2020,
    img: folkloreImg,
    descripcion: "Un álbum de folk-pop íntimo lanzado sorpresivamente durante la pandemia, con narraciones de historias ficticias.",
    songs: ["the 1", "cardigan", "the last great american dynasty", "exile", "my tears ricochet", "mirrorball", "seven", "august", "this is me trying", "illicit affairs"],
  },
  {
    id: "evermore",
    title: "Evermore",
    año: 2020,
    img: evermoreImg,
    descripcion: "El hermano oscuro de Folklore, lanzado cinco meses después con una atmósfera más melancólica y narrativa.",
    songs: ["willow", "coney island", "no body, no crime", "coney island", "ivy", "cowboy like me", "long story short", "marjorie", "closure", "evermore"],
  },
  {
    id: "midnights",
    title: "Midnights",
    año: 2022,
    img: midnightsImg,
    descripcion: "Un álbum de concepto sobre los pensamientos de medianoche, con una atmósfera oscura y retro-futurista.",
    songs: ["Midnights", "Lavender Haze", "Anti-Hero", "Snow on the Beach", "You're On Your Own, Kid", "Midnight Rain", "Question...?", "Vigilante Sh*t", "Bejeweled", "Maroon"],
  },
  {
    id: "the_tortured_poets_department",
    title: "The Tortured Poets Department",
    año: 2024,
    img: theTorturedPoetsDepartmentImg,
    descripcion: "Su último álbum que explora el drama, la poesía y la catarsis emocional con una diversidad de estilos musicales.",
    songs: ttpdsong.map((song) => song.title + " - " + song.description),
  },
  {
    id: "the_life_of_a_showgirl",
    title: "The Life of a Showgirl",
    año: 2025,
    img: theLifeOfAShowgirlImg,
    descripcion: "Un álbum que celebra la vida sobre el escenario, la pasión por la música en vivo y el brillo del espectáculo.",
    songs: ["Spotlight", "Center Stage", "Encore", "Curtain Call", "Backstage Secrets", "Standing Ovation", "Dressed to Impress", "The Grand Finale", "Encore (Reprise)", "The Show Must Go On"],
  },
];


export default albums;