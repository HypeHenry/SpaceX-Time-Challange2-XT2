function showSpaceTime() {

    let date = new Date();
    let h = date.getHours(); // van 0 tot 23
    let m = date.getMinutes(); // van 0 tot 59
    let s = date.getSeconds(); // 0 van 59
    let sessie = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        sessie = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    switch (new Date().getDay()) { // case switch van welke dag het is
        case 0:
            dag = "Zondag";
            break;
        case 1:
            dag = "Maandag";
            break;
        case 2:
            dag = "Dinsdag";
            break;
        case 3:
            dag = "Woensdag";
            break;
        case 4:
            dag = "Donderdag";
            break;
        case 5:
            dag = "Vrijdag";
            break;
        case 6:
            dag = "Zaterdag";
            break;
        default:
            dag = "Tijd:";
            break;
    }

    let time = dag +" " + h + ":" + m + ":" + s + " " + sessie ;
    document.getElementById("MySpaceDisplay").innerText = time;
    document.getElementById("MySpaceDisplay").textCont = time;

    setTimeout(showSpaceTime, 1000);
}
showSpaceTime();