# Documentación Técnica - YOXI Game

## Índice
1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Componentes Principales](#componentes-principales)
3. [Flujo de Navegación](#flujo-de-navegación)
4. [Gestión del Estado](#gestión-del-estado)
5. [Sistema de Audio](#sistema-de-audio)
6. [Configuración de Datos](#configuración-de-datos)
7. [Patrones de Diseño](#patrones-de-diseño)
8. [Guía de Estilo](#guía-de-estilo)
9. [Testing](#testing)
10. [Despliegue](#despliegue)

---

## Arquitectura del Proyecto

### Estructura de Directorios

```
src/
├── assets/              # Recursos estáticos
│   ├── image/          # Imágenes PNG, JPEG, GIF
│   └── sound/          # Archivos de audio MP3, MP4
├── components/          # Componentes reutilizables
│   ├── button-back/    # Navegación hacia atrás
│   ├── button-next/    # Navegación hacia adelante
│   ├── menu-item/      # Items del menú principal
│   ├── modal/          # Modal genérico
│   ├── modal-vowel/    # Modal específico de vocales
│   ├── vowel/          # Componente de vocal interactiva
│   ├── stuffAudio/     # Elemento con imagen y audio
│   └── ErrorBoundary/  # Manejo de errores
├── config/              # Configuraciones
│   └── vowelGameData.js # Datos del juego
├── constants/           # Constantes de la app
│   └── routes.js       # Rutas de navegación
├── pages/               # Vistas/Páginas
│   ├── intro/          # Pantalla de bienvenida
│   ├── menu-game/      # Menú principal
│   ├── vowel-start/    # Selección de vocal
│   ├── vowel-start-game/ # Juego vocal inicial
│   ├── vowel-final/    # Juego vocal final
│   └── rhyme_word/     # Juego de rimas
├── utils/               # Utilidades
│   └── helpers.js      # Funciones auxiliares
├── App.js               # Componente raíz
├── App.css              # Estilos globales
└── index.js             # Punto de entrada
```

### Tecnologías y Dependencias

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| react | 18.3.1 | Framework UI |
| react-dom | 18.3.1 | Renderizado DOM |
| react-router-dom | 5.3.4 | Enrutamiento SPA |
| reactjs-popup | 2.0.6 | Modales |
| uifx | 2.0.7 | Efectos de sonido |
| prop-types | latest | Validación de props |

---

## Componentes Principales

### 1. ErrorBoundary

**Ubicación**: `src/components/ErrorBoundary/index.js`

**Propósito**: Captura errores de JavaScript en componentes hijos y muestra una UI de respaldo.

**Props**:
- `children` (node, required): Componentes hijos

**Características**:
- Muestra detalles del error en modo desarrollo
- Botón de recarga para recuperarse de errores
- Logging de errores en consola

**Uso**:
```javascript
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### 2. Vowel

**Ubicación**: `src/components/vowel/index.js`

**Propósito**: Representa una vocal interactiva con audio y efectos visuales.

**Props**:
- `id` (string, required): Identificador único de la vocal
- `vowel` (string, required): Ruta de la imagen de la vocal
- `vowelSound` (string, required): Ruta del archivo de audio
- `size` (string): Tamaño de la imagen (default: "100px")
- `className` (string): Clases CSS adicionales
- `win` (bool): Indica si es la respuesta correcta
- `setWin` (func): Callback cuando se acierta
- `setFail` (func): Callback cuando se falla

**Eventos**:
- `onClick`: Reproduce el sonido de la vocal y ejecuta validación

### 3. MenuItem

**Ubicación**: `src/components/menu-item/index.js`

**Propósito**: Botón de menú con navegación y efecto de sonido.

**Props**:
- `label` (string, required): Texto del botón
- `go` (string, required): Ruta de destino

**Características**:
- Efecto de sonido al hacer clic
- Estilo de botón circular
- Integración con React Router

### 4. ModalVowel

**Ubicación**: `src/components/modal-vowel/index.js`

**Propósito**: Modal que muestra información detallada de una palabra.

**Props**:
- `id` (string, required): Identificador único
- `image` (string, required): Imagen del objeto
- `audio` (string, required): Audio de pronunciación
- `alt` (string, required): Texto alternativo
- `text` (string): Imagen del texto
- `firstVowel` (string): Imagen de la vocal resaltada
- `correct` (string): Vocal correcta del juego
- `vowel` (string): Vocal de la palabra

### 5. StuffAudio

**Ubicación**: `src/components/stuffAudio/index.js`

**Propósito**: Elemento interactivo con imagen, audio y validación.

**Props**:
- `id` (string, required): Identificador único
- `image` (string, required): Imagen del objeto
- `audio` (string, required): Archivo de audio
- `alt` (string, required): Descripción
- `size` (string): Tamaño (default: "8px")
- `correct` (string): Respuesta correcta
- `vowel` (string): Vocal de la palabra
- `text` (string): Imagen del texto
- `firstVowel` (string): Vocal resaltada

**Características**:
- Reproduce audio automáticamente al montarse
- Muestra animación de éxito/fallo
- Resalta la vocal inicial con animación

### 6. ButtonBack / ButtonNext

**Ubicación**: `src/components/button-back/index.js`, `src/components/button-next/index.js`

**Propósito**: Botones de navegación con transición de audio.

**Props**:
- `go` (string, required): Ruta de destino

**Características**:
- Efecto de sonido en clic
- Redirección programática con delay
- Pausado de audio antes de navegar

---

## Flujo de Navegación

### Diagrama de Rutas

```
┌─────────────┐
│   Intro     │  /
│   (Home)    │
└──────┬──────┘
       │
       v
┌─────────────┐
│  MenuGame   │  /menu-game
└──────┬──────┘
       │
       ├──────────────────┬─────────────────┐
       v                  v                 v
┌──────────────┐   ┌──────────────┐   ┌─────────────┐
│ VowelStart   │   │ VowelFinal   │   │ RhymeWord   │
│              │   │              │   │             │
└──────┬───────┘   └──────────────┘   └─────────────┘
       │               /vowel-final       /rhyme-Word
       v
   /vowel-start
       │
       v
┌────────────────────┐
│ VowelStartGame     │  /vowel-start-game/:vowel
│                    │
└────────────────────┘
```

### Rutas Definidas

```javascript
// src/constants/routes.js
export const ROUTES = {
  HOME: "/",
  MENU_GAME: "/menu-game",
  VOWEL_START: "/vowel-start",
  VOWEL_START_GAME: "/vowel-start-game",
  VOWEL_FINAL: "/vowel-final",
  RHYME_WORD: "/rhyme-Word"
};
```

---

## Gestión del Estado

### State en VowelStartGame

El componente más complejo del juego mantiene el siguiente estado:

```javascript
state = {
  vowels: [...],              // Array de vocales disponibles
  modelVowels: [...],         // Todas las palabras disponibles
  currentModelVowel: [...],   // Palabras del juego actual (5)
  currentVowel: null,         // Vocal actual seleccionada
  show: false                 // Control de visibilidad
}
```

### Lógica de Generación de Juego

1. **Selección de vocal**: Aleatoria o por parámetro de ruta
2. **Filtrado de palabras**: Se filtran palabras que coinciden con la vocal
3. **Mezcla aleatoria**: Se seleccionan 5 posiciones aleatorias
4. **Distribución**:
   - Palabras correctas (empiezan con la vocal)
   - Palabras incorrectas (empiezan con otras vocales)
5. **Asignación aleatoria** a posiciones

### Algoritmo de Randomización

```javascript
getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Uso: this.getRandomInt(0, 5) // Devuelve 0-4
```

---

## Sistema de Audio

### Gestión de Audio

El juego utiliza dos enfoques para manejar audio:

#### 1. Audio HTML5 Nativo
```javascript
<audio id="audioId" name="audioId">
  <source src={audioFile} type="audio/mpeg" />
</audio>

// Reproducción
document.getElementById("audioId").play();
```

#### 2. UIfx Library
```javascript
import UIfx from "uifx";
import soundFile from "path/to/sound.mp3";

// En componentDidMount o evento
this.audio = new UIfx(soundFile, { volume: 1.0 });
this.audio.play(1.0);
```

### Tipos de Audio

| Tipo | Propósito | Formato |
|------|-----------|---------|
| Vocales | Pronunciación de vocales | MP3 |
| Palabras | Pronunciación de palabras | MP3/MP4 |
| Efectos | Clicks, éxito, fallo | MP3 |
| Instrucciones | Guías del juego | MP3 |

### Sincronización de Audio

```javascript
// Ejemplo de secuencia de audio
setTimeout(() => {
  document.getElementById(currentVowel.sound).play();
}, 1000);

setTimeout(() => {
  document.getElementById(currentVowel.sound).play();
  this.setState({ show: true });
}, 6000);
```

---

## Configuración de Datos

### vowelGameData.js

Este archivo centraliza todos los datos del juego:

#### 1. VOWELS Array
```javascript
export const VOWELS = [
  {
    img: a,               // Imagen de la vocal
    vowelSound: Asound,   // Audio de la vocal
    sound: "VowelStartGameAudioA", // ID del elemento audio
    start: "a"            // Identificador de vocal
  },
  // ... e, i, o, u
];
```

#### 2. WORD_EXAMPLES Array
```javascript
export const WORD_EXAMPLES = [
  {
    image: RainBow,        // Imagen del objeto
    audio: RainBowAudio,   // Audio de la palabra
    alt: "Arcoíris",       // Descripción
    text: textArcoiris,    // Imagen del texto
    firstVowel: firstA,    // Vocal resaltada
    vowel: "a"             // Vocal inicial
  },
  // ... 13 palabras más
];
```

#### 3. GAME_START_AUDIO Object
```javascript
export const GAME_START_AUDIO = {
  a: GameStartA,
  e: GameStartE,
  i: GameStartI,
  o: GameStartO,
  u: GameStartU
};
```

### Agregar Nuevas Palabras

**Paso 1**: Importar recursos
```javascript
import NewWord from "../assets/image/newword.png";
import NewWordAudio from "../assets/sound/newword.mp3";
import textNewWord from "../assets/image/text-newword.png";
import firstVowel from "../assets/image/red-vowel.png";
```

**Paso 2**: Agregar al array
```javascript
export const WORD_EXAMPLES = [
  // ... palabras existentes
  {
    image: NewWord,
    audio: NewWordAudio,
    alt: "Nueva Palabra",
    text: textNewWord,
    firstVowel: firstVowel,
    vowel: "a" // o e, i, o, u
  }
];
```

---

## Patrones de Diseño

### 1. Component Composition

El juego usa composición de componentes:

```javascript
<ModalVowel>
  <StuffAudio>
    <Image />
    <Audio />
  </StuffAudio>
</ModalVowel>
```

### 2. Container/Presentational Pattern

- **Container**: `VowelStartGame` (lógica y estado)
- **Presentational**: `Vowel`, `MenuItem` (UI pura)

### 3. Error Boundary Pattern

```javascript
<ErrorBoundary>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
</ErrorBoundary>
```

### 4. Configuration Pattern

Centralización de datos en `config/vowelGameData.js`

### 5. Utility Pattern

Funciones reutilizables en `utils/helpers.js`:
- `getRandomInt()`
- `playAudio()`
- `shuffleArray()`
- `filterWordsByVowel()`

---

## Guía de Estilo

### Convenciones de Código

#### Componentes
```javascript
// Clase con PascalCase
class VowelComponent extends Component {
  // Constructor para binding
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Métodos con camelCase
  handleClick() {
    // ...
  }

  // Render al final
  render() {
    return <div></div>;
  }
}

// PropTypes después de la clase
VowelComponent.propTypes = {
  vowel: PropTypes.string.isRequired
};

// DefaultProps si aplica
VowelComponent.defaultProps = {
  size: "100px"
};
```

#### Estilos CSS
```css
/* BEM Naming Convention */
.component-name {}
.component-name__element {}
.component-name--modifier {}

/* Ejemplo */
.vowel-start {}
.vowel-start__title {}
.vowel-start--active {}
```

#### Imports
```javascript
// 1. React y librerías externas
import React, { Component } from "react";
import PropTypes from "prop-types";

// 2. Assets
import image from "../../assets/image/file.png";
import sound from "../../assets/sound/file.mp3";

// 3. Componentes
import CustomComponent from "../custom-component";

// 4. Estilos
import "./index.css";
```

---

## Testing

### Configuración de Testing

El proyecto usa Jest y React Testing Library (incluidos con Create React App).

### Estructura de Tests

```javascript
// component.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Component from './index';

describe('Component', () => {
  test('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Ejecutar Tests

```bash
# Modo interactivo
npm test

# Cobertura
npm test -- --coverage

# Todos los tests una vez
npm test -- --watchAll=false
```

---

## Despliegue

### Build de Producción

```bash
# Crear build optimizado
npm run build

# Resultado en /build
# - HTML, CSS, JS minificados
# - Assets optimizados
# - Source maps
```

### Opciones de Hosting

#### 1. Netlify
```bash
# Instalar CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

#### 2. Vercel
```bash
# Instalar CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### 3. GitHub Pages
```json
// package.json
{
  "homepage": "https://username.github.io/yoxi-game",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

```bash
npm install --save-dev gh-pages
npm run deploy
```

### Variables de Entorno

Crear `.env.production`:
```env
REACT_APP_VERSION=1.0.0
REACT_APP_API_URL=https://api.production.com
```

---

## Mejores Prácticas

### Performance

1. **Lazy Loading de Rutas**
```javascript
const VowelStartGame = lazy(() => import('./pages/vowel-start-game'));
```

2. **Optimización de Imágenes**
- Usar formatos WebP cuando sea posible
- Comprimir imágenes antes de importar
- Considerar lazy loading para imágenes

3. **Memoización**
```javascript
const MemoizedComponent = React.memo(Component);
```

### Accesibilidad

1. **Alt Text**: Todas las imágenes tienen texto alternativo
2. **ARIA Labels**: Agregar para lectores de pantalla
3. **Keyboard Navigation**: Asegurar navegación por teclado
4. **Color Contrast**: Mantener contraste accesible

### Seguridad

1. **Validación de Props**: Usar PropTypes
2. **Sanitización**: No usar `dangerouslySetInnerHTML`
3. **Dependencies**: Mantener actualizadas las dependencias

---

## Troubleshooting

### Audio no se reproduce

**Causa**: Políticas de autoplay del navegador

**Solución**:
```javascript
// Usar promise para manejar errores
const audioElement = document.getElementById(audioId);
audioElement.play().catch(error => {
  console.warn('Autoplay prevented:', error);
  // Mostrar botón para iniciar audio manualmente
});
```

### Rutas no funcionan en producción

**Causa**: Servidor no configurado para SPA

**Solución**: Agregar redirección en el servidor
```nginx
# nginx
location / {
  try_files $uri /index.html;
}
```

### Imágenes rotas después de build

**Causa**: Rutas incorrectas

**Solución**: Usar imports de ES6
```javascript
// ❌ No usar
<img src="/assets/image.png" />

// ✅ Usar
import image from "./assets/image.png";
<img src={image} />
```

---

## Recursos Adicionales

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://create-react-app.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [PropTypes Documentation](https://www.npmjs.com/package/prop-types)

---

**Última actualización**: 2026-06-13
**Versión**: 1.0.0
**Autores**: Yolanda Barrera y Ximena Caballero
