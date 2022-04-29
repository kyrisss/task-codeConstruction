import axios from "axios"
import { Dispatch } from "redux"


interface GeoType {
    lat: string | null,
    lng: string | null
}
interface CompanyType {
    name: string | null,
    catchPhrase: string | null,
    bs: string | null
}
interface AdressType {
    street: string | null,
    suite: string | null,
    city: string | null,
    zipcode: string | null,
    geo: GeoType
}

export interface UserType {
    id: number | null,
    name: string | null,
    username: string | null,
    email: string | null,
    address: AdressType,
    phone: string | null,
    website: string | null
    company: CompanyType | null
}

export interface initialStoreType {
    users: UserType[]
    search: string
    sort: string
}

let initialStore: initialStoreType = {
    users: null,
    search: "",
    sort: ""
}

type actionType = setUsersACType | setSearchACType | setSortACType

const statusReducer = (state: initialStoreType = initialStore, action: actionType): initialStoreType => {

    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.data
            }
        case "SET_SEARCH":
            return {
                ...state,
                search: action.data
            }
        case "SET_SORT":
            return {
                ...state,
                sort: action.data
            }
        default:
            return state;
    }

}

export interface setUsersACType {
    type: 'SET_USERS'
    data: UserType[]
}

export const SET_USERS = (data: UserType[]): setUsersACType => {
    return {
        type: 'SET_USERS',
        data
    }
}

export interface setSearchACType {
    type: 'SET_SEARCH'
    data: string
}

export const SET_SEARCH = (data: string): setSearchACType => {
    return {
        type: 'SET_SEARCH',
        data
    }
}

export interface setSortACType {
    type: 'SET_SORT'
    data: string
}

export const SET_SORT = (data: string): setSortACType => {
    return {
        type: 'SET_SORT',
        data
    }
}






export const getUsersTC = () => {
    return (dispatch: Dispatch<actionType>) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(SET_USERS(response.data));
            })
    }
}


export default statusReducer;