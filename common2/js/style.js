
// function fibonacci(n){
//     let sonraki = 1;
//     let indiki = 0;

//     if(n == 1) return 0;
//     while(n>1){
//         sonraki += indiki
//         indiki = sonraki - indiki
//         n--;
//     }
//     return indiki
// }

// console.log( '5ci sira:', fibonacci(5))

// let c = prompt("eded daxil edin")
// let a= c.split("," )
// let kicik = Math.min(...a)
// console.log(kicik);


// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];
// var total = salary[0].reduce(function(a, b) {
//     return a + b;
//   });

//   console.log(total)
//   // total == 6
// let sum = 0
// for (i=0;i<=s.length;i++){
//     sum=sum+s[0][i]
//     sum=sum+s[1][i]
//     sum=sum+s[2][i]
//     sum=sum+s[3][i]
//     sum=sum+s[4][i]
//     sum=sum+s[5][i]
//     sum=sum+s[6][i]
//     sum=sum+s[7][i]
//     sum=sum+s[8][i]
//     sum=sum+s[9][i]
//     console.log(sum)
// }
// function getAnnualSalary(c,d){
//     let sum = 0
//     for (i=0; i<c; i++){

//         for(j=0;j<d;j++){

//             sum=sum+salary[i][j]
//         }
//     }
//     console.log(sum)
// }
// getAnnualSalary(10,

// let character =["Azer" , "Elvin" , "Ilkin"]

// character.push("Bilal")
// character.shift()

// console.log(character)

// let arr = "32,31,34,36,31"

// let b = arr.split(",")
// console.log(b)

// let a = b.join(";")
// console.log(a)


// const nameParts = ['John', 'Jonah', 'Jameson'];
//  const [firstName, middleName, lastName] = nameParts;

// console.log(firstName,middleName,lastName)

// const nameParts = ['John', 'Jonah', 'Jameson'];

// const firstName = nameParts[0];
// const middleName = nameParts[1];
// const lastName = nameParts[2];

// console.log(firstName,middleName,lastName)

// const nameParts = ['John', 'Jonah', 'Jameson'];
// const [firstName, ...otherParts] = nameParts;

// console.log(firstName);
// // John
// console.log(otherParts);
// ['Jonah', 'Jameson'] /



// let massiv = [2,4,6,8,10]
// let massiv1=[]
// for (i=0;i<massiv.length;i++){
//     massiv1[i]=massiv[i]*2
// }
// console.log(massiv1)
// console.log(massiv)

// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
//   ];
  
//   let development=[];
  
//   for(i=0; i<10;i++){
//       for(j=0;j<2 ;j++){
//           if (employees[i][j] == "development"){
//               development.push(employees[i])
//           }
//       }
//   }
//       console.log(development)
// -------------------------------------------------------------
// let novbe = ["Azer","Elvin"]

// let a=prompt("Ad ,Soyad daxil edin")

// if(a !="=" && a!="" && a != null){
//     novbe.push(a)
//     console.log(novbe)
// }
// else if (a ==""){
//     console.log(novbe[0] + " adli shexs novbeden silindi")
//     novbe.shift()
//     console.log(novbe)
// }
// else if( a == "="){
//     console.log(novbe);
// }
// ----------------------------------------------------- Elektron novbe

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

// array.sort((a,b)=>a-b)
// console.log(array) ------------------------------- sortlama

// let array = [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52 ],
//  let   positive = array.filter(function (a) { return a < 0;} )
//     console.log(positive) -------------------------------------

// let arr = [1,-1, 2,-2, 3,-3,4,-4]

// function findmin(arr){
//    if (arr<0){
//        console.log(arr)
//    }
//     }
// arr.forEach(findmin); -----------------


// let arr = [1,-1, 2,-2, 3,-3, 4,-4];

// arr.forEach((arr)=>{
//     if(arr>0){
//         console.log(arr)
//     }
// })

// const arr = [1, -2, 3, -4, 5];
// const newArr = arr.map((item) => {
//     if(item>0){
//         console.log(item*2)
//     }
//     if(item<0){
//         console.log(item*(-1))
//     }
// });

