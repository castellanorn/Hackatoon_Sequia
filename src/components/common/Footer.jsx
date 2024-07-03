import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="flex-none w-full px-2 py-4 mt-auto bg-footer text-text md:px-8">
            <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
                <p className="text-sm">
                    <a href="#contact" className="hover:underline">Contáctanos</a> | <a href="#team" className="hover:underline">Equipo</a>
                </p>
                <div className="mb-4 text-center md:text-left md:mb-0">
                    <p className="m-2 text-sm">sequiatron.com © 2024 sequiatron.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com" aria-label="Instagram" className="text-2xl text-text">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com" aria-label="Facebook" className="text-2xl text-text">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com" aria-label="Twitter" className="text-2xl text-text">
                        <FaTwitter />
                    </a>
                    <a href="https://www.github.com" aria-label="GitHub" className="text-2xl text-text">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;