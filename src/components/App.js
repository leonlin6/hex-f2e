import React, {useState} from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import Main from './Main';
import Popup from './Popup';
import '../SASS/App.css'

const App = () => {

    const defaultData = {
        data:[
            {
                "ID": "C2_315080000H_080437",
                "Name": "2021臺北燈節",
                "Description": "俗稱「小過年」的元宵節是源遠流長的傳統民俗節慶，臺北市政府自民國86年（西元1997年）辦理「臺北燈節」以來，歷經逾20年的蘊育及特色養成，成為民眾春節期間不可或缺的參觀去處，不僅將新年的歡慶氣氛導入城市行銷，更將傳承民俗元宵節慶文化規模足以媲美外國有名的盛大慶典，其成功之展演也成為各縣市競相仿效的目標，近年更利用互動科技與藝術表演，增添燈節魅力，提供賞燈民眾更多城市參與及創新體驗。※ 受疫情影響，2021臺北燈節延至耶誕節期間12月17日至26日辦理。",
                "Location": "臺北市 萬華區",
                "Address": "西園路",
                "Organizer": "臺北市政府觀光傳播局",
                "StartTime": "2021-12-17T00:00:00+08:00",
                "EndTime": "2021-12-26T00:00:00+08:00",
                "WebsiteUrl": "https://2021lanternfestival.taipei/tc/index.htm",
                "Picture": {
                    "PictureUrl1": "https://www.taiwan.net.tw/att/event/3eddc7de-7beb-47b0-a69b-dfa10a527066.jpg",
                    "PictureDescription1": "西門主展演區主題燈「百變豬寶亮晶晶」",
                    "PictureUrl2": "https://www.taiwan.net.tw/att/event/10e2d259-3d1e-4a4b-9231-bee252aa6d3f.jpg",
                    "PictureDescription2": "臺北燈節重頭戲為「百變豬寶亮晶晶」主燈秀，吸引上萬民眾參觀及欣賞可愛模樣",
                    "PictureUrl3": "https://www.taiwan.net.tw/att/event/cd298512-a5ae-45a3-88ae-f09338f09b6c.jpg",
                    "PictureDescription3": "搖擺北門"
                },
                "Position": {
                    "PositionLon": 121.49890899658203,
                    "PositionLat": 25.034622192382812,
                    "GeoHash": "wsqqkv2v1"
                },
                "Class1": "節慶活動",
                "Class2": "藝文活動",
                "City": "臺北市",
                "SrcUpdateTime": "2021-11-13T01:12:46+08:00",
                "UpdateTime": "2021-11-13T01:40:14+08:00"
            }
        ]
    };
    
    const [content, setContent] = useState(defaultData);
    const [food, setFood] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [modalDataNo, setModalDataNo] = useState(0);
    const [currentCity, setCurrentCity] = useState('Taipei');

    return (
        <div style={{backgroundColor:`#F6F7FB`}}>
            <Nav></Nav>
            <SearchArea content={content} setContent={setContent} food={food} setFood={setFood} currentCity={currentCity} setCurrentCity={setCurrentCity}></SearchArea>
            <Main content={content} setContent={setContent} food={food} setFood={setFood} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity}></Main>
            <Popup content={content} modalShow={modalShow} setModalShow={setModalShow} modalDataNo={modalDataNo}></Popup>
            {/* <Footer></Footer>  */}
        </div>
    );
    
}

export default App;