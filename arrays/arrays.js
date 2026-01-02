//"Array can be any collection of elements that have common reference !"

//example
let numbers = [1,3,6,8,32,690,2];

//!! array positions are called indices and always start from 0 - first element is on intex 0

//We can also create empty array and then add items into it when needed
 let itemsContainer = []

 itemsContainer[0] = 9;

 console.log(itemsContainer)

 // we can use built-in functions like length - returns the length of the array

 console.log(numbers.length)

 //if we want to iterate over an array 

 let arr = [12,3,4,5,6,7,8]
 for (let i = 0; i < numbers.length; i++){
        arr[i] = 1
 }

 console.log(arr)

 let days = ["Monday", "Tuesday","Wednesday","Thursday","Friday"]

 function getDay(num){
    let day = days[num - 1]

    if(!!day){
    console.log(day)
    }else{
        console.log("invalid")
    }
 }

 getDay(1)

 day2 = days

 day2[0] = 60

 console.log(days)

 // print every element from an array

 let arrItems = [1,4,6,3,2,45,3,45,6]

 for(let i = 0; i < arrItems.length; i++){
    console.log(arrItems[i])
 }

 //built in join method (accepts separator)
 //print all elements separated by ", "
 console.log(arrItems.join(", "))

 //write a function that: Accepts array of integers and prints each element on a
 //separate line in reverse order

 function reverseArray(arr){
    
    for(let i = arr.length -1; i >=0; i--){
        console.log(arr[i])
    }
    
  
 }
reverseArray(arrItems)