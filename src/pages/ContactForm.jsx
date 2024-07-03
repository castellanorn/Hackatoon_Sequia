import FormInput from '../components/common/FormInput';

const ContactForm = () => {
    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="md:flex md:space-x-8">
            <section className="m-4 mb-8 md:mb-0 md:w-1/2 double-border" style={{ borderColor: 'var(--col-navbar)' }}>
            <h2 className="mt-6 mb-4 text-2xl font-bold text-left text-text">Contáctanos! 😎👍</h2>
            <p className="mb-8 text-left text-text">
            Para informarte: En nuestras oficinas de atención ciudadana y en los servicios territoriales de los departamentos de la Generalitat, te brindamos información sobre servicios y trámites.<br /> <br />
            Para tramitar con ayuda: Realizamos los trámites que necesites contigo en nuestras oficinas de atención ciudadana.<br /> <br />
            Para registrar documentación: Toda la documentación que entregues a la Administración debe ser registrada. Puedes realizar este proceso en nuestras oficinas.<br /> <br />
            ¡Estamos aquí para ayudarte!
            </p>
            </section>
            
            <form className="max-w-lg p-6 mx-auto rounded-lg shadow-md bg-body md:w-1/2">
                <FormInput label="Nombre y Apellidos:" id="name" placeholder="Nombre y Apellidos" />
                <FormInput label="Email:" id="email" type="email" placeholder="Email" />
                <FormInput label="¿Qué te interesa? :" id="interest" placeholder="¿Qué te interesa?" />
                <FormInput label="Mensaje:" id="message" type="textarea" placeholder="Escribe aquí tu mensaje" rows={5} />
                <div className="flex items-center justify-center">
                    <button
                        className="px-12 py-2 font-bold var(--col-text) rounded-3xl bg-button focus:outline-none focus:shadow-outline"
                        type="button"
                        style={{ boxShadow: '0 5px 5px rgba(0, 0, 0, 0.3)' }}
                    >
                        Enviar
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ContactForm;