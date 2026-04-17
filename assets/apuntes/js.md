# JavaScript

**Taller de Internet 1**

---

## 1. ¿Qué es JavaScript?

JavaScript es un lenguaje **interpretado** y **débilmente tipado** que corre directamente en el navegador.

¿Qué significa esto?

- **Interpretado:** el código se ejecuta línea a línea en tiempo de ejecución (runtime), sin necesidad de un paso previo de compilación. Si hay un error en la línea 10, las líneas 1 a 9 ya se ejecutaron. Esto contrasta con lenguajes **compilados** (como C o Java), donde todo el código se traduce a código máquina antes de ejecutarse y los errores se detectan antes de correr el programa.

- **Débilmente tipado:** las variables no están atadas a un tipo fijo. JavaScript convierte tipos automáticamente según el contexto (esto se llama **coerción**). En un lenguaje **fuertemente tipado** (como Java o C++), estas conversiones implícitas no ocurren o generan errores.

```js
let dato = "Hola";   // dato es un string
dato = 42;            // ahora dato es un number — JS lo permite
console.log("5" + 3); // "53" — JS convirtió el 3 a string y concatenó
console.log("5" - 3); // 2   — JS convirtió el "5" a number y restó
```

---

## 2. Entorno mínimo de trabajo

Un proyecto básico necesita dos archivos separados:

```
mi-proyecto/
├── index.html
└── js/
    └── main.js
```

Se vincula el scrip en el final del <body> utilizando la etiqueta <script>:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Proyecto</title>
    <script src="js/main.js"></script>
</head>
<body>
    <h1>Hola Mundo</h1>

    <script src="js/main.js"></script>
</body>
</html>
```

De este modo HTML siempre se cargará antes que el script, o podemos utilizar una técnica más moderna y un poco más "limpia" vinculando el script desde el HTML usando la etiqueta `<script>` con el atributo `defer` (para que el HTML se cargue antes de ejecutar el JS):

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Proyecto</title>
    <script src="js/main.js" defer></script>
</head>
<body>
    <h1>Hola Mundo</h1>
</body>
</html>
```

> **Regla importante:** aunque se *puede* escribir JavaScript directamente dentro del HTML con `<script>...</script>`, **no se debe hacer**. Separar HTML y JS mejora la organización y facilita la depuración.

---

## 3. Sintaxis básica: sentencias, bloques y comentarios

### Sentencias

Una **sentencia** es una instrucción ejecutable que termina con punto y coma (`;`). El motor de JS puede insertar `;` automáticamente, pero es buena práctica escribirlos siempre.

```js
let x = 5;                // sentencia simple
console.log(x);            // otra sentencia
let nombre = "Juan";       // otra más
```

### Bloques

Un **bloque** agrupa varias sentencias entre llaves `{ }`. Se usan en condicionales, bucles y funciones y delimitan el scope o "alcance" de los mismos.

```js
{
    let y = 10;
    console.log(y);   // 10
}
// console.log(y);    // Error: y no existe fuera del bloque
```

> **Diferencia con Python:** en JS los bloques se delimitan con `{ }`, no con indentación. La indentación es solo estética (pero es bueno utilizarla siempre para mejor legibilidad).

### Comentarios

```js
// Esto es un comentario de una línea

/* Esto es un comentario
   de varias líneas */
```

---

## 4. Variables: declaración, inicialización y reasignación

Una variable es una **etiqueta que apunta a un valor**. Hay tres operaciones distintas:

```js
let edad;         // 1. DECLARAR — reservar el nombre (vale undefined)
edad = 20;        // 2. INICIALIZAR — asignar el primer valor
edad = 21;        // 3. REASIGNAR — cambiar el valor almacenado

let pais = "AR";  // Declarar e inicializar en una sola línea
```

### `let`, `const` y `var`

| Palabra clave | ¿Se puede reasignar? | Alcance (scope) | ¿Cuándo usarla? |
|---|---|---|---|
| `const` | No | Bloque `{ }` | **Por defecto.** Usala siempre que el valor no vaya a cambiar. |
| `let` | Sí | Bloque `{ }` | Cuando necesitás reasignar (contadores, acumuladores, etc.). |
| `var` | Sí | Función | **Evitala.** Es la forma antigua, tiene comportamientos confusos. |

