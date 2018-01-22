import { actionTypes } from 'constants';

const { SET_MODAL_VISIBILITY, SET_LIBRARY_FILTER } = actionTypes;

export function setModalVisibility(filter, index) {
    return {
        type: SET_MODAL_VISIBILITY,
        filter,
        index
    };
}

export function setLibraryFilter(filter, text) {
    return {
        type: SET_LIBRARY_FILTER,
        filter,
        text
    };
}
