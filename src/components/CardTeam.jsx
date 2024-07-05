import PropTypes from 'prop-types';

const CardTeam = ({ image, name, roll, description }) => {
    return (
        <div className="card bg-blue-700 mb-4 rounded-lg p-4">
            <img src={image} alt={name} className="team-image rounded-full w-32 h-32 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{name}</h2>
                <h3 className="text-lg mb-2">{roll}</h3>
                    <p className="text-sm">{description}</p>
    </div>

    
    );
};

CardTeam.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    roll: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardTeam;
