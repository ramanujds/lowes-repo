// const arr1 = [1, 2, 3];

// const arr2 = [...arr1, 4, 5];

// console.log(arr2)

// function average(...args) {
//     let sum = 0;
//     for(let e of args){
//         sum+=e;
//     }
//     return sum/args.length;
// }


// console.log(average(10,20,30))

// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// Callback

// function fun(...greet){
//     greet[1]()
// }

// fun(10,()=>{
//     console.log("hello")
// })

const arr = [1, 8, 3, 10,20,30,40,50,60];

const result = arr.filter(e=>e%2).map( e => e*2 ).reduce((a,b)=>a+b,10)

console.log(result)