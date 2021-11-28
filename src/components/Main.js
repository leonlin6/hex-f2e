import React,{useEffect} from 'react';
import Activity from './Activity';
import SearchResult from './SearchResult';

const Main = ({content, searchResultData, setModalShow, setModalDataNo, setCurrentCity, showMainPage, setShowMainPage, mainPageOff, cityTitle }) => {
    useEffect(() => {
    }, [content, searchResultData]);

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
                <Activity content={content} searchResultData={searchResultData} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity} ></Activity>
            </div>
            <div className="SearchResult" style={{display: showMainPage ? "none":"block"}}>
                <SearchResult content={content} searchResultData={searchResultData} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity} cityTitle={cityTitle}></SearchResult>
            </div>
        </div>
    );    
}

export default Main;