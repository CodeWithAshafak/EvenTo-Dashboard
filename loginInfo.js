function info(){
    let information = window.localStorage.getItem('logininfo');
    let information1 = JSON.parse(information);

    let selectimg = document.querySelector('#img');
    selectimg.src = information1.image;

    let selectusername = document.querySelector('#username');
    selectusername.innerHTML = information1.name;
    selectusername.style.color = "black";

    let selectuseremail = document.querySelector('#useremail'); 
    selectuseremail.innerHTML = information1.email;
    selectuseremail.style.color = "black"
    


}

(async function() {
    let data = await fetch('http://localhost:4000/user');
   
    let response = await data.json();
    let  selectNoOfUser = document.querySelector(".userNo");
    selectNoOfUser.innerHTML = response.length;
    
})();


function getinfo(){
    let information = window.localStorage.getItem("logininfo");
    let information1 = JSON.parse(information);

    // let selectimg = document.querySelector("#image");
    // selectimg.src = information1.image;

    let div = document.querySelector(".getInfo");
    div.innerHTML = information1.email;
    div.style.color = "yellow";
}