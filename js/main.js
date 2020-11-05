console.log("Hello world");

const gif = document.getElementById("js--gif");
const likeButton = document.getElementById("js--like-button-0");
const likeButton1 = document.getElementById("js--like-button-1");

likeButton.addEventListener("click", function() {
    changeColor(likeButton)
});
likeButton1.addEventListener("click", function(){
    changeColor(likeButton1)
});

function changeColor(n){
    if (n.getAttribute('src') == "/img/heart-grey.png"){
        n.src = "/img/heart-red.png";
    }else{
        n.src = "/img/heart-grey.png";
    }
}


//gif_file.addEventListener("click", (e) => {
//    gif.style.display = "block";
//  });