import { PeriodWithPrice } from './Period'

export interface PlanComplement {
  id: string
  title: string 
  info: string[]
  periodWithPrice: PeriodWithPrice[]
}

export interface PlanComplementWithChecked extends PlanComplement {
  checked: boolean
}
