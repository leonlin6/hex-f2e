import React, {useEffect} from 'react';

const Popup = () => {

    return (
        <div className="popWrap">
            <div className="container">
                <div className="photo">
                    <img src={require("../images/test.png").default}></img>
                </div>
                <div className="changeBtn">
                    <div className="prevIcon">
                        <div className="prev"></div>
                    </div>
                    <div className="nextIcon">
                        <div className="next"></div>
                    </div>                    
                </div>
                <div className="name">合歡山國際暗空公園-星空清境跨年活動</div>
                <div className="description">南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，在擁有東南亞區最佳的星空觀測環境。奇特造型，值得深入觀賞體會。</div>
                <div className="infoA">
                    <div className="openingHour">開放式空間，無時間限制</div>
                    <div className="ticketPrice">免費</div>
                </div>
                <div className="infoB">
                    <div className="address">基隆市中山區湖海路一、二段(協和街)</div>
                    <div className="tel">886-2-24287664</div>
                </div>
            </div>
            <div className="closeBtn"></div>
            
        </div>
    );    
}

export default Popup;