// let word=['Green','Red', 'Blue']
//  word.find((item) => {
//      if(item.length==3){
//          console.log(item)
//      }
// });


// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];
// names.filter((item) => {
//     if(item[0]=="A"){
//         console.log(item)
//     }
//     }
// );

// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];

// let result = names.filter((item) => {
//     return item[0]=="A"
// });
// console.log(result)


// let arr = [100,120,140,160]

// let newArr = arr.map((item)=>{
//     return item + item*20/100
// })
// console.log(newArr)




// const kebabToCase = string => string
//         .replace(/([a-z])([A-Z])/g)
//         .replace(/[\s-]+/g, '_')
//         .toUpperCase();
  
//     console.log(kebabToCase('first-user'));
// let ededler = [2,4,5,3,6,8]
// let numbercut = []
// let numbertek =[]

// function countEvensAndOdds(items){
//     if (items%2==0){
//         numbercut.push(items)
//     }
//     else {
//         numbertek.push(items)
//     }
// }
// console.log(numbercut.length + " sayda cut eded" +numbertek.length +" sayda tek eded")
// ededler.forEach(countEvensAndOdds)


// let arr =['Nicola Tesla, 1856','Alan Turing, 1912', 'Ada Lovelace, 1815']

// arr.sort((a,b) => 
// Date.parse(a)-Date.parse(b))
// console.log(arr)  ------------------------------  Arrayin 2ci elementine esasen sortlanmasi

// const player = {
//     'name': 'Eric',
//     'gender': 'Male',
//     'birtday' : "31 fevral"
//   }
//   player.status = "activate"
//   delete player.name
//   console.log(player.birtday);
//   console.log(player)

// const player = {
//       'name': 'Eric',
//      'gender': 'Male',
//      'birtday' : "31 fevral"  
//      }

// const player = {
//     name: "Eric Cartman",
//     showThis() {
//       console.log(this);
//     }
//   }
//   player.showThis();

//   const player1 = {
//     name: "Ericoo Cartmanbcads",
//     showThis() {
//       console.log(this);
//     }
//   }
//   player1.showThis();


// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 37,
//     department: 'management'
//   }
//   function setAge(){
//       user.age='40'
//       console.log(user.age)
//   }
//   function  getYearsBeforeRetirement(){
//       let yas= 65 - user.age;z
//   }
// setAge();
// getYearsBeforeRetirement();
// const client ={
//     fullNAme: "Azer Ilkin",
//     creditLimit: 1000,
//     balans:800,
//     precentOfMinPayment:10
// }
// function withdraw(){
//     let cixaris = prompt("Cixaracaginiz meblegi daxil edin");
//     if(cixaris>(client.creditLimit + client.balans)){
//         console.log("Balansinizda kifayet qeder mebleg yoxdur")
//     }
//     else{
//         console.log("Mebleginizi goturun")
//     }

// }
// withdraw();

// function metn(a){
//   let b=  a.split(" ");
//   let reversed = ""
//     for (let i=0 ; i <= b.length;i++){
//         if (b[i].length >= 5){
//              b[i].split("").reverse().join("")
//               reversed +=b[i]
//         }
       
//     }
//     return reversed;
// }
// metn("Seriously this is the last one")


// const str = 'this is a sample string';   
// const reverseWords = str => {   
//    let reversed = '';   
//    reversed = str.split(" ")   
//    .map(word => {  
//        if(word.length>=5){ 
//       return word   
//       .split("")   
//       .reverse()   
//       .join("");   
//        } 
//        else{ 
//             return word   
//       .split("")   
//       .join("");   
           
//        } 
//    })   
//    .join(" ");   
//    return reversed;   
// };   
// console.log(reverseWords(str));  ------------------------  5 herfden yuxari olan sozleroi tersine cevirir


// const str = "Give me $20"; 
// console.log(str.replace(/[^a-zA-Z ]/g, ""));



// var binary = "01001101";
// var digit = parseInt(binary, 2);
// console.log(digit);

