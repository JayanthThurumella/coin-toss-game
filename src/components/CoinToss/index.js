import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coinState: 1, tail: 0, head: 0}

  tossCoin = () => {
    let increaseHead = 0
    let increaseTail = 0
    const coinSideNum = Math.floor(Math.random() * 2)

    if (coinSideNum === 1) increaseHead = 1
    else increaseTail = 1

    this.setState(prev => ({
      coinState: coinSideNum,
      tail: prev.tail + increaseTail,
      head: prev.head + increaseHead,
    }))
  }

  render() {
    const {coinState, head, tail} = this.state
    console.log(head)

    let coinUrl

    if (coinState === 1) {
      coinUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      coinUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={coinUrl} alt="toss result" />
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="results">Total: {head + tail}</p>
            <p className="results">Heads: {head}</p>
            <p className="results">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
