# 🧬 Autómata Celular Interactivo con Python y Canvas - HTML, CSS y JavaScript -

## 🌟 En Memoria de John von Neumann (1903-1957)

> "Los lenguajes de las matemáticas y la naturaleza son sorprendentemente similares" - John von Neumann


Este proyecto rinde homenaje al matemático húngaro-estadounidense **John von Neumann**, quien estableció las bases teóricas de los autómatas celulares en la década de 1940. En particular, su trabajo sentó las bases para el **Juego de la Vida**, una de las simulaciones más conocidas de autómatas celulares. Este proyecto consiste en una animación de autómatas celulares, inspirada en su teoría, que visualiza el comportamiento del **Juego de la Vida**. Nacido el 28 de diciembre de 1903 en **Budapest** y fallecido el 8 de febrero de 1957 en **Washington D.C.**, von Neumann fue pionero en múltiples campos, dejando un legado que sigue influyendo en la ciencia y la tecnología hasta el día de hoy.

Las contribuciones de von Neumann fueron fundamentales para el desarrollo de diversas áreas, y entre sus logros más destacados se incluyen:

- **Algoritmo minimax**: Una piedra angular en la teoría de juegos y la inteligencia artificial. Este algoritmo permite a las computadoras tomar decisiones óptimas en juegos de suma cero, evaluando recursivamente las mejores jugadas posibles y anticipando las respuestas del oponente.
  
- **Diseño del EDVAC (Electronic Discrete Variable Automatic Computer)**: Una de las primeras computadoras con programa almacenado. Este diseño sentó las bases para la **arquitectura von Neumann**, que sigue siendo el estándar en la mayoría de las computadoras actuales.

Además de estos logros, von Neumann hizo innovaciones cruciales en otras áreas de la ciencia y la matemática, incluyendo:

- **Teoría de autómatas**: Fundamental para la comprensión y desarrollo de los sistemas computacionales y algoritmos, especialmente en los autómatas celulares.
  
- **Arquitectura de computadoras**: Su trabajo en este campo definió la estructura y funcionamiento de los ordenadores modernos.

- **Teoría ergódica**: Influyó profundamente en las ciencias matemáticas y físicas, especialmente en sistemas dinámicos y estadísticas.

- **Contribuciones a la mecánica cuántica**: Ayudó a formular algunas de las bases matemáticas que sustentan esta teoría, marcando un hito en la física moderna.

El legado de **John von Neumann** sigue siendo fundamental para el desarrollo de la ciencia, la tecnología y la inteligencia artificial, y su impacto perdura en las investigaciones y aplicaciones actuales en múltiples disciplinas.


## 📖 Descripción del Proyecto

Implementación interactiva del "Juego de la Vida" de Conway usando tecnologías web modernas. El proyecto demuestra cómo patrones complejos pueden emerger de reglas simples, un principio fundamental en sistemas complejos y emergentes.

### 🎯 Objetivos del Proyecto
- Visualizar patrones emergentes del autómata celular
- Proporcionar una interfaz interactiva para experimentación
- Implementar animación eficiente con Canvas
- Permitir personalización de colores en tiempo real

## 🛠️ Stack Tecnológico

### Backend (Python)
- FastAPI: Framework moderno y de alto rendimiento
- Uvicorn: Servidor ASGI para Python
- Jinja2: Motor de templates

### Frontend
- Canvas API: Renderizado de alta performance
- JavaScript ES6+: Lógica de animación y eventos
- CSS3: Estilos y layouts modernos
- RequestAnimationFrame: Animación optimizada

## 🎯 Características Principales

### 🎨 Sistema de Colores
- Gradientes dinámicos personalizables
- Selección de colores en tiempo real
- Interpolación suave entre colores
- Fondo personalizable
- Temas predefinidos
- Modo oscuro/claro

### ⚡ Optimización de Rendimiento
- Renderizado eficiente con Canvas API
- Manipulación directa de píxeles
- Gestión de memoria optimizada
- Actualización selectiva de células
- Caché de patrones
- Compresión de estados

### 🔄 Lógica del Autómata
- Reglas clásicas del Juego de la Vida
- Sistema de vecindad Moore
- Bordes toroidales
- Estado inicial aleatorio
- Patrones predefinidos
- Editor de patrones

## 💻 Instalación y Ejecución

### Requisitos Previos
- Python 3.8+
- pip o conda

### Configuración del Entorno

#### Usando venv
```bash
# Clonar repositorio
git clone <url-repositorio>
cd automata

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Windows
venv\Scripts\activate
# Linux/macOS
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt
```

#### Usando conda
```bash
# Clonar repositorio
git clone <url-repositorio>
cd automata

# Crear entorno conda
conda create -n automata python=3.8
conda activate automata

# Instalar dependencias
pip install -r requirements.txt
```

### Ejecución

```bash
# Método 1: Usando python
python main.py

# Método 2: Usando uvicorn directamente
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Acceder a `http://localhost:8000` en el navegador

## 🔧 Estructura del Proyecto
```
automata/
├── static/
│   └── js/
│       └── main.js     # Lógica del autómata celular
├── templates/
│   └── index.html      # Template principal
├── main.py            # Servidor FastAPI
├── requirements.txt   # Dependencias
└── README.md         # Documentación
```

```bash
Esta versión refleja:
1. La estructura real del proyecto
2. Las dependencias actuales
3. Múltiples opciones de entorno virtual
4. Comandos de ejecución verificados
Esta versión refleja:
1. La estructura real del proyecto
2. Las dependencias actuales
3. Múltiples opciones de entorno virtual
4. Comandos de ejecución verificados
```


## 🎮 Uso y Personalización

### Controles de Usuario
- Selector de color inicial del gradiente
- Selector de color final del gradiente
- Selector de color de fondo
- Control de velocidad
- Zoom y pan
- Guardar/cargar estados
- Exportar como imagen

## 🔬 Detalles Técnicos

## 🎥 Demo

https://raw.githubusercontent.com/briancg42/automata-celular/main/demo/video_2024-12-28.mp4

<details>
<summary>📝 Ver instrucciones de video</summary>

Este video muestra:
- Inicialización aleatoria del autómata
- Controles de color en tiempo real
- Animación fluida usando Canvas
- Comportamiento de las células según las reglas de Conway
</details>

### Implementación Actual
- Generación aleatoria de células iniciales
- Sistema de vecindad Moore (8 vecinos)
- Bordes toroidales
- Interpolación de colores por gradiente
- Animación mediante requestAnimationFrame

### API REST Endpoint
```bash
GET / - Renderiza la interfaz principal
```

## 🤝 Contribuciones
1. Fork this repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add some awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

### Guía de Estilo
- Sigue PEP 8 para Python
- ESLint para JavaScript
- Prettier para formateo
- Tests unitarios requeridos

## 📄 Licencia
MIT - Consulte el archivo LICENSE para más detalles.

## ⭐ Referencias
- [Juego de la Vida de Conway](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [Documentación FastAPI](https://fastapi.tiangolo.com/)
- [Canvas API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Patrones del Juego de la Vida](https://conwaylife.com/wiki/Main_Page)
- [Optimización de Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)

## 📱 Compatibilidad

- Navegadores modernos con soporte Canvas
- Diseño responsive
- Interacción táctil soportada

## 🗺️ Roadmap

- [ ] Añadir más patrones predefinidos
- [ ] Mejorar UI/UX móvil
- [ ] Añadir controles de velocidad
- [ ] Mejorar rendimiento en dispositivos móviles (formato vertical)
- [ ] Añadir soporte para más reglas del Juego de la Vida
- [ ] Añadir soporte para vecindad Von Neumann