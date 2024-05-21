//Formulario
const form = document.querySelector('form');

// input
const email = document.querySelector("#email")
const password = document.querySelector("#password")
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const user = await validateEmail(email);
    if (user == null) {
        alert("este personaje no esta regustrado")
    } else {
        if (user.password === password.value) {

            localStorage.setItem("userOnline",JSON.stringify(user))

            window.location.href = "./src/pages/dashboard.html"
        } else {
            alert("la contraseña esta incorrecta")
        }
    }
})
//valida que el correo no exista
async function validateEmail(email) {
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    const data = await response.json() // convertimos de json a javascript
    if (data.length > 0) {
        return data[0]
    }
}







// //Formulario
// const form = document.querySelector('form');

// //Input
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');

// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await validateEmail(email);
//     if (user == null) {
//         alert("Ese personaje no esta registrado")
//     } else {
//         if (user.password === password.value) {
//             alert("Bienvenido")
//         } else {
//             alert("La contraseña es incorrecta")
//         }
//     }
// })



// //valida que el correo no exista
// async function validateEmail(email) {
//     const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
//     const data = await response.json() // convertimos de json a javascript
   
//     if (data.lenght >0) {
//         return data[0]
//     }
// }
