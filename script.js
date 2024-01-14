setInterval(function () {
    let a = new Date();
    let sec = a.getSeconds();
    let hour = a.getHours();
    let min = a.getMinutes();
    let date = a.getDate();
    let month = a.getMonth() + 1;
    let year = a.getFullYear();
    document.querySelector("#second").textContent = sec;
    document.querySelector("#hour").textContent = hour;
    document.querySelector("#minute").textContent = min;
    document.querySelector("#date").textContent = date;
    document.querySelector("#month").textContent = month;
    document.querySelector("#year").textContent = year;
}, 1000);