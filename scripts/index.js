function respuestas() {

  let r1,
    r2,
    r3,
    r4,
    r5 = "";
    
  let selectores = [
    'input[name="1"]:checked',
    'input[name="2"]:checked',
    'input[name="3"]:checked',
    'input[name="4"]:checked',
    'input[name="5"]:checked',
  ];


  let contarPreguntas = 0;
  let establecerResultado = [r1, r2, r3, r4, r5];
  let porcentaje = 0;
  let numeroPreguntas = ["1", "2", "3", "4", "5"];
  let preguntaNoRespondida = [];
  let situacion = "";
  let totalPreguntas = 5;

  for (let i = 0; i < 5; i++) {
    try {
      establecerResultado[i] = document.querySelector(selectores[i]).value;
    } catch (e) {
      preguntaNoRespondida.push(numeroPreguntas[i]);
    }
  }

  if (preguntaNoRespondida.length > 0) {
    alerta = window.open("", "Alerta", "width=400,height=245");
    alerta.close();
    alerta = window.open("", "Alerta", "width=400,height=245");
    alerta.document.writeln("No ha respondido la(s) pregunta(s) ");
    alerta.document.write('<p style="font-size: 20px;">');
    for (i = 0; i < preguntaNoRespondida.length; i++) {
      if (i < 4) {
        alerta.document.writeln(" " + preguntaNoRespondida[i] + " - ");
      } else {
        alerta.document.writeln(" " + preguntaNoRespondida[i] + " ");
      }
    }
    alerta.document.write("</p>");
    alerta.document.write(
      '<p style="color: red;"> Vuelva y marque las respuestas!&nbsp;&nbsp;' +
        '<button onclick="javascript:window.close()" style="background-color:red; border-color:red; color:white">Cerrar</button> </p>'
    );
  } else {
    alerta = window.open("", "Alerta", "width=400,height=245");
    alerta.close();

    for (let i = 0; i < 5; i++) {
      if (i == 0 && establecerResultado[i] == "b") {
        contarPreguntas = contarPreguntas + 1;
      }
      if (i == 1 && establecerResultado[i] == "b") {
        contarPreguntas = contarPreguntas + 1;
      }
      if (i == 2 && establecerResultado[i] == "b") {
        contarPreguntas = contarPreguntas + 1;
      }
      if (i == 3 && establecerResultado[i] == "a") {
        contarPreguntas = contarPreguntas + 1;
      }
      if (i == 4 && establecerResultado[i] == "c") {
        contarPreguntas = contarPreguntas + 1;
      }
    }

    porcentaje =
      100 -
      (((totalPreguntas - contarPreguntas) / totalPreguntas) * 100).toFixed(2);
    document.getElementById("aciertos").innerHTML = contarPreguntas;
    document.getElementById("porcentaje").innerHTML =
      "Porcentaje de acierto " + porcentaje + " %.";
    if (porcentagem >= 80) {
      situacion = "Aprobado";
      document.getElementById("condicion-aprobado").innerHTML = situacion;
      document.getElementById("condicion-reprobado").innerHTML = "";
    } else {
      situacion = "Reprobado";
      document.getElementById("condicion-reprobado").innerHTML = situacion;
      document.getElementById("condicion-aprobado").innerHTML = "";
    }
    document.getElementById("boton").disabled = true;
    document.getElementById("preguntas").disabled = true;
    console.log("Total de aciertos: " + contarPreguntas);
  }
}
