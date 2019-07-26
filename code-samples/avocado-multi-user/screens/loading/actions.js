import {dataLayer} from '../../data-layer';
import * as actionTypes from '../../constants/action-types';


export function getCurrentUser() {
    return (dispatch) => {
        dataLayer.getCurrentUser(dispatch);
    };
}

export function loadingFailed(error) {
    return {type: actionTypes.LOADING_FAILED, isLoadingComplete: true, error: error};
}

export function loadingCompleted() {
    return {type: actionTypes.INIT_COMPLETED, isLoadingComplete: true};
}


export const initialize = () => (dispatch) => dataLayer.initialize(dispatch);
