import React,{useEffect} from 'react';
import Activity from './Activity';

const Main = ({content, setContent, food, setFood}) => {
    useEffect(() => {
    }, [content, food]);

    if(content === {})
        return null;

    return (
        <Activity content={content} food={food}></Activity>
    );    
}

export default Main;