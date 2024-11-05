export const validateLogin=(input)=>{
    const errors={};


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