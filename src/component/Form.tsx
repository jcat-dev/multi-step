import FormContent from './FormContent'
import StepSidebar from './StepSidebar'
import { useContext } from 'react'
import { FormContext } from '../context/FormProvider'
import { useCounter } from '../hooks/useCounter'
import { Formik, Form as FormikForm, FormikHelpers } from 'formik'
import { PersonalData } from '../types/PersonalData'
import { STEPS } from '../constants/STEPS'
import * as Yup from 'yup'
import styles from './styles/form.module.css'

const Form: React.FC = () => {
  const {
    planSummary,
    complementsSummary
  } = useContext(FormContext)

  const {
    counter,
    decrementCounter,
    incrementCounter
  } = useCounter()
  
  const initialValues: PersonalData = {
    name: '',
    email: '',
    phone: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .strict()
      .required('This field is required'),
    email: Yup.string()
      .email()
      .required('This field is required'),      
    phone: Yup.string()
      .trim()
      .strict()
      .required('This field is required')
      .test(
        'start-with-plus', 
        'It does not start with "+"', 
        (value) => value.startsWith('+')
      )
      .test(
        'include-space',
        'It does not include space (3)',
        (value) => value.split(' ').length > 3
      )
  })

  const handleSubmit = async (values: PersonalData, actions: FormikHelpers<PersonalData>) => {
    //send data to db
    /* console.log(planSummary)
    console.log(complementsSummary)
    console.log(values) */
  }
  
  const handleNextClick = () => {
    return incrementCounter()  
  }

  const handlePrevClick = () => {
    return decrementCounter()
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {(values) => (        
        <FormikForm
          className={styles['form']}
        >         
          <div className={styles['form-sidebar']} >
            <StepSidebar 
              step={counter}
            />    
          </div>

          <div className={styles['form-content']} >
            <FormContent 
              stepNumber={counter}
              errors={values.errors}
              touched={values.touched}
            />          
          </div>

          <div 
            className={styles['form-btn' ]}
            hidden={counter === (STEPS.length + 1)}
          >          
            <button 
              className={styles['form-btn__prev']}
              hidden={counter === 1}
              onClick={handlePrevClick}
              type="button"
            >
                Go Back
            </button>
              
            <button 
              className={`${styles['form-btn__next']} ${styles['form-btn__next--blue-bg']}`}
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
              className={`${'form-btn__next'} ${styles['form-btn__next--purple-bg']}`}
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
        </FormikForm>  
      )}
    </Formik>
  )
}

export default Form