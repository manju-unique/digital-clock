function myfunc(){
    
   const now = new Date();
   const time = now.toLocaleTimeString();

   const element = document.getElementById("time");
   document.getElementById("time").textContent = time;

}
setInterval(myfunc, 1000);

