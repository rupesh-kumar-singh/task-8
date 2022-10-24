
var totaldata = [];

 var previousvalue = 1;
 var  nextvalue = 2;
// h1 for name 
const h1element = document.createElement('h1');

h1element.innerText = 'Pagination';

h1element.id = 'title';
// -----------------------------------------------------

let divtable = document.createElement("div");

divtable.className = "table-responsive";

document.body.appendChild(divtable);


//creating a table
let table = document.createElement("table")

table.className = "table table-bordered";
// table.id = "table-id";
divtable.appendChild(table)

// creating thead 

let thead = document.createElement("thead");

thead.className ="thead";
thead.id  ="thead-id";
table.appendChild(thead);

// creating tbody

let tbodyfirst = document.createElement("tbody")
tbodyfirst.className ="tbody";
tbodyfirst.id ="tbody-id";

table.appendChild(tbodyfirst)

// creating th for thead

let th_1 = document.createElement("th")
 
th_1.className = "th-one";
th_1.id = "th-1";
th_1.textContent = "ID"


let th_2 = document.createElement("th");

th_2.className = "th-two";
th_2.id = "th-2";
th_2.textContent = "NAME";

let th_3 = document.createElement("th");

th_3.className = "th-two";
th_3.id = "th-2";
th_3.textContent = "email";

thead.append(th_1, th_2, th_3)

// --------------------------------------------------------------------

// about tbody

let tr = document.createElement("tr");
tr.className = "tr"
tr.id = "tr-1"
tbodyfirst.appendChild(tr);

// about td
let td_1 = document.createElement("td");
// td_1.textContent ="1"
td_1.className= "td-one";
td_1.id ="td-1";


let td_2 = document.createElement("td");
 
// td_2.textContent ="rupesh";
td_2.className= "td-two";
td_2.id ="td-2";

let td_3 = document.createElement("td");
 
// td_3.textContent ="singh";
td_3.className= "td-three";
td_3.id ="td-3";

tr.append(td_1 , td_2 , td_3);

// ----------------------------------------------------------
// about button
let div = document.createElement("div");
div.className = "div";
let button_1 = document.createElement("button");

button_1.className = "button button-one";
button_1.id = "button-1";
button_1.textContent = "previous"
let button_2 = document.createElement("button");

button_2.className = "button button-two";
button_2.id = "button-2"
button_2.textContent = "next"

div.append(button_1,button_2);
document.body.append(div);
// -----------------------------------------------
// about heading
let divcreate = document.createElement("div");

divcreate.className = "div-heading";

let h1 = document.createElement("h1");
h1.textContent = "Pagination";
h1.id = "title";

divcreate.appendChild(h1)
let p1 = document.createElement("p")
p1.id = "description";
p1.textContent = " data of 100 people:";
divcreate.appendChild(p1)

table.before(divcreate)





// ------------------------------------------
//we are calling api

const request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');

request.send(null);

request.onload = () => {
var data = JSON.parse(request.responseText);
        totaldata = data;

       data.slice(0,1).forEach(({id,name,email})=>{
          
        td_1.textContent = id;
        td_2.textContent = name;
        td_3.textContent = email;
        // console.log(id)
        // console.log(data);
        
        
        

       })
       
    }
// about next button event and logic
  function nextdata(){
    td_1.textContent = "";
    td_2.textContent = "";
    td_3.textContent = "";

    totaldata.slice(previousvalue,nextvalue).forEach(({id,name,email})=>{
        td_1.textContent = id;
        td_2.textContent = name;
        td_3.textContent = email;
        previousvalue++;
        nextvalue++;
        
          
    })

  }


   let one = document.getElementById("button-2")
    one.addEventListener("click",nextdata)


    // about prevoius button event 
    function previousdata(){

        td_1.textContent = "";
        td_2.textContent = "";
        td_3.textContent = "";
    
        totaldata.slice(previousvalue-2,nextvalue-2).forEach(({id,name,email})=>{
            td_1.textContent = id;
            td_2.textContent = name;
            td_3.textContent = email;
            previousvalue--;
            nextvalue --;
            
              
        })

    }
   
 let two = document.getElementById("button-1");
 two.addEventListener("click",previousdata);