```js
const PI = 3.14159;
// PI = 3;          // Error: no se puede reasignar una constante

let contador = 0;
contador = 1;       // OK: let permite reasignación

var antigua = "no usar";  // Funciona, pero evitala en código moderno
```

### Convenciones de nombres

JavaScript distingue mayúsculas y minúsculas: `total`, `Total` y `TOTAL` son tres variables distintas.

| Convención | Ejemplo | Uso típico |
|---|---|---|
| camelCase | `precioFinal`, `cantidadAlumnos` | Variables y funciones |
| UPPER_SNAKE_CASE | `MAX_INTENTOS`, `API_URL` | Constantes globales |
| PascalCase | `Usuario`, `CarritoDeCompras` | Clases y componentes |

> **Buena práctica:** usá nombres semánticos. El código se lee muchas más veces de las que se escribe.

```js
// Mal
let x = 25;
let a = true;

// Bien
let edadUsuario = 25;
let esValido = true;
```

---

## 5. Tipos de datos

JavaScript divide sus valores en dos grandes grupos:

### Primitivos (valores simples)

| Tipo | Ejemplo | Descripción |
|---|---|---|
| `string` | `"Hola"`, `'mundo'`, `` `texto` `` | Cadenas de texto |
| `number` | `42`, `3.14`, `NaN`, `Infinity` | Números (enteros y decimales) |
| `boolean` | `true`, `false` | Verdadero o falso |
| `undefined` | `undefined` | Variable declarada sin valor |
| `null` | `null` | Ausencia intencional de valor |
| `bigint` | `100n` | Enteros de precisión arbitraria |
| `symbol` | `Symbol()` | Identificador único |

### No primitivos (objetos)

Todo lo que no es primitivo es un **objeto**: arrays, funciones, fechas, objetos literales, etc. Agrupan propiedades y comportamiento.

---

### 5.1 Number

JavaScript no distingue entre enteros y decimales — todo es `number`.

```js
let entero = 10;
let decimal = 3.14;
let negativo = -5;
```

Casos especiales a tener en cuenta:

```js
let invalido = Number("abc");   // NaN (Not a Number)
console.log(typeof invalido);   // "number" — sí, NaN es tipo number

console.log(1 / 0);             // Infinity
console.log(-1 / 0);            // -Infinity

// Cuidado: NaN no es igual a sí mismo
console.log(NaN === NaN);       // false
console.log(isNaN("abc"));      // true — forma correcta de verificar
```

### 5.2 String

Un string es una secuencia de caracteres. Se puede delimitar con comillas simples, dobles o backticks.

```js
let saludo1 = 'Hola';           // comillas simples
let saludo2 = "Hola";           // comillas dobles (equivalente)
let saludo3 = `Hola`;           // backticks (template literal)
```

**Template literals (backticks)** — la forma recomendada para interpolar variables:

```js
const nombre = "Lucía";
const edad = 22;

// Concatenación clásica (evitala cuando puedas)
console.log("Me llamo " + nombre + " y tengo " + edad + " años.");

// Template literal (recomendado)
console.log(`Me llamo ${nombre} y tengo ${edad} años.`);
```

**Secuencias de escape:**

```js
console.log("Línea 1\nLínea 2");     // \n = salto de línea
console.log("Columna1\tColumna2");    // \t = tabulación
console.log("Dijo \"hola\"");         // \" = comilla dentro de string
console.log("Barra: \\");             // \\ = barra invertida
```

**Métodos útiles de strings:**

```js
let texto = "  JavaScript es genial  ";

console.log(texto.length);            // 25 (incluye espacios)
console.log(texto.trim());            // "JavaScript es genial"
console.log(texto.toUpperCase());     // "  JAVASCRIPT ES GENIAL  "
console.log(texto.includes("Script"));// true
console.log("Hola".indexOf("la"));    // 2
console.log("Hola Mundo".slice(0,4)); // "Hola"
```

### 5.3 Boolean

Solo tiene dos valores posibles: `true` o `false`. Las comparaciones siempre producen un booleano.

```js
let esMayor = true;
let tienePermiso = false;

console.log(5 > 3);     // true
console.log(10 === 20);  // false
```

### 5.4 `undefined` vs `null`

Ambos representan "no hay dato", pero tienen significados distintos:

```js
// undefined: el motor de JS lo asigna automáticamente
let usuario;
console.log(usuario);           // undefined — nunca se le dio valor

// null: el programador lo asigna intencionalmente
let sesionActiva = null;        // "deliberadamente vacío"
console.log(sesionActiva);      // null
```

