
import TeamSection from '../components/TeamSection';
import maiteImage from '../assets/images/maite.jpg';
import nubenejoImage from '../assets/images/nubenejo.jpg'
import naminéImage from '../assets/images/naminé.jpg'
import gunterImage from '../assets/images/gunter.jpg'
import norbertImage from '../assets/images/norbert.png'
import donpatchImage from '../assets/images/donpatch.png'
import donpatch2Image from '../assets/images/donpatch2.png'

const Team = () => {
    return (
        <div className="container px-5 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center">Conoce a Nuestro Equipo</h1>
            <p className="mb-8 text-center">
                Nuestro equipo está formado por profesionales dedicados a brindarte el mejor servicio y apoyo en todos tus trámites y consultas. Con una amplia experiencia y un compromiso firme con la atención ciudadana, estamos aquí para ayudarte en cada paso del camino.
            </p>
            <TeamSection
                image={maiteImage}
                name="Maite"
                roll="Analista de datos"
                description="Maite se especializa en el monitoreo y análisis en tiempo real del estado del agua y las condiciones de sequía."
            />
            <TeamSection
                image={nubenejoImage}
                name="Rossemary"
                roll="Ingeniera de software"
                description="Rossemary desarrolla herramientas tecnológicas aplicando principios de green software para asegurar soluciones sostenibles y eficientes."
            />
            <TeamSection
                image={naminéImage}
                name="Jessica"
                roll="Especialista en colaboración"
                description="Jessica facilita la colaboración entre ciudadanos, empresas y ayuntamientos para maximizar el impacto en la conservación del agua."
            />
            <TeamSection
                image={gunterImage}
                name="Ivan"
                roll="Desarrollador de soluciones"
                description="Ivan crea soluciones prácticas y eficientes frente a las sequías, asegurando una tecnología innovadora."
            />
            <TeamSection
                image={donpatch2Image}
                name="Eyad"
                roll="Experto en experiencia de usuario"
                description="Eyad diseña experiencias de usuario fluidas e innovadoras, promoviendo el uso responsable del agua."
            />
            <TeamSection
                image={norbertImage}
                name="Norbert"
                roll="Ingeniero de infraestructura"
                description="Norbert construye sistemas escalables y seguros para optimizar el monitoreo y análisis del agua en tiempo real."
            />
            <TeamSection
                image={donpatchImage}
                name="Miguel Ángel"
                roll="Gestor de datos"
                description="Miguel Ángel integra bases de datos y APIs, gestionando la información de manera eficiente para informar y innovar en la conservación del agua."
            />
            </div>
            
    );
};

export default Team;



