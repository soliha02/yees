let good = document.getElementById(wow);

wow.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => userkorinishi(json results[0]));
});
function userkorinishi(odam){
const user=document.getElementById('user')
const ism=document.getElementById('h1')
const tele=document.getElementById('h2')
const tel=document.getElementById('h2')
const adress=document.getElementById('h3')
const email=document.getElementById('h3')
const rasm=document.getElementById('img')


rasm.src=odam.picture.large;
h1.textContent=`${odam.name.title} ${odam.name.first} ${odam.name.last}`
arguments.textContent='age: '+ odam.dob.age;
tel.textContent-'phone: ' + odam.phone;
adress.textContent-'addres: ' + odam.phone;
email.textContent-'email: ' + odam.phone;

}