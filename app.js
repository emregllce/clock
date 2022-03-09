let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


setInterval(myTime,1000)

function myTime(){
    const d = new Date();
    let da = d.getDate();
    let m = months[d.getMonth()].toString().padStart(2, "0");
    let y = d.getFullYear().toString().padStart(2, "0");
    
    let h = d.getHours().toString().padStart(2, "0");
    let min = d.getMinutes().toString().padStart(2, "0");
    let s = d.getSeconds()

    second.innerText = s.toString().padStart(2, "0");
    minute.innerText = min.toString().padStart(2, "0") + " :";
    hour.innerText = h.toString().padStart(2, "0") + " :";
    day.innerText = da.toString().padStart(2, "0");
    month.innerText = m.toString().padStart(2, "0");
    year.innerText = y.toString();
}
