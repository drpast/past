setInterval(()=>{  
var genderx=document.getElementById("gender").value;
var birthx=document.getElementById("birth").value;
if(genderx=="" || birthx==""){
  document.getElementById("gender").style.color="#FFC300";
  document.getElementById("birth").style.color="red";
}
else{
  document.getElementById("gender").style.color="black";
  document.getElementById("birth").style.color="black";
}}, 10);

setInterval(()=>{
 if(navigator.onLine){
   
   document.getElementById("clock").style="margin:37px 0px 0px -377px;";
   document.getElementById("clock").style.transform="scale(.7)";
   //document.getElementById("logo").style="margin-top:-300px;";
   //document.getElementById("logo").style="margin-left:-160px;";
   //document.getElementById("logo").style.transform="scale(1)";

   //document.getElementById("logo").style="margin-top:-10px";
   
   
   //document.getElementById("logo").style.transform="scale(0)";
   document.getElementById("userid").style.color="#5a6268";
   //document.getElementById("status").style.color="grey";
  document.getElementById("status").innerHTML='<i  h1 class=" blink_me bi bi-reception-4"></i>&nbsp;'+'<span id="live">Live &nbsp;</span>';
  document.getElementById("live").style="color:brown";
  document.getElementById("pageCover").style.display="none";
  //document.getElementById("internet").innerHTML='<i class="bi bi-reception-4"></i>';
 // document.getElementById("internet").style.color="green";
  //document.getElementById("pulse").style.display="block";
  document.getElementById("userid").style.display="initial";
  //document.getElementById("wifi").style.display="initial";
  document.getElementById("ping").style.display="initial";
 
  
 } else {
   document.getElementById("clock").style="";
   document.getElementById("logo").style="";
   document.getElementById("clock").style.transform="scale(2)";
   //document.getElementById("status").style.color="#980000";
   document.getElementById("userid").style.display="none";
   document.getElementById("status").innerHTML='<i style="color:brown;" class="bi bi-exclamation-triangle-fill">&nbsp;</i>No Network';
   //document.getElementById("internet").innerHTML='<i class="bi bi-exclamation-triangle-fill"></i>';
   //document.getElementById("internet").style.color="brown";
   document.getElementById("pageCover").style.display="block";
   document.getElementById("ping").style.display="none";
   //document.getElementById("pulse").style.display="none";
   //document.getElementById("wifi").style.display="none";
 }}, 1000);


var p = new Ping();
 

setInterval(()=>{
p.ping("https://google.com", function(err, data) {
		data = data + "  " +" ms";
    $("#ping").html(data);
});
}, 1000);




setInterval(()=>{
navigator.getBattery().then(function(battery) {

    var level = Math.round(battery.level*100).toFixed(0)+"%";
    var status= battery.charging;
    if (status==true){
    document.getElementById("battery").innerHTML='<i class=" fa-solid fa-plug-circle-bolt"></i>&nbsp;&nbsp;'+level+" "+"Charging";
    document.getElementById("battery").style.color="grey";
    
    

    }else{
    document.getElementById("battery").innerHTML='<i  class="  bi bi-battery-half"></i>&nbsp;'+level+" "+"Disconnected"+'&nbsp;';
    document.getElementById("battery").style.color="brown"; 
    }
});
}, 1000);

  var deletepassword="123";
//##########cursor loading
var css = "* { cursor: wait; !important}";
var style = document.createElement("style");
style.type = "text/css";
style.id = "mywaitcursorstyle";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

setInterval(()=>{
var style = document.getElementById("mywaitcursorstyle");
if (style) {
  style.parentNode.removeChild(style);
}
}, 2000);



//#################################### date picker date less than today
$(function(){
    $('[type="date"]').prop('max', function(){
        return new Date().toJSON().split('T')[0];
    });
});


