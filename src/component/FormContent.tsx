import FormInfo from './FormInfo'
import FormPlan from './FormPlan'
import FormSummary from './FormSummary'
import thanksYouIcon from '../assets/images/icon-thank-you.svg'
import FormComplement from './FormComplement'
import { PersonalData } from '../types/PersonalData'
import { FormikErrors, FormikTouched } from 'formik'
import '../styles/components/formContent.css'

interface Props {
  errors: FormikErrors<PersonalData>
  touched: FormikTouched<PersonalData>
  stepNumber: number
}

const FormContent: React.FC<Props> = ({errors, touched, stepNumber}: Props) => {
  if (stepNumber === 1) {
    return (  
      <div className="content" >    
        <FormInfo
          errors={errors}
          touched={touched}
        >
          <h2 className="content-title" >
            Personal info
          </h2>

          <p className="content-info" > 
            Please provide your name, email address, and phone number.
          </p>
        </FormInfo> 
      </div>
    )
  }

  if ( stepNumber === 2 ) {
    return (      
      <div className="content" >
        <FormPlan>
          <h2 className="content-title" >
            Select your plan
          </h2>

          <p className="content-info" > 
            You have the option of monthly or yearly billing.
          </p>
        </FormPlan>
      </div>
    )
  }

  if ( stepNumber === 3 ) {
    return ( 
      <div className="content" >
        <FormComplement>
          <h2 className="content-title" >
            Pick add-ons
          </h2>

          <p className="content-info" > 
            Add-ons help enhance your gaming experience.
          </p>
        </FormComplement>  
      </div>
    )
  }

  if (stepNumber === 4) {
    return (
      <div className="content" >
        <FormSummary>
          <h2 className="content-title" >
            Finishing up
          </h2>

          <p className="content-info" > 
            Double-check everything looks OK before confirming.
          </p>
        </FormSummary>
      </div>
    )
  }

  return (
    <div className='content content--flex' >
      <img 
        className='content-icon'
        src={thanksYouIcon} 
        alt="thangs you icon" 
      />

      <h2 className='content-title content-title--text-center' >
        Thank you!
      </h2>

      <p className='content-info content-info--text-center' >
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default FormContent