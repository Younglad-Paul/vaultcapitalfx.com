const post = document.getElementsByClassName("post123");
const b = document.querySelectorAll(".box123 div");
const p = post.length;
let i = 0;

setInterval(next, 8000);

function next() {
  if (i === 0) {
    post[i + 1].style = "left:1000px;z-index:1";
    b[i + 1].style = "";
    
    post[p - 1].style = "left:-1000px;z-index:1";
    b[p - 1].style = "";

    post[i].style = "left:0;z-index:3";
    b[i].style = "background-color:aquamarine";
    i++;
  } else if (i > 0 && i < p - 1) {
    post[i - 1].style = "left:-1000px;z-index:1";
    b[i - 1].style = "";

    post[i].style = "left:0;z-index:3";
    b[i].style = "background-color:aquamarine";

    post[i + 1].style = "left:1000px;z-index:1";
    b[i + 1].style = "";
    i++;
  } else if (i === p - 1) {
    post[i - 1].style = "left:-1000px;z-index:1";
    b[i - 1].style = "";

    post[i].style = "left:0;z-index:3";
    b[i].style = "background-color:aquamarine";

    i = 0;

    post[i].style = "left:1000px;z-index:1";
    b[i].style = "";
  }
}
