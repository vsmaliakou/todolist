import * as appSelectors from '../../app/selectors'
import {slice as appSlice, RequestStatusType as T1} from './application-reducer'
import {asyncActions} from './application-reducer'

const appReducer = appSlice.reducer
const actions = appSlice.actions
const appActions = {
    ...actions,
    ...asyncActions
}

export type RequestStatusType = T1

export {
    appSelectors,
    appReducer,
    appActions
}