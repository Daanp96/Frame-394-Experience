const movingFrame = document.getElementById('js--movingFrame');
const movingFrameFrame = document.getElementById('js--movingFrame__frame');
const movingFrameText = document.getElementById('js--movingFrame__text');
const frameCounter = document.getElementById('js--frameCounter');
const continueButton = document.getElementById('js--continueButton');
const modalBg = document.getElementById("js--modal-bg");
const modal = document.getElementById("js--modal");

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.stabilizer = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));

var frameCount = 0;
const totalFrames = 5;

//pakt de grootte van het scherm
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

//pakt de grootte van het object
var frameSizeX = movingFrame.offsetWidth;
var frameSizeY = movingFrame.offsetHeight;

//restricties voor buiten het scherm
var restrictionX = vw - frameSizeX;
var restrictionY = vh - frameSizeY;

//status van het object
var frameState = 'floating';

//MOBILE
//touchstart event zorgt ervoor dat animaties worden gestopt
movingFrame.addEventListener('touchstart', function(e){
    //zet status naar vasthouden
    frameState = 'holding';

    //zet animatie uit
    movingFrame.style.WebkitTransition = 'none';
    movingFrame.style.MozTransition = 'none';
})

movingFrame.ondragstart = function() {
    return false;
};

//touchmove event zorgt ervoor dat wanneer de gebruiker het object pakt, deze kijkt voor de locatie van het object
movingFrame.addEventListener('touchmove', function(e){
    //pakt de locatie van het object
    var touchLocation = e.targetTouches[0];

    //geef de nieuwe locatie mee aan het object, waar de gebruiker zijn muis naartoe beweegt
    movingFrame.style.left = touchLocation.pageX - frameSizeX/2 + 'px';
    movingFrame.style.top = touchLocation.pageY - frameSizeY/2 + 'px';

    
    // RESTRICTIES 

    //huidige locatie van het object
    var x = parseInt(movingFrame.style.left);
    var y = parseInt(movingFrame.style.top);

    //verplaats object binnen het scherm, zodra de gebruiker deze buiten het scherm sleept
    if (x < 0 && y < 0) {
        movingFrame.style.left = 0;
        movingFrame.style.top = 0;
    }
    else if (x < 0) {
        movingFrame.style.left = 0;
    }
    else if (y < 0) {
        movingFrame.style.top = 0;
    }
    else if (x > restrictionX && y > restrictionY) {
        movingFrame.style.left = restrictionX.toString() + 'px';
        movingFrame.style.top = restrictionY.toString() + 'px';
    }
    else if (x > restrictionX) {
        movingFrame.style.left = restrictionX.toString() + 'px';
    }
    else if (y > restrictionY) {
        movingFrame.style.top = restrictionY.toString() + 'px';
    }

    if(x < 0 && y > restrictionY) {
        movingFrame.style.left = 0;
        movingFrame.style.top = restrictionY.toString() + 'px';
    }
    else if(x > restrictionX && y < 0) {
        movingFrame.style.left = restrictionX.toString() + 'px';
        movingFrame.style.top = 0;
    }
})

movingFrame.addEventListener('touchend', function(e){
    //huidige locatie van object
    var x = parseInt(movingFrame.style.left);
    var y = parseInt(movingFrame.style.top);

    //korte timout zodat gebruiker niet het frame te snel pakt
    movingFrame.style.pointerEvents = "none";
    setTimeout(function(){movingFrame.style.pointerEvents = "all";}, 2000);

    //object naar midden plaatsen als het dichtbij wordt losgelaten
    if (x > (vw/2 - frameSizeX/2 - 30) && x < (vw/2 - frameSizeX/2 + 30) && y > (vh/2 - frameSizeY/2 - 30) && y < (vh/2 - frameSizeY/2 + 30)) {
        movingFrame.style.left = vw/2 - frameSizeX/2 + 'px';
        movingFrame.style.top = vh/2 - frameSizeY/2 + 'px';
        frameState = "placed";
        setTimeout(function(){checkState();}, 2000);
    } else {
        frameState = "floating";
    }

    //Zet transities weer aan
    movingFrame.style.WebkitTransition = '1.5s';
    movingFrame.style.MozTransition = '1.5s';
})
//EINDE MOBILE

