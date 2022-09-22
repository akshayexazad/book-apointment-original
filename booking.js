let add =document.getElementById('btn-add');
add.addEventListener('click' , addone)

function addone(){
let name= " Name:- "
let iptxt=name + document.getElementById('textip').value;
localStorage.setItem('name',iptxt)
let addid=document.getElementById('ulc');
let  elmcreate=document.createElement('li');
let addtext=document.createTextNode(iptxt);
elmcreate.appendChild(addtext); 

addid.appendChild(elmcreate)
let str=" ,And the email is :- ";
let iptxt2=str + document.getElementById('textip2').value;
localStorage.setItem('email',iptxt2)
let addid2=document.getElementById('ulc');
let addtext2=document.createTextNode(iptxt2);
elmcreate.appendChild(addtext2);
addid.appendChild(elmcreate);
 
}