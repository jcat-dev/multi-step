import { PeriodWithPrice } from './Period'

export interface Complement {
  id: string
  title: string 
  info: string[]
  periodWithPrice: PeriodWithPrice[]
}

export interface ComplementWithChecked extends Complement {
  checked: boolean
}
