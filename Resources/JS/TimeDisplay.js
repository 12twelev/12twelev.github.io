let t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    let date = new Date()
    let time_div = document.getElementById("time-display");
    let year = date.getFullYear();
    let month = date.getMonth();
    let date_ = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(sec < 10) sec = "0" + sec;

    time_div.innerHTML =
        "<div id='time' style='color: aliceblue; position: relative; top: 5px; height: auto; width: content-box;'>" +
        "<span style='text-align: center;'>"+year+"."+month+"."+date_+"</span>" +
        "<br>" +
        "<span style='text-align: center;'>"+hour+":"+min+":"+sec+"</span>" +
        "</div>";

    t = setTimeout(time, 1000);
}

time()
