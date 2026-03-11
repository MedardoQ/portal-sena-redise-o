// Validación inmediata con Bootstrap
(function () {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        alert("Formulario enviado con éxito.");
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
