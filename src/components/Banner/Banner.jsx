import Infostend from '../Infostend/Infostend';
import styles from './styles.module.css'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <img
          src="https://i.ibb.co/Tr2M5Pm/6.jpg"
          alt="banner"
          className={styles.wrapper_image}
        />

        <div className={styles.wrapper_info}>
          <h2 className={styles.info_title}>Мясное продукция</h2>
          <a href="#" className={styles.info_link}>
            Перейти в каталог
          </a>
        </div>
      </div>

      <Infostend />
    </section>
  );
}

export default Banner;
