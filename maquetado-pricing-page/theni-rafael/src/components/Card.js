import React from 'react';
import PropTypes from 'prop-types';
import Cardstyle from '../scripts/Card.css';
import Cardvalue from '../App'

const Card = ({ title, imgsrc, text1, price, text2, button, classnam }) => {
    return(
        <div className="cardContainer">
            <div className="cardHeader">
                <h2>{title}</h2>
                <img src={imgsrc} />
                <p>{text1}</p>
            </div>
            <div className="cardContent">
                <h3>${price}/mo</h3>
                <p>{text2}</p>
                <input type="submit" value={button} href="#" className={classnam}></input>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

Card.defaultProps = {
    title: 'Titulo por defecto',
    text: 'Text por defecto',
}

export default Card;
