import React, { useState } from 'react';
import Search from './components/Search.tsx';
import WordBook from './components/WordBook.tsx';
import { useData } from './hooks/useData.ts';

const App: React.FC = () => {
  const { data } = useData();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Search onSearch={(term) => setSearchTerm(term)} />
      <WordBook data={data} searchTerm={searchTerm} />
    </>
  );
}

export default App
