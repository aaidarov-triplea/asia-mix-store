import styles from './styles.module.css'
import { FaPhone } from "react-icons/fa6"
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <span>
          ®{" "}
          <a href="/" className={styles.logo_link}>
            Asiamix Store
          </a>
        </span>
      </div>
      <div className={styles.help}>
        <ul className={styles.help_list}>
          <li>
            <a href="#">Информация</a>
          </li>
          <li>
            <a href="/payments-info">Условия оплаты</a>
          </li>
          <li>
            <a href="#">Условия доставки</a>
          </li>
        </ul>
        <ul className={styles.help_list}>
          <li>
            <a href="#">Помощь</a>
          </li>
          <li>
            <a href="#">Вопрос-ответ</a>
          </li>
          <li>
            <a href="#">Производители</a>
          </li>
        </ul>
      </div>
      <div className={styles.call_center}>
        <div>
          <div className={styles.call}>
            <FaPhone className={styles.call_icon} />
            <span className={styles.call_number}>055-5985909</span>
          </div>
          <a href="tel:+971555985909" className={styles.call_link}>
            Заказать звонок
          </a>
        </div>
        <div className={styles.icons}>
          <span>Мы в социальных сетях:</span>
          <div className={styles.icons_box}>
            <a href="#" className={styles.icons_link}>
              <LiaFacebookSquare className={styles.icons_link_icon} />
            </a>
            <a href="#" className={styles.icons_link}>
              <LiaInstagram className={styles.icons_link_icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
