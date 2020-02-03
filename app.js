const time = document.getElementById("time")
const name = document.getElementById("name")
const focus = document.getElementById("focus")
const greeting = document.getElementById("greeting")

function showTime(){
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let seconds = today.getSeconds()
    
    time.innerHTML = setZero(hour) + ":" + setZero(minute) + ":" + setZero(seconds);
    
    
    
    setTimeout(showTime, 1000);
}

function setZero(n){
           if (n < 10){
        return '0' + n
    }else{
        return '' + n
    }
}


function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = "[Enter name]"
    }else{
        name.textContent = localStorage.getItem("name")
        name.style.color = "red";
    }
}

function setName(enter){
    if(enter.type === "keypress"){
        if(enter.keyCode === 13){
            localStorage.setItem("name", enter.target.innerHTML);
            name.blur();
        }
    }else{
        localStorage.setItem("name", enter.target.innerHTML);
    }
    name.style.color = "red";
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = "[Enter name]"
    }else{
        focus.textContent = localStorage.getItem("focus")
        focus.style.color = "red";
    }
}

function setFocus(enter){
    if(enter.type === "keypress"){
        if(enter.keyCode === 13){
            localStorage.setItem("focus", enter.target.innerHTML);
            focus.blur();
        }
    }else{
        localStorage.setItem("focus", enter.target.innerHTML);
    }
    focus.style.color = "red";
}

function setBgGreet(){
    let today = new Date()
    let hour = today.getHours()
    
    if(hour < 12){
        
        document.body.style.backgroundImage = "url('morning.jpeg')";
        greeting.innerText = "Good morning mi boi ";
        document.body.style.backgroundSize = "cover";
       }else if (hour < 20){
           document.body.style.backgroundImage = "url('afternoon.jpeg')";
           greeting.innerText = "Good afternoon mi boi ";
           document.body.style.backgroundSize = "cover";
       }else{
           greeting.innerText = "Good night mi boi ";
           document.body.style.backgroundImage = "url('night.jpeg')";
           document.body.style.backgroundSize = "cover";
       }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
getName();
getFocus();
setBgGreet();