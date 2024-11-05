import {Routes,Route, useLocation, useNavigate} from "react-router-dom"
import Home from "./view/Home/Home";
import Register from "./view/Register/Register"
import Login from "./view/Login/Login"
import About from "./view/About/About";
import AgendarTurno from "./view/Agendar Turno/agendarTurno";
import MisTurnos from "./view/MisTurnos/MisTurnos";
import Contacto from "./view/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import "./App.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



function App() {
  const navigate=useNavigate();
  const location=useLocation();
  const userId=useSelector(state=>state.user);
  const [isNotFound,setIsNotfound]=useState(false);
  
useEffect(()=>{
  if(userId && location.pathname==="/login" || userId && location.pathname===("/register")){
    navigate("/")
  }else if (!userId && location.pathname !== "/login" 
          && location.pathname !== "/register"){
          navigate("/login")
  }
},[location.pathname]);

useEffect(()=>{
const validateRoutes=["/","/login","/register","/appointments","/agendarturno","/home","/contact","/about"]
    if(!validateRoutes.includes(location.pathname))setIsNotfound(true)
    else setIsNotfound(false)
},[location.pathname]);
  
  return(
    <>  
    {!userId?( 
      <main>
      <Routes>
          <Route path="/login" element={<Login/> }></Route>
          <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </main>
      ):(
      <>  
        {!isNotFound && (
          <header>
            <NavBar />
          </header>
        )}
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/appointments" element={<MisTurnos />}></Route>
            <Route path="/agendarturno" element={<AgendarTurno />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contacto />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes><Footer />
          </main>
          </>
      )}
      </>
  ) 
}

export default App
