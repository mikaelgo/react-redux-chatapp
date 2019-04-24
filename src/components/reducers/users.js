//Message reducer for handeling the different action types we created 
const users = (state = [], action) => {
    switch (action.type) {
      case "SET_USERS":
        return action.users;
      //returning previous state
      default:
        return state;
    }
  };
  
  export default users;