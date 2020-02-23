# instalar PARCEL
> npm install -D parcel-bundler

## Modificando package.json para usar PARCEL

En la seccion de scripts añadimos lo siguiente  :

```javascript
    "scripts": {
        "start": "parcel index.html ejercicios/index.html ejercicios/**/*.html"
    },
```
le vamos a añadir una seccion mas al package.json browserslist para indicarle que solo transpile codigo
para el navegador que estamos utilizando