//ApiManager.js
//API MANAGER STARTS HERE

//variables
const baseUrl = "https://jsonplaceholder.typicode.com";
const userId = 1;
let messageId = 123456789;
let message = {
  userId: userId,
  id: messageId,
  title: "This is title",
  body: "This is message"
};

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
//post new chat message
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

//API MANAGER ENDS HERE
