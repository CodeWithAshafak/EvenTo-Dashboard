// ----------- submit data ---------
function submitDataa(){
   
  let guestName = document.querySelector("#guestName").value;
  let date = document.querySelector("#dateOfOrder").value;
  let mob = document.querySelector("#mob").value;
  let roomType = document.querySelector("#roomType").value;
  let status = document.querySelector("#status").value;

  let customerInfo = {
      "guestName" :guestName,
      "date":date,
      "mob":mob,
      "roomType":roomType,
      "status":status

  }
  fetch('http://localhost:4000/CustInfo',{
      method:"POST",
      headers:{
           "content-type":"application/json"
      },
      body:JSON.stringify(customerInfo)
  })
  alert("data uploaded")
}