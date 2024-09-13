import { useEffect, useState } from 'react'
import { planAPI } from '../utils/planAPI'
import { complementAPI } from '../utils/complementAPI'
import { FormSummary } from '../types/FormSummary'
import { Plan } from '../types/Plan'
import { Complement } from '../types/Complement'
import { PERIOD_TYPES } from '../constants/PERIOD_TYPES'

export const useFormSummary = () => { 
  const [summary, setSummary] = useState<FormSummary>()
  const [planSummary, setPlanSummary] = useState<Plan>()
  const [complementsSummary, setComplementsSummary] = useState<Complement[]>()

  useEffect(() => {
    const data = async () => {
      const planList: Plan[] = await planAPI
      const complementList: Complement[] = await complementAPI

      setSummary({
        period: PERIOD_TYPES.MONTHLY,
        plans: planList.map((value) => ({
          ...value,
          checked: false
        })),
        complements: complementList.map((value) => ({
          ...value,
          checked: false
        }))
      })
    }
    
    data()    
  }, [])
    
  const changePeriodSummary = (period?: string) => {
    if (summary) {

      const newPeriod = period ?? (summary.period === PERIOD_TYPES.MONTHLY
        ? PERIOD_TYPES.YEARLY 
        : PERIOD_TYPES.MONTHLY)

      setSummary({
        ...summary, 
        period: newPeriod
      })

      updatePeriodPlanSummary(newPeriod)
      updatePeriodComplementsSummary(newPeriod)
    }
  }
  
  const updatePlan = (id: string) => {
    if (summary) {
      setSummary({
        ...summary, 
        plans: summary.plans.map((value) => {
          if (value.id === id) {
            return {
              ...value,
              checked: !value.checked
            }
          }
          
          return {
            ...value,
            checked: false
          }
        })
      })

      updatePlanSummary(id)
    }
  }
  
  const updateComplement = (id: string) => {
    if (summary) {
      setSummary({
        ...summary, 
        complements: summary.complements.map((value) => {
          if (value.id === id) {
            return {
              ...value, 
              checked: !value.checked
            }
          }

          return value
        })
      })

      updateComplementsSummary(id)
    }
  }
  
  const getTotalSummary = () => {
    const totalSummary = [
      ...planSummary?.periodWithPrice.map((value) => value.price) ?? [0],
      ...complementsSummary?.flatMap((value) => value.periodWithPrice)
        .map((value) => value.price) ?? [0]
    ] 

    return totalSummary.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
  }
  
  const updatePeriodPlanSummary = (period: string) => {
    if (summary?.plans) {
      const updatePlan = summary.plans.find((value) => value.checked)

      if (updatePlan) {
        const {checked, ...newPlan} =  updatePlan

        setPlanSummary({
          ...newPlan,
          periodWithPrice: newPlan.periodWithPrice.filter((value) => value.period === period)
        })
      }
    }
  }

  const updatePlanSummary = (id: string) => {   
    if (summary?.plans && summary.plans.length > 0) {          
      const updatePlan = summary.plans.find((value) => value.id === id)
      const searchPlan = planSummary?.id === updatePlan?.id

      if (updatePlan && !searchPlan) {
        const {checked, ...newPlan} =  updatePlan
  
        return setPlanSummary({
          ...newPlan,
          periodWithPrice: newPlan.periodWithPrice.filter((value) => value.period === summary.period)
        })
      }

      setPlanSummary(undefined)
    }
  }
  
  const updatePeriodComplementsSummary = (period: string) => {
    const complementsWithChecked = summary?.complements.filter((value) => value.checked)

    if (complementsWithChecked && complementsWithChecked.length > 0) {
      setComplementsSummary(
        complementsWithChecked.map((value) => ({
          ...value,
          periodWithPrice: value.periodWithPrice.filter((value) => value.period === period)
        }))
      )
    }
  }

  const updateComplementsSummary = (id: string) => {
    const updateComplement = summary?.complements.find((value) => value.id === id)
    
    if (updateComplement) {
      const {checked, ...newComplement} = updateComplement
      const searchComplement = complementsSummary?.find((value) => value.id === newComplement.id)

      if (searchComplement && complementsSummary) {
        return setComplementsSummary(
          complementsSummary.filter((value) => value.id !== newComplement.id)
        )
      }
      
      setComplementsSummary([
        ...complementsSummary ?? [],        
        {
          ...newComplement,
          periodWithPrice: newComplement.periodWithPrice.filter((value) => value.period === summary?.period)
        }
      ])
    }
  }

  return {
    period: summary?.period ?? PERIOD_TYPES.MONTHLY,
    plans: summary?.plans ?? [],
    complements: summary?.complements ?? [],
    planSummary,
    complementsSummary,
    changePeriodSummary,
    updatePlan,
    updateComplement,
    totalSummary: getTotalSummary()
  }
}