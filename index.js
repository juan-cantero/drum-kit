
const drumbuttons = document.querySelectorAll(".drum");

function makeSound(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;

        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();

            break;
        
        case "d":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();

            break;

        case "j":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

            break;
        
        case "k":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

            break;
        
        case "l":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;

        default:
            alert("your need to press a valid key ");
            break;
    }
}



function makeAnimation(key) {
    const keyToChange = document.querySelector("." + key);
    
    keyToChange.classList.add("pressed");
    
    setTimeout(
        () => {keyToChange.classList.remove("pressed")}
        ,200);
}

drumbuttons.forEach(e => {
    e.addEventListener("keypress",(event) => {
        makeSound(event.key);
        makeAnimation(event.key);
    });
} )

