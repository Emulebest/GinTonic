// @flow

import {SWITCH_REQUEST, SWITCH_FAILURE, SWITCH_SUCCESS} from "../../constants/actionTypes";

const SWITCH_ACTIONS = {
    SWITCH_REQUEST, SWITCH_FAILURE, SWITCH_SUCCESS
};

type SwitchRequest = {
    type: $Values<typeof SWITCH_ACTIONS>,
    payload: {
        deviceId: number
    }
};

type SwitchSuccess = {
    type: $Values<typeof SWITCH_ACTIONS>,
    payload: {
        deviceId: number,
        message: string
    }
};

type SwitchFailure = {
    type: $Values<typeof SWITCH_ACTIONS>,
    payload: {
        message: string, status: number
    }
};

export type SwitchAction = SwitchRequest | SwitchSuccess | SwitchFailure;