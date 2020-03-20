function showSpaceTime() {
    let date = new Date();
    let h = date.getHours(); // van 0 tot 23
    let m = date.getMinutes(); // van 0 tot 59
    let s = date.getSeconds(); // 0 van 59
    let sessie = "AM";

    if(h ==0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        sessie = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + sessie;
    document.getElementById("mySpaceDisplay").innerText = time;
    document.getElementById("MySpaceDisplay").textCont = time;

    setTimeout(showSpaceTime, 1000);
}