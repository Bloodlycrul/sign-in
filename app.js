const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("button");
const heading = document.getElementById("heading");
const login = document.getElementById('login')



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let checker = ()=>{
    let val = email.value;
    if(!emailRegex.test(val)){
        heading.innerText = "Wrong Email Id"
        heading.style.color = 'red'
    }else if(emailRegex.test(val)){
        heading.innerText = "login"
        heading.style.color = 'green'
    }
}


  