let json_path = String("Resources/audio/audio_info.json");
let json_;

function get_info(){
    fetch(json_path)
        .then((response) => response.json())
        .then((json) => over(json));
}

function over(json){
    json_ = json;
    let name_;
    for(let name in json){
        create_child(name);
        name_ = name;
    }
    let player = document.getElementById("player");
    let path = json_[name_]["audio_path"];
    player.innerText = json_[name_]["name"];
    player.setAttribute("src", path);
}

// 添加子类
function create_child(name){
    let music_div = document.getElementById("music");
    let music_child_div = document.createElement("div");
    let music_child = document.createElement("button");
    let music_image = document.createElement("img");
    let img_div = document.createElement("div");
    let txt_div = document.createElement("div");
    let txt = document.createElement("span");
    music_div.appendChild(music_child_div);
    music_child_div.appendChild(music_child);
    music_child.appendChild(img_div);
    music_child.appendChild(txt_div);
    img_div.appendChild(music_image);
    txt_div.appendChild(txt);
    txt.innerText = json_[name]["name"];
    img_div.setAttribute("style", "width: 40; height: 40; float: left; display:flex; justify-content: center; align-items:center");
    txt_div.setAttribute("style", "text-align: center; display:flex; justify-content: center; align-items:center;height: 30px;");
    music_child.setAttribute("style", "width: 250px; height: 40px; border-radius: 20px;");
    music_child.setAttribute("onclick", "play(\""+name+"\");");
    music_child.setAttribute("id", json_[name]["name"]);
    music_image.setAttribute("src", json_[name]["image_path"]);
    music_image.setAttribute("style", "width:30px; height: 30px; border-radius: 15px;");
}

// 播放
function play(music_name){
    let player = document.getElementById("player");
    let path = json_[music_name]["audio_path"];
    player.innerText = json_[music_name]["name"];
    player.setAttribute("src", path);
    player.setAttribute("autoplay", "autoplay");
}

function hide_list(){
    let list = document.getElementById("list");
    list.hidden = !list.hidden;
}

get_info()