
import './Team.css';
import MaiteImage from './maite.jpg';

const Team = () => {
    return (
        <div className="team-container">
        <h1>Conoce a nuestro equipo</h1>
        <p>
        Nuestro equipo está formado por profesionales dedicados a brindarte el mejor servicio y apoyo en todos tus trámites y consultas.
        Con una amplia experiencia y un compromiso firme con la atención ciudadana, estamos aquí para ayudarte en cada paso del camino.
        </p>
        <div className="team-member">
        <img src={MaiteImage} alt="Maite G. Blanco" className="team-image" />
        <h2>Maite G. Blanco</h2>
        <h3>Front-end Developer</h3>
        <p>Maite es una experimentada developer full stack.</p>
        </div>
    </div>
);
};

export default Team;
