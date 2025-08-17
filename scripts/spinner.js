
let spinnerRef = document.getElementById('spinnerPlace');

function startLoadingSpinner() {
    cardsRef.innerHTML = '';
    cardsRef.innerHTML =`<div id="spinnerPlace"></div>`;
    let spinnerRef = document.getElementById('spinnerPlace');
    spinnerRef.classList.add("loaderCircle");
    //console.log("spinner gestartet");
}

function stopLoadingSpinner() {
    let spinnerRef = document.getElementById('spinnerPlace');
    spinnerRef.classList.remove("loaderCircle");
    cardsRef.innerHTML = '';
    //console.log("spinner gestoppt");
}

