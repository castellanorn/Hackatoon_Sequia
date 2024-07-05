import PropTypes from 'prop-types';

const CardTeam = ({ image, name, role, description }) => {
    return (
        <div className="p-6 mb-6 text-white transition-shadow duration-300 bg-blue-700 rounded-lg shadow-lg card hover:shadow-xl">
            <img src={image} alt={`Foto de ${name}`} className="w-32 h-32 mx-auto mb-4 rounded-full" />
            <h2 className="mb-2 text-xl font-bold text-center">{name}</h2>
            <h3 className="mb-2 text-lg font-medium text-center">{role}</h3>
            <p className="text-sm text-center">{description}</p>
        </div>
    );
};

CardTeam.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardTeam;