console.log('Hello Daniel')

const formulario = document.getElementById('formEnglish')
const buttonBack = document.querySelector('#buttonBack')

formulario.addEventListener(('submit'), (e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const level = document.getElementById('level').value

    const dataRegister ={

        name:name,
        age:age,
        mail: email,
        level: level
    }

    console.log(dataRegister)

})

buttonBack.addEventListener('click',(e)=>{
    e.preventDefault()

    window.location.href ='/index.html'

})