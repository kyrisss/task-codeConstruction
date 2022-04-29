import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleWare from "redux-thunk"
//@ts-ignore
import usersReducer from './usersReducer.ts'
//@ts-ignore
import postsReducer from './postsReducer.ts'


let reducers = combineReducers({
    users: usersReducer,
    posts: postsReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

type reducersType = typeof reducers
export type appStateType = ReturnType<reducersType>


export default store;