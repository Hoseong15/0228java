// let count = 0;
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");
// const debtn = document.querySelector('.decrease');
// const resetbtn = document.querySelector('.reset');
// const inbtn = document.querySelector('.increase');



// // 1씩 마이너스 //
// debtn.addEventListener('click', function() {
//   count--
//   value.textContent = count;
//   value.style.color='red'
// })

// // 초기화 버튼 //
// resetbtn.addEventListener('click', function() {
//   count = 0;
//   value.textContent = count;
//   value.style.color='black'
// })


// // 1씩 증가 // 
// inbtn.addEventListener('click', function() {
//   count++;
//   value.textContent = count;
//   value.style.color = 'blue'
// });


let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = btn.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.innerHTML = count;
  });
});







