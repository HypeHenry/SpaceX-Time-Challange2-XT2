function showSpaceTime() {

    let date = new date();
    let h = date.getHours(); // van 0 tot 23
    let m = date.getMinutes(); // van 0 tot 59
    let s = date.getSeconds(); // 0 van 59
    let sessie = "AM";

    if (h == 0){
        h = 12;
    }

    if (h > 12){
        h = h - 12;
        sessie = "PM";
    }

}