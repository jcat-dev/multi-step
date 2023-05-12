import { useContext } from 'react'
import { FormContext } from '../context/FormProvider'
import Complement from './Complement'

interface Props {
  children: React.ReactNode
}

const FormComplement: React.FC<Props> = ({children}) => {
  const {
    period,
    complements,
    updateComplement    
  } = useContext(FormContext)

  const handleCheckClick = (id: string) => {
    updateComplement(id)
  }

  return (
    <>
      {
        children
      }    
      {
        complements.map((value) => (
          <Complement 
            key={value.id}
            title={value.title}
            info={value.info}
            price={
              `+$${value.periodWithPrice.filter((value) => value.period === period)
                .map((value) => value.price).toString()}/${period.slice(0, 2)}`
            }
            checked={value.checked}
            handleCheckClick={() => handleCheckClick(value.id)}
          />   
        ))
      } 
    </>
  )
}

export default FormComplement