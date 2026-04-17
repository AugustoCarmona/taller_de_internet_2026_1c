# CSS – Estilos Iniciales

## Descripción
En este trabajo práctico se parte del archivo `index.html` previamente desarrollado y se aplican tres hojas de estilo diferentes:

- `estilo1.css` (académico / institucional)
- `estilo2.css` (dark mode)
- `estilo3.css` (libre)

El objetivo es transformar una estructura HTML básica en un documento visualmente profesional utilizando CSS y el modelo de caja.

---

## Objetivo
Aplicar estilos CSS básicos para:
- Mejorar la presentación visual
- Implementar el modelo de caja
- Generar una versión en modo oscuro

---

## Estructura del proyecto

```

/CSS
├── estilo1.css
├── estilo2.css
└── estilo3.css

index.html

````

---

## Preparación

1. Crear la carpeta `CSS` dentro del repositorio.
2. Crear los archivos:
   - `estilo1.css`
   - `estilo2.css`
   - `estilo3.css`
3. Analizar el HTML base sin estilos.
4. Vincular cada CSS desde el `<head>`:

```html
<link rel="stylesheet" href="CSS/estilo1.css">
````

---

## Estilo 1: Académico / Institucional (`estilo1.css`)

### 1. Capa base (herencia)

```css
body {
  font-family: Verdana, sans-serif;
  color: #2C3E50;
  background-color: #EAEFF2;
}
```

---

### 2. Selectores (id)

HTML:

```html
<h1 id="main-title">Título</h1>
```

CSS:

```css
#main-title {
  color: #003366;
  font-size: 2.5em;
  text-align: center;
}
```

---

### 3. Modelo de caja

HTML:

```html
<main class="main-container">
```

CSS:

```css
.main-container {
  width: 80%;
  margin: 0 auto;
  padding: 25px;
  background-color: #FFFFFF;
}
```

---

### 4. Tablas

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
}
```

---

## Estilo 2: Dark Mode (`estilo2.css`)

### 1. Fondo y tipografía

```css
body {
  background-color: #0D1117;
  color: #C9D1D9;
  font-family: 'Courier New', monospace;
}
```

---

### 2. Secciones

```css
section {
  min-height: 150px;
  border-bottom: 1px solid #30363D;
}
```

---

### 3. Listas (herramientas)

HTML:

```html
<ul class="tool-list">
```

CSS:

```css
.tool-list li {
  color: #AFF5B4;
  min-height: 25px;
}
```

---

### 4. Visibilidad

```css
footer {
  display: none;
}
```

---

## Estilo 3: Libre (`estilo3.css`)

Se permite:

* Crear nuevas clases e ids
* Modificar colores, tipografías y layout
* Experimentar con propiedades CSS

Ejemplos sugeridos:

* Sombras (`box-shadow`)
* Bordes redondeados (`border-radius`)
* Hover effects
* Layouts con flexbox

---

## Resultados esperados

### estilo1.css

* Diseño claro, limpio y profesional
* Contenido centrado
* Buena legibilidad

### estilo2.css

* Estética tipo terminal
* Alto contraste
* Elementos simplificados

### estilo3.css

* Diseño personalizado
* Uso creativo de CSS

