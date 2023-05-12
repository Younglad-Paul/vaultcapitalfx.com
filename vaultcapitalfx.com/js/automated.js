window.addEventListener("scroll", () => {
    if (scrollY > 800) {
        document.getElementById("onScrolA").style.display = "block";
    }
    else if (scrollY < 800) {
        document.getElementById("onScrolA").style.display = "none";
    }
})
function getTime() {
    D = 638;

    T = new Date();
    H = T.getHours()

        if (H == 0) {
            D++;
        }

}    

getTime();

let timing = document.getElementById('time1').innerHTML = D;
