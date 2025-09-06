
// searching function - rendering the small cards 
function cardsRenderingSearch(index) {
    return `<div class="cards" onclick="openOverlaySearch(${index})">
                <header class="cardHeader">
                    <div>${filteredArray[index].id}</div>
                    <div class="smallCardsName">${filteredArray[index].name}</div>
                </header>
                <figure class="cardImage ${filteredArray[index].types[0].type.name}">
                    <img src="${filteredArray[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage">
                </figure>
                <div>
                    <div id="iconField${index}" class="cardFooter">
                    </div>
                </div>
            </div>`
}

// searching function - rendering the icons, used from rendering small cards, main page and stats page
function iconsRenderingSearch(index, k) {
    return `<figure class="typesIconsBG ${filteredArray[index].types[k].type.name}">
                <img src="./assets/typesIcons/${filteredArray[index].types[k].type.name}.svg" class="typesIconsIMG">
            </figure>`
}

// searching function - rendering individual cards page main
function overlayPictureRenderingMainSearch(index) {
    overlayRef.innerHTML = `<div class="innerOverlay">
                                <div onclick="logDownWBubblingPrevention(event)" class="card2">
                                    <header class="cardHeader2">
                                        <div>${filteredArray[index].id}</div>
                                        <div>${filteredArray[index].name}</div>
                                        <button type="button" class="btn-close btn-close-white" aria-label="Close" onclick="closeOverlay()"></button>                                    
                                    </header>
                                    <figure class="cardImage2 ${filteredArray[index].types[0].type.name}">
                                        <img src="${filteredArray[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                                    </figure>
                                    <section class="iconField">
                                        <svg onclick="prevCardMainSearch(${index})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                        </svg>
                                        <div id="iconFieldMain${index}" class="cardIcon2"></div> 
                                        <svg onclick="nextCardMainSearch(${index})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg>   
                                    </section>
                                    <nav class="card2nav">
                                        <button type="button" class="btn btn-info" disabled>main</button>                     
                                        <button type="button" class="btn btn-info" onclick="overlayPictureRenderingStatsSearch(${index}), renderIconsCardsStatsSearch(${index}), updateProgressBar(${index})">stats</button>
                                    </nav>
                                    <footer class="cardFooter2">
                                        <table>
                                            <tr>
                                                <td class="tableFirstRow">Height :</td>
                                                <td>${filteredArray[index].height}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Weight :</td>
                                                <td>${filteredArray[index].weight}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Base Experience :</td>
                                                <td>${filteredArray[index].base_experience}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Abilities :</td>
                                                <td>${filteredArray[index].abilities[0].ability.name}</td>
                                            </tr>
                                        </table>
                                    </footer>
                                </div>
                            </div>`;
}


// searching function - rendering individual cards page stats
function overlayPictureRenderingStatsSearch(index) {
    overlayRef.innerHTML = `<div class="innerOverlay">
                                <div onclick="logDownWBubblingPrevention(event)" class="card2">
                                    <header class="cardHeader2">
                                        <div>${filteredArray[index].id}</div>
                                        <div>${filteredArray[index].name}</div>
                                        <button type="button" class="btn-close btn-close-white" aria-label="Close" onclick="closeOverlay()"></button>
                                    </header>
                                    <figure class="cardImage2 ${filteredArray[index].types[0].type.name}">
                                        <img src="${filteredArray[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                                    </figure>
                                    <section class="iconField">
                                        <svg onclick="prevCardStatsSearch(${index})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                        </svg>
                                        <div id="iconFieldStats${index}" class="cardIcon2"></div>
                                        <svg onclick="nextCardStatsSearch(${index})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </section>
                                    <nav class="card2nav">
                                        <button type="button" class="btn btn-info" onclick="overlayPictureRenderingMainSearch(${index}), renderIconsCardsMainSearch(${index})">main</button>                       
                                        <button type="button" class="btn btn-info" disabled>stats</button>
                                    </nav>
                                    <footer class="cardFooter2">
                                        <table>
                                            <tr>
                                                <td class="tableFirstRow">${filteredArray[index].stats[0].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar0" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                                </td>                                
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${filteredArray[index].stats[1].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar1" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${filteredArray[index].stats[2].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar2" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${filteredArray[index].stats[3].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar3" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="tableFirstRow">${filteredArray[index].stats[4].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar4" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="tableFirstRow">${filteredArray[index].stats[5].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar5" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </footer>
                                </div>
                            </div>`;
}

