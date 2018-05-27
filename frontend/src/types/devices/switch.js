// @flow

import {SWITCH_REQUEST, SWITCH_FAILURE, SWITCH_SUCCESS} from "../../constants/actionTypes";
import type{Device} from "./devices";

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
        device: Device
    }
};

type SwitchFailure = {
    type: $Values<typeof SWITCH_ACTIONS>,
    payload: {
        message: string, status: number
    }
};

export type SwitchAction = SwitchRequest | SwitchSuccess | SwitchFailure;