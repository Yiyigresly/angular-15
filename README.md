# Angular15

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ----------------------ScriptS node config para automaizar subiR GITHUB PAGES----------------------------------##
  Basicamente lo que se quiere , evitar realizar mucha carpinteria en la subida deL PROYECTO a Github Pages
  - Se crearan comandos de node 'npm run accion' para realizar los pasos en package.json

 1.  Configurar el href="./" en index.html ,a ruta relativo. Ya que por defecto, por asi decirlo, concatena los archivos planos
 directamente al root de github, y NO EXISTEN esas rutas. GitHub page, crea url con el root y la carpeta del proyecto, diferenciandolos
 de otros de esa manera. Entonces SE NECESITA CONCATENAR A LA CARPETA DEL PROYECTO NO AL ROOT.

    Ejm: Pagina se lanza en :'https://yiyigresly.github.io/angular-15/' no en :https://yiyigresly.github.io/archivosplanos.js
    Necesita el nombre de la carpeta que contiene el proyecto.

    Por esa razon  se cambia => href='./' HEY CONCATENAME AL ARCHIVO RELATIVO NO  directamente al root.

 * "build:href":"ng build --base-href ./", Ejecuto en consola => 'npm run build:href'

 2. Borrar la carpeta docs de manera automatica, aqui se instala paquete externo para hacerlo mas general en cualquiers ISO
    * Instalar  en el proyecto concreto: 'npm i del-cli --save-dev'
     
      "delete:docs":"del docs"  => "npm run delete:docs"
   
 3. Copiar los archivos planos a la carpeta docs

    * Instalar  en el proyecto concreto:'npm i copyfiles --save-dev'

    * Crea script para copiar archivos de la carpeta 'dist/' al 'docs/', SINO existe la crea.
       comando -f es para que no cree carpeta

      "copy:dist":"copyfiles dist/angular-15/* ./docs -f" => 'npm run copy:dist'

4. # Quiero ejecutar los 3 comandos anteriores uno detras de otro en ORDEN ADECUADO
   
       "build:github":"npm run delete:docs && npm run build:href && npm run copy:dist",
  
       FINALMENTE EJECUTO EN UN SOLO COMANDO : 'npm run build:github'