//Task 1 :Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
//created with 5, the returned function should add 5 to any number passed
//to it.
//===========================================================
function addNumberClosure(num) {
  function addNum(n) {
    return n + num;
  }
  return addNum;
}

const addFive = addNumberClosure(5);
console.log(addFive(10));
