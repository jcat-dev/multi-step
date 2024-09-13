import { createContext } from 'react'
import { useFormSummary } from '../hooks/useFormSummary'
import Form from '../component/Form'

export const FormSummaryContext = createContext<ReturnType<typeof useFormSummary> | null>(null)
    
const FormSummaryProvider = () => {
  return (
    <FormSummaryContext.Provider
      value={useFormSummary()} 
    >
      <Form />
    </FormSummaryContext.Provider>
  )
}

export default FormSummaryProvider