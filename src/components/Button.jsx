

const Button = () => {
    return (
        <div className="flex items-center justify-center p-5">
            <button
                className="px-12 py-2 font-bold var(--col-text) rounded-3xl bg-button focus:outline-none focus:shadow-outline "
                type="button"
                style={{ boxShadow: '0 5px 5px rgba(0, 0, 0, 0.3)' }}
            >
                Enviar
            </button>
        </div>
    )
}

export default Button;
