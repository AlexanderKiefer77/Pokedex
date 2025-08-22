
let overlayRef = document.getElementById('overlay');
let displayAOT = document.getElementById('aot');
let displayFooter = document.getElementById('footer');

// render the Overlay picture
function openOverlay(index) {
    overlayPictureRenderingMain(index);
    renderIconsCardsMain(index);
    toggleOverlay();
    document.body.style.overflow = 'hidden';

}

function toggleOverlay() {
    overlayRef.classList.toggle('overlayClass');
}

// function closing the Overlay
function closeOverlay() { 
    overlayRef.innerHTML = ''; 
    toggleOverlay();
    document.body.style.overflow = 'auto';
}

// prevented eventBubling at the Overlay
function logDownWBubblingPrevention(event) { 
    event.stopPropagation();
}

function openOverlaySearch(index) { // render the Overlay picture
    overlayPictureRenderingMainSearch(index);
    renderIconsCardsMainSearch(index);
    toggleOverlay(); // starting toggle function  
}

function prevCardMain(index) { // function backwards card main view
    if (index > 0) {
        index = index - 1;
        overlayPictureRenderingMain(index);
        renderIconsCardsMain(index);       
    } else if (index == 0) {
        index = names.length - 1;
        overlayPictureRenderingMain(index);
        renderIconsCardsMain(index);       
    }
}

function nextCardMain(index) { // function forwards card main view
    if (index < names.length - 1) {
        index = index + 1;
        overlayPictureRenderingMain(index);
        renderIconsCardsMain(index);    
    } else if (index = names.length) {
        index = 0;
        overlayPictureRenderingMain(index);
        renderIconsCardsMain(index);    
    }
}

function prevCardStats(index) { // function backwards card stats view
    if (index > 0) {
        index = index - 1;
        overlayPictureRenderingStats(index);
        renderIconsCardsStats(index);      
        updateProgressBar(index);
    } else if (index == 0) {
        index = names.length - 1;
        overlayPictureRenderingStats(index);
        renderIconsCardsStats(index);      
        updateProgressBar(index);
    }
}

function nextCardStats(index) { // function forwards card stats view
    if (index < names.length - 1) {
        index = index + 1;
        overlayPictureRenderingStats(index);
        renderIconsCardsStats(index);  
        updateProgressBar(index); 
    } else if (index = names.length) {
        index = 0;
        overlayPictureRenderingStats(index);
        renderIconsCardsStats(index);   
        updateProgressBar(index); 
    }
}

