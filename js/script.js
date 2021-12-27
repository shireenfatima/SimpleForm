let onformSubmit = document.getElementById("btn");
onformSubmit.addEventListener("click", (event)=>{
    let firstName =document.getElementById("FirstName").value;
let lastName =document.getElementById("lastName").value;
let Address = document.getElementById("address").value;
let Pincode=document.getElementById("pincode").value;
let gender = document.getElementById("gender").value;
let foodChoice= document.getElementById("foodchoice").value;
let state = document.getElementById("state").value;
let country = document.getElementById("country").value;
const nameTable = document.getElementById('nameTable');
    
    
   let tr=document.createElement("tr");
   let td1=document.createElement("td");
   let td2=document.createElement("td");
   let td3=document.createElement("td");
   let td4=document.createElement("td");
   let td5=document.createElement("td");
   let td6=document.createElement("td");
   let td7=document.createElement("td");
   let td8=document.createElement("td");
   let tableBody=document.createElement("tbody");

    

    td1.innerText=firstName;
    td2.innerText=lastName;
    td3.innerText=Address;
    td4.innerText=Pincode;
    td5.innerText=gender;
    td6.innerText=foodChoice;
    td7.innerText=state;
    td8.innerText=country;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);

    tableBody.appendChild(tr);
    nameTable.appendChild(tableBody);

   let formclear= document.getElementById("formsubmit");
   formclear=formclear.reset();
    
    

});
