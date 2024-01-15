import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Search from './components/Search.tsx';
import WordBook from './components/WordBook.tsx';
import { useData } from './hooks/useData.ts';
import FilterTags from './components/FilterTags.tsx';

const App: React.FC = () => {
  const { data, tags } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filterDataByTags = data.filter(item => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every(tag => item.tags.includes(tag)) &&
      item.tags.every(tag => selectedTags.includes(tag));
  });

  return (
    <>
      <Header />
      <Search onSearch={(term) => setSearchTerm(term)} />
      <FilterTags tags={tags} onTagsChange={setSelectedTags} />
      <WordBook data={filterDataByTags} searchTerm={searchTerm} />
    </>
  );
}

export default App
