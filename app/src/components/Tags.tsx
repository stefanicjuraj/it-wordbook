import React from 'react';

interface TagsProps {
    tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    const sortTags = [...tags].sort();

    const renderTags = () => {
        const rows: JSX.Element[] = [];
        for (let i = 0; i < sortTags.length; i += 2) {
            rows.push(
                <div key={i} className="flex">
                    {sortTags.slice(i, i + 2).map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-xs text-gray-500 font-normal px-1.5 py-1 rounded-md mx-0.5 my-0.5">
                            {tag}
                        </span>
                    ))}
                </div>
            );
        }
        return rows;
    };

    return (
        <>
            {renderTags()}
        </>
    );
};

export default Tags;
