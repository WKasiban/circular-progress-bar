const jabPerDay = 188;
let jabPermin = 60000/jabPerDay;

const num = document.querySelector(".num");
const left = document.getElementById("progressLeft");
const right = document.getElementById("progressRight");


let counter = 0;
setInterval(() => {
    if (counter === jabPerDay) {
        clearInterval();
        counter = 0;
        left.classList.remove("progress");
        right.classList.remove("progress");
    } else {
        counter +=1;
        num.textContent = counter;
    }

    if (counter === 1) {
        left.classList.add("progress");
        right.classList.add("progress");
    }

}, jabPermin);

