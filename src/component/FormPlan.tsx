import { useContext } from 'react'
import { FormContext } from '../context/FormProvider'
import { PERIOD_TYPES } from '../constants/PERIOD_TYPES'
import '../styles/components/formPlan.css'

interface Props {
  children: React.ReactNode
}

const FormPlan: React.FC<Props> = ({children}) => {
  const {
    period,
    plans,
    updatePlan,
    changePeriodSummary
  } = useContext(FormContext)

  const handleSwitchClick = () => changePeriodSummary()
  const handlePeriodClick = (period: string) => changePeriodSummary(period)
  const handlePlanClick = (id: string) => updatePlan(id)

  return (
    <>
      {
        children
      }

      <div className="plan">
        {
          plans.map((value) => (
            <div 
              key={value.id}
              className={
                value.checked 
                  ? 'plan-card plan-card--active'
                  : 'plan-card'
              }
              onClick={() => handlePlanClick(value.id)} 
            >
              <img 
                className="plan-card__icon" 
                src={value.img} 
                alt="arcade icon" 
              />

              <h3 className="plan-card__title">
                {value.title}
              </h3>   

              <div className='plan-card__info' >
                {
                  value.periodWithPrice.filter((value) => value.period === period)
                    .map((value, index) => (
                      <div 
                        key={index}
                        className="plan-card__total-price"
                      >
                        ${value.price}/{value.period.slice(0, 2)}                
                      </div>
                    ))               
                }

                <div 
                  className='plan-card__months-free' 
                  hidden={period === 'monthly'}  
                >
                  2 months free
                </div>
              </div>
            </div>          
          ))
        }

        <div className="plan-select" >        
          <div 
            className={
              period === 'monthly' 
                ? 'plan-select__monthly plan-select__monthly--active'
                : 'plan-select__monthly'
            }
            onClick={() => handlePeriodClick(PERIOD_TYPES.MONTHLY)}
          >
            Monthly
          </div>

          <div
            className={
              period === 'monthly'
                ? 'plan-select__switch plan-select__switch--monthly'
                : 'plan-select__switch plan-select__switch--yearly'
            }
            onClick={handleSwitchClick}
          />

          <div 
            className={
              period === 'yearly'
                ? 'plan-select__yearly plan-select__yearly--active'
                : 'plan-select__yearly'
            }
            onClick={() => handlePeriodClick(PERIOD_TYPES.YEARLY)}
          >
            Yearly
          </div>
        </div>
      </div>
    </>
  )
}

export default FormPlan

