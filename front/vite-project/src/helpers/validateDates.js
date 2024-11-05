export const validateDates=(input)=>{
    const errors={};

if (!input.date) {
  errors.date = "La fecha es obligatoria.";
} else {
  const currentDate = new Date();
  const selectedDate = new Date(input.date);
  const dayOfWeek = selectedDate.getDay(); 
  const minDate = new Date(currentDate);
  minDate.setDate(currentDate.getDate() + 1);
  const maxDate = new Date(currentDate);
  maxDate.setDate(currentDate.getDate() + 15); 

  if (selectedDate < currentDate) {
      errors.date = "La fecha debe ser al menos 24 horas de anticipación.";
  } else if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) {
      errors.date = "No se pueden agendar turnos los días domingo, lunes o martes.";
  } else if (selectedDate < minDate) {
      errors.date = "La fecha debe ser al menos 24 horas de anticipación.";
  } else if (selectedDate > maxDate) {
      errors.date = "Solo se pueden agendar turnos hasta 15 días de anticipación.";
  }
}


if (!input.time) {
  errors.time = "La hora es obligatoria.";
} else {
  const selectedTime = new Date(`1970-01-01T${input.time}:00`);
  const openingTime = new Date(`1970-01-01T19:00:00`); 
  const closingTime = new Date(`1970-01-01T22:00:00`); 

  if (selectedTime < openingTime || selectedTime > closingTime) {
      errors.time = "La hora debe estar entre las 19:00 y las 22:00.";
  }
}
    return errors;
};