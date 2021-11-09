import React from 'react';
import navLogo from '../images/headerLogo.png'

const Nav = () => {
    return (
        <div className="navWrap">
            <div className="navLogo">
                <a href="/">
                    <img src={navLogo}></img>
                </a>
            </div>
            <div className="navMap">
                <span className="attractionsTheme">
                    <div className="navIcon">
                        <div className="navInsideIcon"></div>
                    </div>
                    <a href="/">台灣景點</a>
                </span>
                <span className="foodTheme">
                    <div className="navIcon">
                        <div className="navInsideIcon"></div>
                    </div>
                    <a href="/">美食住宿</a>
                </span>
                <span className="transportationTheme">
                    <div className="navIcon"> 
                        <div className="navInsideIcon"></div>
                    </div>
                    <a href="/">景點交通</a>
                </span>
            </div>
        </div>
    );
    
}

export default Nav;