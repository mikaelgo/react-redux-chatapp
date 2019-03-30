import React, { Component } from "react";
import { store } from "./StoreManager";
import { addNewMessage } from "./actions";
import {USER_ID} from "../constants"

class InputView extends Component {
  constructor(props) {
    super(props);

    //Component state
    this.state = {
      "inputValue": ""
    };

    //binding the methods
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  //Getting the message from the input field
  handleInput(event) {
    this.setState({
      "inputValue": event.target.value
    });
  }

  //adding the new message to the store 
  handleSendMessage(event) {
    event.preventDefault()
    store.dispatch(addNewMessage(this.state.inputValue, USER_ID));
    this.setState({
      "inputValue": " "
    });
  }

  //rendering the component
  render() {
    return (
      <div className="input-container">
        <form className="input-form">
          <input
            value={this.state.inputValue}
            onChange={this.handleInput}
            className="message-input-bar"
            type="text"
            placeholder="Type a message..."
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
