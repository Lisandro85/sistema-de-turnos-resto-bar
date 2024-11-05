import { useDispatch } from "react-redux";
import styles from "../CardTurnos/CardTurnos.module.css";
import Swal from "sweetalert2";
import { cancelAppointment } from "../../redux/userSlice";

const CardTurnos=({turno:{id,date,time,status}})=>{
  
  const distpach=useDispatch()
  const handleCancel=async()=>{
    try {
      await distpach(cancelAppointment(id)).unwrap()
      Swal.fire({
        icon:"warning",
        color:"red",
        title:"Turno cancelado"
      });
      
    } catch (error) {
      Swal.fire({
        icon:"error",
        title:"Error al cancelar el turno"
      });
    }
  };

const fechaOriginal =date;
const fechaDate = new Date(fechaOriginal);

const dia = String(fechaDate.getDate()).padStart(2, '0'); 
const mes = String(fechaDate.getMonth() + 1).padStart(2, '0'); 
const anio = fechaDate.getFullYear(); 

const fechaFormateada = `${dia}-${mes}-${anio}`;

  return(
  <div className={styles.card}>
    <div className={styles.column}>
    <p><span>Número de turno:</span><br /> {id}</p>
    <p><span>Fecha:</span> <br /> {fechaFormateada}</p>
    </div>
    <div>
    <p><span>Hora:</span> <br /> {time}</p> 
    <p className={status === "active" ? styles.statusActive : styles.statusCancelled}>
    <span>Estado:</span> <br /> {status}
    </p>
    </div>

    <button className={styles.cancelBtn}
    onClick={handleCancel}
    disabled={status==="cancelled"}
    >Cancelar</button>
</div>
    ) 
}
export default CardTurnos;