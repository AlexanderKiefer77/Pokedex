
// searching function - rendering the small cards 
function cardsRenderingSearch(index) {
    return `<div class="cards" onclick="openOverlaySearch(${index})">
                <header class="cardHeader">
                    <div>${gefiltertesArray[index].id}</div>
                    <div class="smallCardsName">${gefiltertesArray[index].name}</div>
                </header>
                <figure class="cardImage ${gefiltertesArray[index].types[0].type.name}">
                    <img src="${gefiltertesArray[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage">
                </figure>
                <footer>
                    <div id="iconField${index}" class="cardFooter">
                    </div>
                </footer>
            </div>`
}

// searching function - rendering the icons, used from rendering small cards, main page and stats page
function iconsRenderingSearch(index, k) {
    return `<figure class="typesIconsBG ${gefiltertesArray[index].types[k].type.name}">
                <img src="./assets/typesIcons/${gefiltertesArray[index].types[k].type.name}.svg" class="typesIconsIMG">
            </figure>`
}

// searching function - rendering individual cards page main
function overlayPictureRenderingMainSearch(index) {
    overlayRef.innerHTML = `<div class="innerOverlay">
                                <div onclick="logDownWBubblingPrevention(event)" class="card2">
                                    <header class="cardHeader2">
                                        <div>${gefiltertesArray[index].id}</div>
                                        <div>${gefiltertesArray[index].name}</div>                                        
                                    </header>
                                    <figure class="cardImage2 ${gefiltertesArray[index].types[0].type.name}">
                                        <img src="${gefiltertesArray[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                                    </figure>
                                    <div id="iconFieldMain${index}" class="cardIcon2">                       
                                    </div>
                                    <nav class="card2nav">
                                        <button type="button" class="btn btn-info" disabled>main</button>                     
                                        <button type="button" class="btn btn-info" onclick="overlayPictureRenderingStatsSearch(${index}), renderIconsCardsStatsSearch(${index}), updateProgressBar(${index})">stats</button>
                                    </nav>
                                    <footer class="cardFooter2">
                                        <table>
                                            <tr>
                                                <td class="tableFirstRow">Height :</td>
                                                <td>${gefiltertesArray[index].height}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Weight :</td>
                                                <td>${gefiltertesArray[index].weight}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Base Experience :</td>
                                                <td>${gefiltertesArray[index].base_experience}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Abilities :</td>
                                                <td>${gefiltertesArray[index].abilities[0].ability.name}</td>
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
                                        <div>${gefiltertesArray[index].id}</div>
                                        <div>${gefiltertesArray[index].name}</div>
                                        <button type="button" class="btn-close btn-close-white" aria-label="Close" onclick="closeOverlay()"></button>
                                    </header>
                                    <figure class="cardImage2 ${gefiltertesArray[index].types[0].type.name}">
                                        <img src="${gefiltertesArray[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                                    </figure>
                                    <div id="iconFieldStats${index}" class="cardIcon2">                        
                                    </div>
                                    <nav class="card2nav">
                                        <button type="button" class="btn btn-info" onclick="overlayPictureRenderingMainSearch(${index}), renderIconsCardsMainSearch(${index})">main</button>                       
                                        <button type="button" class="btn btn-info" disabled>stats</button>
                                    </nav>
                                    <footer class="cardFooter2">
                                        <table>
                                            <tr>
                                                <td class="tableFirstRow">${gefiltertesArray[index].stats[0].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar0" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                                </td>                                
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${gefiltertesArray[index].stats[1].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar1" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${gefiltertesArray[index].stats[2].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar2" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${gefiltertesArray[index].stats[3].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar3" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="tableFirstRow">${gefiltertesArray[index].stats[4].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar4" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="tableFirstRow">${gefiltertesArray[index].stats[5].stat.name + " :"}</td>
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

