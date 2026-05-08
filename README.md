# Lista de Tareas

Aplicación web de lista de tareas con HTML, CSS y JavaScript.

## Características

- Agregar nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Persistencia de datos con localStorage

## Instalación

```bash
npm install
```

## Pruebas Unitarias

Ejecutar pruebas:

```bash
npm test
```

Las pruebas cubren:
- Agregar tareas
- Alternar estado completado
- Eliminar tareas

## Docker

Construir imagen:

```bash
docker build -t lista-tareas .
```

Ejecutar contenedor:

```bash
docker run -p 80:80 lista-tareas
```

Acceder a `http://localhost`

## Git

El proyecto usa dos ramas:
- `main`: Rama de producción
- `develop`: Rama de desarrollo