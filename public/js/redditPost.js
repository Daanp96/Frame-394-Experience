const reddit_title = document.getElementById("js--title");
const gif_upload = document.getElementById("js--gif_input");
const cancel = document.getElementById("js--cancel");
const post = document.getElementById("js--post");
const gif_file = document.getElementById("js--gif_file");
const popup = document.getElementById("js--popup");
const reddit_page = document.getElementById("js--reddit_page");
const gif = document.getElementById("js--gif");
const upload_group = document.getElementById("js--upload_group");
const error_window = document.getElementById("js--errorWindow");
const error_title = document.getElementById("js--errorTitle");
const error_text = document.getElementById("js--errorText");
const error_button = document.getElementById("js--errorButton");
const overlay = document.getElementById("js--overlay");
let post_title = "";

const visited = JSON.parse(localStorage.getItem("visited_pages"));
visited.reddit_post = true;
localStorage.setItem('visited_pages', JSON.stringify(visited));
console.log(visited);

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
      error_window.style.display = "flex";
      error_title.innerHTML = "Not so fast!";
      error_text.innerHTML = "I'll have to upload the gif first!";

    } else if (!reddit_title.value) {
      error_window.style.display = "flex";
      error_title.innerHTML = "Not so fast!";
      error_text.innerHTML = "I'll have to add a title first!";

    } else {
      let input = post_title;
      localStorage.setItem("postTitle",input);
      location.href = "Reddit-comments.html";
    }
  });
}

const cancelPost = () => {
  cancel.addEventListener("click", () => {
    error_window.style.display = "flex";
    error_title.innerHTML = "Wait, that isn't what I want!";
    error_text.innerHTML = "I want to post the gif to Reddit!";
  });
}

const closeError = () => {
  error_button.addEventListener("click", () => {
    error_window.style.display = "none";
  });
}

window.onload = function() {
  overlay.style.opacity = "0";
  setTimeout(function(){overlay.style.zIndex = "-10";}, 2500);
}

export {
    openGifWindow,
    closeGifWindow,
    postToReddit,
    cancelPost, 
    closeError
};
