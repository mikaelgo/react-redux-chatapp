import React, { Component } from 'react';
import MessagesView from './MessagesView';
import InputView from './InputView';
import { fetchMessages } from './ApiManager';
import "./App.scss"

 class App extends Component {
  
  componentWillMount() {
//       //React component CODE

// //these could then be in the client side
// async function handleSendNewMessage(){
//     try {
//       let sentMessage = await postMessage(message)
//       console.log("managed to sent message: " , sentMessage)
//       //TODO: notify redux and use the fake persist to store the received message
//      } catch( err ) {
//       console.error( err );
//     }
//   }
//   //on button click send message
//   //handleSendNewMessage()
  
  
  //i.e when compoennt mounted get chat history


      this.getChatHistory()

  }

  async getChatHistory(){
    console.log("0. everthing starts here")
   try {
    let messages = await fetchMessages();
    console.log("3. messages " , messages)
    //TODO: tell redux that we received messages from the server
   } catch( err ) {
    console.error( err );
  }
}
  
    render() {
    return (
      <div className="app-container">
        <MessagesView/>
        <InputView/>
      </div>
    )
  }
};

export default App;
