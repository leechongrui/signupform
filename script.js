function passwordcheck(){
if(pw1 !== "" && pw2!== 0){
    if(pw1 = pw2){
        pwcheck.textContent = "Password is correct"
    }else{
        pwcheck.textContent = "Please retype your password"
    }
}
;}

let pw1 = document.querySelector("#password");
let pw2 = document.querySelector("#confirmpassword");
let pwcheck = document.querySelector("#passwordcheck");