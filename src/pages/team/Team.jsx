
import CardTeam from '../../components/CardTeam';

const Team = () => {
    return (
    <div className="bg-blue-800 text-white min-h-screen flex flex-col items-center justify-center p-5">
        <h1 className="text-2xl font-bold mb-4">Conoce a nuestro equipo</h1>
        <p className="text-center max-w-lg mb-8">
        Nuestro equipo está formado por profesionales dedicados a brindarte el mejor servicio y apoyo en todos tus trámites y consultas. Con una amplia experiencia y un compromiso firme con la atención ciudadana, estamos aquí para ayudarte en cada paso del camino.
        </p>

        <CardTeam name="Maite" image="../../assets/images/maite.jpg" roll="Desarrolladora Frontend" description="Lorem ipsum bla bla bla" />
        <CardTeam name="Jess" image="../../assets/images/jess.jpg" roll="Desarrolladora Frontend" description="Lorem ipsum bla bla bla" />
        <CardTeam name="Rosse" image="../../assets/images/rosse.jpg" roll="Desarrolladora Frontend" description="Lorem ipsum bla bla bla" />
    </div>
    );
};

export default Team;



