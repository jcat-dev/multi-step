import { STEPS } from '../constants/STEPS'
import '../styles/components/stepSidebar.css'

interface Props {
  step: number
}

const StepSidebar: React.FC<Props> = ({step}) => {
  return (
    <ul className="step-container" >
      {
        STEPS.map((value, index, array) => (
          <li 
            className="step" 
            key={index}
          >         
            <div className={
              step === (index + 1) 
                ? 'step__number step__number--active'
                : (step === (array.length + 1) && (index + 1) === array.length)
                  ? 'step__number step__number--active'
                  : 'step__number' }
            >
              {index + 1}
            </div>
            
            <div className="step__info" >
              STEP {index + 1}
            </div>
              
            <div className="step__title" >
              {value.title}
            </div>            
          </li>
        ))
      }
    </ul>   
  )
}

export default StepSidebar