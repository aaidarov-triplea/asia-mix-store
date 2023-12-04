import styles from './styles.module.css'

import { BsFillPersonCheckFill } from "react-icons/bs"
import { FaCreditCard } from "react-icons/fa6"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useNavigate } from 'react-router-dom'

const Banner = () => {
const navigate = useNavigate()
  const hendleClose = () => {
    navigate('/')
  }

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_contain}>
        <div className={styles.modal_contain_box}>
          <IoIosCloseCircleOutline  className={styles.modal_close} onClick={hendleClose}/>
          <h1 className={styles.contain_box_title}>Условия оплаты</h1>
          <p className={styles.contain_box_subtitle}>
            Вы можете оплатить покупку:
          </p>
          <div className={styles.contain_box_body}>
            <BsFillPersonCheckFill className={styles.contain_box_body_icon} />
            <span className={styles.contain_box_body_title}>
              Наличными курьеру;
            </span>
          </div>
          <div className={styles.contain_box_body}>
            <FaCreditCard className={styles.contain_box_body_icon} />
            <span className={styles.contain_box_body_title}>
              Банковской картой курьеру (Visa и Master Card).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
