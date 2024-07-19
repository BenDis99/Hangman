import {useEffect, useState} from "react";

const MAX_FAILED_ATTEMPTS = 10;
const wordDictionary = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli",
    "vanilla",
    "watermelon",
    "xigua",
    "yellow",
    "zucchini",
    "abstract",
    "breeze",
    "cactus",
    "dolphin",
    "eagle",
    "forest",
    "giraffe",
    "horizon",
    "island",
    "jungle",
    "kaleidoscope",
    "lighthouse",
    "mountain",
    "nebula",
    "ocean",
    "prairie",
    "quasar",
    "rainbow",
    "sunrise",
    "tornado",
    "universe",
    "volcano",
    "whale",
    "xerox",
    "yacht",
    "zephyr",
    "albatross",
    "butterfly",
    "chameleon",
    "dinosaur",
    "elephant",
    "flamingo",
    "gazelle",
    "hippopotamus",
    "iguana",
    "jellyfish",
    "kangaroo",
    "lion",
    "monkey",
    "narwhal",
    "octopus",
    "penguin",
    "quail",
    "rhinoceros",
    "squirrel",
    "turtle",
    "umbrella",
    "vulture",
    "walrus",
    "xylophone",
    "yak",
    "zebra",
    "astronomy",
    "biology",
    "chemistry",
    "democracy",
    "ecosystem",
    "fossil",
    "genetics",
    "hypothesis",
    "innovation",
    "jurisdiction",
    "kinetic",
    "laboratory",
    "meteorology",
    "neuroscience",
    "observation",
    "physics",
    "quantum",
    "robotics",
    "synthesis",
    "theorem",
    "unicorn",
    "velocity",
    "wavelength",
    "xenon",
    "youth",
    "zenith",
    "bamboozlement",
    "flabbergasted",
    "hypothetical",
    "juxtaposition",
    "labyrinthine",
    "nebulousness",
    "quintessential",
    "sesquipedalian",
    "transcendental",
    "unpredictable",
    "verisimilitude",
    "whippersnapper",
    "xenotransplant",
    "yesteryear",
    "zigzaggedness"
];

const useGame = () => {
    // Should fetch random word from a dictionary (maybe vary by language)
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [failedAttempts, setFailedAttempts] = useState(0);
    const [hasEnded, setHasEnded] = useState(false);
    const [hasWon, setHasWon] = useState(false);

    const censorWord = (w) => w.split("").map(x => (guessedLetters.includes(x) || x === " " ? x : "_") + " ").join("");
    const newWord = () => setWord( wordDictionary[Math.floor( Math.random() * wordDictionary.length )]);
    
    const guessLetter = async (letter) => {
        if(!hasEnded && letter.length === 1){
            if(!word.includes(letter)) 
                setFailedAttempts(failedAttempts+1);
            setGuessedLetters([...guessedLetters, letter]);
        }
    }
    
    useEffect(()=> newWord(), [])
    useEffect(()=> {
        setGuessedLetters([]);
        setFailedAttempts(0);
        setHasEnded(false);
        setHasWon(false);
    }, [word]);
    
    useEffect(()=> {
        if(failedAttempts >= MAX_FAILED_ATTEMPTS)
            setHasEnded(true);
    }, [failedAttempts]);
    
    useEffect(()=> {
        console.log("finished:", censorWord(word), censorWord(word).includes("_"));
        if(word && !censorWord(word).includes("_")) {
            setHasWon(true);
            setHasEnded(true);
        }
    }, [guessedLetters]);

    return {
        newWord,
        hasEnded,
        hasWon,
        failedAttempts,
        guessLetter,
        guessedLetters,
        word : hasEnded ? word : censorWord(word)
    };
}
export default useGame;