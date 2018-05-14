import React from 'react';

const Header = (props) => {
    const {
        bgColor,
        textColor,
        text,
    } = props;


    const HeaderCustomStyle = {
        backgroundColor: bgColor
    };

    
    const TextCustomStyle = {
        color: textColor
    };
    
    return (
    <div style={HeaderCustomStyle} className="header">
        <h1 style={TextCustomStyle} className="header--title">{text}</h1>
    </div>
    )
}

export default Header;