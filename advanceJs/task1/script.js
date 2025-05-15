let btn = document.getElementById("btn");
let header = document.getElementById("heading");
let input = document.getElementById("input");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const fontSize = Number(input.value);

    if (fontSize > 0) {
        header.style.fontSize = fontSize + 'px';
    } else {
        alert("Please enter a valid positive number.");
    }
});
