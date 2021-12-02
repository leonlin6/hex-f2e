import { combineReducers } from "redux";

const modalDataReducer = (modalData = {}, action) => {
    if(action.type === 'SET_MODAL_DATA'){
        return {
            data: action.payload,
            dataType:action.dataType
        }
    }else{
        return modalData;
    }
}

const modalTypeReducer = (modalType = "", action) => {
    if(action.type === 'SET_MODAL_TYPE'){
        return action.dataType;
    }

    return modalType;
}

const hotActivityDataReducer = (modalData = {}, action) => {
    if(action.type === 'SET_HOT_ACTIVITY'){
        return {
            data: action.payload,
            dataType:action.dataType
        }
    }else{
        return modalData;
    }
}

const hotRestaurantDataReducer = (modalData = {}, action) => {
    if(action.type === 'SET_HOT_RESTAURANT'){
        return {
            data: action.payload,
            dataType:action.dataType
        }
    }else{
        return modalData;
    }
}

const selectedRouteReducer = (selectedRoute = 0, action) => {
    if(action.type === 'ROUTE_SELECTED'){
        return action.index
    }
    return selectedRoute;
};


const currentPageReducer = (currentPage = 1, action) => {
    if(action.type === 'SET_CURRENT_PAGE'){
        return action.page
    }
    return currentPage;
};


export default combineReducers({
    selectedRoute: selectedRouteReducer,
    modalData:modalDataReducer,
    hotRestaurantData: hotRestaurantDataReducer,
    hotActivityData: hotActivityDataReducer,
    modalType:modalTypeReducer,
    currentPage:currentPageReducer
});