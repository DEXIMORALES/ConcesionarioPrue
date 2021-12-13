// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

function RegistrarPersona(){
      let nombres = document.querySelector("#txtNombres").value;
      let apellidos = document.querySelector("#txtapellidos").value;
      let correo = document.querySelector("#txtcorreo").value;
      let celular = document.querySelector("#txtcelular").value;

      let url ="http://localhost:3000/personas";

      let datos={
          nombres: nombres,
          apellidos: apellidos,
          correo: correo,
          celular: celular
      }

      fetch (url, {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {"Contenido-Type":"appplication/json"}
      }).then(res =>res.json())
      .then(mensaje =>{
          console.log(mensaje)
      })
  
}
