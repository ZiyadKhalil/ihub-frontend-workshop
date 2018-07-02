var myList = document.getElementById('myList');
var myInput = document.getElementById('myInput');
var myButton = document.getElementById('myButton');
var successAlert = document.getElementById('successAlert');
var failAlert = document.getElementById('failAlert');
var values = myList.innerHTML;   //var to store list items
myInput.addEventListener('input',onChangeFunction);
myButton.addEventListener('click',onButtonClickedFunction);

function onChangeFunction() {
    var tempInnerHTML = '';             //A Temporary String to hold all values starts with the input
    for(var i=0;i<myList.children.length;i++){
      if(myList.children[i].textContent.startsWith(myInput.value))
          tempInnerHTML+=`<li class="list-group-item">${myList.children[i].textContent}</li> \n`;
    }
    myList.innerHTML=tempInnerHTML;
    if(myInput.value=="")               // to return to default items if input is empty
          myList.innerHTML=values;

}
function onButtonClickedFunction() {
    if(myInput.value==''){
      failAlert.style.display='block';
      failAlert.style.visibility='visible';
      successAlert.style.display='none';
      successAlert.style.visibility ='hidden';
    }
    else {
      values+=`\n<li class="list-group-item">${myInput.value}</li>`;
      myInput.value='';
      failAlert.style.display='none';
      failAlert.style.visibility='hidden';
      successAlert.style.display='block';
      successAlert.style.visibility='visible';
      onChangeFunction();
    }


    // values+=`<li`
}
