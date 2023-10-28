import './index.css'
import {Component} from 'react'

class Card extends Component {
  state = {
    initial: true,
    svalue: '', // Initialize svalue as an empty string
  }

  renderInput = event => {
    this.setState({
      svalue: event.target.value,
    })
  }

  triggerbtn = () => {
    this.setState(prevState => ({
      initial: !prevState.initial,
    }))
  }

  render() {
    const {initial, svalue} = this.state

    return (
      <div className="card">
        <h2 className="title">Editable Text Input</h2>
        <div className="res">
          {initial ? (
            <input
              type="text"
              value={svalue}
              onChange={this.renderInput}
              className="search-box"
            />
          ) : (
            <p className="des">{svalue}</p>
          )}

          <div>
            {initial ? (
              <button className="btn" type="button" onClick={this.triggerbtn}>
                Save
              </button>
            ) : (
              <button className="btn" type="button" onClick={this.triggerbtn}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Card