// const convertToDec = [0, 1, 0, 0, 1, 1, 0,1]; // 77 
// const rev = convertToDec.reverse(); 
// // console.log(rev); 
// function multi() { 
//     let a=0 
//     for (i=0; i< rev.length; i++) { 
//        let b= rev[i] * (2 ** i);  
//         a =a+b 
//     } 
//     console.log(a)   
// }
// multi();   // ---------------- 2lik say sisteminnen 10luqa kecid


// class Person{
//     constructor (name,age,gender){
//         this.name=name;
//         this.gender= "Male";
//         this.age=age;
        
//     }
//     updateAge(age){
//         this.age=age
//     }
// }
// const person1 = new Person("azer","20")
// person1.updateAge(21)
// console.log(person1)


// class Transaction{
//     constructor(fromClient,toClient,amount){
//         this.fromClient=fromClient;
//         this.toClient=toClient;
//         this.amount=amount;
//         this.comission=5;
//     }
//     calculateCommission(){
//         return this.amount * this.comission /100
//     }
// }

// let transaction=new Transaction("Christian","Daniel",5000)
// console.log(transaction.calculateCommission())

// class Person {
//     constructor(surname,name,age,gender){
//         this.surname=surname;
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }
// class Admin extends Person{
//     constructor(role,id){
//         this.id=id;
//         this.role=role;
//     }
// }
// class Player extends Admin {
//     constructor(level){
//         this.level=level;
//     }
// }


// class Vehicle {
//     constructor(maxSpeed, color){
//       this.maxSpeed = maxSpeed;
//       this.color = color;
//     }
//     rename(newName) {
//      return this.color = newName;
//     }
//   }
  
