import PropTypes from 'prop-types';
import './paragraph.css'

const Paragraph = ({ isColored, isUppercase }) => {
    
    const paragraphText = "God Is Good";

    const getColoredText = (text) => {
        const colors = ["#FF6B6B", "#FFD93D", "#4D96FF","#6BCB77"];
        return (
            <>
                {[...text].map((char, index) => (
                    <span key={index} style={{ color: colors[index % colors.length] }}>
                        {char}
                    </span>
                ))}
            </>
        );
    };

    return (
        <p 
            id="paragraphId"
            style={{ 
                textTransform: isUppercase ? 'uppercase' : 'none' 
            }}
        >
            {isColored ? getColoredText(paragraphText) : paragraphText}
        </p>
    )
}

Paragraph.propTypes = {
    isColored: PropTypes.bool.isRequired,
    isUppercase: PropTypes.bool.isRequired
}

export { Paragraph }
