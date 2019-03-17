import React, { Component } from 'react'
import {store} from "./StoreManager"

 class MessagesView extends Component {


  constructor(props) {
    super(props)
    this.state = {
      "messages": []
    }
    this.onStoreChange = this.onStoreChange.bind(this)
    this.unSubscribe = store.subscribe(this.onStoreChange)
  }

  onStoreChange(){
    console.log("Hello this is MessagesView i see that new messages have been sent ", store.getState())
    this.setState({
      "messages": store.getState()
    })
  }

  componentWillUnmount(){
    this.unSubscribe()
  }
  
    render() {
      console.log("MessagesView render!")
    return (
      <div className="message-container">
        <h2>Messages here!</h2>
        {JSON.stringify(this.state.messages)}
        
      </div>
    )
  }
};

export default MessagesView;
