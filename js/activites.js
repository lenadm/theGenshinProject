let activities = [
    "Dvalin",
    "Boreas",
    "Childe",
    "Azhdaha",
    "La Signora",
    "Raiden Shogun",
    "Balladeer",
    "Apep",
    "parametric transformer",
    "main quest",
    "dailies",
    "exploring",
    "talent books",
    "weapon materials",
    "regular bosses",
    "spiral abyss",
    "friendship farming"
]

const objectList = document.querySelector(".object-list");
const inputBox = document.getElementById("input-bar");

inputBox.onkeyup = function() {
    const result = keyWordFilter()
    display(result);
    if(!result.length){
        objectList.innerHTML = ''
    }
}

function keyWordFilter() {
    let input = inputBox.value;
    let result = [];

    if(input.length) {
        result = activities.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        return result
    }
}

function display(result){
    const content = result.map((list)=> {
        return "<li onclick=selectInput(this)>" + list + "</li>"
    });
    objectList.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
    inputBox.value = list.innerHTML
} 

function submitViaEnter(event) {
    let keyCode = event.keyCode;
    const enterKey = "13"
    if(keyCode == enterKey) {
        submitTask()
    }
}

document.addEventListener('keyup', (event) => {
    submitViaEnter(event)
});

function submitTask() {
    const result = keyWordFilter()
    if(result.length != 1)
        return
    else {
        submitMode()
    }
}

function submitMode() {
    const daysOfWeek = document.getElementsByClassName("day")

    for (i = 0; i < daysOfWeek.length; i++) {
        const currentDay = daysOfWeek[i]
        const currentI = i
        currentDay.style.border = "2px solid #32cd32"
        currentDay.style.cursor = "pointer"
        currentDay.onclick = function() {submitText(currentI)}
    }
}

function submitText(dayNumber) {

}
