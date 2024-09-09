import { PersonalData } from '../types/PersonalData'
import { FormikErrors, FormikTouched } from 'formik'
import FormInfo from './FormInfo'
import FormPlan from './FormPlan'
import FormSummary from './FormSummary'
import thanksYouIcon from '../assets/images/icon-thank-you.svg'
import FormComplement from './FormComplement'
import styles from './styles/formContent.module.css'

interface Props {
  errors: FormikErrors<PersonalData>
  touched: FormikTouched<PersonalData>
  stepNumber: number
}

const FormContent: React.FC<Props> = ({errors, touched, stepNumber}: Props) => {
  if (stepNumber === 1) {
    return (  
      <div className={styles['content']} >    
        <FormInfo
          errors={errors}
          touched={touched}
        >
          <p className={styles['content-title']} >
            Personal info
          </p>

          <p className={styles['content-info']} > 
            Please provide your name, email address, and phone number.
          </p>
        </FormInfo> 
      </div>
    )
  }

  if (stepNumber === 2) {
    return (      
      <div className={styles['content']} >
        <FormPlan>
          <p className={styles['content-title']} >
            Select your plan
          </p>

          <p className={styles['content-info']} > 
            You have the option of monthly or yearly billing.
          </p>
        </FormPlan>
      </div>
    )
  }

  if (stepNumber === 3) {
    return ( 
      <div className={styles['content']} >
        <FormComplement>
          <p className={styles['content-title']} >
            Pick add-ons
          </p>

          <p className={styles['content-info']} > 
            Add-ons help enhance your gaming experience.
          </p>
        </FormComplement>  
      </div>
    )
  }

  if (stepNumber === 4) {
    return (
      <div className={styles['content']} >
        <FormSummary>
          <p className={styles['content-title']} >
            Finishing up
          </p>

          <p className={styles['content-info']} > 
            Double-check everything looks OK before confirming.
          </p>
        </FormSummary>
      </div>
    )
  }

  return (
    <div className={`${styles['content']} ${styles['content--flex']}`} >
      <img 
        className='content-icon'
        src={thanksYouIcon} 
        alt="thanks you icon" 
      />

      <p className={`${styles['content-title']} ${styles['content-title--text-center']}`} >
        Thank you!
      </p>

      <p className={`${styles['content-info']} ${styles['content-info--text-center']}`} >
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default FormContent