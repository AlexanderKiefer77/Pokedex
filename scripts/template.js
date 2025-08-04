
function cardsRendering(index) {
    return `<div class="card" onclick="openOverlay(${index})">
                <header class="cardHeader">
                    <div>${names[index].id}</div>
                    <div>${names[index].name}</div>
                </header>
                <div class="cardImage">
                    <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage">
                </div>
                <footer class="cardFooter">
                    <div class="typesIconsBG typesIconsBgColorGrass">
                        <img src="./typesIcons/grass.svg" alt="Icon type grass">
                    </div>
                    <div class="typesIconsBG typesIconsBgColorPoison">
                        <img src="./typesIcons/poison.svg" alt="Icon type poison">
                    </div>
                </footer>
            </div>`
}


function overlayPictureRenderingMain(index) {
    overlayRef.innerHTML = `<div class="card2">
                    <header class="cardHeader2">
                        <div>${names[index].id}</div>
                        <div>${names[index].name}</div>
                        <img src="./img/close.svg" alt="X" onclick="closeOverlay()"> <!-- close button -->
                    </header>
                    <div class="cardImage2">
                        <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                    </div>
                    <div class="cardIcon2">
                        <div class="typesIconsBG typesIconsBgColorGrass">
                            <img src="./typesIcons/grass.svg" alt="Icon type grass">
                        </div>
                        <div class="typesIconsBG typesIconsBgColorPoison">
                            <img src="./typesIcons/poison.svg" alt="Icon type poison">
                        </div>
                    </div>
                    <nav class="card2nav">
                        <div class="navButtons">main</div>
                       
                        <div class="navButtons" onclick="overlayPictureRenderingStats(${index})">stats</div>
                    </nav>
                    <footer class="cardFooter2">
                        <table>
                            <tr>
                                <td class="tableFirstRow">Height :</td>
                                <td>${names[index].height}</td>
                            </tr>
                            <tr>
                                <td class="tableFirstRow">Weight :</td>
                                <td id="weight">${names[index].weight}</td>
                            </tr>
                            <tr>
                                <td class="tableFirstRow">Base Experience :</td>
                                <td id="baseExperience">${names[index].base_experience}</td>
                            </tr>
                            <tr>
                                <td class="tableFirstRow">Abilities :</td>
                                <td id="abilities">${names[index].abilities[0].ability.name}</td>
                            </tr>
                        </table>
                    </footer>
                </div>`;
}


function overlayPictureRenderingStats(index) {
    overlayRef.innerHTML = `<div class="card2">
                    <header class="cardHeader2">
                        <div>${names[index].id}</div>
                        <div>${names[index].name}</div>
                        <img src="./img/close.svg" alt="X" onclick="closeOverlay()"> <!-- close button -->
                    </header>
                    <div class="cardImage2">
                        <img src="${names[index].sprites.other["home"].front_default}" alt="Pokemon Image" class="pkmImage2">
                    </div>
                    <div class="cardIcon2">
                        <div class="typesIconsBG typesIconsBgColorGrass">
                            <img src="./typesIcons/grass.svg" alt="Icon type grass">
                        </div>
                        <div class="typesIconsBG typesIconsBgColorPoison">
                            <img src="./typesIcons/poison.svg" alt="Icon type poison">
                        </div>
                    </div>
                    <nav class="card2nav">
                        <div class="navButtons" onclick="overlayPictureRenderingMain(${index})">main</div>
                       
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

