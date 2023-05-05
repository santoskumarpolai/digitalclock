const hourEl= document.getElementById("hour");
const minuteEl=document.getElementById("minute");
const sceondEl=document.getElementById("sceond");
const ampmEl=document.getElementById("ampm");
 function updateClock()
 {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let sceond = new Date().getSeconds();
    let ampm = "am"

    if(hour>12)
    {
        hour=hour-12 ;
        
        ampm="pm";
    }   /*terrny operator*/
    hour = hour<10 ? "0"+hour: hour;
    minute= minute<10 ? "0"+minute: minute;
    sceond= sceond<10  ? "0"+sceond:sceond;

    hourEl.innerText=hour;
    minuteEl.innerText= minute;
    sceondEl.innerText=sceond;
     ampmEl,(innerText= ampm);
     setTimeout(() =>{updateClock(); void updateClock()},1000)
       }

 updateClock()