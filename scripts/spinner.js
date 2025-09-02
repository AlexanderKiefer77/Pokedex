
let spinnerRef = document.getElementById('spinnerPlace');

function startLoadingSpinner() {
    cardsRef.innerHTML = '';
    cardsRef.innerHTML =`<div id="spinnerPlace"></div>`;
    let spinnerRef = document.getElementById('spinnerPlace');
    spinnerRef.classList.add("loaderCircle");
}

function stopLoadingSpinner() {
    let spinnerRef = document.getElementById('spinnerPlace');
    cardsRef.innerHTML = '';
}

