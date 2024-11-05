import styles from "./../About/About.module.css"

const About=()=>{
    return(
        <div>
            <h1 className={styles.title}>Sobre Nosotros:</h1>
            <div>
                <p className={styles.containerP}>Bienvenidos a Resto-Bar Pampa, donde la buena comida y un ambiente acogedor se unen para ofrecerte una experiencia única e inolvidable. Nuestro menú ha sido cuidadosamente diseñado para combinar sabores tradicionales y modernos, presentando una variedad que va desde tapas creativas hasta platos principales sustanciosos. Cada uno de nuestros platillos está preparado con ingredientes frescos de alta calidad, asegurando que cada bocado sea una delicia para tus sentidos.

En Resto-Bar Pampa, entendemos que cada ocasión es especial. Ya sea que estés planeando una cena con amigos, una reunión familiar o una celebración significativa, nuestro espacio es el lugar perfecto para disfrutar de momentos inolvidables. Con un servicio amable y atento, nos aseguraremos de que tu visita sea placentera desde el momento en que cruzas nuestras puertas.

Además, ofrecemos una selección de bebidas que complementan perfectamente tu comida, desde vinos finos hasta cócteles refrescantes, para que tu experiencia sea aún más completa. En Resto-Bar Pampa, no solo te invitamos a comer, sino a vivir una experiencia culinaria que dejará un recuerdo duradero. <br /> ¡Te esperamos con los brazos abiertos!</p>
            </div>
        </div>

    )
};

export default About;