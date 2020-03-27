# SpaceX-Time-Challange2-XT2
Challange 2 van CMD XT2

Link to the website: https://hypehenry.github.io/SpaceX-Time-Challange2-XT2/

### HOW I MADE IT 🚀

Eerst heb hier gebruik gemaakt van let ipv var naar standaard van ES6 🇺🇳
```
    let date = new Date();
    let h = date.getHours(); // van 0 tot 23 uur
    let m = date.getMinutes(); // van 0 tot 59 minuten
    let s = date.getSeconds(); // 0 van 59 secondes 

```



Om de dagen weer te geven heb ik gebruik gemaakt van case switch 

```
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
```
Vervolgens aan geroepen met: 

```
    let time = dag +" " + h + ":" + m + ":" + s + " " + sessie ;
```
 Om de html te manipuleren:
  
```    
    document.getElementById("MySpaceDisplay").innerText = time;
    document.getElementById("MySpaceDisplay").textCont = time;
```

Van 7 tot 18 heb je de achtergrond: Daglicht

Van 18 tot 22 heb je de achtergrond: Nachtsterren

Tussen 22 tot 7 heb je de achtergrond: Space 


```    
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
```

tha da 🔥🔥🔥


