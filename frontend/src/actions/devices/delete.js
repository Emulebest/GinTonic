import {
    DELETE_DEVICE_REQUEST,
    DELETE_DEVICE_FAILURE,
    DELETE_DEVICE_SUCCESS
} from "../../constants/actionTypes";
import type {DeleteDeviceAction} from "../../types/devices/delete";
import type {RequestError} from "../../types/general";

export const deleteDevice = (deviceId: number): DeleteDeviceAction => {
    return {
        type: DELETE_DEVICE_REQUEST,
        payload: {
            deviceId
        }
    }
};

export const deleteDeviceSuccess = (deviceId: number): DeleteDeviceAction => {
    return {
        type: DELETE_DEVICE_SUCCESS,
        payload: {
            deviceId
        }
    }
};

export const deleteDeviceFailure = (error: RequestError): DeleteDeviceAction => {
    let {message} = error.response.data;
    let {status} = error.response;
    return {
        type: DELETE_DEVICE_FAILURE,
        payload: {
            message, status
        }
    }
};