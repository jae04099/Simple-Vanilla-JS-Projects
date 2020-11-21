const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const div = document.querySelector("body");

btn.addEventListener('click', () => {
    div.classList.add("elementToFadeInAndOut");
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;
    setTimeout(function(){div.classList.remove("elementToFadeInAndOut");}, 300);
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length)
}

// fade

// const div = document.querySelector(".body");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){
//   div.classList.add("elementToFadeInAndOut");
//   // Wait until the animation is over and then remove the class, so that
//   // the next click can re-add it.
//   setTimeout(function(){div.classList.remove("elementToFadeInAndOut");}, 1000);
// });