// Prevent forms from submitting.
  function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function(event) {
      event.preventDefault();
      });
    }
  }
  window.addEventListener("load", functionInit, true); 
  
  //INITIALIZE FUNCTIONS ONLOAD
  function functionInit(){  
    preventFormSubmit();
    google.script.run.withSuccessHandler(onSuccess).getCount();
    google.script.run.withSuccessHandler(createTable).getAllData();
    
  };      
  
  //HANDLE FORM SUBMISSION
  function handleFormSubmit(formObject) {
           Swal.fire({
  title: 'Registering Patient',
  html: 'Fetching Database',
  timer: 5000,
  timerProgressBar: true,
})
   google.script.run.withSuccessHandler(success).processForm(formObject);
   
   
   }

   function success(){
  var name =document.getElementById("name").value.toUpperCase();
  var id =document.getElementById("Uid").value.toUpperCase();
  var phone =document.getElementById("phone").value;
  Swal.fire(name+'<br>'+'<FONT COLOR="#ff0000">'+'UId'+' : '+ id+'</FONT>'+'<br>'+phone+'<br>'+'<FONT COLOR="green">'+'Added Successfuly.'); 
  google.script.run.withSuccessHandler(onSuccess).getCount();

  document.getElementById("register").style.display="block";
  document.getElementById("update").style.display="none";
  

  document.getElementById("searchtext").value=id;
  document.getElementById("searchsymbol").click();
  document.getElementById("search-form").reset();
  //document.getElementById("reset").click();
  //document.getElementById("message").innerHTML = " ";

 
}


 function onSuccess(patients) {
    document.getElementById('totalpatient').innerHTML = patients;
    
  }



   
     //GET LAST 10 ROWS
  function getLastTenRows (){
  //  google.script.run.withSuccessHandler(createTable).getLastTenRows();
      google.script.run.withSuccessHandler(createTable).getAllData();
   document.getElementById("database").style.display="initial";
   document.getElementById("footer").style.display="none";
   
   //this below line scroll page to the bottom
    //window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }
  
  
  //GET ALL DATA
  function getAllData(){
    
    google.script.run.withSuccessHandler(createTable).getAllData();
    //this below line scroll page to the bottom
    // window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    // document.getElementById("myForm").style.display="none";
    // document.getElementById("database").style.display="block";
    // document.getElementById("footer").style.display="block";
    // document.getElementById("recentlyadded").style.display="none";
    // document.getElementById("allpatients").style.display="block";
    // document.getElementById("clock").style.display="none";
  

   }

    //CREATE THE DATA TABLE
  function createTable(dataArray) {
    if(dataArray){
      var result = "<table  id='tbody' class='table-hover' style='table-layout:fixed;'  >"+
                  
                   "<thead   >"+
                    //  "<tr >"+                               //Change table headings to match witht he Google Sheet
                    //   "<th scope='col'>Delete</th>"+
                    //   "<th scope='col'>Edit</th>"+
                    //   "<th scope='col'>Date</th>"+
                    //   "<th scope='col'>Id No.</th>"+
                    //   "<th scope='col'>NAME</th>"+
                    //   "<th scope='col'>GENDER</th>"+
                    //   "<th scope='col'>D.O.B</th>"+
                    //   "<th scope='col'>AGE</th>"+
                    //   "<th scope='col'>PHONE</th>"+
                    //   "<th scope='col'>ADDRESS</th>"+
                    //   "<th scope='col'>NOTE</th>"+
                    //   "<th scope='col'>TIME</th>"+
                    //   "<th scope='col'>USER</th>"+
                    // "</tr>"+  
                  "</thead>";
                   
                   

                  
    
 for(var i=0; i<dataArray.length; i++) {

result += "<tr class=' form-control border  rounded mb-3' style='width:99.8%; height:38px; display: flex; align-items: center;justify-content: space-around;'>"; //important attributes do not delete
          
          result += "<td ><i name='idelete' class='fa-solid fa-trash deleteBtn' onclick='deleteData(this);'></i></td>";
          
          result += "<td><i class='fa-solid fa-user-pen editBtn'onclick='editData(this) ;'></i></td>";
          for(var j=0; j<dataArray[i].length; j++){
              result += "<td>"+dataArray[i][j]+"</td>";
              
          }
          //result += "<td ><button type='button'  class='btn btn-danger btn-sm aptBtn'  onclick='deleteData(this);'> Schedule</button> </td>";

          result += "</tr>"; 
          
      }


      result += " </table>";
      var div = document.getElementById('dataTable');
      div.innerHTML = result;
      //document.getElementById("message").value = "";
    }
    else{
      var div = document.getElementById('dataTable');
      div.innerHTML = "Data not found!";
    }
  }

  //DELETE DATA
  function deleteData(el) {

var password = document.getElementById("password").value;

        if (password=="1234") {
         

         
                   var id = el.parentNode.parentNode.cells[3].innerHTML;
      var name = el.parentNode.parentNode.cells[4].innerHTML;
      var phone = el.parentNode.parentNode.cells[6].innerHTML;
    var resultf =Swal.fire({
  title: '<font-size:12px;>'+id+'<br> '+name+' - '+'  '+phone,
  text:  'Are you sure you want to delete this record?',
  icon: '',
  showCancelButton: true,
  confirmButtonColor: '#dc3545',
  cancelButtonColor: 'green',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
     var recordId = el.parentNode.parentNode.cells[2].innerHTML;
      
      google.script.run.withSuccessHandler(createTable).deleteData(recordId);
       
     google.script.run.withSuccessHandler(createTable).getAllData();
     //google.script.run.withSuccessHandler(onSuccess).getCount();
     
    Swal.fire('<font-size:12px;>'+id+'<br> '+name+' - '+'  '+phone,
      'Deleted!',
      'success'
      
    )
   
  

   setTimeout(()=>{
     google.script.run.withSuccessHandler(onSuccess).getCount();
    },500);
    
  }
})   
          
        }


  else
        {
         Swal.fire('Connect Admin Key'); 
         document.getElementById("password").focus();
        }
  //refresh();
  }





  setInterval(()=>{
  var password = document.getElementById("password").value;  
if (password=="1234") {
  document.getElementById("lock").style.display="none";
  document.getElementById("unlock").style.display="block";
  //document.getElementById("unlock").innerHTML="";
  //document.getElementById("tbody").style="background-color:#CCC8C7";
  //
   const nodeList = document.querySelectorAll(".deleteBtn");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.display = "block";}
  //
}
else{
//document.getElementById("tbody").style=" ";  
document.getElementById("unlock").style.display="none";
document.getElementById("lock").style.display="block";
const nodeList = document.querySelectorAll(".deleteBtn");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.display = "none";}  
}

},500);

