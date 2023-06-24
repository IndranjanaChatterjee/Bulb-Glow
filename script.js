const circle = document.querySelector(".circle");
const middle = document.querySelector(".middle");
const btn = document.getElementById("on");

btn.addEventListener("click", () => {
    let text = btn.innerText;
    let get = document.getElementById("txt");
    
    if (text == "Turn on") {
        
        if (get.value == "" || get.value == null) {
            document.querySelector(".msg").style.display = "block";
        }
        else {
            document.querySelector(".msg").style.display = "none";
            circle.style.backgroundColor = `${get.value}`;
            middle.style.backgroundColor = `${get.value}`;

            circle.style.boxShadow = `1px 2px 50px 35px ${get.value}`;
            btn.innerText = "Turn off";
        }

    }
    else {
        circle.style.backgroundColor = "burlywood";
        middle.style.backgroundColor = "burlywood";
        circle.style.boxShadow = "none";
        btn.innerText = "Turn on";

    }
})