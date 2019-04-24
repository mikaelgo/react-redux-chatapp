import React, { Component } from "react";
import "./scss/InputView.scss"
import { store } from "./StoreManager";
import { addNewMessage } from "./actions";
import {postMessage, getRandomIDString} from "./ApiManager"
import {USER_ID} from "../constants"

class InputView extends Component {
  constructor(props) {
    super(props);

    //Component state
    this.state = {
      "inputValue": ""
    };
    console.log("getRandomIDString" , getRandomIDString())
    
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
  async handleSendMessage(event) {
    event.preventDefault()
    if(this.state.inputValue.trim().length === 0){
      console.log("cannot send empty messages")
    } else {
      let message = {
        "userId": USER_ID,
        "id": getRandomIDString(),
        "title": "",
        "body": this.state.inputValue
      }
      let postedMessage = await postMessage(message)
      
      if(postedMessage.hasOwnProperty("error")){
        //TODO: notify user that the message could not be sent
      } else {
        store.dispatch(addNewMessage(postedMessage.body, USER_ID));
        this.setState({
          "inputValue": ""
        });
      }
      
    }
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
