let prevDivId = "";

function change(id) {
  let div = document.getElementById(id);
  
  
  if (prevDivId !== "") {
      let color = document.getElementById(id).style.backgroundColor;
document.getElementById('tshirt-icon').style.color=color;
    let prevDiv = document.getElementById(prevDivId);
    prevDiv.style.boxShadow = "none";
  }
  
 
  div.style.boxShadow = "0px 0px 0px 2px #B2B2B2";
  
  
  prevDivId = id;
}
// window.onload = function() {
//   var blueDiv = document.getElementById("blue");
//   blueDiv.style.boxShadow = "0px 0px 0px 2px #B2B2B2";
//   prevDivId = "blue";
// };


// Here is  the Tshirt  details
let tshirt = [
   { 
     name: 'Cool Breeze T-shirt',
     price: 200,

     sizes: [
        { length: 'xs', amount: 0 },
        { length: 's', amount: 50 },
        { length: 'm', amount: 100 },
        { length: 'l', amount: 130 },
        { length: 'xl', amount: 150 }
     ],
     comments:[
     {name:'Pratik',
      comments:'"This T-shirt is awesome! Great fit and super comfortable. Highly recommend!"'
     },
      {name:'Raj',
      comments:'"I am really happy with this T-shirt. It  is soft, fits well, and looks great. Perfect for everyday wear!"'
     },
      {name:'Ameer',
      comments:'"This T-shirt exceeded my expectations. The material is high quality and the fit is perfect. I  will definitely be buying more in different colors!"'
     }
     
     ],
     ratings:4.5,
     description:'Introducing our new "Cool Breeze" T-shirt, made from a soft and breathable cotton blend with a relaxed fit and classic crewneck design. Featuring a unique graphic print on the front, this T-shirt is perfect for any occasion. Available in sizes XS to XL and easy to care for, order yours today and add a touch of style to your everyday wardrobe!',
     additionalDetails: "• Made from a soft and breathable cotton blend<br>• Relaxed fit and classic crewneck design for comfort<br>• Unique graphic print on the front inspired by summer vibes and beach scenes<br>• High-quality ink that won't fade or crack over time<br>• Available in sizes XS to XL to fit all body types comfortably<br>• Easy to care for - simply machine wash and tumble dry on low heat<br>• Versatile choice for any occasion, from running errands to hanging out with friends<br>• Adds a touch of style to your everyday wardrobe",
   }
];
 document.getElementById('title').innerHTML=tshirt[0].name;
 document.getElementById('dynamic-price').innerHTML=tshirt[0].price;
 document.getElementById('users-ratings').textContent=tshirt[0].ratings;
for (let i=0; i<tshirt[0].comments.length;++i){
    document.getElementById('commented').innerHTML+='<h3>'+'<i class="fa-solid fa-user"></i>'+'&nbsp  &nbsp'+tshirt[0].comments[i].name+':'+'</h3>';
    document.getElementById('commented').innerHTML+=tshirt[0].comments[i].comments+'<br><hr>';
//    console.log(tshirt[0].comments[i].name)
}
  document.getElementById('detail-box').innerHTML=tshirt[0].description;

 let  k=document.getElementById('More-Details');

 let  l=document.getElementById('description');
function desc(){
   
    document.getElementById('detail-box').innerHTML=tshirt[0].description;
    l.style.textDecoration='underline';
     l.style.textDecorationThickness='4px';
    k.style.textDecoration='none';

}


function addDetails(){
     
    document.getElementById('detail-box').innerHTML=tshirt[0].additionalDetails;
    k.style.textDecoration='underline';
    l.style.textDecoration='none';
     k.style.textDecorationThickness='4px';
  
}





 
 //to keep the  black color fixed for individual
 let  preClick="";

function choose(id){
   let  x=document.getElementById(id).textContent;
   let  y=tshirt[0].sizes.find((size)=>{
       return size.length.toLocaleLowerCase()==x.toLocaleLowerCase();
   })
    if(y){
        document.getElementById('dynamic-price').innerHTML=tshirt[0].price+y.amount;
    }
    //black color applied
    let  size=document.getElementById(id);
    if (preClick!==""){
        let  clickedSize=document.getElementById(preClick);
        clickedSize.style.backgroundColor='transparent';
        clickedSize.style.color='black';
    }
    
      size.style.backgroundColor = "black";
      size.style.color='white';
    
    preClick=id;
      
      
      
   
}
window.onload =function(){
   let  defaultValue= document.getElementById('XS');
   defaultValue.style.backgroundColor='black';
   defaultValue.style.color='white';
   preClick="XS";



}
function  showComment(){
let  display1=document.getElementById('commented');


if(display1.style.display=='block'){
display1.style.display='none';

}
else{
    display1.style.display='block';
  
}
}
let cartNum=document.getElementById('cartNumbers');
cartNum.textContent=0;
function cart(){
    cartNum.textContent ++;

}
let  incre=document.getElementById('heartNum');


let  x=document.getElementById('heart-active');
function heart(){
if(x.style.color=='black'){
    x.style.color='red';
    incre.textContent='1';
}
else{
     x.style.color='black';
     incre.textContent='';
}
}






  