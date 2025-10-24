# Dashboard de Estado de Servicios

Una aplicación de dashboard de estado de servicios construida con Next.js, React y TypeScript siguiendo los requisitos de usar solo librerías necesarias (sin Tailwind CSS).

## Descripción General del Proyecto

Este proyecto fue construido como una tarea de evaluación que demuestra:
- Server-Side Rendering (SSR) con Next.js App Router
- Implementación de block loader durante la carga de datos
- Estilos CSS personalizados sin frameworks externos
- TypeScript para seguridad de tipos
- Principios de diseño responsive

## Cómo se Construyó el Proyecto

### 1. Inicialización del Proyecto
```bash
npx create-next-app@latest status-page-app --typescript --tailwind --eslint --app
```
Luego se eliminó Tailwind CSS según los requisitos.

### 2. Decisiones de Arquitectura Central

**Next.js App Router**: Utilizado para patrones modernos de React y capacidades SSR
**TypeScript**: Para seguridad de tipos y mejor experiencia de desarrollo
**CSS Personalizado**: CSS puro sin frameworks para cumplir requisitos
**Server Components**: Para rendimiento SSR óptimo

### 3. Detalles Clave de Implementación

#### Server-Side Rendering (SSR)
- Utiliza Next.js App Router con Server Components
- Implementa `export const dynamic = 'force-dynamic'` para prevenir generación estática
- El servidor renderiza la página inicial con estados de carga

#### Implementación del Block Loader
- El archivo `loading.tsx` proporciona la UI de carga durante SSR
- Muestra todos los servicios en estado "Loading" inicialmente
- Transiciona a datos reales después del delay de 5-10 segundos

#### Flujo de Datos
1. Usuario visita la página → Servidor renderiza estado de carga
2. La función `getServiceStatus()` simula llamada API con delay
3. Después del delay, se retornan datos reales de servicios
4. La página se actualiza con estados reales de servicios

## Estructura del Proyecto Explicada

```
status-page-app/
├── components/                 # Componentes React reutilizables
│   ├── ServiceStatusBadge.tsx # Componente badge para estado de servicio
│   └── StatusPage.tsx         # Componente principal del dashboard
├── data/
│   └── mockData.ts            # Datos mock de servicios
├── lib/
│   └── data.ts                # Lógica de carga de datos y simulación de delay
├── src/
│   └── app/                   # Directorio Next.js App Router
│       ├── globals.css        # Estilos CSS globales (sin frameworks)
│       ├── layout.tsx         # Componente layout raíz
│       ├── loading.tsx        # UI de carga para SSR
│       └── page.tsx           # Componente página principal
├── types.ts                   # Definiciones de tipos TypeScript
├── .gitignore                 # Reglas de git ignore
└── README_ES.md               # Esta documentación
```

### Desglose de Componentes

#### `ServiceStatusBadge.tsx`
- Maneja la visualización individual del estado del servicio
- Mapea tipos de estado a clases CSS
- Proporciona retroalimentación visual con colores

#### `StatusPage.tsx`
- Componente principal del dashboard
- Ordena servicios alfabéticamente
- Maneja la visualización del estado de carga

#### `page.tsx` (Server Component)
- Maneja la carga de datos en el servidor
- Implementa el delay de 5-10 segundos
- Renderiza la UI final con datos reales

#### `loading.tsx`
- Proporciona UI de carga durante SSR
- Muestra block loader mientras espera datos

#### `globals.css`
- CSS personalizado sin frameworks externos
- Diseño responsive con media queries
- Estilos de badges de estado con animaciones

## Tecnologías Utilizadas

- **Next.js 16**: Framework React con App Router para SSR
- **React 19**: React más reciente con Server Components
- **TypeScript**: Tipado estático para JavaScript
- **CSS Personalizado**: CSS puro sin frameworks (como se requería)

## Instalación y Configuración

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd status-page-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar servidor de desarrollo**
```bash
npm run dev
```

4. **Acceder a la aplicación**
Abrir `http://localhost:3000` en el navegador

## Cómo Funciona

### Proceso de Carga Inicial
1. Usuario navega a la página
2. Next.js renderiza `loading.tsx` inmediatamente (Block Loader)
3. Servidor ejecuta `getServiceStatus()` con delay de 5-10 segundos
4. Después del delay, la página se actualiza con datos reales de servicios

