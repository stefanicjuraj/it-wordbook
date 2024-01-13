import React from 'react';
import { WordBook } from '../types/wordbook.ts';

interface WordBookProps {
    data: WordBook[];
}

const WordBookComponent: React.FC<WordBookProps> = ({ data }) => {
    return (
        <div className="mt-10 mb-10 max-w-screen-md mx-auto relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-md text-gray-900">
                    <tr className="border-b border-gray-200">
                        <th scope="col" className="px-6 py-3 bg-gray-100">
                            Word
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50">
                            Definition
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-100">
                                {item.word}
                            </th>
                            <td className="px-6 py-4 text-gray-700">
                                {item.definition}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WordBookComponent;
