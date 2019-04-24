import {getRandomIDString} from "../ApiManager"

//creating the action types 
export const setMessages = (messages) => ({
    type: 'SET_MESSAGES',
    messages
});

export const addNewMessage = (body, userId) => ({
    type: 'ADD_NEW_MESSAGE',
    id: getRandomIDString(),
    body,
    userId
});

//creating the action types 
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});