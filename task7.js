//task 7: Write a function that retrieves an object from localStorage. The function
//should take one argument, which is a string representing the key used to
//store the object. The function should return the object.
//=====================================================================================
//First we store the object in the local storage and then we retrieve it with the key 


const myObject = { name: 'Alice', age: 25 };


localStorage.setItem('myKey', JSON.stringify(myObject));


const storedValue = localStorage.getItem('myKey');


const retrievedObject = JSON.parse(storedValue);

console.log('Retrieved object:', retrievedObject);

//checked the code and retreived the object i have previously stored in the localstorage in task 6

