import * as actionTypes from './actionTypes';

export const fetchPersons = () => {
    return {
        type: actionTypes.FETCH_PERSONS
    }
}

export const fetchPersonsResponse = (persons) => {
    return {
        type: actionTypes.FETCH_PERSONS_RESPONSE,
        persons
    }
}

export const fetchPersonsError = (err) => {
    return {
        type: actionTypes.FETCH_PERSONS_ERROR,
        err
    }
}

export const fetchPerson = (id) => {
    return {
        type: actionTypes.FETCH_PERSON,
        id
    }
}

export const fetchPersonResponse = (person) => {
    return {
        type: actionTypes.FETCH_PERSON_RESPONSE,
        person
    }
}

export const fetchPersonError = (err) => {
    return {
        type: actionTypes.FETCH_PERSON_ERROR,
        err
    }
}

export const changePersonProperty = (name, value) => {
    return {
        type: actionTypes.CHANGE_PERSON_PROPERTY,
        name, 
        value
    }
}

export const savePerson = (id) => {
    return {
        type: actionTypes.SAVE_PERSON,
        id
    }
}

export const savePersonResponse = () => {
    return {
        type: actionTypes.SAVE_PERSON_RESPONSE,
    }
}

export const savePersonError = (err) => {
    return {
        type: actionTypes.SAVE_PERSON_ERROR,
        err
    }
}

