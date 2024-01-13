import React from 'react';
import WordBook from './components/WordBook.tsx';
import { useData } from './hooks/useData.ts';

const App: React.FC = () => {
  const { data } = useData();
  return <WordBook data={data} />;
}

export default App
