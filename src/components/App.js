import React, {useState} from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import Main from './Main';
import Popup from './Popup';
import Footer from './Footer';
import Route from './Route';
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
                    "PositionLon": 121.49890899658203,
                    "PositionLat": 25.034622192382812,
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
    const [currentCity, setCurrentCity] = useState('Taipei');

    return (
        <div style={{backgroundColor:`#F6F7FB`}}>
 

            <Route path="/">
                <Nav></Nav>
                <SearchArea content={content} setContent={setContent} food={food} setFood={setFood} currentCity={currentCity} setCurrentCity={setCurrentCity}></SearchArea>
                <Main content={content} setContent={setContent} food={food} setFood={setFood} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity}></Main>
                <Popup content={content} modalShow={modalShow} setModalShow={setModalShow} modalDataNo={modalDataNo}></Popup>
                <Footer></Footer> 
            </Route>
            <Route path="/scenicspot">
                <Nav></Nav>
                <SearchArea content={content} setContent={setContent} food={food} setFood={setFood} currentCity={currentCity} setCurrentCity={setCurrentCity}></SearchArea>
                <Main content={content} setContent={setContent} food={food} setFood={setFood} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity}></Main>
                <Popup content={content} modalShow={modalShow} setModalShow={setModalShow} modalDataNo={modalDataNo}></Popup>
                <Footer></Footer> 
            </Route>
            <Route path="/food&hotel">
                <Nav></Nav>
                <SearchArea content={content} setContent={setContent} food={food} setFood={setFood} currentCity={currentCity} setCurrentCity={setCurrentCity}></SearchArea>
               <Footer></Footer> 
            </Route>
            <Route path="/transportation">
                <Nav></Nav>
                <SearchArea content={content} setContent={setContent} food={food} setFood={setFood} currentCity={currentCity} setCurrentCity={setCurrentCity}></SearchArea>
                <Footer></Footer> 
            </Route>
        </div>
    );
    
}

export default App;