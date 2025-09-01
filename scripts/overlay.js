
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

// render the Overlay picture
function openOverlaySearch(index) {
    overlayPictureRenderingMainSearch(index);
    renderIconsCardsMainSearch(index);
    toggleOverlay();
    document.body.style.overflow = 'hidden';
}

// ##################################################################################
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

// ##################################################################################
// for search funktion 

function prevCardMainSearch(index) { // function backwards card main view
    if (index > 0) {
        index = index - 1;
        overlayPictureRenderingMainSearch(index);
        renderIconsCardsMainSearch(index);       
    } else if (index == 0) {
        index = gefiltertesArray.length - 1;
        overlayPictureRenderingMainSearch(index);
        renderIconsCardsMainSearch(index);       
    }
}

function nextCardMainSearch(index) { // function forwards card main view
    if (index < gefiltertesArray.length - 1) {
        index = index + 1;
        overlayPictureRenderingMainSearch(index);
        renderIconsCardsMainSearch(index);    
    } else if (index = gefiltertesArray.length) {
        index = 0;
        overlayPictureRenderingMainSearch(index);
        renderIconsCardsMainSearch(index);    
    }
}

function prevCardStatsSearch(index) { // function backwards card stats view
    if (index > 0) {
        index = index - 1;
        overlayPictureRenderingStatsSearch(index);
        renderIconsCardsStatsSearch(index);      
        updateProgressBar(index);
    } else if (index == 0) {
        index = gefiltertesArray.length - 1;
        overlayPictureRenderingStatsSearch(index);
        renderIconsCardsStatsSearch(index);      
        updateProgressBar(index);
    }
}

function nextCardStatsSearch(index) { // function forwards card stats view
    if (index < gefiltertesArray.length - 1) {
        index = index + 1;
        overlayPictureRenderingStatsSearch(index);
        renderIconsCardsStatsSearch(index);  
        updateProgressBar(index); 
    } else if (index = gefiltertesArray.length) {
        index = 0;
        overlayPictureRenderingStatsSearch(index);
        renderIconsCardsStatsSearch(index);   
        updateProgressBar(index); 
    }
}

