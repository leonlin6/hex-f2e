import React, {useEffect, useState} from 'react';
import searchIcon from '../images/Combined-Shape.png'
import classIcon from '../images/Vector.png'
import axios from 'axios';
import jsSHA from 'jssha';
import Dropdown from './Dropdown';


const SearchArea = ({content, setContent, food, setFood, currentCity, setCurrentCity}) => {


    const classOption = ['類別','景點','活動'];
    const cityOption = ['不分縣市','臺北市','新北市','桃園市','台中市','台南市','高雄市','基隆市','新竹市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義縣','嘉義市','屏東縣','宜蘭縣','花蓮縣','台東縣','金門縣'];
    const [term, setTerm] = useState('');
    const [classSelected, setClassSelected] = useState(classOption[0]);
    const [citySelected, setCitySelected] = useState(cityOption[0]);

    useEffect(() => {
        homePageAPI();
    },[currentCity]);

    const onSelectedChange = (option) => {
        setClassSelected(option);
    }

    const onSelectedChangeII = (option) => {
        setCitySelected(option);
    }
    
    const getAuthorizationHeader = () => {
        let AppID = '9c833dc964c2452c8bfedc900230b889';
        let AppKey = '69Q4PBFhFAio3uYEJBOcuIi4jb4';
    
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }


    const onClickSearch = () => {       
        const citySpotLimit = 20;

        const search = async () => {
            if(classSelected === 1){
                const activity = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$filter=contains(Name,'${term}')&$top=${citySpotLimit}&$format=JSON`, {
                    headers:getAuthorizationHeader()
                });
                setFood(activity);
            }else{
                const activity = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?$filter=contains(Name,'${term}')&$top=${citySpotLimit}&$format=JSON`, {
                    headers:getAuthorizationHeader()
                });
                setFood(activity);
            } 
        }

        const noTermResult = () => {
            setFood({});
        }



        // const search = async ()=>{
        //     if(selected !== options[0]){ 
        //         if(selected === options[1]){    
        //             if(selectedII !== optionsII[0]){
        //                 const activity = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
        //                     headers:getAuthorizationHeader()
        //                 });
                        
        //                 setFood(activity);
        //             }else{
        //                 const activity = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
        //                     headers:getAuthorizationHeader()
        //                 });
                        
        //                 setFood(activity); 
        //             }

        //         }else{
        //             const activity = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
        //                 headers:getAuthorizationHeader()
        //             });
                    
        //             setFood(activity);
        //         }
        //     }else{
        //         console.log(4);
        //         const activity = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
        //             headers:getAuthorizationHeader()
        //         });
                
        //         setFood(activity);
        //     }

            // if(selectedII !== optionsII[0]){
            //     const restaurant = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
            //         headers:getAuthorizationHeader()
            //     });
                
            //     setFood(restaurant);
            // }else{
            //     const restaurant = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`, {
            //         headers:getAuthorizationHeader()
            //     });
            //     setFood(restaurant);
            // }            
        // };

        if(term){
            search();
        }else{
            noTermResult();
        }
    }


    const homePageAPI = () => {   
        const activityLimit = 4;
        const restaurantLimit = 10;
        
        const contact = async() => {
            const hotActivites = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${currentCity}?$top=${activityLimit}&$format=JSON`, {
                headers:getAuthorizationHeader()
            });
            setContent(hotActivites);

            const hotRestaurent = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=${restaurantLimit}&$format=JSON`, {
                headers:getAuthorizationHeader()
            });
            setFood(hotRestaurent); 
        }

        contact();       
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
                            <span className="searchIcon" onClick={onClickSearch} ><img alt="" src={searchIcon}></img></span>
                        </div>
                        <div className="classArea">
                            <div className="classSearch">
                                <Dropdown label='類別' option={classOption} selected={classSelected} onSelectedChange={onSelectedChange}></Dropdown>
                                <Dropdown label='不分縣市' option={cityOption}  selected={citySelected}  onSelectedChange={onSelectedChangeII}></Dropdown>                              
                            </div>
                            <span className="searchIcon"><img alt="" src={classIcon}></img></span>
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