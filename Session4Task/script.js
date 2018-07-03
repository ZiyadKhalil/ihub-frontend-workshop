var myList = document.getElementById('myList');
var myInput = document.getElementById('myInput');
var myButton = document.getElementById('myButton');
var successAlert = document.getElementById('successAlert');
var failAlert = document.getElementById('failAlert');
var values = myList.innerHTML;   //var to store list items
var valuess = ["1","2","3","4","5"];
for(var i =0 ;i<myList.children;i++)
    valuess.push(myListChildren[i].textContent);
myInput.addEventListener('input',onChangeFunction);
myButton.addEventListener('click',onButtonClickedFunction);

function onChangeFunction() {
  console.log(myInput.value);
  console.log(values);
  console.log(myList.children);
  console.log(valuess);
    var tempInnerHTML = '';             //A Temporary String to hold all values starts with the input
    for(var i=0;i<valuess.length;i++){
      if(valuess[i].startsWith(myInput.value))
          tempInnerHTML+=`<li class="list-group-item">${valuess[i]}</li> \n`;
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
      valuess.push(myInput.value);
      myInput.value='';
      failAlert.style.display='none';
      failAlert.style.visibility='hidden';
      successAlert.style.display='block';
      successAlert.style.visibility='visible';
      onChangeFunction();
    }
}
