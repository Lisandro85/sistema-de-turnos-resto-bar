import { useFormik } from "formik";
import { validateDates } from "../../helpers/validateDates"; 
import { useDispatch, useSelector } from "react-redux";
import { postAppointment } from "../../redux/userSlice"; 
import Swal from "sweetalert2";
import styles from "./../Agendar Turno/AgendarTurno.module.css";
import {useNavigate } from "react-router-dom";


const AgendarTurno = () => {

  const navigate=useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user);


  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },
    validate: validateDates,
    onSubmit: async (values) => {
    try {
        const data = {
            ...values,
            userId: parseInt(userId,10),
        };
        await dispatch(postAppointment(data)).unwrap()
        Swal.fire({
            icon:"success",
            title:"Turno agendado correctamente"
        });
        navigate("/appointments");           
        } catch (error) {
        const errorMessage = error?.response?.data?.details
        Swal.fire({
            icon:"error",
            title:errorMessage
        })    
        }
    },
  });

  return (
    <div>
      <h1 className={styles.title}>Agendar turnos</h1>
      <form onSubmit={formik.handleSubmit}className={styles.form}>
        <div className={styles.conteiner}>
          <label htmlFor="date">Fecha:</label>
          <input
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
            {formik.touched && formik.errors.date && formik.errors.date? (
            <p className={styles.errorP}>{formik.errors.date}</p>
            ):null}

          <label htmlFor="time">Hora:</label>
          <input
            id="time"
            name="time"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          />
          {formik.errors.time && formik.errors.time?(
          <p className={styles.errorP}>{formik.errors.time}</p>
          ):null}
        </div>
        <button 
        className={styles.formBtn} 
        type="submit" disabled={Object.keys(formik.errors).length > 0
          || !formik.values.date || !formik.values.time}>
          Agendar 
        </button>
      </form>
    </div>
  );
};

export default AgendarTurno;
