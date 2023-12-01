import styles from './styles.module.css'

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <h2 className={styles.navbar_title}>Каталог</h2>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_link}>
          <a href='#'>Сухофрукты</a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
