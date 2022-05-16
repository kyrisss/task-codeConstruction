import axios from "axios"
import { Dispatch } from "redux"

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
    currentPage: number,
    loading: boolean
}

let initialStore: initialStoreType = {
    posts: [],
    search: "",
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    loading: false
}

type actionType = setPostsACType | setSearchACType | setTotalCountType | setCurrentPageType | setLoadingACType;

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
        case "SET_LOADING":
            return {
                ...state,
                loading: action.data
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

interface setSearchACType {
    type: 'SET_SEARCH'
    data: string
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

interface setLoadingACType {
    type: 'SET_LOADING'
    data: boolean
}

export const SET_LOADING = (data: boolean): setLoadingACType => {
    return {
        type: 'SET_LOADING',
        data
    }
}




export const getPostsTC = () => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(SET_LOADING(true))
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response)
                dispatch(SET_POSTS(response.data));
                dispatch(SET_TOTAL_COUNT(response.data.length));
                setTimeout(() => {
                    dispatch(SET_LOADING(false))
                }, 2000)
            })
    }
}


export default postsReducer;