function largeSidebar(){
   let smallsidebar = document.querySelector('.smallsidebar')
    smallsidebar.style.display="none";



   let largesider = document.querySelector('.largesidebar')
   largesider.style.display="block";
   largesider.style.marginLeft = "0px";
   largesider.style.transition = "margin-left 25s"

}
function smallsidebar(){
   let largesider = document.querySelector('.largesidebar')
   largesider.style.display="none";

   
   let smallsidebar = document.querySelector('.smallsidebar')
   smallsidebar.style.display="block";


}

function logout(){
   localStorage.clear();
}