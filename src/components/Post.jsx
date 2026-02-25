import styles from '../styles/Post.module.css';
import avatar from '../assets/icons/avatar.svg';
import axios from 'axios';

function Post({ title, text, postId, setIsDBUpdated }) {
  async function handelDelete(id) {
    try {
      const response = await axios.delete(
        `https://699eb2ee78dda56d396b075f.mockapi.io/posts/${id}`,
      );
      console.log(response.data);
    } catch {
      console.log('Error: DELETE Post');
    }
    setIsDBUpdated(true);
  }
  return (
    <div className={styles.postContainer}>
      <div className={styles.logoContainer}>
        <img src={avatar} alt="avatar" />
        <span>User logo</span>
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <h2>{text}</h2>
      </div>
      <div className={styles.buttonsContainer}>
        <span>{postId}</span>
        <button onClick={() => handelDelete(postId)}>Удалить</button>
      </div>
    </div>
  );
}
export default Post;
