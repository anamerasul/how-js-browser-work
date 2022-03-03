console.log(11111111)
console.log(2222222)
//setTimeout(()=>console.log('aaaaaa'),4000)


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log(3333333)
console.log(4444444)
// for(i=0; i<=1000;i++){
//         console.log(i)
// }

// fetch asynchronous