//   class Car extends Vehicle {
//     constructor(maxSpeed, color, mileage){
//       super(maxSpeed, color,this.rename);
//       this.mileage = mileage;
//     }
//   }

  
//   const myCar = new Vehicle(150,'yellow', 0);
//   console.log(myCar)
//   myCar.rename('azer');
//   console.log(myCar) -----------------------------------
  

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     rename(newName){
//         this.name=newName;
//     }
// }

// class Admin extends User {
//     constructor(name, age, id) {
//         super(name, age, rename);

//         this.id = id;
//     }
// }

// class Recruit extends User {
//     constructor(name, age) {
//         super(name, age,rename);
//     }
//     }
//     let user1= new Recruit("Azer",20)
//     user1.rename("Ilkin")
//     console.log(user1)  ----------------------------------


// class SimpleCalc {
//     constructor(n){
//         this.n=n
//     }
//     plus(number){
//         this.n= this.n +number
//         return this.n
//     }
//     mult(number){
//         this.n= this.n * number
//         return this.n
//     }
//     minus(number){
//         this.n=this.n - number
//         return this.n
//     }
//     divide(number){
//         this.n =this.n /number
//         return this.n
//     }

//     toString(){
//        return this.n.toString(2)

//     }
// }
// const simpleCalc = new SimpleCalc(8);
// simpleCalc.mult(10);
// simpleCalc.plus(2);
// simpleCalc.minus(7);
// simpleCalc.divide(5);
// console.log(simpleCalc.toString())



// document.querySelector("h1").remove();

// let newElement = document.querySelector('ul');
// let element = newElement.append("elvin agsulu");


// const element = document.querySelector('ul');
// element.innerHTML = '<li>iMac: Consumer all-in-one desktop computer, introduced in 1998.</li>';
// console.log(element.innerHTML);
// element.style.backgroundColor= "red"

// let element = document.querySelector("ul")

// console.log(element.parentElement)



// document.addEventListener('keyup', (event) => {
//     if (event.key=="Enter"){

//         alert("cox uzr istirem ay azer .......")
//     }
//   });


// let element = document.getElementById("show");
// let element1 = document.getElementById("hide");
// let element2 = document.querySelector("ul");

// element.addEventListener("click",function (){
//     element.style.display ="none";
//     element1.style.display="block";
//     element2.style.display = "block";
// })
// element1.addEventListener("click",function(){
//     element.style.display ="block"
//     element1.style.display="none"; 
//     element2.style.display = "none";
// })   ----------------------------------------------- detallari gosterme


// let minus = document.getElementById("minus")
// let plus = document.getElementById("plus");
// let volume = document.getElementById("volume-bar");
// let volumediv = document.getElementById("volume-bar-div")
// let value = document.getElementById("value")
// let finddiv = document.getElementById("find")

// let count = 100;
// let width = 100;

// function com (){
//     if(count<1){
//         count=0
//     }
//     else if (count>99){
//         count=100
//     }
//     if (width<1){
//         width = 0
//     }
//     else if(width>99){
//         width=100
//     }
// }

// function plusf(){
//     value.innerText = `${++count}%`
//     volumediv.style.width =`${++width}%`
//     com();
// }

// function minusf (){
//     value.innerText = `${--count}%`
//     volumediv.style.width = `${--width}%`
//     com();
// }

// minus.addEventListener("click", minusf)
// plus.addEventListener("click",plusf)

// function find (e){
//     value.innerText = `${Math.floor(e.offsetX / 4)}%`
//     volumediv.style.width = `${Math.floor(e.offsetX / 4)}%`
//     count = Math.floor((e.offsetX / 4))
//     width = Math.floor((e.offsetX / 4))
//     com ();
// }
// volume.addEventListener("mouseup",find)     ---------------------           ses artirib azaltmaq 

// function sortTable() {



//     let table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
   
//     while (switching) {
      
//       switching = false;
//       rows = table.rows;
      
//       for (i = 1; i < (rows.length - 1); i++) {
        
//         shouldSwitch = false;
        
//         x = rows[i].getElementsByTagName("TD")[0];
//         y = rows[i + 1].getElementsByTagName("TD")[0];
        
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          
//           shouldSwitch = true;
//           break;
//         }
//       }
//       if (shouldSwitch) {
        
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
//     }
//   }            // -------------------   sortlama


// const nameInput = document.querySelector('.name');
// const actionButton = document.querySelector('.action');

// actionButton.addEventListener('click', () => {
//   alert(nameInput.value);
// });  --------  alerte adi cixarmaq ucun  value funksiyasi istifade oluniur

// const nameInput = document.querySelector('.name');
// const tip = document.querySelector('.tip');

// nameInput.addEventListener('keyup', (event) => {
//   if (event.target.value.length < 3) {
//     tip.style.display = 'block';
//   } else {
//     tip.style.display = 'none';
//   }
// });            

// const nameInput = document.querySelector('.name');
// const tip = document.querySelector('.tip');

// nameInput.addEventListener('blur', () => {
//   if (nameInput.value.length >= 3) {
//     tip.style.display = 'none';
//   } else {
//     tip.style.display = 'block';
//   }
// });

// let ad =document.querySelector(".comment-input");
// let serh =document.querySelector(".comment-input2");
// let gonder =document.querySelector(".comment-send");

// gonder.addEventListener("click",()=>{
//   console.log(ad.value)
//   console.log(serh.value)
// })    ----------- serhe verilen melumati consola cixarmaq
 
// let yasinput = document.querySelector(".age")
// let emailinput = document.querySelector(".email")
// let parolinput = document.querySelector(".pasword")
// let parolinput1 = document.querySelector("button")
// let user1 =document.querySelector(".user-form")

// function parol() {
//  if(parolinput.value.length >= 5) {
//    console.log("icaze verildi")
//  }
//  else {
//    console.log("giris qadagandir")
//  }
// }
// parolinput1.addEventListener("click",parol)

// user1.addEventListener("submit", (event)=>{
//   event.preventDefault();
// })       

//  -------  parol 5 simvoldan kicikdirse qebul etmir



const userForm = document.querySelector('.user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  alert("xeste qeydiyyati tamamlandi")

  const data = new FormData(event.target);

  console.log(data.get('name'));
  console.log(data.get('vesiqe'));
  console.log(data.get('gender'));
});








