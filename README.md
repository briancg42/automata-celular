# 🧬 Autómata Celular Interactivo con Python y Canvas - HTML, CSS y JavaScript -

## 🌟 En Memoria de John von Neumann (1903-1957)

> "Los lenguajes de las matemáticas y la naturaleza son sorprendentemente similares" - John von Neumann.


Este proyecto es un pequeño homenaje al matemático húngaro-estadounidense **John von Neumann**, quien estableció las bases teóricas de los autómatas celulares en la década de 1940. En particular, su trabajo sentó las bases para el **Juego de la Vida**, una de las simulaciones más conocidas de autómatas celulares. Este proyecto consiste en una animación de autómatas celulares, inspirada en su teoría, que visualiza el comportamiento del **Juego de la Vida**. Nacido el 28 de diciembre de 1903 en **Budapest** y fallecido el 8 de febrero de 1957 en **Washington D.C.**, von Neumann fue pionero en múltiples campos, dejando un legado que sigue influyendo en la ciencia y la tecnología hasta el día de hoy.

Fue uno de los pensadores más influyentes del siglo XX, cuya obra abarcó desde las matemáticas puras hasta la computación, la teoría de juegos y la física. Sus contribuciones transformaron múltiples disciplinas y establecieron bases que siguen siendo fundamentales en la actualidad. Entre sus logros más destacados se incluyen:

### Matemáticas y Computación
- **Algoritmo Minimax**: Introdujo este concepto en su trabajo sobre teoría de juegos, revolucionando la manera en que se analizan los juegos de suma cero. Este algoritmo es clave en inteligencia artificial, ya que permite a las computadoras tomar decisiones óptimas anticipando las respuestas de sus oponentes.

- **Diseño del EDVAC (Electronic Discrete Variable Automatic Computer)**: Fue un pionero en el diseño de computadoras con programa almacenado, proponiendo la **arquitectura von Neumann**. Este modelo, que separa la unidad de procesamiento, la memoria y las instrucciones, es la base de prácticamente todos los ordenadores modernos.

- **Teoría de Autómatas y Autómatas Celulares**: Desarrolló conceptos fundamentales para entender sistemas computacionales autorreplicantes. Su trabajo en autómatas celulares inspiró investigaciones modernas en biología computacional, inteligencia artificial y física.

- **Teoría Ergódica**: Proporcionó herramientas matemáticas esenciales para el estudio de sistemas dinámicos y estadísticos, con aplicaciones en física estadística y otras áreas.

### Contribuciones a la Física
Von Neumann tuvo un impacto duradero en la física, particularmente en la mecánica cuántica, la termodinámica y la física estadística. Entre sus aportes más significativos están:

- **Fundamentos Matemáticos de la Mecánica Cuántica**: Publicó en 1932 *"Mathematische Grundlagen der Quantenmechanik"*, un texto que estableció el marco matemático riguroso para la teoría cuántica. Introdujo el formalismo basado en operadores en espacios de Hilbert y clarificó el concepto de la medida en mecánica cuántica.

- **Teoría del Colapso Cuántico**: Fue uno de los primeros en formular el problema de la medición cuántica, planteando cómo los estados cuánticos evolucionan según las reglas de la mecánica cuántica hasta que ocurre una observación.

- **Entropía Cuántica**: Contribuyó al entendimiento de la entropía en sistemas cuánticos, un concepto clave para describir la información y la irreversibilidad en mecánica estadística y termodinámica.

### Legado Interdisciplinario
Además de sus logros en computación y física, von Neumann fue un visionario que anticipó problemas y conceptos que aún hoy son objeto de investigación. Su capacidad para conectar ideas entre disciplinas distintas permitió avances como:

- **Modelos Computacionales de Sistemas Complejos**: Sus ideas en simulación computacional influyeron en campos como la meteorología, la biología y la ingeniería.

- **Predicción de la Inteligencia Artificial**: Anticipó el impacto de las máquinas computacionales en la sociedad, reconociendo su potencial para transformar industrias y resolver problemas científicos.

No solo contribuyó a la comprensión de la física cuántica, sino que también cimentó la relación entre esta y la computación moderna.
Su legado sigue siendo fundamental para el desarrollo de la ciencia, la tecnología y la inteligencia artificial, y su impacto perdura en las investigaciones y aplicaciones actuales en múltiples disciplinas.


## 📖 Descripción del Proyecto

Implementación interactiva del "Juego de la Vida" de Conway usando tecnologías web modernas. El proyecto demuestra cómo patrones complejos pueden emerger de reglas simples, un principio fundamental en sistemas complejos y emergentes.

**Contexto**: Esta animación es el banner que hice para la landing page de mi agencia de IA, lol.

### 🎯 Objetivos del Proyecto
- Visualizar patrones emergentes del autómata celular
- Proporcionar una interfaz interactiva para experimentación
- Implementar animación eficiente con Canvas
- Permitir personalización de colores en tiempo real

## 🛠️ Stack

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
cd automata-celular

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
cd automata-celular

# Crear entorno conda
conda create -n automata-venv python=3.8
conda activate automata-venv

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

## 🔬 Detalles Técnicos

## 🎥 Demo

🔴 [Ver Demo en Streamable](https://streamable.com/vybuys) (Recomendado)

<div align="center">
  <a href="https://streamable.com/vybuys" target="_blank">
    <img src="https://streamable.com/vybuys/preview.jpg" alt="Demo del Autómata Celular" width="600">
  </a>
</div>

Este video muestra:
- Inicialización aleatoria del autómata
- Controles de color en tiempo real
- Animación fluida usando Canvas
- Comportamiento de las células según las reglas de Conway

[📥 Descargar video original (50MB)](https://media.githubusercontent.com/media/briancg42/automata-celular/main/demo/video_2024-12-28.mp4)

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
- [ ] Añadir controles de velocidad
- [ ] Mejorar UI/UX y rendimiento para dispositivos móviles (formato vertical)
- [ ] Añadir soporte para más reglas del Juego de la Vida
- [ ] Añadir soporte para vecindad Von Neumann
