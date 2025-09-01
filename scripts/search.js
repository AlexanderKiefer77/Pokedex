
let gefiltertesArray = [];
let myArray = [];

// function for search from input search term field
async function search() {
    inputSearchTerm = document.getElementById('inputField').value;
    if (inputSearchTerm.length >= 3) {
        startLoadingSpinner();
        loadingSearchCards();       
    } else {
        return;
    }
    toggleRespMenuClose();
}

// function for cards loading from search term input
async function loadingSearchCards() {
    const filteredData = responseAsJson.results.filter(item => item.name.includes(inputSearchTerm));
    gefiltertesArray = [];
    for (let i = 0; i < filteredData.length; i++) {
        let elementSearch = await fetch(url = filteredData[i].url);
        let elementSearch2 = await elementSearch.json();
        gefiltertesArray.push(elementSearch2);
    }
    stopLoadingSpinner();
    renderSearching();
}

// function for search from input search term field
function renderSearching() {
    buttonsRef.innerHTML = '';
    for (let index = 0; index < gefiltertesArray.length; index++) {
        cardsRef.innerHTML = '';
        renderSearch(index);
    }
    buttonsRef.innerHTML += `<button type="button" class="btn btn-warning btn-lg moreCardsLoadingButton" onclick="startView()">Start Page loading</button>`;
}

function renderSearch(index) {
    cardsRef.innerHTML = '';
    for (let index = 0; index < gefiltertesArray.length; index++) {
        cardsRef.innerHTML += cardsRenderingSearch(index);
        renderIconsSmallCardsSearch(index);
    }
}

// render the icons for the small cards
function renderIconsSmallCardsSearch(index) {
    let iconsRef = document.getElementById(`iconField${index}`);
    for (let k = 0; k < gefiltertesArray[index].types.length; k++) {
        iconsRef.innerHTML += iconsRenderingSearch(index, k);
    }
}

// render the icons for the small cards
function renderIconsSmallCardsSearch(index) {
    let iconsRef = document.getElementById(`iconField${index}`);
    for (let j = 0; j < gefiltertesArray[index].types.length; j++) {
        iconsRef.innerHTML += iconsRenderingSearch(index, j);
    }
}

// render the icons for the individual page main
function renderIconsCardsMainSearch(index) {
    let iconsRef = document.getElementById(`iconFieldMain${index}`);
    for (let j = 0; j < gefiltertesArray[index].types.length; j++) {
        iconsRef.innerHTML += iconsRenderingSearch(index, j);
    }
}

// render the icons for the individual page stats
function renderIconsCardsStatsSearch(index) {
    let iconsRefStats = document.getElementById(`iconFieldStats${index}`);
    for (let j = 0; j < gefiltertesArray[index].types.length; j++) {
        iconsRefStats.innerHTML += iconsRenderingSearch(index, j);
    }
}

