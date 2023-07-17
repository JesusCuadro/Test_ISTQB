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
    alerta.document.writeln("No ha respondido la(s) pregunta(s)");
    alerta.document.write('<p style="font-size: 20px;">');

    for (i = 0; i < preguntaNoRespondida.length; i++) {
      if (i < 4) {
        alerta.document.writeln(" " + preguntaNoRespondida[i] + " ");
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
      }else{
        document.getElementById("correcion-1").innerHTML = "La respuesta correcta es la B, porque: Un aspecto comprobable de un componente o sistema identificado como base para la prueba se refiere a una característica o propiedad que se puede verificar durante el proceso de prueba. Estos aspectos comprobables son esenciales para definir las condiciones de un test y determinar si el componente o sistema cumple con los requisitos establecidos.";
      }
      if (i == 1 && establecerResultado[i] == "b") {
        contarPreguntas = contarPreguntas + 1;
      }else{
        document.getElementById("correcion-2").innerHTML = "La respuesta correcta es la B, porque: El propósito de validar que el objeto de prueba funciona según lo esperado por los usuarios y otras partes interesadas es, de hecho, un propósito válido para una prueba. La validación es una actividad crucial dentro del proceso de prueba, que tiene como objetivo principal determinar si un sistema o componente cumple con los requisitos establecidos y satisface las necesidades y expectativas de los usuarios y otras partes interesadas.";
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

    porcentaje = 100 - (((totalPreguntas - contarPreguntas) / totalPreguntas) * 100).toFixed(2);
    document.getElementById("aciertos").innerHTML = contarPreguntas;
    document.getElementById("porcentaje").innerHTML = "Porcentaje de aciertos: " + porcentaje + " %.";
    if (porcentaje >= 80) {
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
