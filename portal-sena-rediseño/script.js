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


/*function mostrarCarga() {
  document.getElementById('loadingOverlay').classList.remove('d-none');
  // Simulación de proceso de inscripción
  setTimeout(() => {
    ocultarCarga();
    actualizarProgreso(1, 3); // ejemplo: paso 1 de 3
  }, 3000);
}

function ocultarCarga() {
  document.getElementById('loadingOverlay').classList.add('d-none');
}

function actualizarProgreso(pasoActual, totalPasos) {
  const porcentaje = (pasoActual / totalPasos) * 100;
  const bar = document.getElementById('progressBar');
  bar.style.width = porcentaje + '%';
  bar.setAttribute('aria-valuenow', porcentaje);
  bar.textContent = `Paso ${pasoActual} de ${totalPasos}`;
}*/
