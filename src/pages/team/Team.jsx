
import './Team.css';
import CardTeam  from '../../components/CardTeam';

const Team = ({children}) => {
    return (
        <div className="text-center p-5">
        <h1>Conoce a nuestro equipo</h1>
        <p>
        Nuestro equipo está formado por profesionales dedicados a brindarte el mejor servicio y apoyo en todos tus trámites y consultas.
        Con una amplia experiencia y un compromiso firme con la atención ciudadana, estamos aquí para ayudarte en cada paso del camino.
        </p>

    <CardTeam name = 'Maite' image = '../../assets/images/maite.jpg' roll = 'Front-end dev' description = "Lorem ipsum bla bla bla" />
    <CardTeam name = 'Jess' image = '../../assets/images/maite.jpg' roll = 'Front-end dev' description = "Lorem ipsum bla bla bla" />
    <CardTeam name = 'Rosse' image = '../../assets/images/maite.jpg' roll = 'Front-end dev' description = "Lorem ipsum bla bla bla" />

    </div>
);
};

export default Team;


