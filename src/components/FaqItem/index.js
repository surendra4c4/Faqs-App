// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClickedBtn: false}

  onClickBtn = () => {
    this.setState(prevState => ({isClickedBtn: !prevState.isClickedBtn}))
  }

  render() {
    const {isClickedBtn} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails

    return (
      <li className="list-item">
        <div className="question-button-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onClickBtn}>
            {isClickedBtn ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {isClickedBtn ? (
          <div>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
