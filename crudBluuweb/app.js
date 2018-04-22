//inicio de la aplicacion, los datos los sacamos del prompt 'agrega firebas a tu web' de la //consola
firebase.initializeApp({
    apiKey: 'AIzaSyC3FgAIqMxZNEvL8s-KDzZ5eY21fluA7IU',
    authDomain: 'crudbluuweb.firebaseapp.com',
    projectId: 'crudbluuweb'
});

//Crea una referencia a la raíz de la bbdd de Firestore.
var db = firebase.firestore();

//Agrega el formulario a la base de datos Firestore, funcion onClick del boton con id=boton
function guardar() {

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fecha = document.getElementById('fecha').value;

    //Crea una colección nueva y un documento con el siguiente código de ejemplo.
    //La funcion .add agrega un ID automatico. (codigo proporcionado por la web de firebase)
    db.collection("users").add({
            first: nombre,
            last: apellido,
            born: fecha
        })
        //EXITO se ejecuta si se agrega satisfactoriamente
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            //borramos lo escrito al dar click y conseguir una insercion correcta
            document.getElementById('nombre').value = "";
            document.getElementById('apellido').value = "";
            document.getElementById('fecha').value = "";

        })
        //ERROR no se ha agregado el registro
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

//Leer documentos:
//utilizando la referencia de la raiz llama a la //coleccion //usuarios, utiliza la funcion .get y //utiliza el then, que //siempre se ejecuta cuando es //exitosa la operacion. 
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {

    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);

        tabla.innerHTML += `
      <tr>
      <th scope="row">${doc.id}</th>
      <td>${doc.data().first}</td>
      <td>${doc.data().last}</td>
      <td>${doc.data().born}</td>
    <td><button class="btn btn-danger" onClick="eliminar('${doc.id}')">Eliminar</button></td>
<td><button class="btn btn-warning"   onClick="editar(
'${doc.id}',
'${doc.data().first}',
'${doc.data().last}',
'${doc.data().born}')">Editar</button></td>
    </tr>
    `
    });
});

//Borrar documentos
//dentro del parametro le estamos pasando el id //correspondiente a la fila.
function eliminar(id) {
    db.collection("users").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}

//actualizar un documento:
//recordar que los parametros se pasan desde la funcion onClick en la funcion 
//que pinta la tabla.
function editar(id,nombre,apellido,fecha) {
    //al ejecutar la funcion editar, los archivos viajan a los campos de texto:
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('fecha').value = fecha;
    
    //una vez los datos pasan a ser editados, queremos que el boton de guardar
    //pase a llamarse editar.
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';
    
    boton.onclick = function(){
        
    var washingtonRef = db.collection("users").doc(id);
    // Set the "capital" field of the city 'DC'
    
    //reemplazamos las variables originales por las que diga el //usuario en los input del html
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fecha = document.getElementById('fecha').value;
        
    return washingtonRef.update({
            first: nombre,
            last: apellido,
            born: fecha
        })
        .then(function () {
        //Si hay exito en la operacion, volvemos a cambiar el nombre 
        //del boton al de guardar.
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById('nombre').value = "";
            document.getElementById('apellido').value = "";
            document.getElementById('fecha').value = "";
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });   
    }
}
