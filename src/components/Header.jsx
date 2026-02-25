import styles from '../styles/Header.module.css';
import logo from '../assets/icons/logo.svg';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="logo" />
      <div className={styles.linkContainer}>
        <a href="#">Главная</a>
        <a href="#">Музыка</a>
        <a href="#">Сообщества</a>
        <a href="#">Друзья</a>
      </div>
    </div>
  );
}
export default Header;