```js
// Comparación
console.log(undefined == null);  // true  (coerción los trata igual)
console.log(undefined === null); // false (son tipos distintos)
```

---

## 6. Operadores

### 6.1 Operadores aritméticos

```js
console.log(10 + 3);    // 13  — suma
console.log(10 - 3);    // 7   — resta
console.log(10 * 3);    // 30  — multiplicación
console.log(10 / 3);    // 3.333...  — división
console.log(10 % 3);    // 1   — módulo (resto de la división)
console.log(2 ** 3);    // 8   — exponenciación
```

> **Cuidado con el `+`:** si uno de los operandos es string, concatena en vez de sumar.

```js
console.log(5 + 3);      // 8       (number + number = suma)
console.log("5" + 3);    // "53"    (string + number = concatenación)
console.log(5 + "3");    // "53"    (number + string = concatenación)
console.log(5 - "3");    // 2       (con - sí convierte a number)
```

### 6.2 Operadores de asignación

```js
let x = 10;
x += 5;    // x = x + 5  →  x vale 15
x -= 3;    // x = x - 3  →  x vale 12
x *= 2;    // x = x * 2  →  x vale 24
x /= 4;    // x = x / 4  →  x vale 6
x %= 4;    // x = x % 4  →  x vale 2
```

### 6.3 Incremento y decremento

```js
let i = 5;
i++;       // i = 6 (equivale a i = i + 1)
i--;       // i = 5 (equivale a i = i - 1)
```

### 6.4 Operadores de comparación

Los comparadores **siempre devuelven un booleano**.

```js
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false
```

**`===` vs `==` — igualdad estricta vs igualdad con coerción:**

| Expresión | Resultado | ¿Por qué? |
|---|---|---|
| `5 === 5` | `true` | Mismo valor, mismo tipo |
| `"5" === 5` | `false` | Distinto tipo (string vs number) |
| `"5" == 5` | `true` | `==` convierte tipos antes de comparar |
| `null === undefined` | `false` | Tipos distintos |
| `null == undefined` | `true` | `==` los trata como equivalentes |

> **Regla:** usá siempre `===` y `!==`. Evitá `==` y `!=` para no depender de coerciones inesperadas.

```js
// Ejemplo práctico
let input = "5";    // los inputs del HTML siempre son strings

if (input === 5) {
    console.log("Nunca entra acá");
}

if (Number(input) === 5) {
    console.log("Así sí: convertimos explícitamente");
}
```

### 6.5 Operadores lógicos

| Operador | Nombre | Resultado |
|---|---|---|
| `&&` | AND | `true` solo si **ambos** son `true` |
| `\|\|` | OR | `true` si **al menos uno** es `true` |
| `!` | NOT | Invierte el valor booleano |

```js
let edad = 20;
let tieneDocumento = true;

// AND: ambas condiciones deben cumplirse
console.log(edad >= 18 && tieneDocumento);   // true

// OR: al menos una debe cumplirse
console.log(edad >= 21 || tieneDocumento);   // true

// NOT: invierte
console.log(!tieneDocumento);                // false
console.log(!false);                         // true
```

**Ejemplo combinado:**

```js
let temperatura = 25;
let lloviendo = false;

let salirACorrer = temperatura > 15 && temperatura < 35 && !lloviendo;
console.log(salirACorrer);  // true
```

---

## 7. Estructuras de datos: Object y Array

### Objetos

Un objeto agrupa datos relacionados en pares **clave: valor**.

```js
const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: true
};

// Acceso con punto (lo más común)
console.log(usuario.nombre);        // "Ana"

// Acceso con corchetes (útil con variables)
console.log(usuario["edad"]);       // 20

let campo = "activo";
console.log(usuario[campo]);        // true

// Modificar una propiedad
usuario.edad = 21;

// Agregar una nueva propiedad
usuario.email = "ana@mail.com";
```

### Arrays

Un array es una **lista ordenada** de valores, indexada desde `0`.

```js
const notas = [8, 9, 10, 7];

console.log(notas[0]);       // 8  (primer elemento)
console.log(notas[3]);       // 7  (cuarto elemento)
console.log(notas.length);   // 4  (cantidad de elementos)

// Modificar un elemento
notas[1] = 10;               // [8, 10, 10, 7]

// Agregar al final
notas.push(6);               // [8, 10, 10, 7, 6]

// Quitar el último
notas.pop();                 // [8, 10, 10, 7]
```

