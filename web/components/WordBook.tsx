"use client";

import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

export default function DataDisplay() {
  const { data, tags } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  useEffect(() => {
    if (tags && tags.length > 0) {
      setAvailableTags(tags);
    } else {
      const uniqueTags = Array.from(
        new Set(
          data
            .map((item) => item.tags)
            .filter(Boolean)
            .flatMap((tag) => (typeof tag === "string" ? [tag] : tag))
        )
      );
      setAvailableTags(uniqueTags);
    }
  }, [data, tags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.word
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      (item.tags &&
        (typeof item.tags === "string"
          ? selectedTags.includes(item.tags)
          : selectedTags.some((tag) => item.tags.includes(tag))));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <section id="search" className="px-4 animation glow delay-1 sm:px-0">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img
              src="/assets/icons/search.svg"
              alt="Search"
              className="w-5 h-5"
            />
          </div>
          <input
            type="text"
            placeholder="Search IT keywords, terms, principles, and concepts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-4 pl-10 bg-white border border-b-4 border-r-4 border-black rounded-lg focus:outline-none"
          />
        </div>
      </section>

      <section id="tags" className="animation glow delay-2">
        <div className="max-w-screen-sm px-4 mx-auto mt-4 mb-4 sm:px-0">
          <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`bg-white px-3 py-3 text-xs rounded-lg transition-colors cursor-pointer ${
                  selectedTags.includes(tag)
                    ? "text-black border border-b-4 border-r-4 border-black"
                    : "border"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="px-4 animation glow delay-3 sm:px-0">
        <div className="flex justify-end mt-4">
          <span className="text-sm text-gray-600">
            {filteredData.length}{" "}
            {filteredData.length === 1 ? "result" : "results"}
          </span>
        </div>
      </section>

      <section id="results" className="mt-4 mb-40 animation glow delay-3">
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-sm tracking-wider text-left text-black uppercase">
                  Word
                </th>
                <th className="px-6 py-3 text-sm tracking-wider text-left text-black uppercase">
                  Definition
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="ml-1 font-medium">{item.word}</div>
                    <div className="p-2 mt-2 text-xs text-gray-700 bg-gray-100 rounded-lg w-fit">
                      {item.tags}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {item.definition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
