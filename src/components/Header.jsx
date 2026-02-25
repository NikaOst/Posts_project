import styles from '../styles/Header.module.css';
import logo from '../assets/icons/logo.svg';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="logo" />
      <span>Главная</span>
      <span>Музыка</span>
      <span>Сообщества</span>
      <span>Друзья</span>
    </div>
  );
}
export default Header;
