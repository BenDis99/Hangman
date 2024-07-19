import useGame from "../hooks/useGame";
import Hangman from "./Hangman";

const Game = () => {
    const {
        newWord,
        hasEnded,
        hasWon,
        failedAttempts,
        guessLetter,
        guessedLetters,
        word 
    } = useGame();
    return (
        <div>
            <h1>Hangman game</h1>
            <div className="word">
                <p>{word}</p>
            </div>
            <div className="hangman-illustrtion">
                <Hangman failedAttempts={failedAttempts} />
            </div>
            <div className="guessButtons">
                {"abcdefghijklmnopqrstuvwxyz".split("").map(x => (
                    <button key={x} onClick={() => guessLetter(x)} disabled={hasEnded || guessedLetters.includes(x)}>{x}</button>
                ))}
            </div>
            {hasEnded && (
                <div className="game-over">
                    {hasWon && (<h1>Yay, you won</h1>)}
                    {!hasWon && (<h1>Too bad, you lose</h1>)}
                </div>
            )}
            <button onClick={newWord}>New word</button>
        </div>
    )
};
export default Game;