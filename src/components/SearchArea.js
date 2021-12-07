import React, {useEffect, useState} from 'react';
import searchIcon from '../images/Combined-Shape.png';
import classIcon from '../images/Vector.png';
import Dropdown from './Dropdown';
import {apiScenicspotGet, apiActivityGet, apiHotActivityGet, apiHotRestaurantGet, apiHotelGet, apiRestaurantGet} from '../APIs/APIs';
import {CityTranslate} from '../components/CityTranslate';
import {connect} from 'react-redux';
import {setModalData, setModalHotActivityData, setModalHotRestaurantData,setCurrentPage} from '../Actions'

const SearchArea = (props) => {
 

    const classOptionSpot = ['類別','景點','活動'];
    const classOptionFood = ['類別','美食','住宿'];
    const cityOption = ['不分縣市','臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市','新竹市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義縣','屏東縣','宜蘭縣','花蓮縣','臺東縣','金門媽祖澎湖'];


    const [term, setTerm] = useState('');
    const [classSelected, setClassSelected] = useState(classOptionSpot[0]);

    useEffect(() => {
        homePageAPI();
    },[props.currentCity]);


    const onSelectedChange = (option) => {
        setClassSelected(option);
    }

    const onSelectedChangeII = (option) => {
        props.setCitySelected(option);
    }

    const homePageAPI = async () => {   
        const hotActivites = await apiHotActivityGet(props.currentCity);
        const hotRestaurant = await apiHotRestaurantGet(props.currentCity);

        props.setModalHotActivityData(hotActivites,'hotActivity');
        props.setModalHotRestaurantData(hotRestaurant,'hotRestaurant');

        props.setContent(hotActivites);
        props.setSearchResultData(hotRestaurant); 
    }    

    const codeLatLng = (lat, lng) =>{
        let geocoder = new window.google.maps.Geocoder();
        // var latlng = new window.google.maps.LatLng(lat, lng);
        var latlng = new window.google.maps.LatLng(	lat,lng);

        geocoder.geocode({'latLng': latlng}, function(results, status) {
          if (status === window.google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                //formatted address
                let posCity = results[0].formatted_address.indexOf('市');
                let posCounty = results[0].formatted_address.indexOf('縣');

                if(posCity !== -1){                
                    let city = results[0].formatted_address.slice(posCity-2, posCity+1);
                    // 將台轉成臺
                    switch(city){
                        case "台北市":
                            props.setCitySelected("臺北市");
                            break;
                        case "台中市":
                            props.setCitySelected("臺中市");
                            break;   
                        case "台南市":
                            props.setCitySelected("臺南市");
                            break;                                      
                        default:
                            props.setCitySelected(city);
                    }
                }

                if(posCounty !== -1){                
                    let county = results[0].formatted_address.slice(posCounty-2, posCounty+1);
                    // 將台轉成臺
                    switch(county){
                        case "台東縣":
                            props.setCitySelected("臺東縣");
                        break;
                        case "金門縣":
                            props.setCitySelected("金門媽祖澎湖");
                            break;    
                        case "澎湖縣":
                            props.setCitySelected("金門媽祖澎湖");
                            break;    
                        case "連江縣":
                            props.setCitySelected("金門媽祖澎湖");
                            break;    
                        default:
                            props.setCitySelected(county);
                    }
                }
           
            } else {
              console.log("No results found");
            }
          } else {
            alert("Geocoder failed due to: " + status);
          }
        });
      }

    const onClickLocalize = () => {
        if (window.navigator.geolocation==undefined) {
            console.log("此瀏覽器不支援地理定位功能!");
            }
        else {
            var geolocation=window.navigator.geolocation; //取得 Geolocation 物件
            //地理定位程式碼

            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

                function successCallback(position) {
                    let lat=position.coords.latitude;
                    let lon=position.coords.longitude;
                    codeLatLng(lat,lon);        
                }
                function errorCallback(error) {
                    console.log(error)
                }
            }


    }

    const onClickSearch = () => {  
        props.setCityTitle(props.citySelected);
        props.setCurrentPage(1);


        const spotSearch = async () => {
            if(classSelected === '景點'){                
                const spot = await apiScenicspotGet(CityTranslate[props.citySelected], term);                
                props.setShowMainPage(false);  
                props.setSearchResultData(spot);               
                props.setModalData(spot , "spot");
            }
            
            if(classSelected === '活動'){
                const activity = await apiActivityGet(CityTranslate[props.citySelected], term);
                props.setShowMainPage(false);  
                props.setSearchResultData(activity);
                props.setModalData(activity, "activity");
            }
        }

        const foodSearch = async () => {
            if(classSelected === '美食'){                
                const restaurant = await apiRestaurantGet(CityTranslate[props.citySelected], term);
                props.setShowMainPage(false);  
                props.setSearchResultData(restaurant);
                props.setModalData(restaurant, "restaurant");
            }
            
            if(classSelected === '住宿'){
                const hotel = await apiHotelGet(CityTranslate[props.citySelected], term);
                props.setShowMainPage(false);  
                props.setSearchResultData(hotel);
                props.setModalData(hotel, "hotel");
            }
        }




        if(props.path === "/"){
            spotSearch();
        }else if(props.path === "/food&hotel"){
            foodSearch();
        }
    }

    const onChangeEvent = event => {
        setTerm(event.target.value);        
    }

    return (
        <div className="container"> 
            <div className="wrap">
                <div className="searchWrap">
                    <div className="title">
                        Welc
                        <div className="circle"></div>
                           me t
                        <div className="square"></div>  
                        <div className="taiwan">Taiwan</div>
                        <div className="triangle"></div>
                        </div>
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
                                <Dropdown label='類別' option={props.path === "/food&hotel" ? classOptionFood : classOptionSpot} selected={classSelected} onSelectedChange={onSelectedChange}></Dropdown>
                                <Dropdown label='不分縣市' option={cityOption}  selected={props.citySelected}  onSelectedChange={onSelectedChangeII}></Dropdown>         
                            </div>
                            <div className="searchIcon"><img alt="localize" onClick={() => {onClickLocalize()}} src={classIcon}></img></div>
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

const mapStateToProps = (state) => {
    return {
        data: state.selectedRoute
    }
}

export default connect(mapStateToProps, {setModalData,setModalHotActivityData, setModalHotRestaurantData, setCurrentPage})(SearchArea);
