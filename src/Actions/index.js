// Action Creator

export const selectRoute = (route) => {
    //Return an action
    return({
        type: 'ROUTE_SELECTED',
        index:route
    });
}

export const modalClick = (data) => {
    console.log('action data', data);
    //Return an action
    return({
        type: 'MODAL_CLICK',
        payload:data
    });
}

