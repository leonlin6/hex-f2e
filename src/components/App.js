import React, {useState} from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import Main from './Main';
import Popup from './Popup';
import Footer from './Footer';
import Route from './Route';
import Transportation from './Transportation';
import '../SASS/App.css'

const App = () => {

    const defaultData = {
        data:[
            {
                "ID": "",
                "Name": "",
                "Description": "",
                "Location": "",
                "Address": "",
                "Organizer": "",
                "StartTime": "",
                "EndTime": "",
                "WebsiteUrl": "",
                "Picture": {
                    "PictureUrl1": "",
                    "PictureDescription1": ""  
                },
                "Position": {
                    "PositionLon": 1,
                    "PositionLat": 1,
                    "GeoHash": "wsqqkv2v1"
                },
                "Class1": "",
                "Class2": "",
                "City": "",
                "SrcUpdateTime": "",
                "UpdateTime": ""
            }
        ]
    };
    
    const [content, setContent] = useState(defaultData);
    const [food, setFood] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [modalDataNo, setModalDataNo] = useState(0);
    const [currentCity, setCurrentCity] = useState('');
    const [showMainPage, setShowMainPage] = useState(true);
    const [citySelected, setCitySelected] = useState('不分縣市');
    const [finalCity, setFinalCity] = useState('不分縣市');

    return (
        <div style={{backgroundColor:`#F6F7FB`}}>
            <Route path="/">
                <Nav setShowMainPage={setShowMainPage}></Nav>
                <SearchArea path="/" content={content} setContent={setContent} food={food} setFood={setFood} currentCity={currentCity} setCurrentCity={setCurrentCity} setShowMainPage={setShowMainPage} citySelected={citySelected} setCitySelected={setCitySelected} setFinalCity={setFinalCity}></SearchArea>
                <Main content={content} setContent={setContent} food={food} setFood={setFood} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity} citySelected={citySelected} showMainPage={showMainPage} finalCity={finalCity}></Main>
                <Popup food={food} content={content} modalShow={modalShow} setModalShow={setModalShow} modalDataNo={modalDataNo}></Popup>
                <Footer></Footer> 
            </Route>
            <Route path="/food&hotel">
                <Nav ></Nav>
                <SearchArea path="/food&hotel" content={content} setContent={setContent} food={food} setFood={setFood} currentCity={currentCity} setCurrentCity={setCurrentCity} setShowMainPage={setShowMainPage} citySelected={citySelected} setCitySelected={setCitySelected} setFinalCity={setFinalCity}></SearchArea>
                <Main mainPageOff={false} content={content} setContent={setContent} food={food} setFood={setFood} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity} citySelected={citySelected} showMainPage={showMainPage} setShowMainPage={setShowMainPage} finalCity={finalCity}></Main>
                <Popup food={food} content={content} modalShow={modalShow} setModalShow={setModalShow} modalDataNo={modalDataNo}></Popup>
               <Footer></Footer> 
            </Route>
            <Route path="/transportation">
                <Nav></Nav>
                <Transportation></Transportation>
                <Footer></Footer> 
            </Route>
        </div>
    );
    
}

export default App;