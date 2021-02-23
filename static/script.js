function MandarDatos () {
    ObtenerNombre()
    ObtenerSexo()
    ObtenerNacionalidad()
}

function ObtenerNombre() {
    var name= document.getElementById("iname").value;
    alert("Mi nombre es " + name)
}

function ObtenerSexo () {
    var radios = document.getElementsByName("genero");

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            alert("Soy " + radios[i].value);
            break;
        }
    }
}

function ObtenerNacionalidad () {
    var nacion = document.getElementById("nacion").value;
    alert ("Tengo nacionalidad " + nacion)
}

function HacerTodo() {
    var name= document.getElementById("iname").value;
    var apellido= document.getElementById("ilastname").value;

    var radios = document.getElementsByName("genero");

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var sexo = radios[i].value;
            break;
        }
    }
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var año = document.getElementById("año").value;
    var nacion = document.getElementById("nacion").value;

    if (VerificarPass()==false) {
        alert("Las contraseñas no coinciden")
    }
    else{
        alert("Mi nombre es " + name + " " +apellido + ", soy " + sexo + ", nací el " + dia + " de " + mes + " del " + año + ", y tengo nacionalidad " + nacion + ".")
        //window.location.href = "http://127.0.0.1:5500/templates/index.html"
    }
}   



function VerificarPass(){
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("2password").value;
    var logic = pass1 == pass2

    return logic
}


