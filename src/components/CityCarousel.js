import React from "react";
import whiteSubtract from "../images/white-subtract.png";

const CityCarousel  = ({type, carouselPage,setCurrentCity}) => {

    const onCityChange = (cityValue) => {      
        setCurrentCity(cityValue);
    }

    // const cityMapping = [
    //     {
    //         cityName:'臺北市',
    //         cityValue:'Taipei',
    //         type:'long',
    //         page:1
    //     },
    //     {
    //         cityName:'新北市',
    //         cityValue:'NewTaipei',
    //         type:'short',
    //         page:1       
    //     },
    //     {
    //         cityName:'桃園市',
    //         cityValue:'Taoyuan',
    //         type:'short',
    //         page:1         
    //     },
    //     {
    //         cityName:'新竹市',
    //         cityValue:'Hsinchu',
    //         type:'long',
    //         page:1         
    //     },
    //     {
    //         cityName:'臺中',
    //         cityValue:'Taichung',
    //         type:'short',
    //         page:1         
    //     },
    //     {
    //         cityName:'南投',
    //         cityValue:'NantouCounty',
    //         type:'short',
    //         page:1         
    //     },
    //     {
    //         cityName:'嘉義',
    //         cityValue:'Chiayi',
    //         type:'long',
    //         page:1         
    //     },
    //     {
    //         cityName:'臺南',
    //         cityValue:'Tainan',
    //         type:'long',
    //         page:2           
    //     },
    //     {
    //         cityName:'高雄',
    //         cityValue:'Kaohsiung',
    //         type:'short',
    //         page:2             
    //     },
    //     {
    //         cityName:'屏東',
    //         cityValue:'PingtungCounty',
    //         type:'short',
    //         page:2             
    //     },
    //     {
    //         cityName:'宜蘭',
    //         cityValue:'YilanCounty',
    //         type:'long',
    //         page:2             
    //     },
    //     {
    //         cityName:'花蓮',
    //         cityValue:'HualienCounty',
    //         type:'short',
    //         page:2             
    //     },
    //     {
    //         cityName:'臺東',
    //         cityValue:'TaitungCounty',
    //         type:'short',
    //         page:2             
    //     },
    //     {
    //         cityName:'金門媽祖,澎湖',
    //         cityValue:'KinmenCounty',
    //         type:'long',
    //         page:2             
    //     }
    // ]

    if(type === 1){
        return (
            <div className="carouselWrap" style={{display: (type === carouselPage) ? `flex` : `none` }}>
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
            <div className="carouselWrap" style={{display: (type === carouselPage) ? `flex` : `none` }}>
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
    // const renderCarousel = cityMapping.map((item, index) => {
    //     if(item.page === type){
    //         return (
    //             <div className={item.type === 'long' ? 'longContainer':'shortContainer'}>
    //                 <div className={item.type === 'long' ? 'longItem':'shortItem'}>
    //                     <div className="black-opacity"></div>
    //                     <img alt="" className="carouseImg" src={require(`../images/hot_city_${index+1}.png`).default}></img>
    //                     <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
    //                     <p>{item.cityName}</p>
    //                 </div>
    //             </div>                    
    //         );
    //     }else{
    //         return (
    //             <div className="container">
    //                 <div className={item.type === 'long' ? 'longItem':'shortItem'}>
    //                     <div className="black-opacity"></div>
    //                     <img alt="" className="carouseImg" src={require(`../images/hot_city_${index+1}.png`).default}></img>
    //                     <img className="icon" alt="subtrcat Icon" src={whiteSubtract}></img>
    //                     <p>{item.cityName}</p>
    //                 </div>
    //             </div>         
    //         );  
    //     }
    // });

    // return(
    //     <div className="carouselWrap" style={{display: (type === carouselPage) ? `flex` : `none` }}>
    //         {renderCarousel}
    //     </div>
    // );


}

export default CityCarousel; 