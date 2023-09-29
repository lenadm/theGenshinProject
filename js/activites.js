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
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = activities.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
    if(!result.length){
        objectList.innerHTML = ''
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
    let input = inputBox.value;
    let result = [];

    if(input.length) {
        result = activities.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        if(result.length != 1)
            return
        console.log(result)
    }
}

