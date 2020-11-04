const movingFrame = document.getElementById('js--movingFrame');
const movingFrameText = document.getElementById('js--movingFrame__text');
const frameCounter = document.getElementById('js--frameCounter');
const continueButton = document.getElementById('js--continueButton');

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

    //object naar midden plaatsen als het dichtbij wordt losgelaten
    if (x > (vw/2 - frameSizeX/2 - 30) && x < (vw/2 - frameSizeX/2 + 30) && y > (vh/2 - frameSizeY/2 - 30) && y < (vh/2 - frameSizeY/2 + 30)) {
        movingFrame.style.left = vw/2 - frameSizeX/2 + 'px';
        movingFrame.style.top = vh/2 - frameSizeY/2 + 'px';
        frameState = "placed";
        setTimeout(function(){checkState();}, 1500);
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

        //object naar midden plaatsen als het dichtbij wordt losgelaten
        if (x > (vw/2 - frameSizeX/2 - 30) && x < (vw/2 - frameSizeX/2 + 30) && y > (vh/2 - frameSizeY/2 - 30) && y < (vh/2 - frameSizeY/2 + 30)) {
            movingFrame.style.left = vw/2 - frameSizeX/2 + 'px';
            movingFrame.style.top = vh/2 - frameSizeY/2 + 'px';
            frameState = "placed";
            setTimeout(function(){checkState();}, 1500);
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
            frameCount++;
            movingFrameText.innerHTML = "Frame " + (frameCount + 1);
            setTimeout(function(){frameState = "floating";}, 500);
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