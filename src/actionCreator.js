import * as actions from './actionType'

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    }
}

export function bugRemoved() {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: 1
        }
    }
}

export function bugResolved() {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id: 1
        }
    }
}