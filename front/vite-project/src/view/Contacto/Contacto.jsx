import Style from "../Contacto/Contacto.module.css"
const Contacto=()=>{
return(
    <div>
        <h1 className={Style.title}>¡ NO DUDES EN CONTACTARNOS !</h1>
        <div className={Style.parrafo}>
        <p>En Resto-Bar Pampa, estamos aquí para ayudarte. Si tienes alguna pregunta, comentario o deseas hacer una reserva, no dudes en ponerte en contacto con nosotros. Nuestro equipo está listo para brindarte la mejor atención y asegurarse de que tu experiencia con nosotros sea inolvidable.</p>
        </div>

        <div className={Style.datos}>
            <h2>Dirección: <span> Calle Falsa 123, Santa Rosa,La Pampa, Argentina</span> </h2>
            <h2>Teléfono: <span>(123) 456-7890</span> </h2>
            <h2>Correo Electrónico: <span>contacto@restobarpampa.com</span></h2>
        </div>
        
        <div className={Style.horarioReserva}>
            <h3>Horarios:</h3>
            <ul>
                <li>Domingo, Lunes y Martes: Cerrado</li>
                <li>Miércoles a Sábado: Abierto de 19:00 a 23:30 hs</li>
            </ul>
        </div>
    

        <div className={Style.horarioReserva}>
        <h3>Reservas:</h3>
            <ul>
                <li>Solo los usuarios registrados pueden solicitar un turno.</li>
                <li>Los turnos se pueden solicitar 24 horas antes y no más de 15 días de   anticipación.</li>
                <li>Los horarios para agendar un turno son entre las 19:00 y las 22:00 hs.</li>
                
            </ul>
        </div>

    </div>
)
};

export default Contacto;