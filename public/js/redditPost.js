const reddit_title = document.getElementById("js--title");
const gif_upload = document.getElementById("js--gif_input");
const cancel = document.getElementById("js--cancel");
const post = document.getElementById("js--post");
const gif_file = document.getElementById("js--gif_file");
const popup = document.getElementById("js--popup");
const reddit_page = document.getElementById("js--reddit_page");
const gif = document.getElementById("js--gif");
const upload_group = document.getElementById("js--upload_group");
let post_title = "";

const openGifWindow = () => {
    gif_upload.addEventListener("click", (e) => {
        popup.style.display = "flex";
        reddit_page.style.filter = "blur(3px)"
      });
}


const closeGifWindow = () => {
    gif_file.addEventListener("click", () => {
        popup.classList.add("scale-out-center");
        reddit_page.style.filter = "none";
        gif.style.display = "block";
        post.style.cursor = "pointer";
        upload_group.style.display = "none";
      });
}

const postToReddit = () => {
    post.addEventListener("click", () => {
        post_title = reddit_title.value;
        if(window.getComputedStyle(gif).display === "none"){
          alert("Not so fast, I'll have to upload the gif first!");
        } else if (!reddit_title.value) {
          alert("I'll have to add a title!");
        } else {
          let input = post_title;
          localStorage.setItem("postTitle",input);
          location.href = "Reddit-comments.html";
        }
      });
}

const cancelPost = () => {
  cancel.addEventListener("click", () => {
    alert("Wait, that is not what I want, I want to upload the gif!");
  });
}

export {
    openGifWindow,
    closeGifWindow,
    postToReddit,
    cancelPost
};


const overlay = document.getElementById("js--overlay");

window.onload = function() {
    overlay.style.opacity = "0";
    setTimeout(function(){overlay.style.zIndex = "-10";}, 2500);
}

