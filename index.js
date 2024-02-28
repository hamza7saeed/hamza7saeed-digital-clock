let title = document.title = "Digital Clock";

let head = document.head;
let body = document.body;
body.style.color = "#EEEEEE";
body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp6649793.jpg')"
let link = document.createElement("link");
link.type = "icon/x-image";
link.rel = "icon";
link.href = "https://cdn-icons-png.flaticon.com/512/5776/5776328.png";

head.appendChild(link);




let sec = document.createElement("section");
sec.style.display = 'flex';
sec.style.alignItems = 'center';
sec.style.flexDirection = 'column';
sec.style.fontSize = '40px'
// sec.style.color = '#FEFBF6'
let tit = document.createElement("h3");
tit.innerText = "Digital Clock"

let localTimee = document.createElement("div");
localTimee.innerText = "0:0:0"
localTimee.style.marginTop = "5%"
function timeLocal(){
    let time = new Date();
    let localTime = time.toLocaleTimeString();
    console.clear();
    if (localTime < 10 + "AM","PM" ){
        
        localTimee.innerText ="0"+ localTime
    }

    }
    setInterval(timeLocal,1000);
    
let dateDiv = document.createElement("div");
dateDiv.innerText = "date"
    function fullDay(){
 let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 let months = ["January","February","March","April","May","June","July","August","September","Octuber","Novemver","December"];
 let day = new Date();
let v = day.getDay();

let u = day.getDate();

let w = day.getMonth();

let y = day.getFullYear();
dateDiv.innerText =days[v] + ", "+ u +"/"+ months[w]+ "/"+y; // year

}
fullDay()
body.appendChild(sec);
sec.append(tit,localTimee, dateDiv)







