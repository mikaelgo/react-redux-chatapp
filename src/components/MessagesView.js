import React, { Component } from "react";
import { store } from "./StoreManager";
import { USER_ID } from "../constants";

class MessagesView extends Component {
  constructor(props) {
    super(props);

    //component state
    this.state = {
      messages: []
    };

    //binding the methods
    this.onStoreChange = this.onStoreChange.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);

    //subscribing to the store and listening to changes in the redux state
    this.unSubscribe = store.subscribe(this.onStoreChange);
  }

  //getting the messages from the store state tree
  onStoreChange() {
    this.setState({
      messages: store.getState().messages
    });
  }
  //Method to scroll to the dummy div that has been created to the bottom of message-container
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  //scrolling to the latest message
  componentDidMount() {
    this.scrollToBottom();
  }

  //scrolling to the latest message added
  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    //
    this.unSubscribe();
  }

  render() {
    let title = "Chat App";
    console.log("MessagesView render!", this.state.messages);

    let messageList = this.state.messages.map((eachMessage, index) => {
      if (eachMessage.userId === USER_ID) {
        return (
          <div key={index} className="message-item-user">
           <p className="message-item-body"> User: {eachMessage.userId}</p> 
           <br/>
           <br/>
            <p className="message-item-body">{eachMessage.body}</p>
          </div>
        );
      } else {
        return (
          <div key={index} className="message-item-guest">
            <p className="message-item-body"> User: {eachMessage.userId}</p>
            <br/>
            <br/>
            <p className="message-item-body">{eachMessage.body}</p>
          </div>
        );
      }
    });

    return (
      <div className="message-container">
        <div className="header-container">
          <h2 className="header-title">{title}</h2>
        </div>

        {/* {JSON.stringify(this.state.messages)} */}
        <div className="message-list" id="scroll" >
          {messageList}
    
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
        </div>
      </div>
    );
  }
}

export default MessagesView;
