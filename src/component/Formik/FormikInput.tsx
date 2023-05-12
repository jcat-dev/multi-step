import { Field, ErrorMessage } from 'formik'
import '../../styles/components/formik/formikInput.css'

interface Props {
  id: string
  title: string
  errorMsg: boolean
  type: string
  autoComplete: string
  placeholder?: string
}

const FormikInput: React.FC<Props> = (props) => {
  return (
    <div className="input-container">
      <label 
        className="label"
        htmlFor={props.id}
      >          
        {props.title}
      </label>
        
      <div className="error-msg" >
        <ErrorMessage name={props.id} />
      </div>
      
      <Field 
        className={
          props.errorMsg 
            ? 'input input--error'
            : 'input' 
        }
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        id={props.id}
      />
    </div>
  )
}

export default FormikInput