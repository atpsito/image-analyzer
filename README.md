# Image Analyzer

Una aplicación full-stack para el análisis inteligente de imágenes utilizando inteligencia artificial. El proyecto permite subir imágenes y obtener etiquetas descriptivas con niveles de confianza utilizando el modelo Gemini de Google.

## 🚀 Tecnologías Utilizadas

### Backend
- **Node.js** v20.11.0+
- **NestJS** v11.0.1 (Framework de Node.js)
- **TypeScript** v5.7.3
- **LangChain** v0.3.33 (Integración con IA)
- **Google Gemini AI** (Modelo de análisis de imágenes)

### Frontend
- **React** v19.1.1
- **TypeScript** v5.8.3
- **Vite** v7.1.2 (Build tool)
- **Tailwind CSS** v4.1.13 (Estilos)
- **React Dropzone** v14.3.8 (Subida de archivos)

### Herramientas de Desarrollo
- **pnpm** v10.15.1 (Gestor de paquetes)
- **Turbo** v2.5.6 (Monorepo)
- **ESLint** (Linting)
- **Prettier** (Formateo de código)

## 📋 Prerrequisitos

- Node.js v20.11.0 o superior
- pnpm v10.15.1 o superior
- Una API Key de Google Gemini AI

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd image-analyzer
```

### 2. Instalar dependencias

```bash
# Instalar todas las dependencias del monorepo
pnpm install
```

### 3. Configurar variables de entorno

#### Backend (.env)

Crea un archivo `.env` en la carpeta `apps/backend/` con la siguiente configuración:

```env
# API Key de Google Gemini AI
GEMINI_API_KEY=tu_api_key_aqui

# Puerto del servidor (opcional, por defecto 3000)
PORT=3000
```

#### Frontend (.env)

Crea un archivo `.env` en la carpeta `apps/frontend/` con la siguiente configuración:

```env
# URL del backend (opcional, por defecto http://localhost:3000)
VITE_API_URL=http://localhost:3000
```

### 4. Obtener API Key de Google Gemini

1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Crea una nueva API Key
4. Copia la clave y pégala en el archivo `.env` del backend

## 🚀 Ejecutar el proyecto

### Desarrollo (Recomendado)

#### Opción 1: Ejecutar todo el proyecto
```bash
# Desde la raíz del proyecto
pnpm dev
```

#### Opción 2: Ejecutar servicios por separado

**Backend:**
```bash
cd apps/backend
pnpm start:dev
```

**Frontend:**
```bash
cd apps/frontend
pnpm dev
```

### Producción

```bash
# Construir todos los proyectos
pnpm build

# Ejecutar en producción
cd apps/backend
pnpm start:prod
```

## 📁 Estructura del Proyecto

```
image-analyzer/
├── apps/
│   ├── backend/          # API NestJS
│   └── frontend/         # Aplicación React
├── packages/
│   └── types/           # Tipos compartidos
├── package.json         # Configuración del monorepo
├── pnpm-workspace.yaml  # Configuración de workspace
└── turbo.json          # Configuración de Turbo
```

## 🔧 Scripts Disponibles

### Desde la raíz del proyecto:
- `pnpm dev` - Ejecuta todos los servicios en modo desarrollo
- `pnpm build` - Construye todos los proyectos
- `pnpm lint` - Ejecuta linting en todos los proyectos
- `pnpm check-types` - Verifica tipos TypeScript

### Backend:
- `pnpm start:dev` - Ejecuta en modo desarrollo con hot reload
- `pnpm start:prod` - Ejecuta en modo producción
- `pnpm test` - Ejecuta tests unitarios

### Frontend:
- `pnpm dev` - Ejecuta servidor de desarrollo
- `pnpm build` - Construye para producción
- `pnpm preview` - Previsualiza build de producción

## 🌐 Acceso a la Aplicación

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000

## 📝 Uso

1. Abre la aplicación en tu navegador
2. Arrastra y suelta una imagen o haz clic para seleccionar un archivo
3. La imagen se enviará al backend para análisis
4. Recibirás etiquetas descriptivas con niveles de confianza

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Alexander Tigselema**

---

¿Necesitas ayuda? Abre un issue en el repositorio o contacta al desarrollador.