//DESKTOP
movingFrame.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    movingFrame.style.position = 'absolute';
    movingFrame.style.zIndex = 1000;
    frameState = 'holding';
    movingFrame.style.WebkitTransition = 'none';
    movingFrame.style.MozTransition = 'none';
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(movingFrame);
  
    // centers the movingFrame at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        movingFrame.style.left = pageX - movingFrame.offsetWidth / 2 + 'px';
        movingFrame.style.top = pageY - movingFrame.offsetHeight / 2 + 'px';
    }
  
    // move our absolutely positioned movingFrame under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        // RESTRICTIES 

        //huidige locatie van het object
        var x = parseInt(movingFrame.style.left);
        var y = parseInt(movingFrame.style.top);

        //verplaats object binnen het scherm, zodra de gebruiker deze buiten het scherm sleept
        if (x < 0 && y < 0) {
            movingFrame.style.left = 0;
            movingFrame.style.top = 0;
        }
        else if (x < 0) {
            movingFrame.style.left = 0;
        }
        else if (y < 0) {
            movingFrame.style.top = 0;
        }
        else if (x > restrictionX && y > restrictionY) {
            movingFrame.style.left = restrictionX.toString() + 'px';
            movingFrame.style.top = restrictionY.toString() + 'px';
        }
        else if (x > restrictionX) {
            movingFrame.style.left = restrictionX.toString() + 'px';
        }
        else if (y > restrictionY) {
            movingFrame.style.top = restrictionY.toString() + 'px';
        }

        if(x < 0 && y > restrictionY) {
            movingFrame.style.left = 0;
            movingFrame.style.top = restrictionY.toString() + 'px';
        }
        else if(x > restrictionX && y < 0) {
            movingFrame.style.left = restrictionX.toString() + 'px';
            movingFrame.style.top = 0;
        }
    }
  
    // (2) move the movingFrame on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the movingFrame, remove unneeded handlers
    movingFrame.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        movingFrame.onmouseup = null;
        //huidige locatie van object
        var x = parseInt(movingFrame.style.left);
        var y = parseInt(movingFrame.style.top);

        //korte timout zodat gebruiker niet het frame te snel pakt
        movingFrame.style.pointerEvents = "none";
        setTimeout(function(){movingFrame.style.pointerEvents = "all";}, 2000);

        //object naar midden plaatsen als het dichtbij wordt losgelaten
        if (x > (vw/2 - frameSizeX/2 - 30) && x < (vw/2 - frameSizeX/2 + 30) && y > (vh/2 - frameSizeY/2 - 30) && y < (vh/2 - frameSizeY/2 + 30)) {
            movingFrame.style.left = vw/2 - frameSizeX/2 + 'px';
            movingFrame.style.top = vh/2 - frameSizeY/2 + 'px';
            frameState = "placed";
            setTimeout(function(){checkState();}, 2000);
        } else {
            frameState = "floating";
        }

        //Zet transities weer aan
        movingFrame.style.WebkitTransition = '1.5s';
        movingFrame.style.MozTransition = '1.5s';
    };
  
};

movingFrame.ondragstart = function() {
    return false;
};
//EINDE DESKTOP

function checkState(){
    if (frameState == "placed") {
        if (frameCount < (totalFrames - 1)){
            movingFrame.style.pointerEvents = "none";
            frameCount++;
            movingFrameFrame.setAttribute("src", "./img/frame_" + (frameCount + 1) + ".webp")
            movingFrameText.innerHTML = "Frame " + (frameCount + 1);
            setTimeout(function(){frameState = "floating";}, 500);
            setTimeout(function(){movingFrame.style.pointerEvents = "all";}, 2000);
        }
        else{
            frameCount++;
            movingFrame.style.pointerEvents = "none";
            continueButton.style.display = "block";
        }
    }
    else {
        setInterval(() => {
            if (frameState == "floating") {
                float();
            }
        }, 1600);
    }
    updateFrameCounter();
}

function updateFrameCounter(){
    frameCounter.innerHTML = "Frames " + frameCount + "/" + totalFrames;
}

function float(){
    var randomX = random(vw - frameSizeX);
    var randomY = random(vh - frameSizeY);
    movingFrame.style.left = randomX + "px";
    movingFrame.style.top = randomY + "px";
}

function random(number){
    return Math.floor(Math.random() * number);
}

checkState();

function hideModal() {
    modalBg.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(function(){
        modalBg.style.display = "none";
        modal.style.display = "none";
    }, 1500);
}

//Pagina transitie
const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 2500);

    for(const it in visited){
        if (visited[it] == false){
            list_items[page].style.color = "grey";
            list_items[page].style.cursor = "default";
            list_links[page].removeAttribute("href");
        }
        page++;
    }
}

function continueToNextPage() {
    setTimeout(function(){movingFrame.style.display = "none";}, 1000);
    overlay.style.opacity = "1";
    overlay.style.zIndex = "10";
    setTimeout(function(){window.location.href = "redditPost.html";}, 3000);
}

const hamburger = document.getElementById("js--hamburger");
const navigation = document.getElementById("js--navigation");
const navi_text = document.getElementById("js--navigationText");
const list_links = document.getElementsByClassName("navigation__items__link");
const list_items = document.getElementsByClassName("navigation__items__link__choice");
let counter = 0;
let page = 0;

function showNavigation() {
    counter++;
    if(counter % 2){
        navigation.style.opacity = 1;
        navi_text.style.opacity = 0;
        overlay.style.zIndex = 1;
        overlay.style.opacity = 0.8;
        setTimeout(() => {
            navigation.style.display = "block";
        });
    } else {
        navigation.style.opacity = 0;
        navi_text.style.opacity = 1;
        overlay.style.opacity = 0;
        hamburger.style.pointerEvents = "none";
        setTimeout(() => {
            overlay.style.zIndex = -1;
            navigation.style.display = "none";
            hamburger.style.pointerEvents = "auto";
        }, 1000);
    }

}

const modal2 = document.getElementById("js--modal2");
const modalBg2 = document.getElementById("js--modal2-bg");
let modal2Open = false;

function resetWarning(){
    modalBg2.style.display = "block";
    modal2.style.display = "flex";
    modalBg2.style.opacity = ".5";
    modal2.style.opacity = "1";
    modal2Open = true;
}

function hideModal2() {
    modalBg2.style.opacity = "0";
    modal2.style.opacity = "0";
    setTimeout(function(){
        modalBg2.style.display = "none";
        modal2.style.display = "none";
    }, 1000);
    modal2Open = false;
}

function backToStart(){
    document.location.href = "index.html";
}

window.addEventListener("orientationchange", function(event) {
    if(event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180){
        modal2.style.display = "none";
    } else if(modal2Open == true) {
        modal2.style.display = "flex";
    }
});