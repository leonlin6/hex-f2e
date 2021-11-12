import React,{useEffect} from 'react';
import Activity from './Activity';

const Main = ({content, setContent, food, setFood, setModalShow, setModalDataNo, setCurrentCity}) => {
    useEffect(() => {
    }, [content, food]);

    if(content === {})
        return null;

    return (
        <div>
            <Activity content={content} food={food} setModalShow={setModalShow} setModalDataNo={setModalDataNo} setCurrentCity={setCurrentCity}></Activity>
        </div>
    );    
}

export default Main;