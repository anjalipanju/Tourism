let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("Email");
let pwd1=document.getElementById("Password1");
let pwd2=document.getElementById("Password2");
let mobileno=document.getElementById("mobileno");


function validate(){
    if(fname.value==""||lname.value==""||email.value==""||pwd1.value==""||pwd2.value==""||mobileno.value=="")
    {
        alert("Fields can not be empty");
        return false;
    }
    else{

       return true;
    }
}