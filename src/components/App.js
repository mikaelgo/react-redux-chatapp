import React, { Component } from 'react';
import MessagesView from './MessagesView';
import InputView from './InputView';
import { fetchMessages } from './ApiManager';
import "./App.scss"
import {store} from "./StoreManager";
import { setMessages, addNewMessage } from './actions/index';

 class App extends Component {
  
  componentWillMount() {
      this.getChatHistory()
  }

  async getChatHistory(){
   try {
     //first get the message history from server
    let messages = await fetchMessages();
    //then update redux store with the content
    store.dispatch(setMessages(messages))
  } catch( err ) {
    console.error( err );
  }
}
  
    render() {
      console.log("App render")
    return (
      <div className="app-container">
        <MessagesView/>
        <InputView/>
      </div>
    )
  }
};

export default App;
