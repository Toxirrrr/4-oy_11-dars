let elForm = document.querySelector(".form__register");
let elFormEmail = document.querySelector(".user__email");
let elFormPassword = document.querySelector(".user__password");
let elFormName = document.querySelector(".user__name");
let elFormIsAdmin = document.querySelector(".user__isAdmin");

console.log("OK");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    let formEmail = elFormEmail.value.trim();
    let formPassword = elFormPassword.value.trim();
    let formName = elFormName.value.trim();
    let isAdmin = elFormIsAdmin.value;

 
    fetch("https://fast-ravine-16741.herokuapp.com/api/users", {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(
        {
            "email":formEmail,
            "password":formPassword,
            "name":formName,
            "isAdmin":true
        }
        ),
    })
    .then(res => res.json())
    .then(data =>{

        if (!data.error) {
            location.href = "./login.html"
            elFormLogin.value = null
            elFormPassword.value = null
        }else{
            alert(data.error)
        }
    })
    
})