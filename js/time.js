function showSpaceTime() {

    let date = new Date();
    let h = date.getHours(); // haal van 0 tot 23
    let m = date.getMinutes(); // haal van 0 tot 59
    let s = date.getSeconds(); // haal 0 van 59
    
    // Weet niet of ik AM/PM ga gebruiken door die bug
    // let sessie = "AM";

    // if (h === 0) {
    //     h = 12;
    // }
    //
    // if (h > 12){
    //     h = h - 12;
    //     sessie = "PM";
    // }

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

    let time = dag +" " + h + ":" + m + ":" + s + " " ;
    document.getElementById("MySpaceDisplay").innerText = time;
    document.getElementById("MySpaceDisplay").textCont = time;




    if (h >= 7 && h < 12) {
        document.getElementsByTagName("video").style.display = "none";
    }
    else if (h >= 12 && h < 18) {
        document.getElementsByTagName("video").style.display = "none";

    }
    else {
        document.getElementsByTagName("video").style.display = "none";
    }
    setTimeout(showSpaceTime, 1000);

    //
    // if (h === 0) {
    //     h = 12;
    // }
    //
    // if (h > 12){
    //     h = h - 12;
    //     sessie = "PM";
    // }
}
showSpaceTime();