//##########refresh##########
function refresh(){
 google.script.run.withSuccessHandler(createTable).getAllData(); 
 google.script.run.withSuccessHandler(onSuccess).getCount();
}


  //###########################hide deletebtn################################
function loadAdmin(){
  
document.getElementById('password').value ="";
}
  
  //EDIT DATA
  function editData(el){
       Swal.fire({
  title: 'Loading Patient Details',
  html: 'For Editing',
  timer: 1500,
  timerProgressBar: false,
})

    var recordId = el.parentNode.parentNode.cells[2].innerHTML; //https://stackoverflow.com/a/32377357/2391195
    google.script.run.withSuccessHandler(populateForm).getRecordById(recordId);
    

    
    //document.getElementById("message").innerHTML=recordId; 
}
  
 
    
    
  

  //POPULATE FORM
  function populateForm(records){
 

    document.getElementById('RecId').value = records[0][0];
    document.getElementById('Uid').value = records[0][1];
    document.getElementById('name').value = records[0][2];
    document.getElementById('gender').value = records[0][3];
    document.getElementById('phone').value = records[0][4];
    document.getElementById('age').value= records[0][5];
    document.getElementById('birth').value = records[0][6];
    document.getElementById('address').value = records[0][7];
    document.getElementById("note").value = records[0][8];
    document.getElementById('timestamp2').value = records[0][9];
    document.getElementById("time").value = records[0][10];
    document.getElementById("user1").value = records[0][11];

    document.getElementById("register").style.display="none";
    document.getElementById("update").style.display="block";

    document.getElementById("name").focus();

 
   
    var id =document.getElementById("Uid").value.toUpperCase();
if (id.length>8){
    
  document.getElementById("searchtext").value=id;
  document.getElementById("searchsymbol").click();

}else 
{return;}
    
  }
  
  

  //SEARCH DATA
  function handleSearchForm(formObject) {
    google.script.run.withSuccessHandler(createTable).searchData(formObject);
    //document.getElementById('patientcount2').style.display='block';
    document.getElementById("search-form").reset();
    
   }









  
 
