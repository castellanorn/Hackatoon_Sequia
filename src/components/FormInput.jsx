import PropTypes from 'prop-types';

const FormInput = ({ label, id, type = "text", placeholder, rows }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm text-text" htmlFor={id}>
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    className="w-full px-3 py-2 leading-tight border shadow appearance-none focus:outline-none focus:shadow-outline"
                    id={id}
                    placeholder={placeholder}
                    rows={rows}
                    style={{ backgroundColor: 'var(--col-bg-white)', color: 'var(--col-text-body)' }}
                ></textarea>
            ) : (
                <input
                    className="w-full px-3 py-2 appearance-none leading-tightshadow focus:outline-none focus:shadow-outline"
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    style={{ backgroundColor: 'var(--col-bg-white)', color: 'var(--col-text-body)' }}
                />
            )}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
};

export default FormInput;