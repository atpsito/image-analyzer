# Image Analyzer

Una aplicación full-stack para el análisis inteligente de imágenes utilizando inteligencia artificial. El proyecto permite subir imágenes y obtener etiquetas descriptivas con niveles de confianza utilizando el modelo Gemini de Google.

## 🚀 Inicio Rápido con Docker

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd image-analyzer

# 2. Crear archivo de variables de entorno para el backend
echo "GEMINI_API_KEY=tu_api_key_aqui" > apps/backend/.env

# 3. Crear archivo de variables de entorno para el frontend (opcional)
echo "VITE_API_URL=http://localhost:3000" > apps/frontend/.env

# 4. Levantar el proyecto
docker-compose up --build
```

¡Listo! La aplicación estará disponible en http://localhost:5173

> **Nota:** Necesitas obtener una API Key de Google Gemini AI. Ver la sección [Obtener API Key](#obtener-api-key-de-google-gemini) para más detalles.

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

### Para desarrollo local:
- Node.js v20.11.0 o superior
- pnpm v10.15.1 o superior
- Una API Key de Google Gemini AI

### Para Docker:
- Docker v20.10.0 o superior
- Docker Compose v2.0.0 o superior
- Una API Key de Google Gemini AI

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd image-analyzer
```

## 🐳 Configuración con Docker (Recomendado)

### Configurar variables de entorno

Antes de levantar el proyecto con Docker, necesitas crear los archivos de configuración de variables de entorno:

#### Backend (.env)

Crea un archivo `.env` en la carpeta `apps/backend/` con la siguiente configuración:

```env
# API Key de Google Gemini AI (OBLIGATORIO)
GEMINI_API_KEY=tu_api_key_aqui

# Puerto del servidor (opcional, por defecto 3000)
PORT=3000

# Entorno de ejecución (opcional, por defecto development)
NODE_ENV=production
```

#### Frontend (.env)

Crea un archivo `.env` en la carpeta `apps/frontend/` con la siguiente configuración:

```env
# URL del backend (opcional, por defecto http://localhost:3000)
VITE_API_URL=http://localhost:3000
```

### Obtener API Key de Google Gemini

1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Crea una nueva API Key
4. Copia la clave y pégala en el archivo `.env` del backend

### Levantar el proyecto con Docker

Una vez configuradas las variables de entorno, puedes levantar todo el proyecto con un solo comando:

```bash
# Construir y levantar todos los servicios
docker-compose up --build

# O ejecutar en segundo plano
docker-compose up --build -d
```
## 💻 Desarrollo Local (Alternativo)

Si prefieres ejecutar el proyecto localmente sin Docker:

### 2. Instalar dependencias

```bash
# Instalar todas las dependencias del monorepo
pnpm install
```

### 3. Configurar variables de entorno

Sigue los mismos pasos de configuración de variables de entorno mencionados en la sección de Docker.

## 🚀 Ejecutar el proyecto

### Con Docker (Recomendado)

```bash
# Levantar todos los servicios
docker-compose up --build

# Levantar en segundo plano
docker-compose up --build -d

# Verificar que los servicios estén corriendo
docker-compose ps
```

### Desarrollo Local

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

### Producción Local

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
│   │   ├── .env          # Variables de entorno (crear manualmente)
│   │   ├── .dockerignore # Archivos ignorados en Docker
│   │   └── ...
│   └── frontend/         # Aplicación React
│       ├── .env          # Variables de entorno (crear manualmente)
│       ├── .dockerignore # Archivos ignorados en Docker
│       └── ...
├── packages/
│   └── types/           # Tipos compartidos
├── docker-compose.yml   # Configuración de servicios Docker
├── Dockerfile          # Configuración multi-stage para Docker
├── .dockerignore       # Archivos ignorados en Docker
├── package.json        # Configuración del monorepo
├── pnpm-workspace.yaml # Configuración de workspace
└── turbo.json         # Configuración de Turbo
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

### Con Docker:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000

### Desarrollo Local:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000

## ⚙️ Variables de Entorno Detalladas

### Backend (`apps/backend/.env`)

| Variable | Descripción | Obligatorio | Valor por defecto |
|----------|-------------|-------------|-------------------|
| `GEMINI_API_KEY` | API Key de Google Gemini AI para análisis de imágenes | ✅ Sí | - |
| `PORT` | Puerto donde correrá el servidor backend | ❌ No | 3000 |
| `NODE_ENV` | Entorno de ejecución (development/production) | ❌ No | development |

### Frontend (`apps/frontend/.env`)

| Variable | Descripción | Obligatorio | Valor por defecto |
|----------|-------------|-------------|-------------------|
| `VITE_API_URL` | URL base del backend para las peticiones API | ❌ No | http://localhost:3000 |

### 🔐 Seguridad de Variables de Entorno

**Importante:** 
- Los archivos `.env` están incluidos en `.dockerignore` y `.gitignore` para proteger tus claves
- Nunca commitees archivos `.env` al repositorio
- Para producción, considera usar un gestor de secretos como Docker Secrets o variables de entorno del sistema

## 📝 Uso

1. Abre la aplicación en tu navegador
2. Arrastra y suelta una imagen o haz clic para seleccionar un archivo
3. La imagen se enviará al backend para análisis
4. Recibirás etiquetas descriptivas con niveles de confianza

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Alexander Tigselema**

