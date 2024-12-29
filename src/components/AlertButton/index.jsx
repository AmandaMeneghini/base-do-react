import PropTypes from 'prop-types';

const AlertButton = ({ label = 'Clique Aqui', onClick, showLabel }) => {
    return  <button onClick={onClick ? onClick : () => showLabel("A label desse botão é " + label)}> 
                {label}
            </button>
    
}

AlertButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    showLabel: PropTypes.func
}

export default AlertButton
