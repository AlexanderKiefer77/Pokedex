
function dishesRendering(i) {
    return `<section class="individualDishes">
                <div>
                    <h3 tabindex="0">${myDishes[i].name}</h3>
                    <p>${myDishes[i].description}</p>
                    <p class="fontColor">Preis :  ${myDishes[i].price.toFixed(2) + " €"}</p>
                </div>
                <div>
                <div>
                    <img src="./assets/icons/add.svg" alt="add Icon" tabindex="0" aria-label="Zu Warenkorb hinzufügen" class="test" onclick="dishesAddToShoppingCart(${i})">
                </svg>
                </div>
            </section>`
}

function supplementsRendering(j) {
    return `<section class="individualDishes">
                <div>
                    <h3 tabindex="0">${mySupplements[j].name}</h3>
                    <p>${mySupplements[j].description}</p>
                    <p class="fontColor">Preis :  ${mySupplements[j].price.toFixed(2) + " €"}</p>
                </div>
                <div>
                    <img src="./assets/icons/add.svg" alt="add Icon" tabindex="0" aria-label="Zu Warenkorb hinzufügen" onclick="supplementsAddToShoppingCart(${j})">
                </div>
            </section>`
}

function drinksRendering(k) {
    return `<section class="individualDishes">
                <div>
                    <h3 tabindex="0">${myDrinks[k].name}</h3>
                    <p>${myDrinks[k].description}</p>
                    <p class="fontColor">Preis :  ${myDrinks[k].price.toFixed(2) + " €"}</p>
                </div>
                <div>
                    <img src="./assets/icons/add.svg" alt="add Icon" tabindex="0" aria-label="Zu Warenkorb hinzufügen" onclick="drinksAddToShoppingCart(${k})">
                </div>
            </section>`
}

function shoppingCartRendering(j) {
    return `<section class="orderedMeal">
                <p class="mealNameShoppingCart">${myShoppingCart[j].name}</h>
                <div class="quantities">
                    <div class="quantitiesPlusMinus">
                        <img src="./assets/icons/remove.svg" alt="Button Anzahl reduzieren" tabindex="0" aria-label="Menge reduziern" onclick="reduceNumber(${j})">
                        <p class="numberOfMeal">${myShoppingCart[j].startnumber + "x"}</p>
                        <img src="./assets/icons/add.svg" alt="Button Anzahl erhöhen" tabindex="0" aria-label="Menge erhöhen" onclick="increaseNumber(${j})">
                    </div>
                    <p class="sumPricePerMeal">${myShoppingCart[j].newprice.toFixed(2) + " €"}</p>
                    <img src="./assets/icons/delete.svg" alt="Aus Warenkorb entfernen" tabindex="0" aria-label="Aus Warenkorb entfernen" onclick="removeFromShoppingCart(${j})">
                </div>
            </section>`
}
