import { useEffect } from "react";

const Hangman = ({failedAttempts}) => {
  useEffect(() => {}, [failedAttempts]);
  return (
      <svg height="250" width="200">
        {/* ROD */}
        {failedAttempts > 0 && <line x1="20" y1="230" x2="100" y2="230" stroke="black" />}
        {failedAttempts > 1 && <line x1="60" y1="20" x2="60" y2="230" stroke="black" />}
        {failedAttempts > 2 && <line x1="60" y1="20" x2="140" y2="20" stroke="black" />}
        {failedAttempts > 3 && <line x1="140" y1="20" x2="140" y2="50" stroke="black" />}

        {/* HEAD */}
        {failedAttempts > 4 && <circle cx="140" cy="70" r="20" stroke="black" />}

        {/* BODY */}
        {failedAttempts > 5 && <line x1="140" y1="90" x2="140" y2="150" stroke="black" />}

        {/* ARMS */}
        {failedAttempts > 6 && <line x1="140" y1="120" x2="120" y2="100" stroke="black" />}
        {failedAttempts > 7 && <line x1="140" y1="120" x2="160" y2="100" stroke="black" />}

        {/* LEGS */}
        {failedAttempts > 8 && <line x1="140" y1="150" x2="120" y2="180" stroke="black" />}
        {failedAttempts > 9 && <line x1="140" y1="150" x2="160" y2="180" stroke="black" />}
    </svg>
  )
}
export default Hangman;