import React,{useEffect} from 'react';
import Activity from './Activity';
import SearchResult from './SearchResult';

const Main = ({content, food, setModalShow, setModalDataNo, setCurrentCity, showMainPage, setShowMainPage, mainPageOff, finalCity }) => {
    useEffect(() => {
    }, [content, food]);

    useEffect(() =>{
        if(mainPageOff !== undefined){
            setShowMainPage(mainPageOff);
        }
    },[])

    if(content === {})
        return null;

    return (
        <div>
            <div style={{display: showMainPage ? "block":"none"}}>
                <Activity content={content} food={food} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity} ></Activity>
            </div>
            <div className="SeatchResult" style={{display: showMainPage ? "none":"block"}}>
                <SearchResult content={content} food={food} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity} finalCity={finalCity}></SearchResult>
            </div>
        </div>
    );    
}

export default Main;