import React, { Component } from "react";
import "./scss/MessagesView.scss"
import { store } from "./StoreManager";
import { USER_ID } from "../constants";

class MessagesView extends Component {
  constructor(props) {
    super(props);
    //component state
    this.state = {
      messages: store.getState().messages,
      users: store.getState().users,
    }; 

    //binding the methods
    this.onStoreChange = this.onStoreChange.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);

    //subscribe to redux changes.
    //If something changes this.onStoreChange will be called.
    //when component un mounts unSubscribe to the changes
    this.unSubscribe = store.subscribe(this.onStoreChange);
  }

  //getting the messages from the store state tree
  onStoreChange() {
    this.setState({
      messages: store.getState().messages,
      users: store.getState().users
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
    this.unSubscribe();
  }

  getUserName(id) {
    //if the user list has been fetched
    //go through the list to find the correct name for each user
    //if no name was found fallback to use the id
    if(this.state.users.length){
      for (let i = 0; i < this.state.users.length; i++) {
        const user = this.state.users[i];
        if(user.id === id){
          return user.username
        }
      }
      return id
    } else {
      return id
    }
  }

  render() {
    //Title for the header
    let title = "Chat App";
    console.log("MessagesView render!", this.state.messages, store.getState());

    //checking the message id and mapping them to either user div or guest div
    let messageList = this.state.messages.map((eachMessage, index) => {
      if (eachMessage.userId === USER_ID) {
        //if the id equals to user_id we are returning a user message div        
        return (
          <div key={index} className="message-item-user">
           <p className="message-item-body">{this.getUserName(eachMessage.userId)}</p> 
           <br/>
           <br/>
            <p className="message-item-body">{eachMessage.body}</p>
          </div>
        );
      } else {
        //all the other messages return a guest message div
        return (
          <div key={index} className="message-item-guest">
            <p className="message-item-body">{this.getUserName(eachMessage.userId)}</p>
            <br/>
            <br/>
            <p className="message-item-body">{eachMessage.body}</p>
          </div>
        );
      }
    });
    //returning the message component
    return (
      <div className="message-container">
        <div className="header-container">
          <h2 className="header-title">{title}</h2>
        </div>

        
        <div className="message-list" id="scroll" >
          {messageList}
    
          <div
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
        </div>
      </div>
    );
  }
}

export default MessagesView;
