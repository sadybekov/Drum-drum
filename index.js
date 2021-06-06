const buttons = document.querySelectorAll(".drum")
for (i=0; i< buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let buttonInnerText = this.innerText;
        playSound(buttonInnerText);
        buttonAnimation(buttonInnerText);
        console.log(this.innerHTML)
    })
}

let soundW = new Audio("sounds/crash.mp3")
let soundA = new Audio("sounds/kick-bass.mp3")
let soundS = new Audio("sounds/snare.mp3")
let soundD = new Audio("sounds/tom-1.mp3")
let soundJ = new Audio("sounds/tom-2.mp3")
let soundK = new Audio("sounds/tom-3.mp3")
let soundL = new Audio("sounds/tom-4.mp3")

function BellBoy(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

const bellBoy1 = new BellBoy("Ilyas", 35, 10);
const bellBoy2 = new BellBoy("Rob", 30, 5);
const bellBoy3 = new BellBoy("Stella", 26, 1);

const bellBoysList = [bellBoy1, bellBoy2, bellBoy3];
console.log(bellBoysList);

function CleanerStuff (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.startCleaning = function () {
        alert("This room is currently undergoing cleaning by " + this.name + " who has " + this.yearsOfExperience + " years of experience.");
    }
}

const cleaner1 = new CleanerStuff (8, "Moren", "Anything");

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);   
})

function playSound(key) {
    switch (key) {
        case "w": 
            soundW.play();
            break;
        case "a":
            soundA.play()
            break;
        case "s":
            soundS.play()
            break;
        case "d":
            soundD.play()
            break;
        case "j":
            soundJ.play()
            break;
        case "k":
            soundK.play()
            break;
        case "l":
            soundL.play()
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)

}