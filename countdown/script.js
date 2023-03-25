const day= document.querySelector("#days");
const hour= document.querySelector("#hours");
const min= document.querySelector("#mins");
const sec= document.querySelector("#seconds");



function Uptime(){
const curyear = new Date().getFullYear();
const newyear = new Date(`January 1 ${curyear+1} 00:00:00`);

const curdate = new Date();
const diff= newyear - curdate;

const d= Math.floor(diff/1000/60/60/24);
const h= Math.floor((diff/1000/60/60)%24);
const m= Math.floor((diff/1000/60)%60);
const s= Math.floor((diff/1000)%60);

//console.log(d+" "+h+" "+m+" "+s);

day.innerHTML=d<10?"0"+d:d;
hour.innerHTML=h<10?"0"+h:h;
min.innerHTML=m<10?"0"+m:m;
sec.innerHTML=s<10?"0"+s:s;
}

setInterval(Uptime,1000);
