// Validación del número de teléfono
function validarTelefono(telefono) {
    // Expresión regular para validar el número de teléfono
    var regexTelefono = /^\d{10}$/;
    return regexTelefono.test(telefono);
  }
  
  // Función para mostrar el formulario de reserva
  function mostrarFormularioReserva() {
    // Obtener el elemento del formulario de reserva y mostrarlo
    var formularioReserva = document.getElementById("formulario-reserva");
    formularioReserva.style.display = "block";
  }
  
  // Función para ocultar el formulario de reserva
  function ocultarFormularioReserva() {
    // Obtener el elemento del formulario de reserva y ocultarlo
    var formularioReserva = document.getElementById("formulario-reserva");
    formularioReserva.style.display = "none";
  }
  
  // Función para procesar la reserva
  function procesarReserva() {
    // Obtener los valores del formulario de reserva
    var dia = document.getElementById("dia").value;
    var hora = document.getElementById("hora").value;
    var equipo = document.getElementById("equipo").value;
  
    // Validar los valores del formulario de reserva
    if (dia == "" || hora == "" || equipo == "") {
      alert("Por favor complete todos los campos.");
      return false;
    }
  
    // Mostrar el mensaje de confirmación
    var mensajeConfirmacion = "Reserva realizada para el día " + dia + " a las " + hora + " con " + equipo + ".";
    alert(mensajeConfirmacion);
  
    // Ocultar el formulario de reserva
    ocultarFormularioReserva();
  }
  
  // Función para procesar el pago
  function procesarPago() {
    // Obtener los valores del formulario de pago
    var nombreTitular = document.getElementById("nombre-titular").value;
    var numeroTarjeta = document.getElementById("numero-tarjeta").value;
    var fechaVencimiento = document.getElementById("fecha-vencimiento").value;
    var codigoSeguridad = document.getElementById("codigo-seguridad").value;
  
    // Validar los valores del formulario de pago
    if (nombreTitular == "" || numeroTarjeta == "" || fechaVencimiento == "" || codigoSeguridad == "") {
      alert("Por favor complete todos los campos.");
      return false;
    }
  
    // Mostrar el mensaje de confirmación
    var mensajeConfirmacion = "Pago realizado por " + nombreTitular + " con la tarjeta " + numeroTarjeta + ".";
    alert(mensajeConfirmacion);
  }
  
  // Función para enviar una invitación
  function enviarInvitacion() {
    // Obtener el valor del campo de correo electrónico
    var correoElectronico = document.getElementById("correo-electronico").value;
  
    // Validar el valor del campo de correo electrónico
    if (correoElectronico == "") {
      alert("Por favor ingrese una dirección de correo electrónico.");
      return false;
    }
  
    // Crear el enlace de invitación
    var enlaceInvitacion = "https://miapp.com/invitacion?correo=" + correoElectronico;
  
    // Mostrar el enlace de invitación
    alert("Comparte este enlace con tus amigos: " + enlaceInvitacion);
  }
// Este código asume que tienes una lista de historias en un array
const stories = [
    { user: "Usuario 1", img: "img/story-1.jpg" },
    { user: "Usuario 2", img: "img/story-2.jpg" },
    { user: "Usuario 3", img: "img/story-3.jpg" },
    { user: "Usuario 4", img: "img/story-4.jpg" },
    { user: "Usuario 5", img: "img/story-5.jpg" },
    { user: "Usuario 6", img: "img/story-6.jpg" },
    // y así sucesivamente
  ];
  
  // Función para crear elementos de historias
  function createStoryElement(story) {
    const storyElement = document.createElement("div");
    storyElement.classList.add("story");
  
    const imgElement = document.createElement("img");
    imgElement.src = story.img;
    imgElement.alt = story.user + " story";
    storyElement.appendChild(imgElement);
  
    const userElement = document.createElement("span");
    userElement.classList.add("user");
    userElement.textContent = story.user;
    storyElement.appendChild(userElement);
  
    return storyElement;
  }
  
  // Función para mostrar las historias
  function showStories() {
    const storiesContainer = document.querySelector(".stories");
  
    stories.forEach(story => {
      const storyElement = createStoryElement(story);
      storiesContainer.appendChild(storyElement);
    });
  }
  
  showStories();

  const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});
