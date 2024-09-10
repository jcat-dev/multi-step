import { Field, ErrorMessage } from 'formik'
import { InputHTMLAttributes } from 'react'
import styles from './formikInput.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelTitle: string
  errorMsg: boolean
  name: string
}

const FormikInput: React.FC<Props> = (props) => {
  const {
    labelTitle,
    errorMsg,
    ...rest
  } = props

  return (
    <div className={styles['container']}>
      <label 
        className={styles['label']}
        htmlFor={rest.id}
      >          
        {labelTitle}
      </label>
        
      <div className={styles['error-msg']} >
        <ErrorMessage name={rest.name} />
      </div>
      
      <Field 
        className={
          errorMsg 
            ? `${styles['input']} ${styles['input--error']}`
            : styles['input']
        }
        {...rest}
      />
    </div>
  )
}

export default FormikInput