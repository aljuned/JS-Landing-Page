const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focuss = document.getElementById("focus");
const ampm = document.getElementById("ampm");
const main = document.getElementById("main");

function showTime() {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const ampm = hr >= 12 ? "PM" : "AM"

    // hr = hr % 12 || 12;
    time.innerHTML = `${hr}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${ampm}`

    setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBg() {
    let today = new Date();
    let hour = today.getHours();


    if (hour < 12) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = "Good Morning"
        document.body.style.color = "white";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";


    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')"
        greeting.textContent = "Good Afternoon"
        document.body.style.color = "white";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

    } else {
        document.body.style.backgroundImage = "url('./img/night.jpg')"
        greeting.textContent = "Good Night"
        document.body.style.color = "white";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

    }

}



function setName(e) {
    if (e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText)
            name.blur();

        }
    } else {
        localStorage.setItem('name', e.target.innerText)

    }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function setFocus(e) {
    if (e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText)
            focuss.blur();

        }
    } else {
        localStorage.setItem('focus', e.target.innerText)

    }
}
focuss.addEventListener("keypress", setFocus);
focuss.addEventListener("blur", setFocus);


function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }

}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focuss.textContent = '[Enter Focus]'
    } else {
        focuss.textContent = localStorage.getItem('focus');
    }

}

showTime();
setBg();
getName();
getFocus();