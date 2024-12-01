function addinfo(){
    let selectform = document.querySelector(".formcover");
    selectform.style.display = "block";
} 

// ----------- submit data ---------
function submitData(){
   
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

}


//  ****** Delete data *****

function deleteData(arg){
   console.log(arg);
   
    let confirm = window.confirm("Do you want to delete this customer data");
    if(confirm){
        fetch(`http://localhost:4000/CustInfo/${arg}`,
            {
                method:"DELETE"
            }
        )
    }
    else{
        alert("invalid click")
    }
}



// ****Display data *******
(async function () {
    let data = await fetch('http://localhost:4000/CustInfo');
    
    let response = await data.json();
    let selectedTable = document.querySelector("#data");
    selectedTable.innerHTML = response.map((items)=>`
     
   

    <tr>
    <td> ${items.id}</td>
    <td> ${items.guestName}</td>
    <td> ${items.status}</td>
    <td> ${items.date}</td>
    <td> ${items.mob}</td>
    <td>${items.roomType}</td>
    <td>
    <button onclick="deleteData('${items.id}')">Delete</button>
    <button onclick="UpdateData('${items.id}')">Update</button>

    </td>

    </tr>

    `).join(" ")

    
})()

//****Update or edit the DATA**** :-


let UpdateID = null;
async function UpdateData(arg) {
    UpdateID=arg;
    let data = await fetch ("http://localhost:4000/CustInfo");
    let response = await data.json();

    let info = response.find(item=>item.id === arg);

    let selectForm = document.querySelector(".formcover");
    selectForm.style.display = "block";
    let selectAbtn = document.querySelector("#Addbtn");
    selectAbtn.style.display = "none";

    let selectUpdateBtn = document.querySelector("#updateButton");
    selectUpdateBtn.style.display = "block";


    document.querySelector("#guestName").value = info.guestName;
    document.querySelector("#mob").value = info.mob;
    document.querySelector("#dateOfOrder").value = info.date;
    document.querySelector("#roomType").value = info.roomType;
    document.querySelector("#status").value = info.status;
    
}

// Final Update

function Update(){
   
   let guestName =  document.querySelector("#guestName").value ;
   let mob = document.querySelector("#mob").value ;
   let date = document.querySelector("#dateOfOrder").value;
   let roomType = document.querySelector("#roomType").value;
   let status = document.querySelector("#status").value;


   let obj = {
    "guestName":guestName,
    "mob":mob,
    "date":date,
    "roomType":roomType,
    "status":status
   }
   fetch(`http://localhost:4000/CustInfo/${UpdateID}`,{
    method:"PUT",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(obj)

   })

//    return false;
}


// ******** search bar **********

async function datasearch(){
    let data = await fetch('http://localhost:4000/CustInfo');
    let response = await data.json();

    let selectOption = document.querySelector('#searchOptions').value;
   // alert("SEARCHOption");

    let selectsearchbox = document.querySelector("#searchBox").value;

   // alert("SEARCbox");

   let storefilterdata;
   let selecttr;

   switch (selectOption){
    case 'name':
        storefilterdata = response.filter((e)=>e.guestName === selectsearchbox);
        console.log(storefilterdata);

        // *******  Display data ******** :-

        selecttr = document.querySelector("#data");
        selecttr.innerHTML = storefilterdata.map((items)=>`
        <tr>
    <td> ${items.id}</td>
    <td> ${items.guestName}</td>
    <td> ${items.status}</td>
    <td> ${items.date}</td>
    <td> ${items.mob}</td>
    <td>${items.roomType}</td>
    <td>
    <button onclick="deleteData('${items.id}')">Delete</button>
    <button onclick="UpdateData('${items.id}')">Update</button>

    </td>

    </tr>
       `
        ).join(" ")
        break;

        case 'mobile':
            storefilterdata = response.filter((e)=>e.mob === selectsearchbox);
            console.log(storefilterdata);
    
            // *******  Display data ******** :-
    
            selecttr = document.querySelector("#data");
            selecttr.innerHTML = storefilterdata.map((items)=>`
            <tr>
        <td> ${items.id}</td>
        <td> ${items.guestName}</td>
        <td> ${items.status}</td>
        <td> ${items.date}</td>
        <td> ${items.mob}</td>
        <td>${items.roomType}</td>
        <td>
        <button onclick="deleteData('${items.id}')">Delete</button>
        <button onclick="UpdateData('${items.id}')">Update</button>
    
        </td>
    
        </tr>
           `
            ).join(" ")
            break;
    
    
    }

   

}

//page navigation 

let start =0;
let end =5;
(async function(){
    let data = await fetch("http://localhost:4000/CustInfo");
    let response = await data.json();
    let filterdata =  response.filter((e,index)=>
    {return index >= start && index<end})

    let selecttr = document.querySelector('#data');
    selecttr.innerHTML =  filterdata.map((items)=>`
    <tr>
        <td> ${items.id}</td>
        <td> ${items.guestName}</td>
        <td> ${items.status}</td>
        <td> ${items.date}</td>
        <td> ${items.mob}</td>
        <td>${items.roomType}</td>
        <td>
        <button onclick="deleteData('${items.id}')">Delete</button>
        <button onclick="UpdateData('${items.id}')">Update</button>
    
        </td>
    
        </tr>
    `).join(" ") 
})();
let currentpage = 1;
async function pageincrease() {
    let data = await fetch ("http://localhost:4000/CustInfo");
    let response = await data.json();
    
    if(end < response.length){
        start = start +5;
        end = end +5;
        currentpage++;
        let filterdata =  response.filter((e,index)=>
            {return index >= start && index<end})
        
            let selecttr = document.querySelector('#data');
            selecttr.innerHTML =  filterdata.map((items)=>`
            <tr>
                <td> ${items.id}</td>
                <td> ${items.guestName}</td>
                <td> ${items.status}</td>
                <td> ${items.date}</td>
                <td> ${items.mob}</td>
                <td>${items.roomType}</td>
                <td>
                <button onclick="deleteData('${items.id}')">Delete</button>
                <button onclick="UpdateData('${items.id}')">Update</button>
            
                </td>
            
                </tr>
            `).join(" ");

            document.querySelector("#currentpage").innerHTML = currentpage;
            if(end === response.length){
                let s = document.querySelector('#incbtn');
                s.style.display = "none"
            }
            
    }
    else{
        alert("This is the last page")
    }   
}

async function pagedecrease() {
    let data = await fetch("http://localhost:4000/CustInfo");
    let response = await data.json();

    // Check if we can decrease the page
    if (start > 0) {
        // Decrease the start and end indices
        start = start - 5;
        end = end - 5;
        currentpage--;
        // Ensure end does not go below 0
        if (end < 0) {
            end = 0;
        }

        // Filter the data for the new page
        let filterdata = response.filter((e, index) => {
            return index >= start && index < end;
        });

        // Update the table with the new data
        let selecttr = document.querySelector('#data');
        selecttr.innerHTML = filterdata.map((items) => `
            <tr>
                <td> ${items.id}</td>
                <td> ${items.guestName}</td>
                <td> ${items.status}</td>
                <td> ${items.date}</td>
                <td> ${items.mob}</td>
                <td>${items.roomType}</td>
                <td>
                    <button onclick="deleteData('${items.id}')">Delete</button>
                    <button onclick="UpdateData('${items.id}')">Update</button>
                </td>
            </tr>
        `).join(" ");

        document.querySelector("#currentpage").innerHTML=currentpage;
    } else {
        alert("This is the first page");
    }
}