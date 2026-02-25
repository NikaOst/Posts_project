import styles from '../styles/PostForm.module.css';
import avatar from '../assets/icons/avatar.svg';
import axios from 'axios';

function PostForm() {
  const addNewPosts = async (postTitle, postText) => {
    try {
      const response = await axios.post('https://699eb2ee78dda56d396b075f.mockapi.io/posts', {
        title: postTitle,
        text: postText,
        date: new Date(),
      });
      console.log(response.data);
    } catch {
      console.log('Error: POST Posts');
    }
    // setIsLoading(false);
  };

  return (
    <div>
      <h1>Написать пост</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNewPosts();
        }}
        className={styles.form}>
        <img src={avatar} alt="avatar" />
        <div className={styles.mainForm}>
          <div className={styles.inputes}>
            <label>
              <span>Заголовок</span>
              <input type="text" placeholder="Заголовок" />
            </label>
            <label>
              <span>Текст поста</span>
              <input type="text" placeholder="Введите текст..." />
            </label>
          </div>
          <input type="submit" value={'Публикация'} />
        </div>
      </form>
    </div>
  );
}
export default PostForm;
