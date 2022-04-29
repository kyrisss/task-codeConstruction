import axios from "axios"
import { Dispatch } from "redux"
import { setSearchACType } from "./usersReducer"

export interface PostType {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface initialStoreType {
    posts: PostType[]
    search: string
    pageSize: number
    totalCount: number
    currentPage: number
}

let initialStore: initialStoreType = {
    posts: [],
    search: "",
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
}

type actionType = setPostsACType | setSearchACType | setTotalCountType | setCurrentPageType;

const postsReducer = (state: initialStoreType = initialStore, action: actionType): initialStoreType => {

    switch (action.type) {
        case "SET_POSTS":
            return {
                ...state,
                posts: action.data
            }
        case "SET_SEARCH":
            return {
                ...state,
                search: action.data
            }
        case "SET_TOTAL_COUNT":
            console.log(action)
            return {
                ...state,
                totalCount: action.data
            }
        case "SET_CURRENT_PAGE":
            console.log(action)
            return {
                ...state,
                currentPage: action.data
            }
        default:
            return state;
    }

}

export interface setPostsACType {
    type: 'SET_POSTS'
    data: PostType[]
}

export const SET_POSTS = (data: PostType[]): setPostsACType => {
    return {
        type: 'SET_POSTS',
        data
    }
}

export const SET_SEARCH = (data: string): setSearchACType => {
    return {
        type: 'SET_SEARCH',
        data
    }
}

interface setTotalCountType {
    type: "SET_TOTAL_COUNT"
    data: number
}

const SET_TOTAL_COUNT = (data: number): setTotalCountType => {
    return {
        type: 'SET_TOTAL_COUNT',
        data
    }
}

interface setCurrentPageType {
    type: "SET_CURRENT_PAGE"
    data: number
}

export const SET_CURRENT_PAGE = (data: number): setCurrentPageType => {
    console.log(data)
    return {
        type: "SET_CURRENT_PAGE",
        data
    }
}




export const getPostsTC = () => {
    return (dispatch: Dispatch<actionType>) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response)
                dispatch(SET_POSTS(response.data));
                dispatch(SET_TOTAL_COUNT(response.data.length));
            })
    }
}


export default postsReducer;