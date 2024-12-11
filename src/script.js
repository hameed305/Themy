// dark_mode scripts

let btn = document.querySelector("#them");
let them_box = document.querySelector("#them_box");
btn.addEventListener("click", () => {
    them_box.classList.toggle("appear");
})

let green_mode = document.querySelector("#green_mode")
let blue_mode = document.querySelector("#blue_mode")
let violet_mode = document.querySelector("#violet_mode")
let random_mode = document.querySelector("#random_mode")


dark_mode.addEventListener("click", function () {
    document.body.classList.remove("green")
    document.body.classList.remove("blue")
    document.body.classList.remove("violet")
    document.body.classList.add("dark")
})





green_mode.addEventListener("click", function () {
    document.body.classList.remove("dark")
    document.body.classList.remove("blue")
    document.body.classList.remove("violet")
    document.body.classList.add("green")
})

blue_mode.addEventListener("click", function () {
    document.body.classList.remove("dark")
    document.body.classList.remove("violet")
    document.body.classList.remove("green")
    document.body.classList.add("blue")
})

violet_mode.addEventListener("click", function () {
    document.body.classList.remove("dark")
    document.body.classList.remove("green")
    document.body.classList.remove("blue")
    document.body.classList.add("violet")
})

random_mode.addEventListener("click", function () {
    setInterval(() => {
        let colors = ["green", "violet", "dark", "blue"];
        let random_colors = Math.floor(Math.random() * colors.length - 1)
        document.body.classList.remove("dark")
        document.body.classList.remove("green")
        document.body.classList.remove("blue")
        document.body.classList.toggle(colors[random_colors])
    }, 3000);
})



// btn.onclick = () => {
//     document.body.classList.toggle("dark_mode")
//     let them;
//     if (document.body.classList.contains("dark_mode")) {
//         btn.value = "White mode"
//         them = "dark";
//     }
//     else {
//         btn.value = "Dark mode"
//         them = "light"
//     }

//     localStorage.setItem("mode", them)
// }

// let getthem = localStorage.getItem("mode");
// if (getthem == "dark") {
//     document.body.classList.toggle("dark_mode")
//     btn.value = "White mode"
// }
