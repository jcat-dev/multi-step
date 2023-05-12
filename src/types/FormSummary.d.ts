import { PlanWithChecked } from './Plan'
import { PlanComplementWithChecked } from './PlanComplement'

export interface FormSummary {
  period: string
  plans: PlanWithChecked[]
  complements: PlanComplementWithChecked[]
} 