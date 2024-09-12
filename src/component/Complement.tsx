import checkIcon from '../assets/images/icon-checkmark.svg'
import styles from './styles/complement.module.css'

interface Props {
  title: string
  info: string[]
  price: string
  checked: boolean
  handleCheckClick: () => void
}

const Complement: React.FC<Props> = ({title, info, price, checked, handleCheckClick}) => {
  return (
    <div 
      className={
        checked 
          ? `${styles['complement']} ${styles['complement--active']}`
          : styles['complement']
      } 
      onClick={handleCheckClick}
    >
      <img 
        className={
          checked
            ? `${styles['complement-check']} ${styles['complement-check--active']}`
            : styles['complement-check']
        }
        src={checkIcon} 
        alt="check icon" 
      />

      <div className={styles['complement-box']} >
        <p className={styles['complement-title']} >
          {title}
        </p>

        <ul>
          {
            info.map((value, index) => (
              <li 
                key={index}
                className={styles['complement-info']} 
              >
                {value}
              </li>
            ))
          }
        </ul>
      </div>

      <div className={styles['complement-price']} >
        {price}
      </div>
    </div>
  )
}

export default Complement