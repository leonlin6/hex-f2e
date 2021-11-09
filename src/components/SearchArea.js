import React, {useState} from 'react';
import searchIcon from '../images/Combined-Shape.png'
import classIcon from '../images/Vector.png'
import axios from 'axios';
import jsSHA from 'jssha';


const SearchArea = ({content, setContent, food, setFood}) => {
    const [term, setTerm] = useState('');

    const getAuthorizationHeader = () => {
        let AppID = '9c833dc964c2452c8bfedc900230b889';
        let AppKey = '69Q4PBFhFAio3uYEJBOcuIi4jb4';
    
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }


    const onClickSearch = () => {
        const keywordTxt = term;
        const limitNum = 10;

        const search = async ()=>{
            console.log('I ran setResults');
            const activity = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
                headers:getAuthorizationHeader()
            });
            const Restaurant = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
                headers:getAuthorizationHeader()
            });
            setContent(activity);
            setFood(Restaurant);
            
        };

        if(term){
            search();
        }else{
            console.log('there are no text');
        }
    }

    const onChangeEvent = event => {
        setTerm(event.target.value);        
    }


    return (
        <div className="container"> 
            <div className="wrap">
                <div className="searchWrap">
                    <div className="title">Welcome to Taiwan</div>

                    <div className="description">
                        台中、台南、屏東、宜蘭．．．．．遊遍台灣
                    </div>
                    <div className="searchArea">
                        <div className="keyWordArea">
                            <input className="keyWord" placeholder="搜尋關鍵字" value={term} onChange={onChangeEvent}></input>
                            <span className="searchIcon" onClick={onClickSearch}><img src={searchIcon}></img></span>
                        </div>
                        <div className="classArea">
                            <div className="classSearch">
                                <span className="dropdown">類別</span>
                                <span className="dropdown">不分城市</span>
                            </div>
                            <span className="searchIcon"><img src={classIcon}></img></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="searchShadow">
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    );
    
}

export default SearchArea;