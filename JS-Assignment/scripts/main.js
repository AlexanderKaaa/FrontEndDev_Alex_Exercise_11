
var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here
getElm("firstName").classList.remove("invalid");
 getElm("lastName").classList.remove("invalid");
 getElm("emailAddress").classList.remove("invalid");

    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

document.getElementById("p1_fullName").innerHTML=firstName+  " " + lastName;
  var p1_valid=false;
  if(firstName!=="" && lastName!==""){p1_valid=true;}
  
  document.getElementById("p1_valid").innerHTML=p1_valid;
  
  var p1_fullNameLength=firstName.length+lastName.length;
  
  document.getElementById("p1_fullNameLength").innerHTML=p1_fullNameLength;

if(getValue('firstName')===""){getElm("firstName").classList.add("invalid");}
  if(getValue('lastName')===""){getElm("lastName").classList.add("invalid");}
 
  
    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

document.getElementById("p2_email").innerHTML=emailAddress;
  
  var p2_valid=false;
  if(emailAddress.indexOf("@")>0){p2_valid=true;}
  document.getElementById("p2_valid").innerHTML=p2_valid;
  
var p2_emailLength=emailAddress.length;
  
document.getElementById("p2_emailLength").innerHTML=p2_emailLength;
  
   if(getValue('emailAddress') ==="" || p2_valid===false){getElm("emailAddress").classList.add("invalid");}
  
    // Part 3
   
  
  var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
document.getElementById("p3_number").innerHTML  =randomNumber;

  var p3_valid=false;
 
  if(isNaN(randomNumber)){p3_valid=false;}
  
  else{p3_valid=true;}
  
  document.getElementById("p3_valid").innerHTML=p3_valid;
   
  
  // Part 4
   
  
  var arrayInput = getValue('arrayValue');
    console.log(arrayInput);


arrayItems.push(arrayInput);
  
  for(i=0; i<arrayItems.length;i++){
    if(arrayItems[i]==="" /*|| arrayItems[i]===" " || isNaN(arrayItems[i])*/){
     arrayItems.splice(i, 1);
       //arrayItems.pop(" ");
  //array.pop("");
    }
  }
  
 


document.getElementById("p4_arraylength").innerHTML  = arrayItems.length;
  
 
  
  
  document.getElementById("p4_valid").innerHTML  = arrayItems;
  





    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