//  setInterval(()=>{
// google.script.run.getFormValues();
// document.getElementById('message').innerHTML = value;
// if(value==duplicate){
//   alert."duplicate patient";
// }

//   }, 1000);


  // setInterval(()=>{

  //       //document.addEventListener("mousemove", function(e) {
  //       var totalRowCount = 0;
  //       var rowCount = 0;
  //       var table = document.getElementById("myTable");
  //       var rows = table.getElementsByTagName("tr");
  //       for (var i = 0; i < rows.length; i++) {
  //           totalRowCount++;
  //           if (rows[i].getElementsByTagName("td").length > 0) {
  //               rowCount++;
  //           }
  //       }
  //       var message =(rowCount)+ " Record(s)";
  //       //document.getElementById("patientcount").innerHTML = (message);
  //       document.getElementById("patientcount2").innerHTML = (message);
  //       //alert(message);
  //     //});

  //     },1000);

     
   










//generate idno.

setInterval(()=>{
  var name = document.getElementById("name").value.trim().toUpperCase();
  var gender = document.getElementById("gender").value.trim().toUpperCase();
  var phone = document.getElementById("phone").value.toString().trim();
  var birth = document.getElementById("birth").value.toString().trim();

  var nam = name.substring(0,1);
 // var nam2 = name.slice(-1);
  var nam2 = name.split(' ')[0].slice(-1);
  var gen = gender.substring(0,1);
  var pho = phone.substring(7,10);

  var bir = birth.substring(2,4);

  // document.getElementById("id").value=nam+pho+" "+nam2+gen+bir;
  document.getElementById("Uid").value=nam+gen+bir+" "+nam2+pho;

  

}, 500);


 function resetx() {
  //document.getElementById("message").innerHTML= " ";
  document.getElementById("register").style.display="block";
  document.getElementById("update").style.display="none";
  
} 

setInterval(()=>{
  var user = document.getElementById("userid").innerHTML.toString();
  document.getElementById("user1").value=user;
}, 1000);

//#########time#######
setInterval(()=>{
var d = new Date(); 
//
var time=d.toLocaleTimeString([], { hourCycle: 'h23',hour: '2-digit', minute: "2-digit",second:'2-digit' });
const options = { day: 'numeric', month: 'short',year:'numeric'};
const options2 = { day: 'numeric', month: 'short',year:'numeric',weekday:'long'};    
     
            var n = d.toLocaleString('en-US', options);
            var n2 = d.toLocaleString('en-US', options2);
            document.getElementById("timestamp").value = n2+"  "+time;
            document.getElementById("timestamp2").value = n;
            document.getElementById("time").value = time;

            
}, 1000);


//client id
google.script.run.withSuccessHandler(function(userEmail) 
    {  document.getElementById("user1").innerHTML = usertrim;
    var usertrim=userEmail.substring(0, userEmail.length -10);
       document.getElementById("userid").innerHTML = usertrim;
       //document.getElementById("userid2").innerHTML = userEmail;
       
    }).getUserId();


// google.script.run.withSuccessHandler(function(clientEmailId) 
//     {
//        document.getElementById("clientId").innerHTML = clientEmailId;
//     }).clientId()();



