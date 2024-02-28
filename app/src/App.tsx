import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useData } from './hooks/useData.ts';
import { Header } from './components/Header.tsx';
import { Search } from './components/Search.tsx';
import { FilterTags } from './components/FilterTags.tsx';
import { WordBook } from './components/WordBook.tsx';
import { Form } from './components/Form.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import './App.css';

export const App: React.FC = () => {
  const { data, tags } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filterDataByTags = data.filter(item => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some(tag => item.tags.includes(tag));
  });

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Search onSearch={(term) => setSearchTerm(term)} />
              <FilterTags tags={tags} onTagsChange={setSelectedTags} />
              <WordBook data={filterDataByTags} searchTerm={searchTerm} />
              <ScrollToTop />
            </>
          } />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}
