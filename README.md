# 🍽️ **Sistema de Turnos Resto-Bar**  
Aplicación para gestionar turnos y reservas en restaurantes. Permite a los clientes hacer reservas en tiempo real y facilita la gestión eficiente de los turnos por parte del personal del restaurante.

---

## 🚀 **Características Principales**

- **Reservas en Tiempo Real**: Los clientes pueden hacer reservas instantáneas según la disponibilidad de mesas.
- **Gestión de Clientes**: Los administradores pueden ver y gestionar las reservas de los clientes.
- **Interfaz de Usuario Intuitiva**: Rápida, sencilla y accesible para el personal y los clientes.
- **Notificaciones**: Confirmación de reserva enviada al cliente.
- **Historial de Reservas**: Acceso fácil al historial de reservas pasadas.

---

## 🛠 **Tecnologías Utilizadas**

| **Tecnología** | **Descripción** |
|----------------|-----------------|
| **Express**    | Framework minimalista para Node.js para construir aplicaciones web rápidas. |
| **PostgreSQL** | Base de datos relacional y escalable. |
| **TypeScript** | Superconjunto de JavaScript con tipado estático para mayor seguridad y desarrollo más eficiente. |
| **Sequelize**  | ORM de Node.js para trabajar con bases de datos SQL. |
| **React**      | Biblioteca para construir interfaces de usuario interactivas. |
| **CSS**        | Estilos básicos y diseño de la interfaz de usuario. |

---

## 📦 **Cómo Ejecutar el Proyecto**

Asegúrate de tener instalados los siguientes programas:  
- [Node.js](https://nodejs.org/) (v16 o superior)  
- [PostgreSQL](https://www.postgresql.org/) (v13 o superior)  
- [Git](https://git-scm.com/)  


```bash
1️⃣ Clona el Repositorio
git clone https://github.com/Lisandro85/sistema-de-turnos-resto-bar

2️⃣ Configura las Variables de Entorno
Backend:
Crea un archivo .env en la raíz del directorio backend y agrega las siguientes variables de configuración:

env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_de_datos
PORT=5000
Frontend (opcional):
Crea un archivo .env en la raíz del directorio frontend y agrega la siguiente variable de configuración:

env
REACT_APP_API_URL=http://localhost:5000
3️⃣ Instala las Dependencias para el Backend
Navega a la carpeta backend e instala las dependencias necesarias:
npm install
4️⃣ Instala las Dependencias para el Frontend
Navega a la carpeta frontend e instala las dependencias necesarias:
npm install
5️⃣ Inicia el Servidor Backend
Inicia el servidor backend:
npm run start
El backend estará corriendo en http://localhost:5000.

6️⃣ Inicia el Servidor Frontend
Navega al directorio frontend y ejecuta el servidor de desarrollo:
npm start
El frontend estará corriendo en http://localhost:3000.

🛠 Comandos Útiles

npm run start      Inicia el servidor en modo desarrollo.
npm run build      Compila el proyecto para producción.
npm run migrate    Ejecuta las migraciones de base de datos.
📧 Contacto
Para preguntas o sugerencias, puedes contactarme:
📩 lisandrobedotti@hotmail.com
