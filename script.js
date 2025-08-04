
// adresse von pokemon API 
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0";

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
    }
}

// let no1 = await fetch(url="https://pokeapi.co/api/v2/pokemon/1");
// let no2 = await no1.json();
// 
// // register main
// console.log(no2);
// console.log("ID:  " + no2.id);
// console.log("Name:  " + no2.name);
// console.log("Height:  " + no2.height);
// console.log("Weight:  " + no2.weight);
// console.log("Base Experience:  " + no2.base_experience);
// console.log("Abilities 1:  " + no2.abilities[0].ability.name);
// console.log("Abilities 2:  " + no2.abilities[1].ability.name);
// // bild
// console.log("Bild:  " + no2.sprites.other["home"].front_default);
// console.log("Icon 1:  " + no2.abilities[0].ability.url);
// console.log("Icon 1 alt:  " + no2.types[0].type.name);
// //console.log("Icon 2:  " + no2.types[1].type.url);
// //console.log("Icon 2 alt:  " + no2.types[1].type.name);
// // Geräusche
// console.log("Ton 1:  " + no2.cries.latest);
// //console.log("Ton 2:  " + no2.cries.legacy);
// // register stats
// console.log("Stat-Name 1:  " + no2.stats[0].stat.name);
// console.log("Stat 1:  " + no2.stats[0].base_stat);
// console.log("Stat-Name 2:  " + no2.stats[1].stat.name);
// console.log("Stat 2:  " + no2.stats[1].base_stat);
// console.log("Stat-Name 3:  " + no2.stats[2].stat.name);
// console.log("Stat 3:  " + no2.stats[2].base_stat);
// console.log("Stat-Name 4:  " + no2.stats[3].stat.name);
// console.log("Stat 4:  " + no2.stats[3].base_stat);
// console.log("Stat-Name 5:  " + no2.stats[4].stat.name);
// console.log("Stat 5:  " + no2.stats[4].base_stat);
// console.log("Stat-Name 6:  " + no2.stats[5].stat.name);
// console.log("Stat 6:  " + no2.stats[5].base_stat);
// 
// 
// 
// document.getElementById('pkmID').innerHTML = '# '+ no2.id;
// document.getElementById('pkmName').innerHTML = no2.name;
// document.getElementById('pkmImage').src = no2.sprites.other["home"].front_default;
// 
// 
// // View Main
// document.getElementById('pkmID2').innerHTML = '# '+ no2.id;
// document.getElementById('pkmName2').innerHTML = no2.name;
// document.getElementById('pkmImage2').src = no2.sprites.other["home"].front_default;
// 
// document.getElementById('height').innerHTML = no2.height;
// document.getElementById('weight').innerHTML = no2.weight + " kg";
// document.getElementById('baseExperience').innerHTML = no2.base_experience;
// document.getElementById('abilities').innerHTML = no2.abilities[0].ability.name + ",  " + no2.abilities[1].ability.name ;
// 
// 
// // View stats
// document.getElementById('pkmID3').innerHTML = '# '+ no2.id;
// document.getElementById('pkmName3').innerHTML = no2.name;
// document.getElementById('pkmImage3').src = no2.sprites.other["home"].front_default;
// 
// document.getElementById('Stat-Name 1').innerHTML = no2.stats[0].stat.name + " :";
// document.getElementById('Stat 1').innerHTML = no2.stats[0].base_stat;
// document.getElementById('Stat-Name 2').innerHTML = no2.stats[1].stat.name + " :";
// document.getElementById('Stat 2').innerHTML = no2.stats[1].base_stat;
// document.getElementById('Stat-Name 3').innerHTML = no2.stats[2].stat.name + " :";
// document.getElementById('Stat 3').innerHTML = no2.stats[2].base_stat;
// document.getElementById('Stat-Name 4').innerHTML = no2.stats[3].stat.name + " :";
// document.getElementById('Stat 4').innerHTML = no2.stats[3].base_stat;
// document.getElementById('Stat-Name 5').innerHTML = no2.stats[4].stat.name + " :";
// document.getElementById('Stat 5').innerHTML = no2.stats[4].base_stat;
// document.getElementById('Stat-Name 6').innerHTML = no2.stats[5].stat.name + " :";
// document.getElementById('Stat 6').innerHTML = no2.stats[5].base_stat;


    //let responseAsJsonKeys = Object.keys(responseAsJson);
    //console.log(responseAsJsonKeys);
    


    //console.log(responseAsJson);
    //console.log(responseAsJson.results[0].name);

    //for (let i = 0; i < responseAsJson.length; i++) {
    //    const element = responseAsJson[i];
    //    console.log(element);
    //}


    //for (let index = 0; index < responseAsJson.length; index++) {
    //   let fruits = responseAsJson[index];
    //   console.log(fruits.results[index].name);
    //   document.getElementById('content').innerHTML += `<li><b>${fruits.results[index].name}</b></li>`; //, hat ${calories} Kalorien
    //


