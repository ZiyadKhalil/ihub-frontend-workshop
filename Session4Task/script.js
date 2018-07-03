var myList = document.getElementById('myList');
var myInput = document.getElementById('myInput');
var myButton = document.getElementById('myButton');
var successAlert = document.getElementById('successAlert');
var failAlert = document.getElementById('failAlert');
myInput.addEventListener('input',onChangeFunction);
myButton.addEventListener('click',onButtonClickedFunction);

function onChangeFunction() {
    for(var i=0;i<myList.children.length;i++){
      if(!myList.children[i].textContent.startsWith(myInput.value))
          myList.children[i].style.display='none';
      else {
            myList.children[i].style.display='block';
          }
    }

}
function onButtonClickedFunction() {
    if(myInput.value==''){
      failAlert.style.display='block';              // For Alerts
      failAlert.style.visibility='visible';         //
      successAlert.style.display='none';
      successAlert.style.visibility ='hidden';
    }
    else {
      myList.innerHTML+=`\n<li class="list-group-item">${myInput.value}</li>`;
      myInput.value='';
      failAlert.style.display='none';
      failAlert.style.visibility='hidden';
      successAlert.style.display='block';
      successAlert.style.visibility='visible';
      onChangeFunction();
    }
}
