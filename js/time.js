function showSpaceTime() {

    let date = new Date();
    let h = date.getHours(); // haal van 0 tot 23 uren
    let m = date.getMinutes(); // haal van 0 tot 59 minuten
    let s = date.getSeconds(); // haal 0 van 59 secondens


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

    let time = dag + " " + h + ":" + m + ":" + s + " ";
    document.getElementById("MySpaceDisplay").innerText = time;
    document.getElementById("MySpaceDisplay").textCont = time;


    if (h >= 7 && h < 18) {
        document.getElementById("videospace").style.display = "none";
        document.getElementById("videonight").style.display = "none";


    } else if (h >= 18 && h < 22) {
        document.getElementById("videospace").style.display = "none";
        document.getElementById("videoday").style.display = "none";

    } else {
        document.getElementById("videonight").style.display = "none";
        document.getElementById("videoday").style.display = "none";
    }
    setTimeout(showSpaceTime, 1000);
}
showSpaceTime();