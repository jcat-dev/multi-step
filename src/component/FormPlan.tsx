import { PERIOD_TYPES } from '../constants/PERIOD_TYPES'
import { useFormSummaryContext } from '../context/useFormSummaryContext'
import styles from './styles/formPlan.module.css'

interface Props {
  children: React.ReactNode
}

const FormPlan: React.FC<Props> = ({children}) => {
  const {
    period,
    plans,
    updatePlan,
    changePeriodSummary
  } = useFormSummaryContext()

  return (
    <>
      {
        children
      }

      <ul className={styles['plan']} >
        {
          plans.map((value) => (
            <li 
              key={value.id}
              className={
                value.checked 
                  ? `${styles['plan-card']} ${styles['plan-card--active']}`
                  : styles['plan-card']
              }
              onClick={() => updatePlan(value.id)} 
            >
              <img 
                className={styles['plan-card__icon' ]}
                src={value.img} 
                alt="arcade icon" 
              />

              <p className={styles['plan-card__title']} >
                {value.title}
              </p>   

              <div className={styles['plan-card__info']} >                                 
                <p className={styles['plan-card__total-price']} >
                  {value.periodWithPrice.find((value) => value.period === period)?.price}/
                  {value.periodWithPrice.find((value) => value.period === period)?.period.slice(0, 2)}                
                </p>

                {
                  period === PERIOD_TYPES.YEARLY && <p className={styles['plan-card__months-free']} >
                    2 months free
                  </p>
                }
              </div>
            </li>          
          ))
        }        
      </ul>

      <div className={styles['plan-select']} >        
        <button 
          className={
            period === PERIOD_TYPES.MONTHLY 
              ? `${styles['plan-select__btn-monthly']} ${styles['plan-select__btn-monthly--active']}`
              : styles['plan-select__btn-monthly']
          }
          type='button'
          onClick={() => changePeriodSummary(PERIOD_TYPES.MONTHLY)}
        >
          Monthly
        </button>

        <button 
          className={
            period === PERIOD_TYPES.MONTHLY
              ? `${styles['plan-select__btn-switch']} ${styles['plan-select__btn-switch--monthly']}`
              : `${styles['plan-select__btn-switch']} ${styles['plan-select__btn-switch--yearly']}`
          }
          type='button'
          onClick={() => changePeriodSummary()}
        />

        <button 
          className={
            period === PERIOD_TYPES.YEARLY
              ? `${styles['plan-select__btn-yearly']} ${styles['plan-select__btn-yearly--active']}`
              : styles['plan-select__btn-yearly']
          }
          type='button'
          onClick={() => changePeriodSummary(PERIOD_TYPES.YEARLY)}
        >
          Yearly
        </button>
      </div>
    </>
  )
}

export default FormPlan

