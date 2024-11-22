import PropTypes from 'prop-types';
import Button from '../button/button'

const Buttons = ({ toggleColor, toggleUppercase, isColored, isUppercase }) => {
    
    return (
        <>
            <Button label={isColored ? 'Tirar colorido' : 'Tornar colorido'} onClick={toggleColor} />
            <Button label={isUppercase ? 'Desfazer caixa alta' : 'Deixar em caixa alta'} onClick={toggleUppercase} />
            <Button label='Mostrar alert' showLabel={alert} />
        </>
    )
}

Buttons.propTypes = {
    toggleColor: PropTypes.func.isRequired,
    toggleUppercase: PropTypes.func.isRequired,
    isColored: PropTypes.bool.isRequired,
    isUppercase: PropTypes.bool.isRequired
};

export { Buttons }
