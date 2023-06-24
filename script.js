const circle=document.querySelector(".circle");
const middle=document.querySelector(".middle");
const btn=document.getElementById("on");
btn.addEventListener("click",()=>
{
    let text=btn.innerText;
    console.log(document.body.style.backgroundColor);
    if(text=="Turn on")
    {
        circle.classList.add("glow");
        middle.classList.add("mid");
        btn.innerText="Turn off";
        
    }
    else
    {
        circle.classList.remove("glow");
        middle.classList.remove("mid");
        btn.innerText="Turn on";

    }
})