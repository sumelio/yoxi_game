# YOXI Game - Juego Educativo de Vocales

<div align="center">
  <h3>Aplicación interactiva para aprender las vocales en español</h3>
  <p>Desarrollado por <b>Yolanda Barrera</b> y <b>Ximena Caballero</b></p>
</div>

## 📖 Descripción

YOXI Game es una aplicación educativa interactiva diseñada para ayudar a los niños a aprender las vocales del español de manera divertida y entretenida. El juego incluye tres modos diferentes de aprendizaje, cada uno enfocado en aspectos específicos del reconocimiento de vocales.

## 🎮 Modos de Juego

### 1. Vocal Inicial 🔤
Los niños aprenden a identificar palabras que comienzan con una vocal específica. El juego presenta imágenes de objetos y los niños deben seleccionar aquellos que empiezan con la vocal indicada.

**Ejemplos:**
- **A**: Arcoíris, Ambulancia, Abeja
- **E**: Elefante, Estrella, Erizo
- **I**: Imán, Indio, Iguana, Iglú
- **O**: Oso, Oveja
- **U**: Uvas, Uniforme

### 2. Vocal Final 🎯
Los estudiantes practican identificando la vocal final de las palabras. Se presenta una imagen (ejemplo: pato) y deben seleccionar la vocal con la que termina la palabra.

### 3. Rima Rimando 🎵
Los niños desarrollan conciencia fonológica al identificar palabras que riman. Se presenta una palabra base y deben seleccionar entre varias opciones la que rima con ella.

**Ejemplo:**
- Palabra base: **Hueso**
- Opciones: Queso ✓ | Lobo ✗

## ✨ Características

- 🎨 **Interfaz colorida y atractiva** diseñada para niños
- 🔊 **Audio interactivo** en cada elemento del juego
- ⭐ **Retroalimentación visual y auditiva** inmediata
- 🎭 **Personaje guía (Yoxi)** que acompaña en el aprendizaje
- 📱 **Diseño responsive** adaptable a diferentes dispositivos
- 🎵 **Sonidos y efectos** que mantienen el interés de los niños
- ✅ **Validación de respuestas** con animaciones de éxito/error

## 🚀 Tecnologías Utilizadas

- **React 18.3.1** - Framework de interfaz de usuario
- **React Router DOM 5.3.4** - Navegación entre páginas
- **UIfx 2.0.7** - Gestión de efectos de sonido
- **Reactjs-popup 2.0.6** - Componentes modales
- **PropTypes** - Validación de tipos en componentes
- **CSS3** - Estilos y animaciones

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd yoxi_game
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

4. Abrir el navegador en [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción optimizada
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de Create React App (irreversible)

## 📁 Estructura del Proyecto

```
yoxi_game/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── assets/            # Recursos multimedia
│   │   ├── image/        # Imágenes del juego
│   │   └── sound/        # Archivos de audio
│   ├── components/        # Componentes reutilizables
│   │   ├── button-back/  # Botón de retroceso
│   │   ├── button-next/  # Botón de siguiente
│   │   ├── menu-item/    # Elemento de menú
│   │   ├── modal/        # Modal genérico
│   │   ├── modal-vowel/  # Modal específico para vocales
│   │   ├── vowel/        # Componente de vocal
│   │   ├── stuffAudio/   # Componente de audio con imagen
│   │   └── ErrorBoundary/ # Manejo de errores
│   ├── config/            # Archivos de configuración
│   │   └── vowelGameData.js # Datos del juego
│   ├── constants/         # Constantes de la aplicación
│   │   └── routes.js     # Rutas de navegación
│   ├── pages/             # Páginas/vistas principales
│   │   ├── intro/        # Página de introducción
│   │   ├── menu-game/    # Menú principal
│   │   ├── vowel-start/  # Selección de vocal inicial
│   │   ├── vowel-start-game/ # Juego de vocal inicial
│   │   ├── vowel-final/  # Juego de vocal final
│   │   └── rhyme_word/   # Juego de rimas
│   ├── utils/             # Utilidades y helpers
│   │   └── helpers.js    # Funciones auxiliares
│   ├── App.js             # Componente principal
│   ├── App.css            # Estilos principales
│   └── index.js           # Punto de entrada
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
```

## 🎨 Guía de Uso

### Para Educadores

1. **Introducción**: Comienza en la pantalla de inicio que presenta al personaje Yoxi
2. **Selección de modo**: Elige entre los tres modos de juego disponibles
3. **Supervisión**: Observa el progreso del estudiante con la retroalimentación visual
4. **Repetición**: Los juegos pueden repetirse para reforzar el aprendizaje

### Para Desarrolladores

#### Agregar nuevas palabras

Edita el archivo `src/config/vowelGameData.js`:

```javascript
export const WORD_EXAMPLES = [
  {
    image: ImagenImport,
    audio: AudioImport,
    alt: "Descripción",
    text: TextoImagenImport,
    firstVowel: VocalResaltadaImport,
    vowel: "a" // vocal inicial
  },
  // ... más palabras
];
```

#### Personalizar sonidos

Reemplaza los archivos en `src/assets/sound/` manteniendo los mismos nombres o actualiza las referencias en los componentes.

## 🔧 Configuración

### Variables de Entorno

Actualmente el proyecto no requiere variables de entorno específicas, pero puedes crear un archivo `.env` para configuraciones futuras:

```env
REACT_APP_VERSION=1.0.0
REACT_APP_ENV=development
```

## 🐛 Solución de Problemas

### El audio no se reproduce
- Asegúrate de que el navegador permite la reproducción automática de audio
- Verifica que los archivos de audio existan en `src/assets/sound/`
- Algunos navegadores requieren interacción del usuario antes de reproducir audio

### Las imágenes no se cargan
- Verifica que las rutas de las imágenes sean correctas
- Asegúrate de que los archivos existan en `src/assets/image/`
- Limpia la caché del navegador

### Error de compilación
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles (iOS/Android)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código privado. © 2026 Yolanda Barrera y Ximena Caballero.

## 👥 Autores

- **Yolanda Barrera**
- **Ximena Caballero**

## 🙏 Agradecimientos

- A todos los educadores que inspiraron este proyecto
- A las familias que prueban y mejoran el juego con sus comentarios
- A la comunidad de React por las excelentes herramientas

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor:
- Crea un issue en el repositorio
- Contacta a los desarrolladores

---

<div align="center">
  <p>Hecho con ❤️ para facilitar el aprendizaje de las vocales</p>
  <p><b>YOXI Game © 2026</b></p>
</div>
