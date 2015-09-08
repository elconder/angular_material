# Material Design con AngularJS

[**DEMO AQUÍ**](http://www.pixelactive.net/angularjs/material_design/)

Este es un proyecto Web donde se usan las siguientes herramientas:

* AngularJS
* Material Design
* Node (npm)
* Bower
* Protractor

## Descargar el proyecto

Para descargar el proyecto es necesario clonar el repositorio de GitHub en el cual se encuentra alojado. Para esto ejecutamos el siguiente comando.

```
git clone https://github.com/elconder/angular_material.git
cd angula_material
```

## Instalar las dependencias
El proyecto usa una serie de archivos necesarios para funcionamiento los cuales se deben instalar de la siguiente forma

#### Dependencias de Node
```
npm install
```
#### Dependencias de Bower
```
bower install
```
Una vez instaladas se crearán las carpetas `bower_components` y `node_modules`

## Pruebas End To End (e2e) con Protractor
Para correr las pruebas e2e se debe tener instalado y configurado previamente el framework Protractor, en caso contrario puedes echar un vistazo a la docuemntación [**aquí**](https://angular.github.io/protractor/#/)

Ya teniendo Protractor debidamente instalado y configurado procedemos a ejecutar los siguientes comandos.

`````
webdriver-manager start
cd e2e
protractor protractor.conf.js
`````
