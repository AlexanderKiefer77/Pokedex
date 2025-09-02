
let BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let limitStart = 30; // for the first 30 cards to load for starting image
let names = [];
let responseAsJson = [];
let responseAsJsonTwo = [];
let cardsRef = document.getElementById('smallCardsPlace');
let buttonsRef = document.getElementById('buttonsPlace');
let inputSearchTerm;
let inputStartID;
let inputFieldNumberCardsLoading;

// for dark mode button
document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    const currentMode = body.getAttribute('darkmode');
    body.setAttribute('darkmode', currentMode === 'on' ? 'off' : 'on');
});

// body on load
async function init() {
    await usePromise();
}

async function usePromise() {
    try {
        await fetchDataJson();
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        alert("Es gibt Probleme mit Ihrer Internet Verbindung");
        stopLoadingSpinner();
    }
}

// load all url in the array responseAsJson
async function fetchDataJson(path = "") {
    startLoadingSpinner();
    let response = await fetch(BASE_URL + path + ".json");
    responseAsJson = await response.json();
    loadingCards();
}

async function loadingCards() {
    startLoadingSpinner();
    for (let i = 0; i < limitStart; i++) {
        let element = await fetch(url = responseAsJson.results[i].url);
        let element2 = await element.json();
        names.push(element2);
    }
    stopLoadingSpinner();
    render();
}

// render the small cards
async function render(index) {
    buttonsRef.innerHTML = '';
    for (let index = 0; index < names.length; index++) {
        cardsRef.innerHTML += cardsRendering(index);
        renderIconsSmallCards(index);
    }
    buttonsRef.innerHTML += `<button type="button" class="btn btn-warning btn-lg moreCardsLoadingButton" onclick="moreCards()">more cards loading</button>`;
}

// render the icons for the small cards
function renderIconsSmallCards(index) {
    let iconsRef = document.getElementById(`iconField${index}`);
    for (let j = 0; j < names[index].types.length; j++) {
        iconsRef.innerHTML += iconsRendering(index, j);
    }
}

// render the icons for the individual page main
function renderIconsCardsMain(index) {
    let iconsRef = document.getElementById(`iconFieldMain${index}`);
    for (let j = 0; j < names[index].types.length; j++) {
        iconsRef.innerHTML += iconsRendering(index, j);
    }
}

// render the icons for the individual page stats
function renderIconsCardsStats(index) {
    let iconsRefStats = document.getElementById(`iconFieldStats${index}`);
    for (let j = 0; j < names[index].types.length; j++) {
        iconsRefStats.innerHTML += iconsRendering(index, j);
    }
}

// for button More Cards Loading
async function moreCards() {
    cardsRef.innerHTML = '';
    names = [];
    limitStart += 20;
    loadingCards();
}

// for select start card and numbers of cards
function startID() {
    firstPartStartID();
    if (inputStartID == "" || inputStartID <= 0) {
        firstCardError();
        return;
    } else if (inputFieldNumberCardsLoading == "" || inputFieldNumberCardsLoading < 1 || inputFieldNumberCardsLoading > 20) {
        numberOfCardsError();
        return;
    } else if (inputStartID > 0) {
        offset = inputStartID - 1;
        cardsLoading(offset, inputFieldNumberCardsLoading);
    } 
    toggleRespMenuClose();
}

// for function "startID" first part
function firstPartStartID() {
    document.getElementById('inputFieldStartID').style.backgroundColor = 'white';
    document.getElementById('inputFieldStartID').style.fontWeight = '';
    document.getElementById('inputFieldNumberCardsLoading').style.backgroundColor = 'white';
    document.getElementById('inputFieldNumberCardsLoading').style.fontWeight = '';
    inputStartID = document.getElementById('inputFieldStartID').value;
    inputFieldNumberCardsLoading = document.getElementById('inputFieldNumberCardsLoading').value;
}

// for function "startID" if query First Card
function firstCardError() {
    document.getElementById('inputFieldStartID').style.backgroundColor = 'red';
    document.getElementById('inputFieldStartID').value = '';
}

// for function "startID" if query Number of Cards
function numberOfCardsError() {
    document.getElementById('inputFieldNumberCardsLoading').style.backgroundColor = 'red';
    document.getElementById('inputFieldNumberCardsLoading').value = '';
}

// loading selected small cards from input
async function cardsLoading(offset, inputFieldNumberCardsLoading) {
    gefiltertesArray = [];
    limit = inputFieldNumberCardsLoading;
    BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
    await usePromiseTwo();
    document.getElementById('inputFieldStartID').value = '';
    document.getElementById('inputFieldNumberCardsLoading').value = '';
}

async function usePromiseTwo() {
    try {
        await fetchDataJsonTwo();
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        alert("Es gibt Probleme mit Ihrer Internet Verbindung");
    }
}

async function fetchDataJsonTwo(path = "") {
    let response = await fetch(BASE_URL + path + ".json");
    responseAsJsonTwo = await response.json();
    cardsRef.innerHTML = '';
    loadingCardsTwoSelectedSearch();
}

async function loadingCardsTwoSelectedSearch() {
    startLoadingSpinner();
    for (let i = 0; i < responseAsJsonTwo.results.length; i++) {
        let element10 = await fetch(url = responseAsJsonTwo.results[i].url);
        let element20 = await element10.json();
        gefiltertesArray.push(element20);
    }
    renderSearch();
    buttonsRef.innerHTML = '';
    buttonsRef.innerHTML += `<button type="button" class="btn btn-warning btn-lg moreCardsLoadingButton" onclick="startView()">Start Page loading</button>`;
}

// render the small cards with selected start and number of cards
async function renderForSelectedSearch(index) {
    buttonsRef.innerHTML = '';
    for (let index = 0; index < names.length; index++) {
        cardsRef.innerHTML += cardsRendering(index);
        renderIconsSmallCards(index);
    }
    buttonsRef.innerHTML += `<button type="button" class="btn btn-warning btn-lg moreCardsLoadingButton" onclick="startView()">Start Page loading</button>`;
}

// button for loading standart page 
function startView() {
    startLoadingSpinner();
    cardsRef.innerHTML = '';
    buttonsRef.innerHTML = '';
    document.getElementById('inputField').value = '';
    stopLoadingSpinner();
    render();
}

// for progress-bar
function updateProgressBar(index) {
    for (let k = 0; k < names[index].stats.length; k++) {
        let percent = names[index].stats[k].base_stat;
        document.getElementById('progress-bar' + `${k}`).innerHTML = `${percent}`; // write the percent value in the "progress-bar"
        document.getElementById('progress-bar' + `${k}`).style = `width: ${percent}%;`; // write the percent value in width from the "progress-bar"
    }
}

