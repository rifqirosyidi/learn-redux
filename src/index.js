import store from './store'
import * as actions from './actionType'
import { bugAdded, bugRemoved, bugResolved } from './actionCreator'

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

store.dispatch(bugAdded("There is new Bug Here"))
store.dispatch(bugResolved())
store.dispatch(bugRemoved())

console.log(store.getState())