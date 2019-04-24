import React, { Component } from "react";
import MessagesView from "./MessagesView";
import InputView from "./InputView";
import { fetchMessages, fetchUsers } from "./ApiManager";
import "./scss/App.scss";
import { store } from "./StoreManager";
import { setMessages, setUsers } from "./actions/index";

class App extends Component {
  componentWillMount() {
    this.getChatHistory();
    this.getUsers();
  }

  async getChatHistory() {
    try {
      //first get the message history from server
      let messages = await fetchMessages();
      if (messages.hasOwnProperty("error")) {
        //TODO: notify user that messages could not be loaded
      } else {
        //then update redux store with the content
        store.dispatch(setMessages(messages));
      }
    } catch (err) {
      console.error(err);
    }
  }

  async getUsers() {
    try {
      //first get the message history from server
      let users = await fetchUsers();
      if (users.hasOwnProperty("error")) {
      } else {
        //then update redux store with the content
        store.dispatch(setUsers(users));
      }
    } catch (err) {
      console.error(err);
    }
  }

  //rendering the two components
  render() {
    return (
      <div className="app-container">
        <MessagesView />
        <InputView />
      </div>
    );
  }
}

export default App;
