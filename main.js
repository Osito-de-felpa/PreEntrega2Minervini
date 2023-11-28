const data = []
const objeto_cuenta = {
    nombre_usuario : null ,
    nombre_plataforma : null,
    mail : null,
    contraseñia : null,
}

function consultar_utilidad (){
    aux = prompt("Bienvenido, desea crear una contraseña(1), listar los datos previamente creados(2), o modificar los datos previamente creados(3) ?") 
    switch(aux) {
        case 1:
          crear_contraseña()
          break;
        case 2:
          mostrar_datos_guardados()
          break;
        case 3:
          modificar_datos()
          break;
        default:
          console.log("no has elegido ninguna de las opciones")
      } 
    
}

function crear_contraseña (){
    console.log ("usted esta por crear una contraseña usando la funcion de math.random, y podra utilizar los caracteres: " + caracteres)
    let caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            cant_caracteres = prompt("ingrese el la cantidad de caracteres para la contraseñia: ");
            let contraseña = '';
            if (cant_caracteres != 0){   
                for (var i=0; i<cant_caracteres; i++) {
                    var rnum = Math.floor(Math.random() * caracteres.length);
                    contraseña += chars.substring(rnum,rnum+1);
                } 
            }
    console.log ("la contraseñia es:" + contraseña)
    if (prompt("desea agregar los datos adicionales para guardar la contraseña(y para si):").toLowerCase === y){
        ingresar_data_extra (contraseña)
    }

}

function ingresar_data_extra (contraseña){
    let nueva_cuenta = new objeto_cuenta
    console.log("ingrese los datos adicionales para la contraseña creada")
    nueva_cuenta.nombre_usuario = prompt("ingrese el nombre de usuario de la cuanta a agregar")
    nueva_cuenta.nombre_plataforma = prompt("ingrese el nombre de la plataforma a la cual corresponda la cuenta a agregar")
    nueva_cuenta.mail = prompt("ingrese el mail con el que se registro la cuenta a agregar")
    nueva_cuenta.contraseña = contraseña
    insertar_ordenar(data, nueva_cuenta)    
}

function insertar_ordenar (array, elem){
    array.push(elem)
    ordenar_array(data)
}

function ordenar_array(array){
    data.sort((a, b) => {
        const nameA = a.nombre_usuario.toLowerCase(); 
        const nameB = b.nombre_usuario.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
}

function buscar_cuenta(array, elem){
    let index = array.nombre_usuario.indexOf(elem);
    return index
}

function actualizar_datos(){
    aux = prompt("ingrese el nombre de usuario de la cuenta a actualizar:".toLowerCase())
    index = buscar_cuenta(data, aux)
    switch(prompt("desea cambiar el nombre de usuario(1), el mail(2) o la contraseña(3)")) {
        case 1:
          modificar_datos(nombre_usuario, index, aux)
          break;
        case 2:
            modificar_datos(mail, index, aux)
          break;
        case 2:
            modificar_datos(contraseña, index, aux)
          break;
        default:
          console.log("no seleciono ninguna de las opciones.")
      } 
}

function modificar_datos (dato, index, valor_dato ){
    data[pos].dato = valor_dato 
    alert("el valor a sido modificado con exito")   
}

function mostrar_datos_guardados (){
    data.forEach(imprimir_objeto)
}

function imprimir_objeto(objeto){
    alert("la cuenta es de la plataforma: " + nombre_plataforma +  "  con el usuario:" + nombre_usuario)
    alert("con el mail:" + mail + "  y la contraseña: " + contraseña )
}

consultar_utilidad()
ordenar_array(data)
