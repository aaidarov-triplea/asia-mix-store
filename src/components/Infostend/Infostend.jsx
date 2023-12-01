import styles from './styles.module.css'

//Icons
import { TfiWorld } from "react-icons/tfi"
import { TbTruckDelivery } from "react-icons/tb"
import { PiContactlessPayment } from "react-icons/pi";

const Infostend = () => {
  return (
    <div className={styles.infostend}>
      <div className={styles.infostend_item}>
        <TfiWorld className={styles.item_icon} />
        <span className={styles.item_title}>
          Продаем продукты из Кыргызстана
        </span>
      </div>
      <div className={styles.infostend_item}>
        <TbTruckDelivery className={styles.item_icon} />
        <span className={styles.item_title}>
          Доставка в течение дня до Вашего дома
        </span>
      </div>
      <div className={styles.infostend_item}>
        <PiContactlessPayment className={styles.item_icon} />
        <span className={styles.item_title}>
          Различные возможности оплаты товара
        </span>
      </div>
    </div>
  );
};

export default Infostend;