---

## 8. Control de flujo

JavaScript ejecuta el código **línea por línea, de arriba hacia abajo**, salvo que una estructura de control altere ese camino.

### 8.1 `if`, `else if` y `else`

El primer bloque cuya condición sea `true` se ejecuta y **corta la cadena**. El orden importa.

```js
let nota = 7;

if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
// Resultado: "Aprobado"
```

**Ejemplo con múltiples condiciones:**

```js
let hora = 14;

if (hora < 6) {
    console.log("Madrugada");
} else if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}
// Resultado: "Buenas tardes"
```

**`if` anidados (cuando una condición depende de otra):**

```js
let edad = 20;
let tieneEntrada = true;

if (edad >= 18) {
    if (tieneEntrada) {
        console.log("Puede pasar");
    } else {
        console.log("Necesita comprar entrada");
    }
} else {
    console.log("Es menor de edad");
}
```

**Alternativa más limpia con `&&`:**

```js
if (edad >= 18 && tieneEntrada) {
    console.log("Puede pasar");
} else if (edad >= 18 && !tieneEntrada) {
    console.log("Necesita comprar entrada");
} else {
    console.log("Es menor de edad");
}
```

### 8.2 `switch`

Útil cuando comparás muchos valores **discretos** de una misma variable. Cada `case` necesita un `break` para evitar que siga ejecutando los siguientes.

```js
let dia = "martes";

switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "martes":
    case "miércoles":
    case "jueves":
        console.log("Mitad de semana");
        break;
    case "viernes":
        console.log("Casi fin de semana");
        break;
    case "sábado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día no válido");
}
// Resultado: "Mitad de semana"
```

> **¿Cuándo usar `switch` vs `if/else`?** Usá `switch` cuando comparás una variable contra valores fijos y específicos. Usá `if/else` cuando las condiciones son rangos o expresiones complejas.

### 8.3 Operador ternario

Es una forma compacta de escribir un `if/else` que **produce un valor**.

**Sintaxis:** `condición ? valorSiTrue : valorSiFalse`

```js
// Con if/else tradicional
let mensaje;
let activo = true;

if (activo) {
    mensaje = "ON";
} else {
    mensaje = "OFF";
}

// Equivalente con ternario (en una línea)
const mensaje2 = activo ? "ON" : "OFF";

console.log(mensaje2);  // "ON"
```

**Ejemplos prácticos:**

```js
let edad = 17;
let acceso = edad >= 18 ? "Permitido" : "Denegado";
console.log(acceso);  // "Denegado"

let nota = 8;
console.log(`Resultado: ${nota >= 6 ? "Aprobado" : "Reprobado"}`);
// "Resultado: Aprobado"

// Dentro de un template literal para armar texto dinámico
let items = 3;
console.log(`Tenés ${items} item${items !== 1 ? "s" : ""} en el carrito`);
// "Tenés 3 items en el carrito"
```

> **Consejo:** usá el ternario para asignaciones simples. Si la lógica es compleja, un `if/else` es más legible.

---

## 9. Bucles (iteraciones)

Los bucles permiten **repetir un bloque de código** múltiples veces.

### 9.1 `while`

Ejecuta el bloque **mientras la condición sea `true`**. La condición se evalúa *antes* de cada ejecución.

```js
let contador = 1;

while (contador <= 5) {
    console.log(`Vuelta número ${contador}`);
    contador++;    // ¡Sin esto, bucle infinito!
}
// Imprime: Vuelta número 1, 2, 3, 4, 5
```

**Ejemplo práctico — validación simulada:**

```js
let intentos = 0;
let passwordCorrecta = false;

while (!passwordCorrecta && intentos < 3) {
    // Simulamos intentos
    intentos++;
    console.log(`Intento ${intentos} de 3`);

    if (intentos === 3) {
        console.log("Cuenta bloqueada");
    }
}
```

> **Cuidado:** si la condición nunca se vuelve `false`, el bucle es infinito y el navegador se congela. Siempre asegurate de que algo cambie en cada iteración para que eventualmente la condición deje de cumplirse.

### 9.2 `do...while`

Igual que `while`, pero **garantiza al menos una ejecución** porque la condición se evalúa *después*.

```js
let numero = 10;

do {
    console.log(`Número: ${numero}`);
    numero++;
} while (numero < 5);
// Imprime: "Número: 10" — se ejecutó una vez aunque 10 no es < 5
```

