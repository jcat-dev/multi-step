import { FormikErrors, FormikTouched } from 'formik'
import { PersonalData } from '../types/PersonalData'
import FormikInput from './formik/FormikInput'

interface Props {
  errors: FormikErrors<PersonalData>
  touched: FormikTouched<PersonalData>
  children: React.ReactNode
}

const FormInfo: React.FC<Props> = ({errors, touched, children}) => {  
  return (
    <>
      {
        children
      }

      <FormikInput 
        id="name"
        title="Name"
        errorMsg={Boolean(errors.name) && Boolean(touched.name)}
        type="text"
        placeholder="e.g. Stephen King" 
        autoComplete='given-name'
      />

      <FormikInput 
        id="email"
        title="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        errorMsg={Boolean(errors.email) && Boolean(touched.email)}
        autoComplete='email'
      />

      <FormikInput 
        id="phone"
        title="Phone Number"
        errorMsg={Boolean(errors.phone) && Boolean(touched.phone)}
        type="tel"
        placeholder="e.g. +1 234 567 890"
        autoComplete='tel'
      /> 
    </>
  )
}

export default FormInfo