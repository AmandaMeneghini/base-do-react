import PropTypes from 'prop-types';

const Button = ({ label = 'Clique Aqui', onClick, showLabel }) => {
    return(
        <button onClick={onClick ? onClick : () => showLabel("A label desse botão é " + label)}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    showLabel: PropTypes.func
}

export default Button