//################################# full screen ######################################
   var width = window.innerWidth;
    if (width > 1000) {

  document.addEventListener("click", function(e) {

var elem = document.getElementById("wholedocument");
  if (elem.requestFullscreen) {
   elem.requestFullscreen();
   //ocument.getElementById("tbody").style="max-height:59.5vh;";
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
                    
});
}
else{document.getElementById("tbody").style=" ";
  exit;
}


// function registration(){
//   document.getElementById("sheetname").innerHTML="REGISTRATION";

//   document.getElementById("registration").style.color="#980000";
//   document.getElementById("daysheet").style.color="grey";
//   document.getElementById("schedule").style.color="grey";
// }

// function daysheet(){
//   document.getElementById("sheetname").innerHTML="DAYSHEET";

//   document.getElementById("registration").style.color="grey";
//   document.getElementById("daysheet").style.color="#980000";
//   document.getElementById("schedule").style.color="grey";
// }

// function schedule(){
//   document.getElementById("sheetname").innerHTML="SCHEDULE";

//  document.getElementById("registration").style.color="grey";
//   document.getElementById("daysheet").style.color="grey";
//   document.getElementById("schedule").style.color="#980000";
// }




//##################################### disable right click #########

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);

// ############################### custom Alert Box ##########################################


// var ALERT_TITLE = "Alert";
// var ALERT_BUTTON_TEXT = "Ok";
// var ALERT_BUTTON_TEXT2 = "Cancel";

// if(document.getElementById) {
//     window.alert = function(txt) {
//         createCustomAlert(txt);
//     }

// }

// function createCustomAlert(txt) {
//     d = document;

//     if(d.getElementById("modalContainer")) return;

//     mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
//     mObj.id = "modalContainer";
//     mObj.style.height = d.documentElement.scrollHeight + "px";

//     alertObj = mObj.appendChild(d.createElement("div"));
//     alertObj.id = "alertBox";
//     if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
//     alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
//     alertObj.style.visiblity="visible";

//     h1 = alertObj.appendChild(d.createElement("h1"));
//     h1.appendChild(d.createTextNode(ALERT_TITLE));

//     msg = alertObj.appendChild(d.createElement("p"));
//     //msg.appendChild(d.createTextNode(txt));
//     msg.innerHTML = txt;

//     btn = alertObj.appendChild(d.createElement("a"));
//     btn.id = "closeBtn";
//     btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
//     btn.href = "#";
//     btn.focus();
//     btn.onclick = function() { removeCustomAlert();return false; }

//     alertObj.style.display = "block";

// }

// function removeCustomAlert() {
//     document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
// }

//#########

$(document).ready(function(){
    $("#datasymbol").click(function(){  
    //document.getElementById("reset").click();
    //functionInit();
    //$("#iframe").toggle();
    //$("#database").toggle();
    //$("#usersymbol").toggle();
    //$("#search-form").toggle();
    
    // document.getElementById('footer').style.display='none';
    // document.getElementById("patientcount2").style.display="none ";
    google.script.run.withSuccessHandler(createTable).getAllData();
    // closedatabase();
    
    });
});
$(document).ready(function(){
    $("#usersymbol").click(function(){  // button id devmssg
    $("#footer").toggle();
    document.getElementById("admin").style.display="none";
    document.getElementById("password").focus();
    //$("#database").toggle(); 
    });
});

$(document).ready(function(){
    $("#admin").click(function(){  // button id devmssg
    $('.deleteBtn').toggle();
    $('#footer').toggle();

         // div id to be hide developer message
    });
});

$(document).ready(function(){
    $("#reset").click(function(){  // button id devmssg
    //document.getElementById("message").style.display="none ";
    document.getElementById("footer").style.display="none ";
    //document.getElementById("patientcount2").style.display="none ";
    //google.script.run.withSuccessHandler(createTable).getAllData();
    });
});



$(document).ready(function(){
    $("#searchsymbol").click(function(){  // button id devmssg
    
     
     document.getElementById('database').style.display='block';
    });
});








//#################################### closebutton ##################################################
function closedatabase(){
document.getElementById("footer").style.display="none";
document.getElementById("admin").style.display="none";
google.script.run.withSuccessHandler(createTable).getAllData();
// document.addEventListener("mousemove", function(e) {
// document.getElementById("database").style.display="block";
//   });

} 







document.getElementById('WinterIsComing').innerHTML='dhappa';
