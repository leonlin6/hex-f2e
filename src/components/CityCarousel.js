import React from "react";
import whiteSubtract from "../images/white-subtract.png";

const CityCarousel  = ({type, setCurrentCity}) => {

    const onCityChange = (cityValue) => {      
        setCurrentCity(cityValue);
    }

    if(type === 1){
        return (
            <div className="carouselWrap">
                <div className="container">
                    <div className="longItem" onClick={() => {onCityChange('Taipei')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_1.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台北市</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem" onClick={() => {onCityChange('NewTaipei')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_2.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>新北市</p>
                    </div>
                    <div className="shortItem" onClick={() => {onCityChange('Taoyuan')}}>
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" alt="" src={require('../images/hot_city_3.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>桃園市</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem" onClick={() => {onCityChange('Hsinchu')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_4.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>新竹市</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem" onClick={() => {onCityChange('Taichung')}}>
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" alt="" src={require('../images/hot_city_5.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台中</p>
                    </div>
                    <div className="shortItem" onClick={() => {onCityChange('NantouCounty')}}>
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" alt="" src={require('../images/hot_city_6.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>南投</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem" onClick={() => {onCityChange('Chiayi')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_7.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>嘉義</p>
                    </div>                
                </div>

            </div>
        );
    }else{
        return(
            <div className="carouselWrap">
                <div className="container">
                    <div className="longItem" onClick={() => {onCityChange('Tainan')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_8.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台南</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem" onClick={() => {onCityChange('Kaohsiung')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_9.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>高雄</p>
                    </div>
                    <div className="shortItem" onClick={() => {onCityChange('PingtungCounty')}}>
                    <div className="black-opacity"></div>                    
                        <img className="carouseImg" alt="" src={require('../images/hot_city_10.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>屏東</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem" onClick={() => {onCityChange('YilanCounty')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_11.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>宜蘭</p>
                    </div>
                </div>
                <div className="container">
                    <div className="shortItem" onClick={() => {onCityChange('HualienCounty')}}>
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" alt="" src={require('../images/hot_city_12.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>花蓮</p>
                    </div>
                    <div className="shortItem" onClick={() => {onCityChange('TaitungCounty')}}>
                        <div className="black-opacity"></div>                    
                        <img className="carouseImg" alt="" src={require('../images/hot_city_13.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>台東</p>
                    </div>
                </div>
                <div className="container">
                    <div className="longItem" onClick={() => {onCityChange('KinmenCounty')}}>
                        <div className="black-opacity"></div>
                        <img className="carouseImg" alt="" src={require('../images/hot_city_14.png').default}></img>
                        <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
                        <p>金門媽祖,澎湖</p>
                    </div>                
                </div>
            </div>
        );
    }
}

export default CityCarousel; 