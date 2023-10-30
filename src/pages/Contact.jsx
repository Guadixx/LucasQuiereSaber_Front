import './Contact.css';
import { useState } from 'react';

export const Contacto = () => {
  const [inputValues, setInputValues] = useState({
    campo1: '',
    campo2: '',
    campo3: '',
  });

  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Manejador de eventos para actualizar el estado cuando los campos cambien
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Manejador de eventos para el botón de enviar
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se recargue la página

    // Validar el correo electrónico
    if (!inputValues.campo2.includes('@')) {
      setEmailError('Correo electrónico no válido');
      return; // Detener el envío del formulario si la validación falla
    }

    // Validar la longitud del mensaje
    if (inputValues.campo3.length > 500) {
      setMessageError('El mensaje no puede tener más de 500 caracteres');
      return; // Detener el envío del formulario si la validación falla
    }

    // Si ambas validaciones pasan, puedes continuar con tu lógica de envío
    console.log('Valores enviados:', inputValues);

    // Resetea los valores de los campos a blanco y los errores
    setInputValues({
      campo1: '',
      campo2: '',
      campo3: '',
    });
    setEmailError('');
    setMessageError('');
  };

  return (
    <div className="contacto-container">
      <form onSubmit={handleSubmit}>
        <h4>Contáctanos</h4>

        <input
          name="campo1"
          type="text"
          placeholder="Nombre"
          className="input-name"
          value={inputValues.campo1}
          onChange={handleInputChange}
        />

        <input
          name="campo2"
          type="text"
          placeholder="E-mail"
          className="input-mail"
          value={inputValues.campo2}
          onChange={handleInputChange}
        />
        {emailError && <p className="error_email">{emailError}</p>}

        <input
          name="campo3"
          type="text"
          placeholder="Tu Mensaje"
          className="input-mesaje"
          value={inputValues.campo3}
          onChange={handleInputChange}
        />
        {messageError && <p className="error_message">{messageError}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Contacto;
