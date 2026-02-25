import styles from '../styles/PostForm.module.css';
import avatar from '../assets/icons/avatar.svg';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function PostForm({ setIsDBUpdated }) {
  const { register, handleSubmit, reset } = useForm();

  const addNewPosts = async (data) => {
    try {
      const response = await axios.post('https://699eb2ee78dda56d396b075f.mockapi.io/posts', {
        title: data.title,
        text: data.text,
        date: new Date().toISOString(),
      });
      setIsDBUpdated(true);
      console.log(response.data);
      reset();
    } catch {
      console.log('Error: POST Posts');
    }
  };

  return (
    <div>
      <h1>Написать пост</h1>
      <form onSubmit={handleSubmit(addNewPosts)} className={styles.form}>
        <img src={avatar} alt="avatar" />
        <div className={styles.mainForm}>
          <div className={styles.inputes}>
            <label>
              <span>Заголовок</span>
              <input
                {...register('title', { required: true })}
                type="text"
                placeholder="Заголовок"
              />
            </label>
            <label>
              <span>Текст поста</span>
              <input
                {...register('text', { required: true })}
                type="text"
                placeholder="Введите текст..."
              />
            </label>
          </div>
          <input type="submit" value={'Публикация'} />
        </div>
      </form>
    </div>
  );
}
export default PostForm;
