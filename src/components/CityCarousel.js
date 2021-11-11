import React, {useState, useEffect} from "react";
import subtrcatIcon from "../images/Subtract.png";
import whiteSubtract from "../images/white-subtract.png";
const CityCarousel  = ({type, carouselPage}) => {
    if(type === 1){
        return (
            <div className="carouselWrap" style={{display: (type === carouselPage) ? `flex` : `none` }}>
                <div className="container">
                    <div className="longItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city001.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台北市</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city002.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>新北市</p>
                    </div>
                    <div className="shortItem">
                    <div className="black-opacity"></div>                    
                        <img className="carouseImg" src={require('../images/hot_city003.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>桃園市</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city004.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>新竹市</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem">
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" src={require('../images/hot_city005.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台中</p>
                    </div>
                    <div className="shortItem">
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" src={require('../images/hot_city006.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>南投</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city007.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>嘉義</p>
                    </div>                
                </div>

            </div>
        );
    }else{
        return(
            <div className="carouselWrap" style={{display: (type === carouselPage) ? `flex` : `none` }}>
                <div className="container">
                    <div className="longItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city008.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台南</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city009.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>高雄</p>
                    </div>
                    <div className="shortItem">
                    <div className="black-opacity"></div>                    
                        <img className="carouseImg" src={require('../images/hot_city010.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>屏東</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city011.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>宜蘭</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem">
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" src={require('../images/hot_city012.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>花蓮</p>
                    </div>
                    <div className="shortItem">
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" src={require('../images/hot_city013.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台東</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem">
                        <div className="black-opacity"></div>
                        <img className="carouseImg" src={require('../images/hot_city014.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>金門媽祖,澎湖</p>
                    </div>                
                </div>
            </div>
        );
    }
}

export default CityCarousel; 