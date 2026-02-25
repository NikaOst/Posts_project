import styles from '../styles/Post.module.css';
import avatar from '../assets/icons/avatar.svg';

function Post({ title, text, postId }) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.logoContainer}>
        <img src={avatar} alt="avatar" />
        <span>User logo</span>
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <h1>{text}</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <span>{postId}</span>
        <button>Удалить</button>
      </div>
    </div>
  );
}
export default Post;
