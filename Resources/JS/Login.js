const UserFilePath = String('./Resources/Json/User.json');

function check_user(){
    fetch(UserFilePath)
        .then((response) => response.json())
        .then((json) => user(json));

}

function user(json) {
    //
    let UserNo = document.getElementById("Post_UserName").value
    let Password = document.getElementById("Post_Password").value

    // 用户名或密码为空
    if((UserNo=="")||(UserNo==null)) {
        document.login.UserName.focus();
        alert("UserNo cannot be empty.");
    }else if((Password=="")||(Password==null)){
        document.login.Password.focus();
        alert("Password cannot be empty.");
        // 用户
    }else if((UserNo in json["Users"])){
        if(Password == json["Users"][UserNo]["Password"]){
            // 传输值
            localStorage.setItem('UserName', json["Users"][UserNo]["UserName"]);
            localStorage.setItem('UserNo', UserNo);
            localStorage.setItem('UserHeadImage', json["Users"][UserNo]["UserHeadImage"]);

            // go to
            location.href="index.html";
        }else{
            alert("UserName or Password was wrong.");
        }
        // 找不到用户
    }else{
        alert("Cannot find the User.");
    }
}