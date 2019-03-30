//Message reducer for handeling the different action types we created 
const messages = (state = [], action) => {
    switch (action.type) {
      //handeling the new messages created
      case "ADD_NEW_MESSAGE":
        return [
          ...state,
          {
            id: action.id,
            body: action.body,
            userId: action.userId
          }
        ];
      //handeling the previous messages in the app
      case "SET_MESSAGES":
        return action.messages;
      //returning previous state
      default:
        return state;
    }
  };
  
  export default messages;