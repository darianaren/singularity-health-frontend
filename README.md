# Prueba Técnica - Desarrollador Frontend en Singularity Health

Este repositorio contiene la implementación de una aplicación frontend basada en el diseño proporcionado, que consta de tres vistas principales y requisitos de funcionalidad específicos.

## Descripción del Proyecto 📖

La aplicación incluye las siguientes vistas:

1. **Vista de Login**:

   - El formulario es validado, mostrando mensajes cuando los campos inválidos.
   - El botón de inicio de sesión permanecer deshabilitado hasta que el formulario sea válido.
   - Se muestra un estado de carga mientras se realiza el login, y un mensaje de error si el login falla.

2. **Vista de Home**:

   - Al hacer clic en los ítems del menú superior, el texto en el cuerpo de la página cambia.
   - La URL también cambia dinámicamente en función del ítem del menú seleccionado.

3. **Vista 404**:
   - Esta vista se muestra cuando se acceda a una URL inválida.

## API Utilizada 🌐

- **API General**: [https://reqres.in](https://reqres.in)
- **Login API**: [https://reqres.in/api/login](https://reqres.in/api/login)
- **User API**: [https://reqres.in/api/users](https://reqres.in/api/users)

## Características Clave 🛠️

- **Diseño Responsivo**:
  - La aplicación sigue un enfoque **mobile-first**, asegurando una experiencia fluida en dispositivos pequeños y escalabilidad en pantallas más grandes.
- **Manejo de Estado**:

  - Se hace un uso adecuado de los hooks de React (como `useState`, `useEffect`) para gestionar el estado de la aplicación y las interacciones entre vistas.

- **Ruteo**:

  - La aplicación utiliza el sistema de ruteo integrado de Next.js 15 para gestionar la navegación entre vistas.

- **Carga y Manejo de Errores**:
  - Implementa indicadores de carga durante el proceso de login y manejo de errores con mensajes amigables para el usuario.

## Detalles de Desarrollo 📚

### Tecnologías Utilizadas

- **Next.js 15**: Un framework de React para construir aplicaciones renderizadas del lado del servidor (SSR) con ruteo y páginas dinámicas.
- **React**: Una librería de JavaScript para construir interfaces de usuario.
- **CSS Modules**: Para el estilado a nivel de componente y CSS encapsulado.
- **Fetch**: Para manejar las solicitudes HTTP y gestionar las peticiones a servicios externos.

## Configuración del Proyecto 🚀

Para comenzar con el proyecto, sigue los siguientes pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/darianaren/singularity-health-frontend.git
   ```

2. **Instala las dependencias**: Entra al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias.

    ```bash
    cd <directorio-del-proyecto>
    npm install
    ```

3. **Inicia el servidor de desarrollo:** Una vez instaladas las dependencias, inicia el servidor de desarrollo con el siguiente comando.

    ```bash
    npm run dev
    ```

4. **Abre la aplicación en tu navegador:** La aplicación debería estar disponible en tu navegador en la siguiente URL.

    ```bash
    http://localhost:3000
    ```

5. **Verifica el funcionamiento:** Asegúrate de que la aplicación esté funcionando correctamente abriendo el navegador y visitando la URL local. Puedes iniciar sesion con los usuarios proporcionados por la API y cualquier contraseña. Por ejemplo:
  - Usuario:
    ```bash
    eve.holt@reqres.in
    ```

  - Contraseña
    ```bash
    eve123
    ```
