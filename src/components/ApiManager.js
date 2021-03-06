//ApiManager.js
//API MANAGER STARTS HERE

//variables
const baseUrl = "https://jsonplaceholder.typicode.com";

//get chatmessages
export async function fetchMessages() {
  let url = baseUrl + "/posts";
  const response = await fetch(url);
  if (response.status === 200) {
    const messages = await response.json();
    return messages;
  } else {
    return {
      error: "Something went wrong"
    };
  }
}


//get chat group users
export async function fetchUsers() {
  let url = baseUrl + "/users";
  const response = await fetch(url);
  if (response.status === 200) {
    const users = await response.json();
    return users;
  } else {
    return {
      error: "Something went wrong"
    };
  }
}

//post new chat message
/* message body template
{
  userId: 2,
  id: 123456789,
  title: "This is title",
  body: "This is message"
}
*/
export async function postMessage(message) {
  let url = baseUrl + "/posts";
  let requestOptions = {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };
  const response = await fetch(url, requestOptions);
  if (response.ok === true) {
    const postedMessage = await response.json();
    return postedMessage;
  } else {
    return {
      error: "Something went wrong"
    };
  }
}

export function getRandomIDString(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);    
    return v.toString(16);
  });
}

//API MANAGER ENDS HERE
