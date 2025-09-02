
// for responsive navbar
function checkWindowWidth() {
    if (window.innerWidth > 1100) {
        toggleRespMenuOpenMore1100();
    } else if (window.innerWidth > 500 && window.innerWidth <= 1100) {
        toggleRespMenuOpenBetween500and100();
    } else {
        toggleRespMenuOpenLess500();
    }
}

// screen width more as 1100px
function toggleRespMenuOpenMore1100() {
    document.getElementById('respMenu').classList.toggle('respMenuClosed');
}

// screen width between 500px and 1100px
function toggleRespMenuOpenBetween500and100() {
    document.getElementById('header').style.height = "245px";
    document.getElementById('respMenu').style.top = "-245px";
    document.getElementById('respMenu').classList.toggle('respMenuClosed');
}

// screen width less 500px
function toggleRespMenuOpenLess500() {
    document.getElementById('header').style.height = "365px";
    document.getElementById('respMenu').style.top = "-365px";
    document.getElementById('respMenu').classList.toggle('respMenuClosed');
}

//navbar close
function toggleRespMenuClose() {
    document.getElementById('header').style.height = "100px";
    document.getElementById('respMenu').style.top = "-100px";
    document.getElementById('respMenu').classList.toggle('respMenuClosed');    
    document.getElementById('inputFieldStartID').value = '';
    document.getElementById('inputFieldNumberCardsLoading').value = '';
    firstPartStartID();
}

