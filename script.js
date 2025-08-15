
// start-variables for loading the index page
let offset = 0;
let limit = 24;

// adresse von pokemon API 
let BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit="+limit+"&offset="+offset;

function init() {
    fetchDataJson();
}


async function loadData(path) {
    let response = await fetch(BASE_URL + path + ".json"); // + ".json" wichtig !
    //return responseToJson = await response.json();

    // anstatt return mit let zum testen was ausgelesen wird
    let responseToJson = await response.json();
    console.log(responseToJson);
}

async function usePromise() {
    console.log("Abfrage gestartet");
    let prom = await getPromise();
    console.log(prom);

}

let promError = true;

function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promError) {
                reject("Hat nicht geklappt");
            } else {
                resolve("hat geklappt");
            }
        }, 1000)
    })
}
let names = [];
let responseAsJson = [];

async function fetchDataJson(path = "") {
    let response = await fetch(BASE_URL + path + ".json");        
    responseAsJson = await response.json();
 
    for (let i = 0; i < responseAsJson.results.length; i++) {        
        let element = await fetch(url=responseAsJson.results[i].url);
        let element2 = await element.json();
        names.push(element2);
        render(i); 
    }
}
    
function render(i) {
    let cardsRef = document.getElementById('smallCardsPlace');
    cardsRef.innerHTML = '';
    for (let index = 0; index < names.length; index++) {        
        cardsRef.innerHTML += cardsRendering(index);
        renderIconsSmallCards(index);
    }
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

// for select start card and numbers of cards
function startID() {
    let inputStartID = document.getElementById('inputFieldStartID').value;
    let inputFieldNumberCardsLoading = document.getElementById('inputFieldNumberCardsLoading').value;
    if(inputStartID == "" || inputFieldNumberCardsLoading == "") {
        return;        
    } else if (inputStartID == 0) {              
        selectionLoadingOne(inputStartID, inputFieldNumberCardsLoading);
    } else if (inputStartID > 0) { 
        selectionLoadingTwo(inputStartID, inputFieldNumberCardsLoading);
    }
}

// if Start ID Input Fild = 0
function selectionLoadingOne(inputStartID, inputFieldNumberCardsLoading) {
    offset = inputStartID;
    cardsLoading(offset, inputFieldNumberCardsLoading); 
}

// if Start ID Input Fild > 0
function selectionLoadingTwo(inputStartID, inputFieldNumberCardsLoading) { 
    offset = inputStartID-1;
    cardsLoading(offset, inputFieldNumberCardsLoading);
}

// selected small cards loading from input
function cardsLoading(offset, inputFieldNumberCardsLoading) {
    names = [];
    limit = inputFieldNumberCardsLoading;
    BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit="+limit+"&offset="+offset;   
    init();
    document.getElementById('inputFieldStartID').value = '';
    document.getElementById('inputFieldNumberCardsLoading').value = '';
}

// for progress-bar
function updateProgressBar(index) {
    for (let k = 0; k < names[index].stats.length; k++) {
        let percent = names[index].stats[k].base_stat;
        document.getElementById('progress-bar'+`${k}`).innerHTML = `${percent}`; // write the percent value in the "progress-bar"
        document.getElementById('progress-bar'+`${k}`).style = `width: ${percent}%;`; // write the percent value in width from the "progress-bar"
    } 
}

// for responsive navbar
function checkWindowWidth() {
    if (window.innerWidth > 900) {
        toggleRespMenuOpenMore900();
    } else if (window.innerWidth >500 && window.innerWidth <= 900) {
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

