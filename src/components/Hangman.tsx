import { ReactElement, useEffect } from "react";

type HangmanProps = {
  failedAttempts: number
}

const Hangman = ({failedAttempts} : HangmanProps) => {
  useEffect(() => {}, [failedAttempts]);
  const hangmanParts : ReactElement[] = [
    // ROD
    <line x1="20" y1="230" x2="100" y2="230" stroke="black" />,
    <line x1="60" y1="20" x2="60" y2="230" stroke="black" />,
    <line x1="60" y1="20" x2="140" y2="20" stroke="black" />,
    <line x1="140" y1="20" x2="140" y2="50" stroke="black" />,
    // HEAD
    <circle cx="140" cy="70" r="20" stroke="black" />,
    // BODY
    <line x1="140" y1="90" x2="140" y2="150" stroke="black" />,
    // ARMS
    <line x1="140" y1="120" x2="120" y2="100" stroke="black" />,
    <line x1="140" y1="120" x2="160" y2="100" stroke="black" />,
    // LEGS
    <line x1="140" y1="150" x2="120" y2="180" stroke="black" />,
    <line x1="140" y1="150" x2="160" y2="180" stroke="black" />
  ];
  return (
      <svg height="250" width="200">
        {hangmanParts.slice(0, failedAttempts)}
    </svg>
  )
}
export default Hangman;