import React from 'react';
import { WordBook } from '../types/wordbook.ts';

interface WordBookProps {
    data: WordBook[];
}

const WordBookComponent: React.FC<WordBookProps> = ({ data }) => {
    return (
        <div>
            {data.map((wordbook) => (
                <div key={wordbook.id}>
                    <p>{wordbook.word}</p>
                    <p>{wordbook.definition}</p>
                </div>
            ))}
        </div>
    );
};

export default WordBookComponent;
