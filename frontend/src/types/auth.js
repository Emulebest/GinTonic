// @flow

export type LoginType = {|
    email: string,
    password: string
|};

export type LoginTypeSuccess = {
    token: string,
    user : User
};

export type RegisterType = {|
    email: string,
    password: string,
    confirmPassword: string,
    username: string
|};

export type User = {
    id?: number,
    firstName?: string,
    lastName?: string
}
