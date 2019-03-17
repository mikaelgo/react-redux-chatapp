const messages = (state = [], action) => {
    switch (action.type) {
      case "ADD_NEW_MESSAGE":
        return [
          ...state,
          {
            id: action.id,
            body: action.body,
            userId: action.userId
          }
        ];
      case "SET_MESSAGES":
        return action.messages;
      default:
        return state;
    }
  };
  
  export default messages;