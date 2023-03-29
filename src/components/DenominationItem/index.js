// Write your code here
import './index.css'

const DenominationItem = props => {
  const {listofRupee, ondenomination} = props
  const {value} = listofRupee
  const onClickingbutton = () => {
    ondenomination(value)
  }
  console.log(value)
  return (
    <li className="list_item">
      <button onClick={onClickingbutton} className="button" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
