import './App.css';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <Header />
      <div>
        <PostList />
        <PostForm />
      </div>
    </>
  );
}

export default App;
