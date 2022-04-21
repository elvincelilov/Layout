// let obj = {
//     name: "Ragnar",
//     profession : "Viking",
//     kill(){
//         console.log("for odiun")
//     }
// }
// let obj1 = {
//     name: "Ragnar",
//     profession : "Viking",
//     __proto__:obj
// }

// // console.log(obj)
// // console.log(obj.toString())

// // Object.prototype.helloValla = function(){
// //    console.log( "HEllo azer")
// // }
// // obj.helloValla()

// obj1.kill()

// let list = document.querySelector('ul');
// let b = document.querySelector('.addBtn') ;
// let todos; 
// function toLocal(){
// todos = list.innerHTML;
// localStorage.setItem('todos',todos);
// }

// function newElement() {
//     let li = document.createElement('li');
//     let inputValue = document.getElementById('toDoEl').value;
//     let t = document.createTextNode(inputValue);
// li.appendChild(t);
// if(inputValue == "") {
//  alert("BOSHDUR");
// } else {
//  document.getElementById('list').appendChild(li);
// }

// toLocal();
// }

// b.addEventListener('click', newElement)

// if(localStorage.getItem('todos')){
// list.innerHTML = localStorage.getItem('todos',todos);
// }
// -----------------------------------------------------------------


// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }     //-------------------------- To do list


// document.cookie = "name=user"; 
// document.cookie = "fullname=Ivanov";
// document.cookie = "date=10.01.2021";
 
// console.log(document.cookie); // name=user; date=10.01.2021; fullname=Ivanov

// // GET COOKIE WITH REGULAR EXPRESSIONS
// var results = document.cookie.match(/name=(.+?)(;|$)/);
// console.log(results[1]); // user
 
// var results = document.cookie.match(/fullname=(.+?)(;|$)/);
// console.log(results[1]); // Ivanov
 
// var results = document.cookie.match(/date=(.+?)(;|$)/);
// console.log(results[1]); // 10.01.2021


function sortList() {
    let  shouldSwitch;
    let list = document.getElementById("id01");
    let switching = true;
    while (switching) {
      switching = false;
      let b = document.querySelector("li")
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }