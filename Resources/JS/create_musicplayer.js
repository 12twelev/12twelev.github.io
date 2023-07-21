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

function create_musicplayer(){
    let body_ = document.getElementsByTagName("body");

    let body = body_.item(0);
    body.setAttribute("style", "width: auto; height: auto; display: flex;");

    let list = document.createElement("div");
    body.appendChild(list);
    list.setAttribute("id", "list");
    list.setAttribute("hidden", "hidden");
    list.setAttribute("style", "width: 100%;  height: auto; position: absolute; padding: 1px; top: 60px")

    let music = document.createElement("div");
    list.appendChild(music);
    music.setAttribute("id", "music");
    music.setAttribute("style", "height: auto; width: 250px; background: lightblue; border-radius: 20px; padding: 20px; align-items:center; float: right;");

    let h3 = document.createElement("h3");
    music.appendChild(h3);
    h3.innerHTML = "播放列表";
    h3.setAttribute("style", "text-align: center; width: auto; height: 20px;");

    let DIV_player = document.createElement("div");
    body.appendChild(DIV_player);
    DIV_player.setAttribute("style","width: 95%; height: 70px; padding: 5px; display: flex; position: absolute; bottom: 2%; left: 2%; background: rgba(255, 255, 255, 0.75); border-radius: 10px;");

    let space1 = document.createElement("div");
    DIV_player.appendChild(space1);
    space1.setAttribute("style", "position: relative; left: 0; width: 10%; height: auto;");

    let player_div = document.createElement("div");
    DIV_player.appendChild(player_div);
    player_div.setAttribute("id", "player_div");
    player_div.setAttribute("style", "width: 70%; height: auto; position: relative; top: 0; left: 0;");

    let player = document.createElement("audio");
    player_div.appendChild(player);
    player.setAttribute("id", "player")
    player.setAttribute("style", "width: 95%;height: 60px; background: none; margin: unset;");
    player.setAttribute("controls", "controls");

    let list_button_div = document.createElement("div");
    DIV_player.appendChild(list_button_div);
    list_button_div.setAttribute("style", "float: right; width: 50px; height: 30px; position: relative; top: 10%; right: 0; padding: 10px; background: rgba(162,255,233,0.99); border-radius: 10px;");

    let button = document.createElement("button");
    list_button_div.appendChild(button);
    button.setAttribute("style", "width: 40px;height: 20px;position: relative; left: 10%; border-radius: 10px; border: none;");
    button.setAttribute("onclick", "hide_list()");
    button.innerHTML = "···";

    let h6 = document.createElement("h6");
    list_button_div.appendChild(h6);
    h6.setAttribute("style", "width: auto; height: 10px; padding: 0; position: relative; top: 0; margin: unset;");
    h6.innerHTML = "播放列表";

    let space2 = document.createElement("div");
    DIV_player.appendChild(space2);
    space2.setAttribute("style", "position: relative; width: 10%; height: auto;");

    get_info();
}
