const button=document.querySelector(".notification__button");
const notifications=Array.from(document.querySelectorAll(".notification__card--unread"));
const count=document.querySelector(".notification__count")
const unreadSymbols=Array.from(document.querySelectorAll(".notification__unread"))


button.addEventListener("click", function(){
    count.innerText=0;
    notifications.forEach((notification)=>{
        notification.classList.remove("notification__card--unread")
        
    })
    unreadSymbols.forEach((unreadSymbol)=>{
        unreadSymbol.classList.add("hidden")
        
    })
})