import React, { useState } from 'react';

interface Props {
    quotes: string[];
}

const QuoteAppFunctional: React.FC<Props> = ({ quotes }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getIndex = (): number => {
        let newIndex = currentIndex;
        while (quotes.length > 1 && newIndex === currentIndex) {
            newIndex = Math.floor(Math.random() * quotes.length);
        }
        return newIndex;
    };

    const getNextQuote = (): void => {
        setCurrentIndex(getIndex());
    };

    const quoteToDisplay = quotes[currentIndex] || "No quote available.";

    return (
        <>
            <p>State and Props using TypeScript (Functional)</p>
            <h1>{quoteToDisplay}</h1>
            <button onClick={getNextQuote}>Next Interest</button>
        </>
    );
};

export default QuoteAppFunctional;
