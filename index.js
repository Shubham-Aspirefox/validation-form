const personname=document.getElementById("validationServer01");
const personemail=document.getElementById("validationServerUsername");
const personphone=document.getElementById("validationServer03");
const persongender=document.getElementById("validationServer04");
const personDOB=document.getElementById("validationServer05");
const errorName = document.getElementById("errorName");
const erroremail = document.getElementById("erroremail");
const errornumber = document.getElementById("errornumber");
const errorDOB = document.getElementById("errorDOB");


function myFunction() {
    document.getElementById("myForm").reset();
    document.getElementById("myForm").submit();
  }


  let submit = document.getElementById("submit");

  submit.addEventListener("click",function () {
    validateName();
    validateemail();
    validatephonenumber();
    validateDOB();
  });



function validateName() {
    let name = personname.value;
    let regex = new RegExp("^[a-zA-Z]+$");
    let result = name.match(regex);
    if(result==null){
        errorName.innerText="Enter a valid Name";
    }else{
        errorName.innerText="";
    }
}
function validateemail() {
    let email = personemail.value;
    let regex = new RegExp("^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$");
    let resulte = email.match(regex);
    if(resulte==null){
        erroremail.innerText="Enter a valid Email";
    }else{
        erroremail.innerText="";
    }
  }
  function validatephonenumber() {
    let phone = personphone.value;
    let regex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$");
    let resultp = phone.match(regex);
    if(resultp==null){
        errornumber.innerText="Enter a valid phone number";
    }else{
        errornumber.innerText="";
    }
  }
  function validateDOB() {
    let DOB = personDOB.value;
    let date = new Date(DOB);
    let now =  new Date();
    let year= now.getFullYear()-date.getFullYear();
    if(year<=18){
       errorDOB.innerText="You are not alligible"
    }else{
        errorDOB.innerText=""
    }
  }


 
  