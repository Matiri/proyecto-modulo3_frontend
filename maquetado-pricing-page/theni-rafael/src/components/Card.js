import React from 'react';
import PropTypes from 'prop-types';
import Cardstyle from '../scripts/Card.css';
import Cardvalue from '../App'

const Card = ({ title, imgsrc, text1, price, text2, button }) => {
    return(
        <div className="cardContainer">
            <h2>{title}</h2>
            <img src={imgsrc}></img>
            <p>{text1}</p>
            <h3>${price}/mo</h3>
            <p>{text2}</p>
            <input type="submit" value={button} href="#"></input>
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
