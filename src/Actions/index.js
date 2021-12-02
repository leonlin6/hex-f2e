// Action Creator

export const selectRoute = (route) => {
    //Return an action
    return({
        type: 'ROUTE_SELECTED',
        index:route
    });
}

export const setModalData = (data, dataType) => {
    //Return an action
    return({
        type: 'SET_MODAL_DATA',
        payload:data,
        dataType: dataType
    });
}

export const setModalType = (type) => {
    //Return an action
    return({
        type: 'SET_MODAL_TYPE',
        dataType: type
    });
}

export const setModalHotActivityData = (data, dataType) => {
    return({
        type: 'SET_HOT_ACTIVITY',
        payload:data,
        dataType: dataType
    });
}

export const setModalHotRestaurantData = (data, dataType) => {
    return({
        type: 'SET_HOT_RESTAURANT',
        payload:data,
        dataType: dataType
    });
}

export const setCurrentPage = (page) => {
    return({
        type: 'SET_CURRENT_PAGE',
        page:page
    });
}

