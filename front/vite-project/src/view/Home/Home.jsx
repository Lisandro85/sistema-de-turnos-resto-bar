import styles from "../Home/Home.module.css";
import imageUno from "../../assets/Images/imgResto1.jpg";
import imageDos from "../../assets/Images/imgResto2.jpg";
import imageTres from "../../assets/Images/imgResto3.jpg";

const Home = () => {
    return (
        <div>
            <h1 className={styles.title}>RESTO-BAR PAMPA</h1>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img 
                        src={imageUno} 
                        alt="Imagen 1" 
                        className={styles.image}
                    />
                    <div className={styles.containerP}>
                        <p>"Disfruta de un ambiente cálido y
                             <br /> amigable desde el primer momento".</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <img 
                        src={imageDos} 
                        alt="Imagen 2" 
                        className={styles.image}
                    />
                    <div className={styles.containerP}>
                        <p>"Deliciosa pasta casera, preparada con ingredientes <br />
                        frescos y sabores auténticos"</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <img 
                        src={imageTres} 
                        alt="Imagen 3" 
                        className={styles.image}
                    />
                    <div className={styles.containerP}>
                        <p>"Explora nuestra variada selección de cocteles y <br /> 
                        vinos para complementar tu comida"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


