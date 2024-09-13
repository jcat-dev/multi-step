import { PERIOD_TYPES } from '../constants/PERIOD_TYPES'
import { useFormSummaryContext } from '../context/useFormSummaryContext'
import styles from './styles/formSummary.module.css'

interface Props {
  children: React.ReactNode
}

const FormSummary: React.FC<Props> = ({children}) => {
  const {
    period,
    planSummary,
    complementsSummary,
    totalSummary,
    changePeriodSummary
  } = useFormSummaryContext()
  
  const handleChangeBtnClick = () => changePeriodSummary()
  
  return (
    <>
      {
        children
      }
      
      <div className={styles['summary']} >
        <p className={styles['summary-plan']} >
          <span className={styles['summary-plan__title']} >              
            {`${planSummary?.title} (${period})`}
          </span>

          <button
            className={styles['summary-plan__change-btn']}
            onClick={handleChangeBtnClick}
            type='button'
          >
              Change
          </button>
          
          <span className={styles['summary-plan__price']} >            
            {`$${planSummary?.periodWithPrice[0].price}/${period.slice(0, 2)}`}   
          </span>                     
        </p>

        <ul className={styles['summary-complement']} >
          {
            complementsSummary?.map((value) => (
              <li 
                key={value.id}
                className={styles['summary-complement__item']}
              >
                {value.title} 

                <span className={styles['summary-complement__item-price']} >
                  {`+$${value.periodWithPrice[0].price}/${period.slice(0, 2)}`}
                </span>
              </li>
            ))
          }
        </ul>

        <p className={styles['summary-total']} >
          Total (per {period === PERIOD_TYPES.MONTHLY ? 'month' : 'year'})

          <span className={styles['summary-total__price']} >
            {`+$${totalSummary}/${period.slice(0, 2)}`}
          </span>
        </p>
      </div>
    </>
  )
}

export default FormSummary