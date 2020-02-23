# Apuntes de GIT

> git log --stat 

* lista de ficheros modificados en cada commit 

> git reset 'commit' --hard

*  volver a un commit especificado , cuidado borra el contenido.

> git checkout 'commit' archivo

* version inicial

> git rm --cached 

* Elimina los archivos del area de stagging y del proximo commit pero los mantiene en el disco duro

> git reset HEAD 

* deshacer el git add 

> git remote add origin "remote"


### Generadores 

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

Algunas de sus características:

Los generadores regresan una función.
Empiezan suspendidos y se tiene que llamar next para que ejecuten.
Regresan un value y un boolean done que define si ya terminaron.
yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.