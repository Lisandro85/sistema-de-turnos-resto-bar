import styles from "./MisTurnos.module.css";
import {useEffect} from "react";
import CardTurnos from "../../components/CardTurnos/CardTurnos";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../redux/userSlice";

const MisTurnos=()=>{

const dispatch=useDispatch()
const userId=useSelector((state)=>state.user)
const userAppointments=useSelector((state)=>state.userAppointments)

useEffect(() => {
  dispatch(getAppointments(userId))
},[dispatch])

        return (
          <div className={styles.container}>
            <h1  className={styles.title}>Mis turnos:</h1>
            <div className={styles.cardContainer}>

            {userAppointments && userAppointments.length > 0 ? (
            userAppointments.map((turno) => (
            <CardTurnos key={turno.id} turno={turno} />))
            ) : (<h1>No hay turnos agendados</h1> )}
            </div>
          </div>
      );       
};
          
export default MisTurnos;