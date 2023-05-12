import { Formik, FormikHelpers } from 'formik'
import { PersonalData } from '../../types/PersonalData'
import { useContext } from 'react'
import { FormContext } from '../../context/FormProvider'
import Form from '../Form'
import * as Yup from 'yup'

const FormikForm: React.FC = () => {
  const {
    planSummary,
    complementsSummary
  } = useContext(FormContext)

  const initialValues: PersonalData = {
    name: '',
    email: '',
    phone: ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('This field is required'),
    email: Yup.string()
      .email()
      .required('This field is required'),
    phone: Yup.string()
      .required('This field is required')
  })

  const handleSubmit = async (values: PersonalData, actions: FormikHelpers<PersonalData>) => {
    //send data to db
    /* console.log(planSummary)
    console.log(complementsSummary)
    console.log(values) */
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {(values) => (
        <Form 
          values={values}
        />
      )}
    </Formik>
  )
}

export default FormikForm