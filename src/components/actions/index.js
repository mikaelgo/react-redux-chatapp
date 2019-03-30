//generating a random UUID for the new messages
function getRandomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

//creating the action types 
export const setMessages = (messages) => ({
    type: 'SET_MESSAGES',
    messages
});

export const addNewMessage = (body, userId) => ({
    type: 'ADD_NEW_MESSAGE',
    id: getRandomId(),
    body,
    userId
});