// @flow

import type{LoginAction, LogoutAction} from "./auth/login";
import type{RegisterAction} from "./auth/register";

export type InitialState = {
    data: any,
    status: ?number,
    message: ?string
}

export type Action = | LoginAction | RegisterAction | LogoutAction;

export type RequestError = {
    response: {
        data : {
            message : string
        },
        status : number
    }
}

export type Dispatch = (action: Action | Promise<Action>) => Promise<any>;