import { useContext } from 'react'
import { FormContext } from '../context/FormProvider'
import '../styles/components/formSummary.css'

interface Props {
  children: React.ReactNode
}

const FormSummary: React.FC<Props> = ({children}) => {
  const {
    period,
    planSummary,
    complementsSummary,
    getTotalSummary,
    changePeriodSummary
  } = useContext(FormContext)
  
  const handleChangeBtnClick = () => changePeriodSummary()
  
  return (
    <>
      {
        children
      }
      
      <div className="summary" >
        <div className="summary-plan" >
          <div className="summary-plan__info" >
            <div className="summary-plan__info-title">              
              {                
                `${planSummary?.title} (${period})`
              }
            </div>

            <button
              className="summary-plan__change-btn"
              onClick={handleChangeBtnClick}
              type='button'
            >
              Change
            </button>
          </div>
          
          <div className="summary-plan__total" >
            {
              `$${planSummary?.periodWithPrice[0].price}/${period.slice(0, 2)}`
            }
          </div>
                        
        </div>

        <ul className="summary-complement">
          {
            complementsSummary?.map((value) => (
              <li 
                key={value.id}
                className='summary-complement__item'
              >
                <div className='summary-complement__item-title'>
                  {
                    value.title
                  } 
                </div>

                <div className='summary-complement__item-price' >
                  {
                    `+$${value.periodWithPrice[0].price}/${period.slice(0, 2)}`
                  }
                </div>
              </li>
            ))
          }
        </ul>

        <div className="summary-total" >
          <div className='summary-total__period' >
            Total (per {period === 'monthly' ? 'month' : 'year'})
          </div>

          <div className='summary-total__price' >
            {
              `+$${getTotalSummary()}/${period.slice(0, 2)}`
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FormSummary