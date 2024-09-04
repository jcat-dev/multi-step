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
    planSummary
    //complementsSummary
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
    //values
    //planSummary
    //complementsSummary
    incrementCounter()
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
          <StepSidebar 
            step={counter}
          />    

          <div className={styles['form-body']} >
            <FormContent 
              stepNumber={counter}
              errors={values.errors}
              touched={values.touched}
            />          

            {
              (counter !== (STEPS.length + 1)) && <div className={styles['form-btns' ]} >          
                {
                  (counter !== 1) && <button 
                    className={`${styles['btn']} ${styles['prev-btn']}`}
                    onClick={decrementCounter}
                    type="button"
                  >
                  Go Back
                  </button>
                }

                {
                  (counter !== STEPS.length) && <button 
                    className={`${styles['btn']} ${styles['next-btn']} ${styles['next-btn--blue-bg']}`}
                    type="button"
                    onClick={incrementCounter}
                    disabled={
                      counter === 1
                        ? !values.dirty || Object.keys(values.errors).length >= 1
                        : !Boolean(planSummary)
                    }
                  >
                  Next Step              
                  </button>
                }

                {
                  (counter === STEPS.length) && <button
                    className={`${styles['btn']} ${styles['next-btn']} ${styles['next-btn--purple-bg']}`}
                    type="submit"
                  >
                  Confirm
                  </button>
                }
              </div>
            }
          </div>
        </FormikForm>  
      )}
    </Formik>
  )
}

export default Form