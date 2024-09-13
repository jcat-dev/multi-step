import { useContext } from 'react'
import { FormSummaryContext } from './FormSummaryProvider'

export const useFormSummaryContext = () => {
  const formSummary = useContext(FormSummaryContext)

  if (!formSummary) {
    throw new Error('useGetComplexObject must be used within a Provider') 
  }

  return formSummary
}