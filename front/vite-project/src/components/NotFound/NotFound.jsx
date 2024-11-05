import Styles from "../NotFound/NotFound.module.css"
import { Link } from "react-router-dom";
const NotFound=()=>{
    return (
        <div className={Styles['not-found-container']}>
        <h1 className={Styles['not-found-title']}>404</h1>
        <p className={Styles['not-found-text']}>Oops... la página que buscas no está disponible.</p>
        <Link to="/" className={Styles['not-found-button']}>Volver al inicio</Link>
      </div>
    );
};
    
export default NotFound;