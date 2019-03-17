import React, { Component } from 'react'

 class InputView extends Component {
  render() {
    return (
      <div className="input-container">
        <form>
            <input className="message-input-bar" type="text"/>
            <button className="send-message-btn">Send</button>
        </form>
        
      </div>
    )
  }
};

export default InputView;
