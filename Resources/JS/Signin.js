const UserFilePath = String('./Resources/Json/User.json');

let usn;

function create_userno(){
    fetch(UserFilePath)
        .then((response) => response.json())
        .then(function(json){
            let userno__
            while(true){
                let userno = "";
                for(let i = 0; i < 6; i++){
                    userno += Math.floor(Math.random()*10).toString();
                }
                let stop = false;
                for(let i in json["Users"]){
                    if (i !== userno) {
                        userno__ = userno
                        stop = true;
                        break;
                    }
                    else stop=false;
                }
                if(stop) break;
            }

            let userno_ = document.createElement("input");
            userno_.hidden = true;
            userno_.name = "userno";
            userno_.setAttribute("value", userno__);

            let form = document.getElementById("signin");
            form.appendChild(userno_)

            usn = userno__;
        });

}

function check(){
    let username = document.getElementById("Post_UserName");
    let password = document.getElementById("Post_Password");

    console.log(username.value)

    if((username.value == "") && (password.value == "")) {
        alert("UserName and Password cannot be empty");
        username.setAttribute("value", "false");
        password.setAttribute("value", "false");
        username.focus()
    }
    else if (username.value == "") {
        alert("UserName cannot be empty");
        username.setAttribute("value", "false");
        username.focus()
    }
    else if (password.value == "") {
        alert("Password cannot be empty");
        password.setAttribute("value", "false");
        password.focus()
    }
    else {
        alert("Userno: " + usn + "Please remember it");
    }

}

create_userno()