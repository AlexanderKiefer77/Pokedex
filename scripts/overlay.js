
let overlayRef = document.getElementById('overlay');
let displayAOT = document.getElementById('aot');
let displayFooter = document.getElementById('footer');

function openOverlay(index) { // render the Overlay picture
    overlayPictureRenderingMain(index);
    renderIconsCardsMain(index);
    toggleOverlay(); // starting toggle function    
}

function toggleOverlay() {
    overlayRef.classList.toggle('overlayClass');
}

function closeOverlay() { // function closing the Overlay
    overlayRef.innerHTML = ''; // clears the contents of the overlay
    toggleOverlay(); // starts toggle function
    displayAOT.classList.remove("d_none"); // removed AOT class d_none, This will display the contents of the AOT again
}

// verhindert eventBubling beim Overlay
function logDownWBubblingPrevention(event) { 
    event.stopPropagation();
}

function openOverlaySearch(index) { // render the Overlay picture
    overlayPictureRenderingMainSearch(index);
    renderIconsCardsMainSearch(index);
    toggleOverlay(); // starting toggle function  
}

