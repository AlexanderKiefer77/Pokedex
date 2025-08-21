
// start-variables for loading the index page
let offset = 0;
let limit = 30;

// adresse von pokemon API 
let BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;

let names = [];
let responseAsJson = [];
let cardsRef = document.getElementById('smallCardsPlace');
let buttonsRef = document.getElementById('buttonsPlace');

async function init() {
    await usePromise();
    render();
}

async function usePromise() {
    try {
        //console.log("Abfrage gestartet");
        await fetchDataJson();
        //console.log('Abfrage beendet');
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        alert("Es gibt Probleme mit Ihrer Internet Verbindung");
    }
    stopLoadingSpinner();
}

async function fetchDataJson(path = "") {
    startLoadingSpinner();
    let response = await fetch(BASE_URL + path + ".json");
    responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {
        let element = await fetch(url = responseAsJson.results[i].url);
        let element2 = await element.json();
        names.push(element2);
    }
    //console.log('Abfrage beendet');
}

// render the small cards
async function render(index) {
    for (let index = 0; index < names.length; index++) {
        cardsRef.innerHTML += cardsRendering(index);
        renderIconsSmallCards(index);
    }
    buttonsRef.innerHTML += `<button type="button" class="btn btn-warning btn-lg moreCardsLoadingButton" onclick="moreCards()">weitere Karten Laden</button>`;
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
function moreCards() {
    offset = names.length;
    limit = 20;
    BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
    buttonsRef.innerHTML = '';
    init();
}

// for select start card and numbers of cards
function startID() {
    let inputStartID = document.getElementById('inputFieldStartID').value;
    let inputFieldNumberCardsLoading = document.getElementById('inputFieldNumberCardsLoading').value;
    if (inputStartID == "" || inputFieldNumberCardsLoading == "") {
        return;
    } else if (inputStartID < 0 || inputFieldNumberCardsLoading < 1) {
        alert("Die Eingabe muss größer 0 sein !");
    } else if (inputFieldNumberCardsLoading > 20) {
        inputFieldNumberCardsLoading = 20;
        offset = inputStartID;
        cardsLoading(offset, inputFieldNumberCardsLoading);
    } else if (inputStartID == 0) {
        offset = inputStartID;
        cardsLoading(offset, inputFieldNumberCardsLoading);
    } else if (inputStartID > 0) {
        offset = inputStartID - 1;
        cardsLoading(offset, inputFieldNumberCardsLoading);
    }
}

// loading selected small cards from input
async function cardsLoading(offset, inputFieldNumberCardsLoading) {
    //console.log("neu laden gestartet");    
    cardsRef.innerHTML = '';
    names = [];
    limit = inputFieldNumberCardsLoading;
    BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
    await usePromise();
    renderForSelectedSearch();
    document.getElementById('inputFieldStartID').value = '';
    document.getElementById('inputFieldNumberCardsLoading').value = '';
}

// render the small cards with selected start and number of cards
async function renderForSelectedSearch(index) {
    buttonsRef.innerHTML = '';
    for (let index = 0; index < names.length; index++) {
        cardsRef.innerHTML += cardsRendering(index);
        renderIconsSmallCards(index);
    }
    buttonsRef.innerHTML += `<button type="button" class="btn btn-warning btn-lg moreCardsLoadingButton" onclick="startView()">Startseite laden</button>`;
}

// button for loading standart page 
function startView() {
    buttonsRef.innerHTML = '';
    names = [];
    offset = 0;
    limit = 30;
    BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
    init();
}

// for progress-bar
function updateProgressBar(index) {
    for (let k = 0; k < names[index].stats.length; k++) {
        let percent = names[index].stats[k].base_stat;
        document.getElementById('progress-bar' + `${k}`).innerHTML = `${percent}`; // write the percent value in the "progress-bar"
        document.getElementById('progress-bar' + `${k}`).style = `width: ${percent}%;`; // write the percent value in width from the "progress-bar"
    }
}

// for responsive navbar
function checkWindowWidth() {
    if (window.innerWidth > 900) {
        toggleRespMenuOpenMore900();
    } else if (window.innerWidth > 500 && window.innerWidth <= 900) {
        toggleRespMenuOpenBetween500and900();
    } else {
        toggleRespMenuOpenLess500();
    }
}

// screen width more as 900px
function toggleRespMenuOpenMore900() {
    document.getElementById('respMenu').classList.toggle('respMenuClosed');
}

// screen width between 500px and 900px
function toggleRespMenuOpenBetween500and900() {
    document.getElementById('header').style.height = "245px";
    document.getElementById('respMenu').style.top = "-245px";
    document.getElementById('respMenu').classList.toggle('respMenuClosed');
}

// screen width less 500px
function toggleRespMenuOpenLess500() {
    document.getElementById('header').style.height = "365px";
    document.getElementById('respMenu').style.top = "-365px";
    document.getElementById('respMenu').classList.toggle('respMenuClosed');
}

//navbar close
function toggleRespMenuClose() {
    document.getElementById('header').style.height = "100px";
    document.getElementById('respMenu').style.top = "-100px";
    document.getElementById('respMenu').classList.toggle('respMenuClosed');
}

