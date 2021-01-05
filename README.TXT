MODULOS DE DEPENDENCIA
npm i express pg morgan cors

MODULOS DE DESARROLLO
npm i -D typescript nodemon @types/express @types/pg
npm i -D concurrently                         -->para ejecutar varios comandos al mismo tiempo

ARCHIVO DE CONFIGURACION DE typescript
npx tsc --init 

modificar del archivo tsconfig.json
 "outDir": "./dist",            -->descomentar y modificar
 "rootDir": "./src",            -->descomentar y modificar

  "moduleResolution": "node",   -->descomentar

  "exclude": ["node_modules"]   --> agregar despues de la primer llave

OPCION PARA DESARROLLO LA OTRA ESTA EN EL package.json
"dev": "concurrently \"tsc --watch\" \"nodemon dist/index.js\""