import { taylorSwiftImg, fearlessImg, speakNowImg, redImg, img1989, reputationImg, loverImg, folkloreImg, evermoreImg, midnightsImg, theTorturedPoetsDepartmentImg, theLifeOfAShowgirlImg } from "../assets/images/img.jsx";
import { imgdebutbanner, imgfearlessbanner, imgspeaknowbanner, imgredbanner, img1989banner, imgreputationbanner, imgloverbanner, imgfolklorebanner, imgevermorebanner, imgmidnightsbanner, imgtorturedpoetsbanner, imglifeofashowgirlbanner } from "../assets/images/imgbanners.jsx";
import { gradientClasses } from "../components/layout/PageBackground.jsx";
import {descriptions}  from "./descriptionalbum.js"
import ttpdsong from "../data/Songs/Ttpd.json";
import song from "../data/Songs/1989.json";
import debugsong from "../data/Songs/Debug.json";
import fearlesssong from "../data/Songs/Fearless.json";
import folkloresong from "../data/Songs/Folklore.json";
import loversong from "../data/Songs/Lover.json";
import repsong from "../data/Songs/REP.json";

const albums = [
  {
    id: "taylor_swift",
    title: "Taylor Swift",
    año: 2006,
    img: taylorSwiftImg,
    banner: imgdebutbanner,
    background: gradientClasses.debut,
    descripcion: descriptions.debut,
    songs: debugsong,
  },
  {
    id: "fearless",
    title: "Fearless",
    año: 2008,
    banner: imgfearlessbanner,
    img: fearlessImg,
    background: gradientClasses.fearless,
    descripcion: descriptions.fearless,
    songs: fearlesssong,
  },
  {
    id: "speak_now",
    title: "Speak Now",
    año: 2010,
    banner: imgspeaknowbanner,
    img: speakNowImg,
    background: gradientClasses.speakNow,
    descripcion: descriptions.speakNow,
    songs: ["Mine", "Sparks Fly", "Back to December", "Innocent", "Enchanted", "Better Than Revenge", "Haunted", "Last Kiss", "Long Live", "Dear John"],
  },
  {
    id: "red",
    title: "Red",
    año: 2012,
    img: redImg,
    banner: imgredbanner,
    background: gradientClasses.red,
    descripcion: descriptions.red,
    songs: ["State of Grace", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22", "I Almost Do", "We Are Never Getting Back Together", "Stay Stay Stay", "The Last Time", "Begin Again"],
  },
  {
    id: "1989",
    title: "1989",
    año: 2014,
    img: img1989,
    banner: img1989banner,
    background: gradientClasses.nineteenEightyNine,
    descripcion: descriptions.nineteenEightyNine,
    songs: song,
  },
  {
    id: "reputation",
    title: "Reputation",
    año: 2017,
    img: reputationImg,
    banner: imgreputationbanner,
    background: gradientClasses.reputation,
    descripcion: descriptions.reputation,
    songs: repsong,
  },
  {
    id: "lover",
    title: "Lover",
    año: 2019,
    img: loverImg,
    banner: imgloverbanner,
    background: gradientClasses.lover,
    descripcion: descriptions.lover,
    songs: loversong,
  },
  {
    id: "folklore",
    title: "Folklore",
    año: 2020,
    img: folkloreImg,
    banner: imgfolklorebanner,
    background: gradientClasses.folklore,
    descripcion: descriptions.folklore,
    songs: folkloresong,
  },
  {
    id: "evermore",
    title: "Evermore",
    año: 2020,
    img: evermoreImg,
    banner: imgevermorebanner,
    background: gradientClasses.evermore,
    descripcion: descriptions.evermore,
    songs: ["willow", "coney island", "no body, no crime", "coney island", "ivy", "cowboy like me", "long story short", "marjorie", "closure", "evermore"],
  },
  {
    id: "midnights",
    title: "Midnights",
    año: 2022,
    img: midnightsImg,
    banner: imgmidnightsbanner,
    background: gradientClasses.midnights,
    descripcion: descriptions.midnights,
    songs: ["Midnights", "Lavender Haze", "Anti-Hero", "Snow on the Beach", "You're On Your Own, Kid", "Midnight Rain", "Question...?", "Vigilante Sh*t", "Bejeweled", "Maroon"],
  },
  {
    id: "the_tortured_poets_department",
    title: "The Tortured Poets Department",
    año: 2024,
    img: theTorturedPoetsDepartmentImg,
    banner: imgtorturedpoetsbanner,
    background: gradientClasses.theTorturedPoetsDepartment,
    descripcion: descriptions.theTorturedPoetsDepartment,
    songs: ttpdsong,
  },
  {
    id: "the_life_of_a_showgirl",
    title: "The Life of a Showgirl",
    año: 2025,
    img: theLifeOfAShowgirlImg,
    banner: imglifeofashowgirlbanner,
    background: gradientClasses.lifeOfAShowgirl,
    descripcion: descriptions.theLifeOfAShowgirl,
    songs: ["Spotlight", "Center Stage", "Encore", "Curtain Call", "Backstage Secrets", "Standing Ovation", "Dressed to Impress", "The Grand Finale", "Encore (Reprise)", "The Show Must Go On"],
  },
];


export default albums;