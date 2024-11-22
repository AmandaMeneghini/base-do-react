import PropTypes from 'prop-types';

const Button = ({label = 'Clique Aqui', onClick}) => {
    return(
        <button onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}


export default Button