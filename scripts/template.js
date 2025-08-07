
// rendering the small cards 
function cardsRendering(index) {
    return `<div class="card" onclick="openOverlay(${index})">
                <header class="cardHeader">
                    <div>${names[index].id}</div>
                    <div>${names[index].name}</div>
                </header>
                <div class="cardImage ${names[index].types[0].type.name}">
                    <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage">
                </div>
                <footer class="cardFooter">
                    <div id="iconField${index}" class="cardFooter">
                    </div>
                </footer>
            </div>`
}

// rendering the icons, used from rendering small cards, main page and stats page
function iconsRendering(index, j) {
    return `<div class="typesIconsBG ${names[index].types[j].type.name}">
                <img src="./typesIcons/${names[index].types[j].type.name}.svg" class="typesIconsIMG">
            </div>` 
}

// rendering individual cards page main
function overlayPictureRenderingMain(index) {
    overlayRef.innerHTML = `<div class="card2">
                    <header class="cardHeader2">
                        <div>${names[index].id}</div>
                        <div>${names[index].name}</div>
                        <img src="./img/close.svg" alt="X" onclick="closeOverlay()"> <!-- close button -->
                    </header>
                    <div class="cardImage2 ${names[index].types[0].type.name}">
                        <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                    </div>
                    <div id="iconFieldMain${index}" class="cardIcon2">                        
                    </div>
                    <nav class="card2nav">
                        <div class="navButtons">main</div>
                       
                        <div class="navButtons" onclick="overlayPictureRenderingStats(${index}), renderIconsCardsStats(${index})">stats</div>
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
                                <td">${names[index].abilities[0].ability.name}</td>
                            </tr>
                        </table>
                    </footer>
                </div>`;
}

// rendering individual cards page stats
function overlayPictureRenderingStats(index) {
    overlayRef.innerHTML = `<div class="card2">
                    <header class="cardHeader2">
                        <div>${names[index].id}</div>
                        <div>${names[index].name}</div>
                        <img src="./img/close.svg" alt="X" onclick="closeOverlay()"> <!-- close button -->
                    </header>
                    <div class="cardImage2 ${names[index].types[0].type.name}">
                        <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                    </div>
                    <div id="iconFieldStats${index}" class="cardIcon2">
                       
                    </div>
                    <nav class="card2nav">
                        <div class="navButtons" onclick="overlayPictureRenderingMain(${index}), renderIconsCardsMain(${index})">main</div>
                       
                        <div class="navButtons">stats</div>
                    </nav>
                    <footer class="cardFooter2">
                        <table>
                            <tr>
                                <td class="tableFirstRow">${names[index].stats[0].stat.name + " :"}</td>
                                <td>${names[index].stats[0].base_stat}</td>
                            </tr>
                            <tr>
                                <td class="tableFirstRow">${names[index].stats[1].stat.name + " :"}</td>
                                <td>${names[index].stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <td class="tableFirstRow">${names[index].stats[2].stat.name + " :"}</td>
                                <td>${names[index].stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <td class="tableFirstRow">${names[index].stats[3].stat.name + " :"}</td>
                                <td>${names[index].stats[1].base_stat}</td>
                            </tr>
                             <tr>
                                <td class="tableFirstRow">${names[index].stats[4].stat.name + " :"}</td>
                                <td>${names[index].stats[1].base_stat}</td>
                            </tr>
                             <tr>
                                <td class="tableFirstRow">${names[index].stats[5].stat.name + " :"}</td>
                                <td>${names[index].stats[1].base_stat}</td>
                            </tr>
                        </table>
                    </footer>
                </div>`;
}

