function init_page(){
    fetch("Resources/Json/ShareDir.json")
        .then((response) => response.json())
        .then(function(json){
            const body = document.getElementsByTagName("body")[0];
            const content  =document.getElementById("content");
            for(let df in json){
                if(json[df]["type"] !== "file") {
                    let div = document.createElement("div");
                    div.setAttribute("style", "width: 99%; height: 40px; background: rgba(233, 233, 233, 0.99); border: 1px solid rgba(200, 200, 200, 0.99)");
                    div.innerHTML = "<button onclick='toDir(df)' style=' text-decoration: none; background: none; border: none'>" + df + "</button>";
                    content.appendChild(div);
                }
            }
            for(let df in json){
                if(json[df]["type"] === "file") {
                    let div = document.createElement("div");
                    div.setAttribute("style", "width: 99%; height: 40px; background: rgba(233, 233, 233, 0.99); border: 1px solid rgba(200, 200, 200, 0.99)");
                    div.innerHTML = "<a href='" + json[df]["path"] + "' download='" + df + "' style=' text-decoration: none; color: black;'>" + df + "</a>";
                    content.appendChild(div);
                }
            }
        })
}

function toDir(name){

}

init_page();