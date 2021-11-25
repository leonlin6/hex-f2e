import { combineReducers } from "redux";

const modalDataReducer = (modalData = {}, action) => {
    if(action.type === 'MODAL_CLICK'){
        return action.payload
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


export default combineReducers({
    selectedRoute: selectedRouteReducer,
    modalData:modalDataReducer
});