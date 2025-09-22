# SegundoParcial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Framework elegido
TAILWINDCSS

## Template
Fuente: https://tailwindflex.com/@limaa-m/simple-landing-page
Licencia:
Copyright (c) 2023 - Present, Designed & Developed by [Themefisher](https://tailwindflex.com/)

## Prueba Offline (PWA)
1. Se configuró `ngsw-config.json` con precaching de `index.html`, `*.css`, `*.js` y recursos estáticos clave.
2. Se compiló la aplicación en modo producción:
3. Se sirvió con un servidor local: npx http-server -p 8080 -c-1 dist/segundoParcial/browser. En Devtools -> Application -> Service Workers:
- Se activo el modo Offline
- Home se cargo correctamente sin conexion