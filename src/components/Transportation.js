import React, {useState} from 'react';
import DropdownTrans from './DropdownTrans';
import {connect} from 'react-redux';
import {selectRoute} from '../Actions'
import {CityTranslate, CityOptions} from '../components/CityTranslate';
import {apiBusRouteGet, apiBusStopGet, apiBusRouteInfoGet, apiBusStopTimeOfArrivalGet} from '../APIs/APIs';

const Transportation = (props) => {    

    const [citySelected, setCitySelected] = useState('選擇縣市');
    const [routeSelected, setRouteSelected] = useState('選擇路線');
    const [busNumOptions, setBusNumOptions] = useState([]);
    const [busStops, setBusStops] = useState([]);
    const [busStopsReverse, setBusStopsReverse] = useState([]);
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [inervalID, setIntervalID] = useState("");
    const [arrivalInfo, setArrivalInfo] = useState([]);

    const countEstimateTime = (time) => {
        const min = Math.round(time / 60);
        const sec = time % 60;
        return `${min} : ${sec < 10 ? '0'+sec : sec}`;
    }

 

    const renderBusItem = (busStop, busUID) => {
        let CT = "";
        arrivalInfo.forEach((ite, idx) => {
                        
            if(ite.Direction === 0 && ite.StopName === busStop.Zh_tw){        
                CT = countEstimateTime(ite.EstimateTime); 
               
            }   

            if(ite.Direction === 0 && ite.StopName === busStop.Zh_tw && ite.EstimateTime === undefined){
                CT = '未發車';
                return ;
            }    

            if(ite.Direction === 0 && ite.StopName === busStop.Zh_tw && ite.EstimateTime < 5){                
                CT =  '離站中';
                return ;
            } 

            if(ite.Direction === 0 && ite.StopName === busStop.Zh_tw && ite.EstimateTime < 60){                
                CT =  '進站中';
                return ;
            }
        })

        switch(CT){
            case '未發車' :
                return(
                    <div key={busUID} className="routeItem">
                        <div className="timeOut">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
            case '進站中' : 
                return(
                    <div key={busUID} className="routeItem">
                        <div className="timeArrive">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
            case '離站中' : 
                return(
                    <div key={busUID} className="routeItem">
                        <div className="timeLeave">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
            default :
                return(
                    <div key={busUID} className="routeItem">
                        <div className="time">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
        }
    }

    const renderReverseBusItem = (busStop, busUID) => {
        let CT = "";

        arrivalInfo.forEach((ite) => {                        
            if(ite.Direction === 1 && ite.StopName === busStop.Zh_tw){        
                CT = countEstimateTime(ite.EstimateTime); 
            }   

            if(ite.Direction === 1 && ite.StopName === busStop.Zh_tw && ite.EstimateTime === undefined){
                CT = '未發車';
                return ;
            }               
            
            if(ite.Direction === 1 && ite.StopName === busStop.Zh_tw && ite.EstimateTime < 5){                
                CT =  '離站中';
                return ;
            }     
            
            if(ite.Direction === 1 && ite.StopName === busStop.Zh_tw && ite.EstimateTime < 60){                
                CT =  '進站中';
                return ;
            }
       
        })

      
        switch(CT){
            
            case '未發車' :
                return(
                    <div key={busUID} className="routeItem">
                        <div className="timeOut">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
            case '進站中' : 
                return(
                    <div key={busUID} className="routeItem">
                        <div className="timeArrive">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
            case '離站中' : 
                return(
                    <div key={busUID} className="routeItem">
                        <div className="timeLeave">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
            default :
                return(
                    <div key={busUID} className="routeItem">
                        <div className="time">{CT}</div>
                        <div className="sign">{busStop.Zh_tw}</div>
                    </div>
                );
        }
    }


    const renderBusStop = busStops.map((item) => {
        return renderBusItem(item.stopName, item.stopUID);
    });

    const renderBusStopReverse = busStopsReverse.map((item) => {
        return renderReverseBusItem(item.stopName, item.stopUID);
    });

    const estimateArrivalTime = (data) => {
         const mapData = data.map((item) => {
            return {
                Direction:  item.Direction,
                StopName:  item.StopName.Zh_tw,
                EstimateTime: item.EstimateTime
            }
        });

        return mapData;
    }



    //點選dropdown option後打API搜尋route options & change city dropdown showing text
    const onSearchRouteNum = async (city) => {      
        const routeData = await apiBusRouteGet(CityTranslate[city]);
        const busNumbers = routeData.data.map((item) => {
            return {
                name:item.RouteName.Zh_tw,
                uuid:item.RouteUID
            }
        });

        setRouteSelected('選擇路線');
        setCitySelected(city);
        setBusNumOptions(busNumbers);
    }

    //點選route option後，change route dropdown showing text
    const onRouteClick = async (num) => {
        setRouteSelected(num);
        setRouteSelected(num);
    }

    //點選search button後，打API搜尋bus stop info & rerender
    const onSearchBusStop = async () => {
        // 停止上一次的interval
        clearInterval(inervalID);
       
        if(citySelected === "選擇縣市")
            return;

        if(routeSelected === "選擇路線")
            return;   

        let busStopData = await apiBusStopGet(CityTranslate[citySelected], routeSelected);
        let routeInfo = await apiBusRouteInfoGet(CityTranslate[citySelected], routeSelected);
        let estimateData = await apiBusStopTimeOfArrivalGet(CityTranslate[citySelected], routeSelected);

        setDeparture(routeInfo.data[0].DepartureStopNameZh);
        setDestination(routeInfo.data[0].DestinationStopNameZh);
        setArrivalInfo(estimateArrivalTime(estimateData.data));

        //儲存bus stop的資訊
        if(busStopData !== null){
            const stops = busStopData.data.map((item) => {
                return item.Stops.map((stop) => {
                    return {
                        stopName: stop.StopName,
                        stopUID: stop.StopUID
                    }
                });            
            });
            setBusStops(stops[0]);
            setBusStopsReverse(stops[1]);
        }

        //每15秒更新一次bus stop時間
        const renewId = setInterval( async () => {
            estimateData = await apiBusStopTimeOfArrivalGet(CityTranslate[citySelected], routeSelected);
            setArrivalInfo(estimateArrivalTime(estimateData.data));
        }, 15000);
        
        // 儲存這次的id，下次click後清除舊的interval
        setIntervalID(renewId);

    }

    const getCountHeight = () => {
        if(props.route === 0 ){
            return (Math.round(busStops.length / 2 ) * 65 + 256 ) + 'px';
        }else{
            return (Math.round(busStopsReverse.length / 2 ) * 65 + 256 ) + 'px';
        }
    }


    return (
        <div className="transContainer"> 
            <div className="wrap">
                <div className="searchWrap">
                    <div className="searchArea">
                        <div className="classArea">
                            <div className="classSearch">
                                <DropdownTrans option={CityOptions} selected={citySelected}  onSelectedChange={onSearchRouteNum}></DropdownTrans>
                                <DropdownTrans option={busNumOptions} selected={routeSelected} onSelectedChange={onRouteClick}></DropdownTrans>         
                            </div>
                            <div className="searchIcon" onClick={onSearchBusStop} ><img alt="" src={require('../images/Combined-Shape.png').default}></img></div>                            
                        </div>
                    </div>
                </div>
                <div className="routeSwitch">
                    <div className={props.route === 0 ? `ToContainer active` : `ToContainer`} onClick={() => { props.selectRoute(0)}}>
                        <span className="To">往 <span className="stopName">{destination}</span></span>
                    </div>
                    <div className={props.route === 1 ? `ToContainer active` : `ToContainer`} onClick={() => { props.selectRoute(1)}}>
                        <span className="To">往 <span className="stopName">{departure}</span></span>
                    </div>
                </div>
            </div>
            <div className="searchShadow">
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>

            <div className="refreshText">*每隔15秒自動更新</div>
            <div className="routeContent" style={{height:getCountHeight()}}>
                {busStops.length === 0 ? <h1>請選擇公車路線</h1> : null}
                {props.route === 0 ? renderBusStop : renderBusStopReverse}                
            </div>
            <div className="routeShadow">
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {route: state.selectedRoute}
}

export default connect(mapStateToProps, {selectRoute})(Transportation);