### 9.3 `for` clásico

Compacta la inicialización, condición y actualización en una sola línea. Es el más usado cuando **sabés de antemano cuántas veces iterar**.

**Sintaxis:** `for (inicialización; condición; actualización) { ... }`

```js
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
}
// Imprime: Iteración 0, 1, 2, 3, 4
```

**Paso a paso de la ejecución:**

1. `let i = 0` — se ejecuta **una sola vez** al inicio
2. `i < 5` — se evalúa **antes de cada vuelta** (si es `false`, se sale)
3. Se ejecuta el bloque `{ ... }`
4. `i++` — se ejecuta **al final de cada vuelta**
5. Se vuelve al paso 2

**Recorrer un array con `for`:**

```js
const frutas = ["manzana", "banana", "naranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}. ${frutas[i]}`);
}
// 1. manzana
// 2. banana
// 3. naranja
// 4. uva
```

**Contar hacia atrás:**

```js
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("¡Despegue!");
```

**`for` con pasos personalizados:**

```js
// Solo números pares
for (let i = 0; i <= 20; i += 2) {
    console.log(i);   // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}
```

**Bucles anidados (un `for` dentro de otro):**

```js
// Tabla de multiplicar del 1 al 3
for (let tabla = 1; tabla <= 3; tabla++) {
    console.log(`--- Tabla del ${tabla} ---`);
    for (let num = 1; num <= 10; num++) {
        console.log(`${tabla} x ${num} = ${tabla * num}`);
    }
}
```

---

## 10. Funciones

Una función es un bloque de código reutilizable que se ejecuta al ser invocada.

### Declaración e invocación

```js
// Declarar la función
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

// Invocar (llamar) la función
saludar("Ana");     // "Hola, Ana!"
saludar("Carlos");  // "Hola, Carlos!"
```

### Parámetros y retorno

```js
function sumar(a, b) {
    return a + b;     // devuelve un valor
}

let resultado = sumar(3, 7);
console.log(resultado);   // 10

// Usar directamente en una expresión
console.log(sumar(10, 5) * 2);  // 30
```

### Valores por defecto

```js
function saludar(nombre = "visitante") {
    console.log(`Hola, ${nombre}!`);
}

saludar();          // "Hola, visitante!"
saludar("Lucía");   // "Hola, Lucía!"
```

### Arrow functions (funciones flecha)

Es la sintaxis moderna y más concisa:

```js
// Función tradicional
function doble(n) {
    return n * 2;
}

// Arrow function equivalente
const doble = (n) => {
    return n * 2;
};

// Si tiene una sola expresión, se puede simplificar más
const doble = (n) => n * 2;

console.log(doble(5));  // 10
```

---

## 11. Consola del navegador — tu herramienta de depuración

La consola es donde ves los resultados de `console.log()` y los errores. Se abre con `F12` o `Ctrl + Shift + I` (Windows/Linux) / `Cmd + Opt + I` (Mac).

```js
console.log("Mensaje normal");           // texto informativo
console.warn("Cuidado con esto");        // advertencia (amarillo)
console.error("Algo salió mal");         // error (rojo)
console.table([1, 2, 3]);               // muestra datos en tabla
console.log(typeof "hola");             // "string" — verificar tipos
```

---

## 12. Cheat Sheet rápido

```js
// --- Variables ---
const nombre = "Ana";        // no cambia
let edad = 20;               // puede cambiar
edad = 21;

// --- Tipos ---
typeof "hola"       // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (bug histórico de JS)
typeof [1,2]        // "object"
typeof {}           // "object"

// --- Comparar ---
===  !==             // siempre usar estos
==   !=              // evitar (coerción implícita)

// --- Lógicos ---
&&   ||   !

// --- Condicional ---
if (cond) { } else if (cond2) { } else { }
condición ? siTrue : siFalse;

// --- Bucles ---
for (let i = 0; i < n; i++) { }
while (condición) { }
do { } while (condición);

// --- Funciones ---
function nombre(param) { return valor; }
const nombre = (param) => valor;

// --- Arrays ---
arr[0]   arr.length   arr.push(x)   arr.pop()

// --- Objetos ---
obj.clave   obj["clave"]

// --- Strings ---
`Hola ${variable}`
str.length  str.toUpperCase()  str.trim()  str.includes("x")
```
