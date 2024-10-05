document.addEventListener("DOMContentLoaded", ()=>{
    const formulario = document.getElementById("formulario")

    console.log("hola")

    formulario.addEventListener("submit", (e)=>{
        e.preventDefault()
        const inputName = document.getElementById("name").value
        const inputEmail = document.getElementById("email").value
        const inputNumber = document.getElementById("number").value
        

        console.log(inputName, inputEmail, inputNumber)
    })
})

