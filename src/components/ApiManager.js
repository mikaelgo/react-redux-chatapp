//ApiManager.js
//API MANAGER STARTS HERE

//variables
const baseUrl= "https://jsonplaceholder.typicode.com"
const userId = 1
let messageId = 123456789
let message = {
    "userId": userId,
    "id": messageId,
    "title": "This is title",
    "body": "This is message"
}

//get chatmessages
 export async function fetchMessages(){
  let url = baseUrl + "/posts"
  const response =  await fetch(url)
  console.log("1. response ", response);
  if(response.status === 200){
     const messages = await response.json()
     console.log("2. Response in JSON", messages)
     return messages
  } else {
    //TODO: when something else is returned from the server
    return {
        "error": "Something went wrong"
    }
  } 
}
//post new chat message
 export async function postMessage(message){
    let url = baseUrl + "/posts"
    let requestOptions = {
        "method": 'POST',
        "body": JSON.stringify(message),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response =  await fetch(url, requestOptions)
    if(response.ok === true){
       const postedMessage = await response.json()
       return postedMessage
    } else {
      //TODO: when something else is returned from the server
    } 

}

//API MANAGER ENDS HERE


