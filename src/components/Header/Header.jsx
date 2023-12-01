import styles from './styles.module.css'
import LOGO from '../../assets/logo.svg'
//Icons
import { CiSearch } from "react-icons/ci"
import { MdFavoriteBorder } from "react-icons/md"
import { FiShoppingCart } from "react-icons/fi"

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img className={styles.logo_image} src={LOGO} alt="asia-mix store" />
        <h1 className={styles.logo_title}>Asiamix Store</h1>
      </a>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Поиск товаров"
          className={styles.search_input}
        />
        <CiSearch className={styles.search_icon} />
      </div>
      <div className={styles.icons}>
        <MdFavoriteBorder className={styles.icons_heart} />
        <div className={styles.cart}>
          <FiShoppingCart className={styles.cart_icon} />
          <span className={styles.cart_count}>0</span>
        </div>
      </div>
    </header>
  );
}

export default Header
