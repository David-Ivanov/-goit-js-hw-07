const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

let obj = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (const input of inputs) {
        if (input.value === "") {
            alert('All form fields must be filled in');
            return;
        } else {
            obj[input.getAttribute("name")] = input.value;
        }
    }
    console.log(obj);
    form.reset();

});