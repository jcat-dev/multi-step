import { PeriodWithPrice } from './Period'

export interface Plan {
  id: string
  title: string 
  periodWithPrice: PeriodWithPrice[]
  img: string
}

export interface PlanWithChecked extends Plan {
  checked: boolean
}
