// console.log('시작')

// function fun1() {
//   const sum = 10 +20;
//   console.log(sum)
// }
// fun1();

// for(let i = 0; i < 3; i++) {
//   fun1();
// }

// console.log('끝')


// console.log('시작')

// function fun1() {
//   const sum = 10 +20;
//   console.log(sum)
// }
// setTimeout(fun1, 1000)

// console.log('끝')

console.log('시작')

function fun1(h1) {
  setTimeout(()=> {
    const sum = 10 + 20;
    console.log(sum)
    h1();
  }, 1000);
}

function fun2() {
  const sum = 10 + 40;
  console.log(sum)
}
fun1(fun2)

console.log('끝')

