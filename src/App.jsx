import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [isDBUpdated, setIsDBUpdated] = useState(false);
  return (
    <>
      <Header />
      <div className="postListAndForm">
        <PostList isDBUpdated={isDBUpdated} setIsDBUpdated={setIsDBUpdated} />
        <PostForm setIsDBUpdated={setIsDBUpdated} />
      </div>
    </>
  );
}

export default App;
