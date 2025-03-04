const hourTag = document.querySelector(".hour")
const minTag = document.querySelector(".min")
const secTag = document.querySelector(".sec")
const msTag = document.querySelector(".ms")

const updateclock=()=>{
    const currentdatetime = new Date();
    hourTag.innerText =currentdatetime.getHours()
    minTag.innerText=currentdatetime.getMinutes()
    secTag.innerText=currentdatetime.getSeconds()
    msTag.innerText=currentdatetime.getMilliseconds()
}
updateclock()
setInterval(updateclock,)