// Chalenge 1

 var myArray = [["bird, 19"], ["cat", 20]];



 // Chalenge 2
 function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j =0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  } 
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);




//   //challenge 3 Create an array that is three-dimension. Each 
//   index of the array should contain an array. Each of those arrays should also have arrays inside them. 
//   Finally, the second level of arrays, should contain numbers or strings as their values.

  var newArray= [[[1,2], [2,3]], [5,6], [1,8]]




// challenge 4
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);



// //   challenge 5 . Create a function that receives two values as arguments. The function should 
// return one string if the two values are equal, and a different string if the two values are different. 
//  may either test for equality in value or for equality in value /and/ type.
function myFunction(a, b) {
   var myFunction = (a,b);  {

   }
   console.log(myFunction)

    }
myFunction(4, 2);
    


