export const validateRegister = (input) => {
    const errors = {};


const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!input.name.trim()) {
        errors.name = "El nombre es requerido";
    } else if (input.name.length < 4) {
        errors.name = "El nombre debe tener al menos 4 caracteres";
    } else if (!nameRegex.test(input.name)) {
        errors.name = "El nombre no puede contener números ni caracteres especiales";
    }


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.email.trim()) {
        errors.email = "El correo electrónico es requerido";
    } else if (!emailRegex.test(input.email)) {
        errors.email = "El correo electrónico no es válido";
    }


    if (!input.birthdate) {
        errors.birthdate = "La fecha de nacimiento es requerida";
    } else {
const birthDate = new Date(input.birthdate);
const today = new Date();
const age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
const dayDiff = today.getDate() - birthDate.getDate();
    
    if (isNaN(birthDate.getTime())) {
        errors.birthdate = "Fecha de nacimiento no válida";
    } else if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
        errors.birthdate = "Debes ser mayor de 18 años";
    }
}

const dniRegex = /^\d{8}$/;
    if (!input.nDni.trim()) {
        errors.nDni = "El número de DNI es requerido";
    } else if (!dniRegex.test(input.nDni)) {
        errors.nDni = "El número de DNI debe tener exactamente 8 dígitos";
    }

    if (!input.username.trim()) {
        errors.username = "El nombre de usuario es requerido";
    } else if (!/^[a-zA-Z0-9]+$/.test(input.username)) {
        errors.username = "El nombre de usuario debe ser alfanumérico (solo letras y números)";
    } else if (input.username.length < 8) {
        errors.username = "El nombre de usuario debe tener al menos 8 caracteres";
    } else {
        delete errors.username; 
    }

    if (!input.password.trim()) {
        errors.password = "La contraseña es requerida";
    } else if (input.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/(?=.*[A-Z])/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos una letra mayúscula";
    } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos un número";
    } else if (!/(?=.*[!@#$%^&*])/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos un carácter especial";
    } else if (!/^[a-zA-Z0-9!@.#$%^&*]+$/.test(input.password)) {
        errors.password = "La contraseña solo puede contener letras, números y ciertos caracteres especiales";
    } else {
        delete errors.password; 
    }

return errors;
};
