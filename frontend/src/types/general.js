// @flow

export type InitialState = {
    data : any,
    error : any,
    message : ?string
}

export type Action = {
    type : string,
    payload : any
}

export type RequestError = {
    request : any,
    response : any
}