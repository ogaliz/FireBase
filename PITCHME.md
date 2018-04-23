## FireBase
#### Principales características de la BBDD:

* Gratuita en fase de desarrollo
* Base de datos en tiempo real.
* Total cochesión con los servicios de Google, como autenticación y adwords.
* Muchísimos servicios asociados, cloud, mensajería, testing, analitics... etc.
* Consola web para la gestión de los registros.
* Principalmente concebida para apps IOS/Android y web.
* Sin lenguaje del lado servidor, esas funciones las añadimos en el apartado de *Cloud Functions*

---

#### Pasos para implementar FireBase

1. Crea un Proyecto en tu *FireBase Console*
2. Agrega Firebase a tu App.
3. Crea una variable referencia a la raíz de tu BD

````
  var database = firebase.database();
````
