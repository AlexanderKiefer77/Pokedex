
function cardsRendering(index) {
    return `<div class="card">
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
