import {
    DELETE_DEVICE_REQUEST,
    DELETE_DEVICE_SUCCESS,
    DELETE_DEVICE_FAILURE
} from "../../constants/actionTypes";

const DELETE_DEVICE_ACTIONS = {
    DELETE_DEVICE_REQUEST,
    DELETE_DEVICE_SUCCESS,
    DELETE_DEVICE_FAILURE
};

type DeleteDeviceRequest = {
    type: $Values<typeof DELETE_DEVICE_ACTIONS>,
    payload: {
        deviceId: number
    }
}

type DeleteDeviceSuccess = {
    type: $Values<typeof DELETE_DEVICE_ACTIONS>,
    payload: {
        deviceId: number
    }
}

type DeleteDeviceFailure = {
    type: $Values<typeof DELETE_DEVICE_ACTIONS>,
    payload: {
        message: string, status: number
    }
}

export type DeleteDeviceAction = DeleteDeviceRequest | DeleteDeviceFailure | DeleteDeviceSuccess;