let activities = [
    'Dvalin',
    'Boreas',
    'Childe',
    'Azhdaha',
    'La Signora',
    'Raiden Shogun',
    'Balladeer',
    'Apep',
    'parametric transformer',
    'main quest',
    'dailies',
    'exploring',
    'talent books',
    'weapon materials',
    'regular bosses',
    'spiral abyss',
    'friendship farming'
]

const objectList = document.querySelector('.object-list');
const inputBox = document.getElementById('input-bar');

function main() {
    document.addEventListener('keyup', (event) => {
        submitViaEnter(event);
        updateAutoComplete();
    });
}

function submitViaEnter(event) {
    const keyCode = event.keyCode;
    const enterKey = '13';
    if (keyCode == enterKey) {
        submitTask();
    }
}

function updateAutoComplete() {
    const result = filterKeyWords();
    displayAutoComplete(result);
    if (!result.length) {
        objectList.innerHTML = '';
    }
}

function submitTask() {
    const result = filterKeyWords();
    if (result.length != 1) {
        return;
    }

    enterSubmitMode(result);
}

function filterKeyWords() {
    let input = inputBox.value;
    let result = [];

    if (input.length) {
        result = activities.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        return result;
    }
}

function displayAutoComplete(result) {
    const content = result.map((list)=> {
        return '<li onclick=selectInput(this)>' + list + '</li>'
    });
    objectList.innerHTML = '<ul>' + content.join('') + '</ul>';
}

function selectInput(list){
    inputBox.value = list.innerHTML;
} 

function enterSubmitMode(validActivity) {
    const daysOfWeek = document.getElementsByClassName('day');

    for (let i = 0; i < daysOfWeek.length; i++) {
        const currentDay = daysOfWeek[i];
        const currentI = i;
        currentDay.style.border = '2px solid #32cd32';
        currentDay.style.cursor = 'pointer';
        currentDay.onclick = function() {displayTask(currentI, validActivity)};
    }
}

function displayTask(dayNumber, validActivity) {
    const content = '<li>' + validActivity + '</li>' ;
    const dayOfWeek = document.getElementById('day' + dayNumber);

    dayOfWeek.innerHTML = '<ul>' + content + '</ul>';
    exitSubmitMode()
}

function exitSubmitMode() {
    const daysOfWeek = document.getElementsByClassName('day');

    for (let i = 0; i < daysOfWeek.length; i++) {
        const currentDay = daysOfWeek[i];
        currentDay.style.removeProperty('border');
        currentDay.style.removeProperty('cursor');
        currentDay.onclick = null;
    }
}

main();
