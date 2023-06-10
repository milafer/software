function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Verificar si el usuario y la contraseña no están vacíos
  if (username.trim() === "" || password.trim() === "") {
    alert("Por favor, complete todos los campos.");
    return false; // Prevenir el envío del formulario
  }

  // Realiza cualquier validación adicional aquí, como verificar el usuario y la contraseña en una base de datos o API

  // Validación exitosa (ejemplo: usuario=admin, contraseña=admin)
  if (username === "admin" && password === "admin") {
    // Redirecciona a la página deseada
    window.location.href = "/index.html";
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }

  return false; // Prevenir el envío del formulario
}