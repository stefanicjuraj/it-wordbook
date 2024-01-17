import React, { useState, useEffect } from 'react';

interface FilterTags {
    tags: string[];
    onTagsChange: (selectedTags: string[]) => void;
}

const FilterTags: React.FC<FilterTags> = ({ tags, onTagsChange }) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleCheckboxChange = (tag: string) => {
        setSelectedTags(prevSelectedTags => {
            if (prevSelectedTags.includes(tag)) {
                return prevSelectedTags.filter(t => t !== tag);
            } else {
                return [...prevSelectedTags, tag];
            }
        });
    };

    const clearTags = () => {
        setSelectedTags([]);
    };

    useEffect(() => {
        onTagsChange(selectedTags);
    }, [selectedTags, onTagsChange]);

    const sortTags = [...tags].sort((a, b) => a.localeCompare(b));

    return (
        <div className="max-w-screen-sm mx-auto mt-10">
            <p className="text-gray-400 text-sm text-center my-2">
                Apply a tag to filter your search
            </p>
            <ul className="flex flex-wrap mx-auto items-center w-full rounded-lg justify-center">
                {sortTags.map(tag => (
                    <li key={tag} className="w-1/3 md:w-1/3 lg:w-1/5 mt-2 bg-gray-100 mx-1 p-3 rounded-xl">
                        <input type="checkbox"
                            id={`tag-${tag}`}
                            name={`tag-${tag}`}
                            value={tag}
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleCheckboxChange(tag)}
                            className="w-5 h-5 ml-1 text-black bg-gray-100 border-gray-400 rounded focus:ring-gray-900" />
                        <label htmlFor={`tag-${tag}`} className="w-full ml-2 text-sm font-normal text-gray-900">
                            {tag}
                        </label>
                    </li>
                ))}
            </ul>
            {selectedTags.length > 1 && (
                <button type="button" className="w-1/4 mt-4 text-xs font-normal text-center text-gray-500"
                    onClick={clearTags}>Clear tags</button>
            )}
        </div>
    );
};

export default FilterTags;
