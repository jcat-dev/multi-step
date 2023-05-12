import checkIcon from '../assets/images/icon-checkmark.svg'
import '../styles/components/complement.css'

interface Props {
  title: string
  info: string[]
  price: string
  checked: boolean
  handleCheckClick: () => void
}

const Complement: React.FC<Props> = ({title, info, price, checked, handleCheckClick}) => {
  return (
    <div 
      className={
        checked 
          ? 'complement complement--active'
          : 'complement'
      } 
      onClick={handleCheckClick}
    >
      <img 
        className={
          checked
            ? 'complement-check complement-check--active'
            : 'complement-check'
        }
        src={checkIcon} 
        alt="check icon" 
      />

      <div className="complement-text" >
        <h3 className="complement-text__title" >
          {title}
        </h3>

        {
          info.map((value, index) => (
            <p 
              key={index}
              className="complement-text__info" 
            >
              {value}
            </p>
          ))
        }
      </div>

      <div className="complement-price" >
        {price}
      </div>
    </div>
  )
}

export default Complement