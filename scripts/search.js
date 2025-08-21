
let gefiltertesArray = [];
let myArray = [];

function search() {
    myArray = names;
    let inputing = document.getElementById('inputField').value;
    gefiltertesArray = myArray.filter(element => element.name.includes(inputing));
    renderSearching();
}

function renderSearching() {
    buttonsRef.innerHTML= '';
    for (let index = 0; index < gefiltertesArray.length; index++) {
        cardsRef.innerHTML = '';        
        renderSearch(index);
    }
    buttonsRef.innerHTML += `<button type="button" class="btn btn-warning btn-lg moreCardsLoadingButton" onclick="startView()">Startseite laden</button>`;
}

function renderSearch(index) {
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

