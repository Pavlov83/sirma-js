// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// for(let i = 0; i < 10; i+=1){
//     console.log(i);
// }

// for(let i = 0; i < 10; ++i){
//     console.log(i);
// }
//write a function that accepts an int and prints the mumbers n to 0 in reverse order
// -//Write a function that accepts n and prints 1 to n with step of two

// function oneToNstepTwo(n){
//     for(let i = 1; i <= n; i +=2 ){
//         console.log(i);
//     }
// }

// oneToNstepTwo(20)

//write a function that accepts n and m and prints n to m

// function printToNwithStepOfM(n,m){

//     for(let i = 1; i <= n; i += m ){
//         console.log(i);
//     }

// }

// printToNwithStepOfM(100, 5);

//working with text

let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

//write a function that accepts number and prints the respctive day

// function printDayNumber(num){

//    let day = days[num - 1]
//     if(!day){
//         console.log('No such day!')
//     }else{
//         console.log(days[num])
//     }

// }
// printDayNumber(2)

//Arrays have the built-in method join()

// const arr = [23,15,42,47]

// let arr2 = []

// function printArrayInReverse(array){
//     for(let i = array.length -1; i >= 0; i--){
        
//         console.log(arr[i])
    
//     }

// }

// printArrayInReverse(arr)

//Write a function that accepts an array and prints every 
// index rounded to the higher integer

let decimalArray = [12.5, 12.3, 56.7, 123.546, 1.34]

function printRoundedNumbers(array){

    for(let i = 0; i < array.length; i ++){
        console.log(Math.ceil(array[i]))
    }

}

printRoundedNumbers(decimalArray)