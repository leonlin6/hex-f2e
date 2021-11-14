import React, {useEffect, useState} from 'react';
import searchIcon from '../images/Combined-Shape.png';
import classIcon from '../images/Vector.png';
import Dropdown from './Dropdown';
import {apiScenicspotGet, apiActivityGet, apiHotActivityGet, apiHotRestaurantGet, apiHotelGet, apiRestaurantGet} from '../APIs/APIs';

const SearchArea = ({path, content, setContent, food, setFood, currentCity, setCurrentCity, setShowMainPage, citySelected, setCitySelected, setFinalCity}) => {
 

    const classOptionSpot = ['類別','景點','活動'];
    const classOptionFood = ['類別','美食','住宿'];
    const cityOption = ['不分縣市','臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市','新竹市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義縣','屏東縣','宜蘭縣','花蓮縣','臺東縣','金門媽祖澎湖'];

    const translate = {
        臺北市:'Taipei',
        新北市:'NewTaipei',
        桃園市:'Taoyuan',
        新竹市:'Hsinchu',        
        臺中市:'Taichung',
        南投縣:'NantouCounty',
        嘉義縣:'Chiayi',
        臺南市:'Tainan',
        高雄市:'Kaohsiung',
        屏東縣 :'PingtungCounty',
        宜蘭縣:'YilanCounty',
        花蓮縣:'HualienCounty',
        臺東縣:'TaitungCounty',
        金門媽祖澎湖:'KinmenCounty',
        基隆市:'Keelung',
        新竹縣:'HsinchuCounty',
        苗栗縣:'MiaoliCounty',
        彰化縣:'ChanghuaCounty',
        雲林縣:'YunlinCounty',
        嘉義市:'Chiayi'
       }

    const [term, setTerm] = useState('');
    const [classSelected, setClassSelected] = useState(classOptionSpot[0]);

    useEffect(() => {
        homePageAPI();
    },[currentCity]);



    const onSelectedChange = (option) => {
        setClassSelected(option);
    }

    const onSelectedChangeII = (option) => {
        setCitySelected(option);
    }


    const onClickSearch = () => {  
        setShowMainPage(false);  
        setFinalCity(citySelected);

        const spotSearch = async () => {
            if(classSelected === '景點'){                
                const activity = await apiScenicspotGet(translate[citySelected], term);
                setFood(activity);
            }
            
            if(classSelected === '活動'){
                const spot = await apiActivityGet(translate[citySelected], term);
                setFood(spot);
            }
        }

        const foodSearch = async () => {
            if(classSelected === '美食'){                
                const activity = await apiRestaurantGet(translate[citySelected], term);
                setFood(activity);
            }
            
            if(classSelected === '住宿'){
                const spot = await apiHotelGet(translate[citySelected], term);
                setFood(spot);
            }
        }

        const noTermResult = () => {
            setFood({});
        }


        if(term){
            if(path === "/"){
                spotSearch();
            }else if(path === "/food&hotel"){
                foodSearch();
            }
            
        }else{
            noTermResult();
        }
    }


    const homePageAPI = () => {           
        const contact = async() => {
            const hotActivites = await apiHotActivityGet(currentCity);
            const hotRestaurant = await apiHotRestaurantGet(currentCity);

            setContent(hotActivites);
            setFood(hotRestaurant); 
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
                                <Dropdown label='類別' option={path === "/food&hotel" ? classOptionFood : classOptionSpot} selected={classSelected} onSelectedChange={onSelectedChange}></Dropdown>
                                <Dropdown label='不分縣市' option={cityOption}  selected={citySelected}  onSelectedChange={onSelectedChangeII}></Dropdown>         
                            </div>
                            {/* <span className="searchIcon"><img alt="" src={classIcon}></img></span> */}
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