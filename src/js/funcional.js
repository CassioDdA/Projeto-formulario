const form = document.querySelector('.formulario')
const input = document.querySelectorAll('.formulario input, .formulario textarea')
const aviso = document.querySelectorAll('.aviso')

form.addEventListener('submit', function(event){
  event.preventDefault()

  let campoVazio = false
  
  input.forEach((input) => {
    if(!input.value){
      input.classList.add('invalido')
      campoVazio = true
    }else{
      input.classList.remove('invalido')
      input.classList.add('valido')
    }
  })

  if(campoVazio){
    aviso.forEach((aviso) => {
      aviso.style.visibility = 'visible'
    })
  }else{
    aviso.forEach((aviso) => {
      aviso.style.visibility = 'hidden'
    })
  }
})


