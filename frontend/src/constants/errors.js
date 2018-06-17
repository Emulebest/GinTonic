const createError = (title, description) => {
    return {
        title, description
    }
};

export const REGISTER_ERROR = createError(`Oops.. You've got an error`);
export const REGISTER_SUCCESS = createError('Successfully created user', '');

export const LOGIN_ERROR = createError(`Oops.. You've got an error`);
export const LOGIN_SUCCESS = createError('Welcome!', "");