### Estados de Servicios
- 🟢 **Online**: Badge verde - servicio funcionando correctamente
- 🟡 **Degraded**: Badge amarillo - servicio con problemas menores  
- 🔴 **Offline**: Badge rojo - servicio no disponible
- ⚪ **Loading**: Badge gris con animación de pulso - estado temporal de carga

### Características Clave Implementadas

✅ **Server-Side Rendering**: La página se renderiza en el servidor antes de enviar al cliente  
✅ **Block Loader**: Estados de carga visibles durante la carga de datos  
✅ **Delay de 5-10 Segundos**: Simula tiempo real de respuesta API  
✅ **Ordenamiento Alfabético**: Servicios automáticamente ordenados por nombre  
✅ **CSS Personalizado**: Estilos CSS puros sin frameworks externos  
✅ **Diseño Responsive**: Funciona en móvil y desktop  
✅ **TypeScript**: Seguridad de tipos completa en toda la aplicación  

## Notas de Desarrollo

### ¿Por qué No Tailwind CSS?
Los requisitos establecían explícitamente: "La aplicación debe construirse usando solo librerías que sean necesarias para cumplir los requisitos de esta app (no tailwind, por ejemplo)"

### Implementación SSR
- Utiliza Next.js App Router para patrones SSR modernos
- Server Components para rendimiento óptimo
- `dynamic = 'force-dynamic'` previene generación estática

### Arquitectura CSS
- Clases CSS personalizadas para mantenibilidad
- Diseño responsive con CSS Grid y Flexbox
- Animaciones CSS para estados de carga
- Convención de nombres tipo BEM

## Build de Producción

```bash
npm run build
npm start
```

## Pruebas de la Aplicación

1. Iniciar el servidor de desarrollo
2. Navegar a `http://localhost:3000`
3. Observar los estados de carga durante 5-10 segundos
4. Verificar que los servicios se actualicen con estados reales
5. Verificar diseño responsive en diferentes tamaños de pantalla

## Cumplimiento de Requisitos

Esta implementación cumple todos los requisitos especificados:
- ✅ Aplicación basada en React
- ✅ Server-Side Rendering (SSR)
- ✅ Block loader durante la carga de datos
- ✅ Simulación de delay de 5-10 segundos
- ✅ Ordenamiento alfabético de servicios
- ✅ Badges de estado únicos
- ✅ Sin librerías innecesarias (no Tailwind CSS)
- ✅ Documentación completa

## Explicación Técnica Detallada

### ¿Por qué Next.js App Router?
- **Server Components**: Permiten renderizado en el servidor por defecto
- **Loading UI**: Sistema integrado para estados de carga
- **Streaming**: Capacidad de streaming de contenido
- **Rutas Anidadas**: Estructura de archivos más intuitiva

### ¿Cómo Funciona el SSR?
1. **Request**: Usuario solicita la página
2. **Server Render**: Next.js renderiza en el servidor
3. **Loading State**: Muestra `loading.tsx` mientras espera datos
4. **Data Fetch**: Ejecuta `getServiceStatus()` con delay
5. **Final Render**: Renderiza página final con datos reales
6. **Hydration**: React hidrata en el cliente

### Arquitectura de Componentes
- **Server Components**: Para carga de datos y SSR
- **Client Components**: Para interactividad (marcados con 'use client')
- **Composition**: Separación clara de responsabilidades

## Estructura de Datos

```typescript
interface Service {
  name: string;           // Nombre del servicio
  status: ServiceStatus;  // Estado actual del servicio
}

type ServiceStatus = 'Online' | 'Degraded' | 'Offline' | 'Loading';
```

## Estilos CSS

El proyecto utiliza CSS puro con:
- **Reset CSS**: Para normalizar estilos entre navegadores
- **Flexbox**: Para layout responsive
- **CSS Grid**: Para estructuras complejas
- **Animaciones**: Para estados de carga
- **Media Queries**: Para diseño responsive

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## Consideraciones de Rendimiento

- **SSR**: Mejora el SEO y tiempo de carga inicial
- **Server Components**: Reduce bundle size del cliente
- **CSS Puro**: Sin overhead de frameworks CSS
- **TypeScript**: Previene errores en tiempo de ejecución

¡El proyecto está listo para ser presentado y cumple todos los requisitos técnicos solicitados!
