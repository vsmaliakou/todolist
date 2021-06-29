import {asyncActions as tasksAsyncActions, slice as tasksSlice} from "./tasks-reducer";
import {asyncActions as todolistAsyncActions, slice as todolistsSlice} from './todolists-reducer'
import {TodolistsList} from "./TodolistsList";

const todolistActions = {
    ...todolistAsyncActions,
    ...todolistsSlice.actions
}
const tasksActions = {
    ...tasksAsyncActions,
    ...tasksSlice.actions
}
const todolistsReducer = todolistsSlice.reducer
const tasksReducer = tasksSlice.reducer

export {
    tasksActions,
    todolistActions,
    TodolistsList,
    todolistsReducer,
    tasksReducer
}