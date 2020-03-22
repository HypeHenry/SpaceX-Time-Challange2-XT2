# SpaceX-Time-Challange2-XT2
Challange 2 van CMD XT2

Link to the website: https://hypehenry.github.io/SpaceX-Dashboard-Challange1-XT2/ 

### HOW I MADE IT 🚀

Eerst heb hier gebruik gemaakt van let ipv var naar standaard van ES6 🇺🇳
```
    let date = new Date();
    let h = date.getHours(); // van 0 tot 23
    let m = date.getMinutes(); // van 0 tot 59
    let s = date.getSeconds(); // 0 van 59
    let sessie = "AM";

```

Ik heb gebruik gemaakt van 12-uurssysteem.
Ante meridiem (vaak afgekort tot a.m., AM, A.M. wordt gebruikt als je een tijdstip tussen 12 uur 's nachts tot 12 uur 's middags aan wilt geven. )

Post meridiem (vaak afgekort tot p.m., PM, P.M.wordt gebruikt als je een tijdstip tussen 12 uur 's middags tot 12 uur 's nachts aan wilt geven.) 
```
    if (h === 0) {
        h = 12;
    }

    if (h > 12) { // na 12 uur smiddags
        h = h - 12;
        sessie = "PM";
    }
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
vervolgens aan geroepen met: 

```
    let time = dag +" " + h + ":" + m + ":" + s + " " + sessie ;
```
 Om de html te manipuleren:
  
```    
    document.getElementById("MySpaceDisplay").innerText = time;
    document.getElementById("MySpaceDisplay").textCont = time;
```

tha da 🔥🔥🔥


