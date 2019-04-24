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

//API MANAGER ENDS HERE
