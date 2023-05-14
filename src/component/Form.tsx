import FormContent from './FormContent'
import StepSidebar from './StepSidebar'
import { useContext } from 'react'
import { FormContext } from '../context/FormProvider'
import { useCounter } from '../hooks/useCounter'
import { Form as FormikFormComponent, FormikProps} from 'formik'
import { PersonalData } from '../types/PersonalData'
import { STEPS } from '../constants/STEPS'
import '../styles/components/form.css'

interface Props {
  values: FormikProps<PersonalData>
}

const Form: React.FC<Props> = ({values}) => {
  const {
    planSummary
  } = useContext(FormContext)

  const {
    counter,
    decrementCounter,
    incrementCounter
  } = useCounter()
  
  const handleNextClick = () => incrementCounter()  
  const handlePrevClick = () => decrementCounter()
  
  return (
    <FormikFormComponent
      className='form'
    >         
      <div className='form-sidebar' >
        <StepSidebar 
          step={counter}
        />    
      </div>

      <div className="form-content" >
        <FormContent 
          stepNumber={counter}
          errors={values.errors}
          touched={values.touched}
        />          
      </div>

      <div 
        className="form-btn" 
        hidden={counter === (STEPS.length + 1)}
      >          
        <button 
          className="form-btn__prev"
          hidden={counter === 1}
          onClick={handlePrevClick}
          type="button"
        >
                Go Back
        </button>
              
        <button 
          className='form-btn__next form-btn__next--blue-bg'
          type="button"
          onClick={() => handleNextClick()}
          hidden={counter === STEPS.length}
          disabled={
            (counter === 2 && !Boolean(planSummary)) || (!values.dirty || !values.isValid) 
          }
        >
              Next Step              
        </button>

        <button
          className='form-btn__next form-btn__next--purple-bg'
          hidden={counter !== STEPS.length}          
          type="submit"
          onClick={
            STEPS.length === counter 
              ? handleNextClick
              : undefined
          }
        >
              Confirm
        </button>
      </div>
    </FormikFormComponent>  
  )
}

export default Form