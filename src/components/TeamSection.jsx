import PropTypes from 'prop-types';

const TeamSection = ({ image, name, roll, description }) => {
    return (
        <div className="md:flex md:items-center md:justify-center md:space-x-8">
        <img src={image} alt={name} className="w-32 mx-auto mb-4 rounded-lg md:w-1/4 lg:w-1/6" />
            <div className="mb-8 md:mb-0 md:w-1/2 double-border" style={{ borderColor: 'var(--col-navbar)' }}>
        <div className="text-center md:text-left md:w-1/3">
            <h2 className="mb-3 text-xl font-bold">{name}</h2>
            <h3 className="mb-3 text-lg">{roll}</h3>
            <p>{description}</p>
        </div>
    </div>
    </div>
    );
};

TeamSection.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    roll: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default TeamSection;