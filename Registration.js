  function registration(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let image = document.querySelector('#image').value;
    let mob = document.querySelector('#mob').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#cpassword').value;
    
    

    if(name === ""){
      alert("please enter your name");
      document.querySelector("#name").focus();
      return false;
    }
    else if(email === ""){
      alert("please enter email");
      document.querySelector("#email").focus();
      return false;

    }
    else if(image === ""){
      alert("please enter image url");
      document.querySelector("#image").focus();
      return false;

    }
    else if(mob === ""){
      alert("please enter mobile no.");
      document.querySelector("#mob").focus();
      return false;

    }else if(password === ""){
      alert("please enter password");
      document.querySelector("#password").focus();
      return false;

    }else if(cpassword === ""){
      alert("please confirm password");
      document.querySelector("#cpassword").focus();
      return false;

    }else if(!email.includes("@")){
      alert("missing @ in email");
      document.querySelector("#email").focus();
      return false;

    }else if(!email.includes(".com")){
      alert("missing .com in email");
      document.querySelector("#email").focus();
      return false;

    }else if( mob.length !==10 ){
      alert("mobile no should be 10 digit");
      document.querySelector("#mob").focus();
      return false;

    }else if(isNaN(mob)){
      alert("mobile number should be numbers only");
      document.querySelector("#mob").focus();
      return false;
    }else if(!(password.match(/[1234567890]/) && password.match(/[qwertyuioplkjhgfdsazxcvbnm]/) && password.match(/[QWERTYUIOPLKJHGFDSAZXCVBNM]/) && password.match(/[!@##$%^&*]/))){
      alert("please use strong password");
      document.querySelector(".password").focus();
      return false;
    }else if(password != cpassword){
      alert("passwords are not matched");
      return false;
    }else{
      let userinfo = {
        "name":name,
        "email":email,
        "image":image,
        "mob":mob,
        "password":password,
        "cpassword":cpassword
    }

    fetch('http://localhost:4000/user',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(userinfo)

    })
   
    window.open("login.html")

    }
  


  }

  


// ======================login code ======================

async function login(){
   let data = await fetch('http://localhost:3000/public/user');
   let response = await data.json();
   console.log(response);

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
   
   if(email ==="" && password ===""){
    alert("email or password should't empty");
    return false;
   }
  
   
   
   let out = response.find(e=> e.email === email && e.password === password);
  
   console.log(out);
   if(out){
    window.localStorage.setItem('logininfo',JSON.stringify(out));
   
    // window.open("dashboard.html");
    window.location.href = "dashboard.html";
   // return true;
  //  for code correctness:-
  //  alert("ok")
  //  return false;
   
   }
   else{
    
    window.alert("Please Register First");
    return false;
   }

  

   

}

