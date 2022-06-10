## Consideraciones sobre import / export
* 1- Configurar type en package.json
```
 "type":"module",
```
*  2- exportar funciones y variables
```
export const options = {}

//otra opción 

module.exports = { options}
```
* 3- importar 
```
import {options} from '../configDB.js';
```
* 4- crear .env para 'ocultar' variables de entorno (password DB)
  [dotenv docs](https://www.npmjs.com/package/dotenv)