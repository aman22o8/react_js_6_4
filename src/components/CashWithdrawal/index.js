// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {current: 2000}

  clickingthebutton = value => {
    this.setState(prevState => ({current: prevState.current - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {current} = this.state
    console.log(denominationsList)

    return (
      <div className="main_container">
        <div className="card_container">
          <div className="part1">
            <span className="nick_name">S</span>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="part2">
            <p className="balance">Your Balance</p>
            <div>
              <p className="amount">{current > 0 ? current : 0}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum_in">CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupees_container">
            {denominationsList.map(each => (
              <DenominationItem
                ondenomination={this.clickingthebutton}
                listofRupee={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
