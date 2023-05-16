window.addEventListener("scroll", () => {
    if (scrollY > 800) {
        document.getElementById("onScrolA").style.display = "block";
    }
    else if (scrollY < 800) {
        document.getElementById("onScrolA").style.display = "none";
    }
})


function getDate() {
    const startDate = new Date("August 12, 2021 00:00:00");
    var todaysDate = new Date();
    const time = Math.abs(startDate - todaysDate);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    document.getElementById("time1").innerHTML = days;
}

getDate()
