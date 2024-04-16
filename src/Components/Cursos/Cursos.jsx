import './Cursos.css';
import Agus2 from './img/agus2.jpeg';

const Cursos = () => {

    const phoneNumber = '+541163665379';
    const message = 'Hola Agus! Quiero anotarme a tu plan de entrenamiento!';

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      };

  return (
    <div id='planes' className='grid-container'>
        <div className='img-container'>
            <img className='agus-img' src={Agus2} alt="agus" />
        </div>


        <div>
            <div className='card'>
                <h4>plan estandar</h4>
                <p className='precio'>$6000</p>
                <p>1 mes asesoria</p>
                <p>- Rutina de entrenamiento personalizada.</p>
                <p>- Plan de alimentación personalizado por el área de Nutrición.</p>
                <p>- Protocolo de suplementación natural (en el caso que se quiera).</p>
                <p>- Seguimiento y soporte ONLINE.</p>
                <p>- Acceso a biblioteca de ejecución de ejercicios.</p>
                <button onClick={handleWhatsAppClick}>sumarme ahora</button>
            </div>

            <div className='card'>
                <h4>plan medium</h4>
                <p className='precio'>$10.000</p>
                <p>2 meses de asesoría</p>
                <p>- Rutina de entrenamiento personalizada.</p>
                <p>- Plan de alimentación personalizado por el área de Nutrición.</p>
                <p>- Protocolo de suplementación natural (en el caso que se quiera).</p>
                <p>- Seguimiento y soporte ONLINE.</p>
                <p>- Acceso a biblioteca de ejecución de ejercicios.</p>
                <p>- 3 ebooks de REGALO que te van a potenciar al máximo.</p>
                <button onClick={handleWhatsAppClick}>sumarme ahora</button>
            </div>

            <div className='card'>
                <h4>plan premium</h4>
                <p className='precio'>$15.000</p>
                <p>1 meses de asesoría</p>
                <p>- Rutina de entrenamiento personalizada.</p>
                <p>- Plan de alimentación personalizado por el área de Nutrición.</p>
                <p>- Protocolo de suplementación natural (en el caso que se quiera).</p>
                <p>- Seguimiento y soporte ONLINE.</p>
                <p>- Acceso a biblioteca de ejecución de ejercicios.</p>
                <p>- 3 ebooks de REGALO que te van a potenciar al máximo.</p>
                <p>- 1 Charla por ZOOM (Opcional, por mes)</p>
                <button onClick={handleWhatsAppClick}>sumarme ahora</button>
            </div>
        </div>
    </div>
  )
}

export default Cursos