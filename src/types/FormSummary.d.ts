import { PlanWithChecked } from './Plan'
import { ComplementWithChecked } from './Complement'

export interface FormSummary {
  period: string
  plans: PlanWithChecked[]
  complements: ComplementWithChecked[]
} 