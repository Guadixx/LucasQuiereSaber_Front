import './Projects.css';
import { useState, useEffect, useRef } from "react";

export const Projects = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false); // Nuevo estado para el tercer div
  const appRef = useRef(null); // Referencia al elemento raíz

  const toggleDiv = () => {
    if (showDiv1) {
      // Si estás en el primer div, muestra el segundo div
      setShowDiv1(false);
      setShowDiv2(true);
    } else if (showDiv2) {
      // Si estás en el segundo div, muestra el tercer div
      setShowDiv2(false);
      setShowDiv3(true);
    } else {
      // Si estás en el tercer div, muestra el primer div
      setShowDiv1(true);
      setShowDiv3(false);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault(); // Evita el desplazamiento en la página
        toggleDiv();
      }
    };

    // Agrega un event listener para la tecla "ArrowDown" cuando se monta el componente
    window.addEventListener("keydown", handleKeyDown);

    // Limpia el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleDiv]);
  return (
    <div
      className="app_proyectos"
      ref={appRef}
      tabIndex={0} 
    >

      <div className={`content ${showDiv1 ? "active" : ""}`}>
        <img
          src="https://res.cloudinary.com/dpidlverd/image/upload/v1695903079/replica/Ilustracion-Lucas-1_z1wyq1.png"
          alt="Lucas jugando con una roca"
        ></img>
        <div className="proyecto_texto">
          <p>
            LUCAS QUIERE SABER es una propuesta que busca darles las
            HERRAMIENTAS INICIALES mediante un formato audiovisual adaptado a
            sus tiempos y posibilidades.
          </p>
          <p>
            De esta manera, pudimos entender que era en la SIMPLEZA donde
            debíamos poner foco, tanto en lo académico, lo creativo y lo
            audiovisual.
          </p>
        </div>
        <button className="arrow" onClick={toggleDiv}>
        {showDiv3 ? "↑" : "↓"}
      </button>
      </div>

      <div className={`content ${showDiv2 ? "active" : ""}`}>
        <div className="proyecto_texto">
          <p>
            Lucas tiene cuatro años, es argentino y vive en un barrio. Como la
            mayoría de los niños a esa edad, no perdió la ino- cencia ni la
            esperanza. Su contextura es mediana, su color de piel es marrón
            claro y su cabello morocho, un poco desprolijo producto de tanta
            aventura.
          </p>
          <p>
            Tiene un mundo interior muy grande en donde todo es posible, con los
            recursos que tiene a su alcance logra cosas extraordinarias. Dentro
            de una caja de cartón cabe el universo entero. Es valiente y muy
            mandado, le encantan los nuevos desafíos y aprender de cuando se
            equivoca. Tiene un sentido del humor que le permite reírse de sí
            mismo. No se da por vencido fácilmente y a veces esas ganas de
            alcanzar algo hacen que sea un poco atolondrado generando momentos
            de risas.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dpidlverd/image/upload/v1696242489/replica/Ilustracion-Lucas-2_mgz5rr.png"
          alt="Lucas apuntando a una caja"
        ></img>
        <button className="arrow" onClick={toggleDiv}>
        {showDiv3 ? "↑" : "↓"}
      </button>
      </div>
      <div className={`content ${showDiv3 ? "active" : ""}`}>
        <img
          src="https://res.cloudinary.com/dpidlverd/image/upload/v1696244020/replica/Ilustracion-Lucas-3_qi6mus.png"
          alt="Lucas apuntando a una caja"
        ></img>
        <div className="proyecto_texto">
          <p>
            Pepi es un divertido personaje que vive dentro de una simple caja de
            cartón, y cada vez que sale de ella comienza una nueva aventura. Su
            saber es infinito, y su misión en la tierra es estimular a Lucas en
            la emocionante experiencia de aprender. Es el vehículo por el cual
            Lucas accede al CONOCIMIENTO.
          </p>
          <p>
            Ya sea por imitación o por enfrentar nuevos desafíos, Lucas logra
            cosas maravillosas junto a Pepi, en un mundo que está empezando a
            descubrir. Su aspecto es gracioso, combina ternura con un poco de
            picardía, que lo hace muy versátil frente a cada situación.
          </p>
          <p>
            Pepi pertenece al mundo de las ideas, no tiene edad ni género.
            Entonces, ¿Qué es? ¿Un muñeco, un monstruito, un juguete, una
            mascota, un personaje de otro planeta?... no se sabe, pero dentro de
            su pequeño cuerpo Pepi tiene mucha energía concentrada. Por eso cada
            vez que sale de su caja, puede pasar cualquier cosa.
          </p>
        </div>
        <button className="arrow" onClick={toggleDiv}>
        {showDiv3 ? "↑" : "↓"}
      </button>
      </div>
    </div>
  );
}
export default Projects;