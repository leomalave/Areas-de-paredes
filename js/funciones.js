function limpiar(){  
    document.getElementById('miFormulario').reset();
}

function ejecutar(){
    var a1 = parseFloat(document.getElementById('valor1').value);
    var a2 = parseFloat(document.getElementById('valor2').value);
    var a3 = parseFloat(document.getElementById('valor3').value);
    var a4 = parseFloat(document.getElementById('valor4').value);
    var a5 = parseFloat(document.getElementById('valor5').value);
    var a6 = parseFloat(document.getElementById('valor6').value);
    var a7 = parseFloat(document.getElementById('valor7').value);
    var a8 = parseFloat(document.getElementById('valor8').value);
    var a9 = parseFloat(document.getElementById('valor9').value);
    var a10 = parseFloat(document.getElementById('valor10').value);

/* suma de los metros lineales de las paredes */
 sumaP = (a1+a2+a3+a4+a5+a6+a7+a8+a9+a10);
 alert("Suma lineal de las paredes: " + sumaP);

 /* el area total sumaP * altura */

 var areatotal = parseFloat(document.getElementById('valor0').value);
 areacalculo = areatotal * (sumaP);
 alert("Area de las Paredes: " + areacalculo);

 /* areatotal + su 15% */

 sobrante = ((15 * areacalculo) / 100);
 porcentaje = areacalculo + sobrante
 alert("Area total + 15% de sobrante: " + porcentaje);

}


