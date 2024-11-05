import Styles from '../NavBar/NavBar.module.css';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { logOutUser } from '../../redux/userSlice';


const NavBar=()=>{
    const location=useLocation();
    const navigate=useNavigate()
    const dispatch= useDispatch();
    const userName=useSelector(state=>state.userName)
    console.log(userName)

const handleLogout=()=>{
    dispatch(logOutUser());
    Swal.fire({
        icon:"warning",
        title:"Tu sesión fue cerrada correctamente."
    });
    navigate("/login");
}
return (
<div className={Styles.container}>
    <nav className={Styles.nav}>
            <ul className={Styles.navLinks}>
            <Link to="/home" className={location.pathname === '/home'||location.pathname === '/' ? Styles.activeLink : ''}>HOME</Link>
            <Link to="/about" className={location.pathname === '/about' ? Styles.activeLink : ''}>ABOUT</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? Styles.activeLink : ''}>CONTACTO</Link>
            <Link to="/agendarturno"className={location.pathname === '/agendarturno' ? Styles.activeLink : ''}>AGENDAR TURNO</Link>            
            <Link to="/appointments"className={location.pathname === '/appointments' ? Styles.activeLink : ''}>MIS TURNOS </Link>
            
            </ul>
            <p className={Styles.p}>✅{userName}</p>
            <button className={Styles.btnLogout} onClick={handleLogout}>Logout</button>
    </nav>
</div>
)
}
export default NavBar;