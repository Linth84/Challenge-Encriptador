function encriptar() {
  var texto = document.getElementById("inputtexto").value;

  // Validar que no haya mayúsculas, acentos o caracteres especiales
  if (/[^a-z\s]/.test(texto)) {
    alert("Solo minúsculas y sin acentos");
    return;
  }

  // Convertir a minúsculas después de la validación
  texto = texto.toLowerCase();

  // Verificar si el texto ya está encriptado
  if (/enter|ober|imes|ai|ufat/.test(texto)) {
    alert("Este mensaje se encuentra encriptado");
    return;
  }

  var txtcifrado = texto.replace(/e/gm, "enter")
                        .replace(/o/gm, "ober")
                        .replace(/i/gm, "imes")
                        .replace(/a/gm, "ai")
                        .replace(/u/gm, "ufat");

  document.getElementById("imgDer").src = "imagenes/locked.png";
  document.getElementById("texto").textContent = "Mensaje encriptado";
  document.getElementById("imgDer").style.display = "block";
  document.getElementById("texto").style.display = "block";
  document.getElementById("copiar").style.display = "inline-block";
  document.getElementById("texto2").value = txtcifrado;
  document.getElementById("inputtexto").value = "";
}

function desencriptar() {
  var texto = document.getElementById("inputtexto").value;

  // Validar que no haya mayúsculas, acentos o caracteres especiales
  if (/[^a-z\s]/.test(texto)) {
    alert("Solo minúsculas y sin acentos");
    return;
  }

  // Verificar si el texto tiene palabras encriptadas
  if (!/enter|ober|imes|ai|ufat/.test(texto)) {
    alert("No hay palabras para desencriptar.");
    return;
  }

  var txtcifrado = texto.replace(/enter/gm, "e")
                        .replace(/ober/gm, "o")
                        .replace(/imes/gm, "i")
                        .replace(/ai/gm, "a")
                        .replace(/ufat/gm, "u");

  document.getElementById("imgDer").src = "imagenes/unlocked.png";
  document.getElementById("texto").textContent = "Mensaje desencriptado";
  document.getElementById("imgDer").style.display = "block";
  document.getElementById("texto").style.display = "block";
  document.getElementById("copiar").style.display = "inline-block";
  document.getElementById("texto2").value = txtcifrado;
  document.getElementById("inputtexto").value = "";
}

function copia() {
  var contenido = document.getElementById("texto2");
  
  // Verificar si hay texto para copiar
  if (contenido.value.trim() === "") {
    alert("No hay texto para copiar");
    return;
  }
  
  contenido.select();
  document.execCommand('copy');
  alert("Mensaje copiado");
}
