//Task 6:Write a function that saves an object to localStorage. The function should
//take two arguments: the first argument is a string representing the key to
//use for storing the object, and the second argument is the object to store.
//i have used this method and created an object written in js in below in the chrome webbrowser's local storage. and checked it
//by going to the application tab after i opneed the inspect and in the application tab there's a localstorage tab where i have checked the created/stored object
//===============================================================================================

function saveToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}


const myObj = {name: 'John', age: 30};
saveToLocalStorage('myKey', myObj);
