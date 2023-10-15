// Write your code here
import {Component} from 'react'

import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImg: headImg, heads: 0, tails: 0}

  onClickTossChange = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let headsCount = heads
    let tailsCount = tails

    if (toss === 0) {
      headsCount += 1
      tossImage = headImg
    } else {
      tailsCount += 1
      tossImage = tailImg
    }
    this.setState({
      tossResultImg: tossImage,
      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {tossResultImg, heads, tails} = this.state
    const totalCount = heads + tails
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossChange}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
