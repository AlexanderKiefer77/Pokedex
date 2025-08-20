
// rendering the small cards 
function cardsRendering(index) {
    return `<div class="cards" onclick="openOverlay(${index})">
                <header class="cardHeader">
                    <div>${names[index].id}</div>
                    <div class="smallCardsName">${names[index].name}</div>
                </header>
                <figure class="cardImage ${names[index].types[0].type.name}">
                    <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage">
                </figure>
                <footer class="cardFooter">
                    <div id="iconField${index}" class="cardFooter">
                    </div>
                </footer>
            </div>`
}

// rendering the icons, used from rendering small cards, main page and stats page
function iconsRendering(index, j) {
    return `<figure class="typesIconsBG ${names[index].types[j].type.name}">
                <img src="./assets/typesIcons/${names[index].types[j].type.name}.svg" alt="type Icons" class="typesIconsIMG">
            </figure>`
}

// rendering individual cards page main
function overlayPictureRenderingMain(index) {
    overlayRef.innerHTML = `<div class="innerOverlay">
                                <div onclick="logDownWBubblingPrevention(event)" class="card2">
                                    <header class="cardHeader2">
                                        <div>${names[index].id}</div>
                                        <div>${names[index].name}</div>                                        
                                    </header>
                                    <figure class="cardImage2 ${names[index].types[0].type.name}">
                                        <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                                    </figure>
                                    <div id="iconFieldMain${index}" class="cardIcon2">                        
                                    </div>
                                    <nav class="card2nav">
                                        <button type="button" class="btn btn-info" disabled>main</button>                     
                                        <button type="button" class="btn btn-info" onclick="overlayPictureRenderingStats(${index}), renderIconsCardsStats(${index}), updateProgressBar(${index})">stats</button>
                                    </nav>
                                    <footer class="cardFooter2">
                                        <table>
                                            <tr>
                                                <td class="tableFirstRow">Height :</td>
                                                <td>${names[index].height}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Weight :</td>
                                                <td>${names[index].weight}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Base Experience :</td>
                                                <td>${names[index].base_experience}</td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">Abilities :</td>
                                                <td>${names[index].abilities[0].ability.name}</td>
                                            </tr>
                                        </table>
                                    </footer>
                                </div>   
                            </div>`;
}

// rendering individual cards page stats
function overlayPictureRenderingStats(index) {
    overlayRef.innerHTML = `<div class="innerOverlay">
                                <div onclick="logDownWBubblingPrevention(event)" class="card2">
                                    <header class="cardHeader2">
                                        <div>${names[index].id}</div>
                                        <div>${names[index].name}</div>                                        
                                    </header>
                                    <figure class="cardImage2 ${names[index].types[0].type.name}">
                                        <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                                    </figure>
                                    <div id="iconFieldStats${index}" class="cardIcon2">                       
                                    </div>
                                    <nav class="card2nav">
                                        <button type="button" class="btn btn-info" onclick="overlayPictureRenderingMain(${index}), renderIconsCardsMain(${index})">main</button>                       
                                        <button type="button" class="btn btn-info" disabled>stats</button>
                                    </nav>
                                    <footer class="cardFooter2">
                                        <table>
                                            <tr>
                                                <td class="tableFirstRow">${names[index].stats[0].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar0" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                                </td>                                
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${names[index].stats[1].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar1" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${names[index].stats[2].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar2" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tableFirstRow">${names[index].stats[3].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar3" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="tableFirstRow">${names[index].stats[4].stat.name + " :"}</td>
                                                <td class="tableSecondRow"> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                        <div id="progress-bar4" class="progress-bar" style="width: 0%"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="tableFirstRow">${names[index].stats[5].stat.name + " :"}</td>
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

