import { validateLogin } from "../../helpers/validateLogin";
import Styles from "../Login/Login.module.css";
import {useFormik} from "formik";
import Swal from "sweetalert2";
import { loginUser } from "../../redux/userSlice";
import {useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate()
    const dispatch=useDispatch();

    const formik= useFormik({
        initialValues:{
            username:"",
            password:""
        },
    validate: validateLogin,
    onSubmit:async(values)=>{
        setLoading(true);
        try {
            await dispatch(loginUser(values)).unwrap()
            navigate("/home")
            Swal.fire({
                icon:"success",
                title:"Usuario logueado con éxito",
            }); 
        } catch (error) {
            Swal.fire({
                icon:"error",
                title:`${error.response.data.details}`,
                            text:"Intentelo nuevamente"
             });
        }finally{
            setLoading(false);
        }
     }
});
    
     
return (
    <>
{loading ? (
<div className={Styles.loading}>Cargando...</div>
) : (
<form onSubmit={formik.handleSubmit} className={Styles.form}>
    <h1 className={Styles.title}>Ingrese sus credenciales</h1>
    <div className={Styles.conteiner}>
        <label>Nombre de Usuario:</label>
        <input
            name="username"
            type="text"
            placeholder="Ingrese su nombre de usuario"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        <div className={Styles.errors}>
            {formik.touched.username && formik.errors.username ? (
                <p className={Styles.errorP}>{formik.errors.username}</p>
            ) : null}
        </div>

        <label>Contraseña:</label>
        <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
        />
        <div className={Styles.errors}>
            {formik.errors.password ? (
                <p className={Styles.errorP}>{formik.errors.password}</p>
            ) : null}
        </div>

        <label>Aún no tienes una cuenta? 
            <Link to={"/register"}>Regístrate!</Link>
        </label>
    </div>
    <button
        className={Styles.formButton}
        type="submit"
        disabled={
            Object.keys(formik.errors).length > 0 ||
            !formik.values.username || !formik.values.password
        }
    >
        Login
    </button>
</form>
)}
</>
);
};

export default Login;

