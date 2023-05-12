import { createContext } from 'react'
import { useFormSummary } from '../hooks/useFormSummary'

type UseFormSummary = ReturnType<typeof useFormSummary>

export const FormContext = createContext<UseFormSummary>({
  period: '',
  plans: [],
  complements: [],
  planSummary: undefined,
  complementsSummary: undefined,
  changePeriodSummary: () => {},
  getTotalSummary: () => 0,
  updatePlan: () => {},
  updateComplement: () => {}
})

interface Props {
  children: React.ReactNode
}
    
const FormProvider: React.FC<Props> = ({children}) => {
  return (
    <FormContext.Provider
      value={useFormSummary()} 
    >
      {
        children
      }
    </FormContext.Provider>
  )
}

export default FormProvider