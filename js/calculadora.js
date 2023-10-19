
let expresion = "";


function agregarDigito(digito) {
  if (document.getElementById("resultado").classList.contains("fs-3")) {
    document.getElementById("resultado").classList.remove("fs-3");
    document.getElementById("resultado").classList.add("fs-1");
  }
  expresion += digito;
  document.getElementById("resultado").value = expresion;
}

function agregarOperador(operador) {
  expresion += operador;
  document.getElementById("resultado").value = expresion;
}

function borrar() {
  expresion = "";
  document.getElementById("resultado").value = 0;
}

function borrarUltimo() {
  expresion = expresion.toString();
  if (expresion.length > 1) {
    expresion = expresion.substring(0, expresion.length - 1);
    document.getElementById("resultado").value = expresion;
  }
  else {
    expresion = "";
    document.getElementById("resultado").value = "0";

  }
}

function calcularCuadrado() {
  expresion += "**2";
  try {
    expresion = eval(expresion);
    document.getElementById("resultado").value = expresion;

  } catch (error) {
    document.getElementById("resultado").value = "Error";
    expresion = "";
  }
}


function calcular() {
  if (!expresion == "0") {
    try {
      expresion = eval(expresion);
      expresion = expresion.toString();

      if (expresion == "Infinity") {
        expresion = "";
        document.getElementById("resultado").classList.remove("fs-1");
        document.getElementById("resultado").classList.add("fs-3");
        document.getElementById("resultado").value = "No se puede dividir por cero";
      }
      else {
        document.getElementById("resultado").value = expresion;

      }

    } catch (error) {
      document.getElementById("resultado").value = "Error";
      expresion = "";
    }
  }

}
