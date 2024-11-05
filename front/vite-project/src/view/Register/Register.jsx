import Styles from "../../view/Register/Register.module.css";
import { validateRegister } from "../../helpers/validateRegister";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { registerUser } from "../../redux/userSlice";

const Register = () => {

const dispatch=useDispatch()
const navigate=useNavigate();
const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    },
    validate: validateRegister,
    onSubmit: async (values) => {
        try {
            await dispatch(registerUser(values)).unwrap();
            Swal.fire({
                icon: "success",
                title: "Usuario registrado con éxito"
            });
            navigate('/login'); 
        } catch (error) {
            if (error.response) {
                if (error.response.data.details.includes("email")) {
                    Swal.fire({
                        icon: "error",
                        title: `Ya existe un usuario con el mail: ${formik.values.email}`,
                        text: "Intente con otro mail"
                    });
                } else if (error.response.data.details.includes("usuario")) {
                    Swal.fire({
                        icon: "error",
                        title: `Ya existe el usuario: ${formik.values.username}`,
                        text: "Intenta con otro nombre de usuario"
                    });
                } else if (error.response.data.details.includes("nDni")) {
                    Swal.fire({
                        icon: "error",
                        title: `Ya existe un usuario con el DNI: ${formik.values.nDni}`,
                        text: "Intenta con otro número de DNI"
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error desconocido",
                        text: "Por favor, inténtelo más tarde."
                    });
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error de conexión",
                    text: "No se pudo conectar al servidor. Por favor, inténtelo más tarde."
                });
            }
        }
    }
});

     
return (
<form onSubmit={formik.handleSubmit} className={Styles.form}>
<h1 className={Styles.title}>Registro de Nuevo Usuario:</h1>
<div className={Styles.conteiner}>

    <div className={Styles.leftRight}>
    <div className={Styles.conteinerLeft}>
    <label>Nombre</label>
    <input
        name="name"
        type="text"
        placeholder="Ejem: Carlos González..."
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    />
    {formik.touched.name && formik.errors.name&&formik.errors.name?
    (<p className={Styles.errorP}>{formik.errors.name}</p>):null}

    <label>Número de DNI:</label>
    <input
        name="nDni"
        type="text"
        placeholder="Ejem:35123123..."
        value={formik.values.nDni}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    />
    { formik.touched.nDni &&formik.errors.nDni&&formik.errors.nDni?
    (<p className={Styles.errorP}>{formik.errors.nDni}</p>):null}
    </div>

    <div className={Styles.conteinerRight}>
    <label>Email:</label>
    <input
        name="email"
        type="text"
        placeholder="Ejem: Cgonzalez@mail.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    />
    {formik.touched.email && formik.errors.email&&formik.errors.email?
    (<p className={Styles.errorP}>{formik.errors.email}</p>):null}

    <label>Fecha de Nacimiento:</label>
    <input
        name="birthdate"
        type="date"
        value={formik.values.birthdate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    />
    {formik.touched.birthdate && formik.errors.birthdate && formik.errors.birthdate?
    (<p className={Styles.errorP}>{formik.errors.birthdate}</p>):null}
    </div>

    </div>

    <h3>Establezca su nombre de usuario y contraseña:</h3>
    <div className={Styles.userPsw}>
        <label>Nombre de usuario:</label>
        <input
            name="username"
            type="text"
            placeholder="Ejem:Carlos85..."
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && formik.errors.username?
    (<p className={Styles.errorP}>{formik.errors.username}</p>):null}

        <label>Contraseña:</label>
        <input
            name="password"
            type="password"
            placeholder="Ingrese hasta 8 caracteres"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
    {formik.errors.password && formik.errors.password?
    (<p className={Styles.errorP}>{formik.errors.password}</p>):null}
        </div>
        <label>Ya tienes una cuenta? 
        <Link to={"/login"}>Login!</Link>
    </label>
    </div>

<button className={Styles.formButton}
type="submit"
disabled={
    Object.keys(formik.errors).length>0||
    !formik.values.name ||
    !formik.values.email ||
    !formik.values.nDni ||
    !formik.values.birthdate ||
    !formik.values.username ||
    !formik.values.password
}
>Registrarse</button>
</form>
);
};

export default Register;
