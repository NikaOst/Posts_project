import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/PostList.module.css';
import Post from './Post';

function PostList({ isDBUpdated, setIsDBUpdated }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState(0);

  async function fetchPosts() {
    try {
      const response = await axios.get('https://699eb2ee78dda56d396b075f.mockapi.io/posts');
      setPosts(response.data);
    } catch {
      console.log('Error: GET Posts');
    }

    setIsLoading(false);
    setIsDBUpdated(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isDBUpdated) {
    fetchPosts();
  }

  if (isLoading) {
    return <div>Загрузка постов...</div>;
  }

  if (!posts.length) {
    return <div>Постов пока нет</div>;
  }

  return (
    <div className={styles.postListContainer}>
      <h1>Список постов</h1>
      <div className={styles.postList}>
        {posts.slice(currentPost, currentPost + 3).map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            title={post.title}
            text={post.text}
            setIsDBUpdated={setIsDBUpdated}
          />
        ))}
      </div>
      <button
        className={styles.nextButton}
        onClick={() => {
          setCurrentPost((prev) => (prev + 3 >= posts.length ? 0 : prev + 3));
        }}>
        Далее
      </button>
    </div>
  );
}
export default PostList;
