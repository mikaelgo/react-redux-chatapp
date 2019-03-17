import React, { Component } from "react";

import { store } from "./StoreManager";
import { addNewMessage } from "./actions";
import {USER_ID} from "../constants"

class InputView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "inputValue": ""

    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      "inputValue": event.target.value
    });
  }

  handleSendMessage(event) {
    event.preventDefault()
    store.dispatch(addNewMessage(this.state.inputValue, USER_ID));
  }

  render() {
    return (
      <div className="input-container">
        <form>
          <input
            value={this.state.inputValue}
            onChange={this.handleInput}
            className="message-input-bar"
            type="text"
          />
          <button onClick={this.handleSendMessage} className="send-message-btn">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default InputView;
