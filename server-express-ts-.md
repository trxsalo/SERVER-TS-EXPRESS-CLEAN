
# Primer paso 

Iniciar proyecto node
```bash:
    npm init 
```

# Instalacion dependencias 
   
```bash:
    npm i typescript -D 
    npm i nodemon -D
    npm i rimraf -D
    
    npm i @type/express -D 
    npm i @types/dotenv -D
    npm i @types/morgan
    
    npm i morgan 
    npm i express 
    npm i dotenv
    

```

# Pasos para configuracion y uso de Ts en el proyecto

## Iniciar conficguracion ts
```cmd
    npx tsc --init
```
## Configurar algunos detalles 
Modificaresmos el archivo => tsconfig.json
Para que compile a esa version de js que deamos.
yo utilizares la verison 2019
```txt
    /* Language and Environment */
    "target": "es2019",     
```    

Descomentaremos los siguiente 
'outDir' indica donde se alojara los archivos compilados de ts a js   || archivos de salidad;
'rootDir' indica donde estaran los archivos ts                        || archivos de origen ;
 ```json:
    "outDir": "./dist",  
    "rootDir": "./src",   
 ```

Para poder utilizar los modulos y  objetos globales
descomentamos moduleResolution

```json:
    "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
```

Agrergaremos algunos configuraciones al final del penultimo corchete

```bash:
    "exclude": ["node_modules"]
```   

Ejecutamos para que lea los nuevo cambios
```bash:
    npx tsc
```

# Estructura de carpetas
    dist/
    src/ 
        index.ts
    public/
    nodemon.json
    package-lock.json
    package.json
    tsconfig.json    
    .gitignore

# Configuracion de nodemon
En el directorio raiz crear el siguiente archivo 
nodemon.json
con el siguiente contenido

```json:
    {
    "watch": ["src"],
    "ext": "ts",
    "ignore": [
        "src/**/*.spec.ts"
    ],
    "exec": "ts-node "
    }
```

# srcipt 
En el package.json 
modificaresmo la seccion de scrips

```json:
    "scripts": {
    "build": "tsc ",
    "dev": "nodemon src/index.ts",
    "clean": "rimraf dist",
    "start": "npm run build  && node dist/index.js"
    },
```    

# Levantar proyecto 
    
Para desarrollo leera directamente ts

```bash:
    npm run dev
```   

Para compilar 

```bash:
    npm run build
```   
para levantar proyecto compilado
```bash:
    npm run start
```   