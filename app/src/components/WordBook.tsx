import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WordBookProps } from '../types/wordbookProps';
import { Tags } from './Tags.tsx';

export const WordBook: React.FC<WordBookProps> = ({ data, searchTerm, selectedTags }) => {
    const [displayCount, setDisplayCount] = useState(100);

    const loadData = () => {
        const remainingEntries = filterData.length - displayCount;
        const nextDisplayCount = displayCount + Math.min(remainingEntries, 100);
        setDisplayCount(nextDisplayCount);
    };

    let filterData = data.filter((item: { word: string }) =>
        item.word.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedTags.length > 0) {
        filterData = filterData.filter(item =>
            selectedTags.some(tag => item.tags.includes(tag))
        );
    }

    filterData = filterData.sort((a: { word: string }, b: { word: string }) => a.word.localeCompare(b.word));

    return (
        <div className="max-w-screen-md mx-auto my-10 animation glow delay-3">
            <p className="m-2 text-gray-400 text-sm text-right">
                {filterData.length} result(s)
            </p>
            <div className="relative overflow-x-auto shadow-md rounded-lg">
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
                        {filterData.length > 0 ? (
                            filterData.slice(0, displayCount).map((item) => (
                                <tr key={item.id} className="border-b border-gray-200 bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-100">
                                        {item.word}
                                        <div className="mt-3">
                                            <Tags tags={item.tags} />
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 text-gray-700">
                                        {item.definition}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <th scope="col" className="px-6 py-4 font-normal text-gray-500 bg-gray-50 text-center" colSpan={2}>
                                    No results found
                                    {searchTerm && ` for "${searchTerm}"`}
                                    <Link to="/form" className="ml-5 inline-flex items-center justify-center px-4 py-2.5 text-md font-medium text-center bg-gray-200 text-black rounded-lg border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                        Suggest a word
                                    </Link>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {filterData.length > displayCount && (
                <button onClick={loadData} className="block mx-auto mt-8 px-8 py-3 bg-black text-sm text-white rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Load More
                </button>
            )}
        </div>
    );
};