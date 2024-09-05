import { STEPS } from '../constants/STEPS'
import styles from './styles/stepSidebar.module.css'

interface Props {
  step: number
}

const StepSidebar: React.FC<Props> = ({step}) => {
  return (
    <ul className={styles['container']} >
      {
        STEPS.map((value, index, array) => (
          <li 
            className={styles['step']} 
            key={index}
          >         
            <div className={
              step === (index + 1) 
                ? `${styles['step-number']} ${styles['step-number--active']}`
                : (step === (array.length + 1) && (index + 1) === array.length)
                  ? `${styles['step-number']} ${styles['step-number--active']}`
                  : styles['step-number'] 
            }>
              {index + 1}
            </div>
            
            <div className={styles['step-info']} >
              STEP {index + 1}
            </div>
              
            <div className={styles['step-title']} >
              {value.title}
            </div>            
          </li>
        ))
      }
    </ul>   
  )
}

export default StepSidebar