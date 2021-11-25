import axios from 'axios';
import jsSHA from 'jssha';

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


const scenicspotGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',
    params: {
        $top: 20,
        $format:'JSON'
    }

});

const activityGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity',
    params: {
        $top: 20,
        $format:'JSON'
    }

});

const restaurantGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant',
    params: {
        $top: 20,
        $format:'JSON'
    }

});

const hotelGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel',
    params: {
        $top: 20,
        $format:'JSON'
    }

});

const hotActivityGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity',
    params: {
        $top: 4,
        $format:'JSON'
    }

});

const hotRestaurantGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant',
    params: {
        $top: 7,
        $format:'JSON'
    }

});


const busRouteGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/',
    params: {
        $format:'JSON'
    }
  
});


const busRouteInfoGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/',
    params: {
        $format:'JSON'
    }
  
});

const busStopGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/',
    params: {
        $format:'JSON'
    }
  
});

const busStopTimeOfArrivalGet = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City',
    params: {
        $format:'JSON'
    }  
});


export const apiScenicspotGet = (city, term) => { return scenicspotGet.get(`/${city}?$filter=contains(Name,'${term}')`, {headers:getAuthorizationHeader()})};
export const apiActivityGet = (city, term) => { return activityGet.get(`/${city}?$filter=contains(Name,'${term}')`, {headers:getAuthorizationHeader()})};
export const apiRestaurantGet = (city, term) => { return restaurantGet.get(`/${city}?$filter=contains(Name,'${term}')`, {headers:getAuthorizationHeader()})};
export const apiHotelGet = (city, term) => { return hotelGet.get(`/${city}?$filter=contains(Name,'${term}')`, {headers:getAuthorizationHeader()})};
export const apiHotActivityGet = (city) => { return hotActivityGet.get(`/${city}?$filter=Picture/PictureUrl1 ne null`, {headers:getAuthorizationHeader()})};
export const apiHotRestaurantGet = (city) => { return hotRestaurantGet.get(`/${city}?$filter=Picture/PictureUrl1 ne null`, {headers:getAuthorizationHeader()})};
export const apiBusRouteGet = (city) => { return busRouteGet.get(`/${city}`, {headers:getAuthorizationHeader()})};
export const apiBusRouteInfoGet = (city, busNum) => { return busRouteInfoGet.get(`/${city}/${busNum}`, {headers:getAuthorizationHeader()})};
export const apiBusStopGet = (city, busNum) => { return busStopGet.get(`/${city}/${busNum}`, {headers:getAuthorizationHeader()})};
export const apiBusStopTimeOfArrivalGet = (city, busNum) => { return busStopTimeOfArrivalGet.get(`/${city}/${busNum}`, {headers:getAuthorizationHeader()})};
