## Bienvenid@s a FireBase :wave:

#### Un poco de Historia
* Fundada en 2011, por James Tamplin y Andew Lee (Envolve)
* Nacen como un sistema de chat, los desarrolladores empiezan a utilizarlo en masa
* En 2014 son comprados por la gran G
* En octubre 2017 Firebase lanzó Cloud Firestore, una base de datos NoSQL en la nube

---

#### Principales características de la BBDD:
* Gratuita en fase de desarrollo
* Base de datos en tiempo real.
* Total cochesión con los servicios de Google, como autenticación y adwords.
* Muchísimos servicios asociados, cloud, mensajería, testing, Ganalitics... etc.
---
* Consola web para la gestión de los registros.
* Principalmente concebida para apps IOS/Android y web.
* Sin lenguaje del lado servidor, esas funciones las añadimos en el apartado de *Cloud Functions*

---
#### Transformación MySql a FireBase
* Tablas --> son colecciones
* Filas --> son documentos (primer registro)
* Registros --> son campos, formato JSON
````
  nombre : "Carolina",
  apellido : "García"
````
(Un documentos puede tener una colección anidada)

---

#### Pasos para implementar FireBase

1. Crea un Proyecto en tu *FireBase Console*
2. Agrega Firebase a tu App.
3. Crea una variable referencia a la raíz de tu BD
````
  var miFireBase = firebase.database();
  var provider = new firebase.auth.GoogleAuthProvider();
````






