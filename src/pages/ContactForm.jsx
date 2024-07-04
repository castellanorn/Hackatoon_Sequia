import FormInput from '../components/FormInput';
import Button from '../components/Button';

const ContactForm = () => {
    return (
        <div className="container px-5 mx-auto">
            <div className="my-6 md:flex md:space-x-8">
                <section className="mb-8 md:mb-0 md:w-1/2 double-border" style={{ borderColor: 'var(--col-navbar)' }}>
                    <h2 className="p-3 mb-4 text-3xl font-bold text-left text-text">¡Contáctanos! 😎👍</h2>
                    <div className="p-3 space-y-4 text-left text-text">
                        <p>¿Necesitas información o ayuda? Te brindamos información y asistencia sobre servicios y trámites relacionados con las sequías.</p>
                        <p>¿Eres una empresa, ayuntamiento o asociación? Colaboramos contigo para ofrecer y gestionar ayudas frente a las sequías. Puedes contactarnos para solicitar asistencia, registrar documentación o colaborar en soluciones innovadoras.</p>
                        <p className="font-bold">Nuestros Servicios:</p>
                        <ul className="pl-5 space-y-2 list-disc">
                            <li>Información y Asesoramiento: Todo lo que necesitas saber sobre servicios y trámites.</li>
                            <li>Asistencia Personalizada: Te acompañamos en los trámites necesarios.</li>
                            <li>Registro de Documentación: Gestionamos toda la documentación que entregues a la Administración.</li>
                            <li>Colaboración: Trabajamos juntos para ofrecer soluciones frente a las sequías.</li>
                        </ul>
                        <p>¡Estamos aquí para ayudarte y colaborar! Contáctanos para obtener información, asistencia o para colaborar en proyectos y soluciones contra las sequías.</p>
                    </div>
                </section>

                <form className="max-w-lg p-6 pt-20 mx-auto rounded-lg shadow-md bg-body md:w-1/2">
                    <FormInput label="Nombre:" id="name" placeholder="Nombre" />
                    <FormInput label="Email:" id="email" type="email" placeholder="Email" />
                    <FormInput label="¿Qué te interesa? :" id="interest" placeholder="¿Qué te interesa?" />
                    <FormInput label="Mensaje:" id="message" type="textarea" placeholder="Escribe aquí tu mensaje" rows={5} />
                    <Button />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;