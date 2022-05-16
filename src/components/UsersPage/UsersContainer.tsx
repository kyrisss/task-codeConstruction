import { useEffect, useState } from "react";
import { connect } from "react-redux"
import './style.scss'
//@ts-ignore
import { getUsersTC, UserType, SET_SEARCH, SET_SORT } from './../redux/usersReducer.ts';
//@ts-ignore
import Users from "./Users.tsx";
//@ts-ignore
import { SearchFormType } from "../redux/usersReducer.ts";
//@ts-ignore
import UsersSearchForm from "../UsersSearchForm/UsersSearchForm.tsx";
//@ts-ignore
import Preloader from "../Preloader/Preloader.tsx";




interface PropsType {
    users: UserType[] | null
    search: SearchFormType
    loading: boolean
    getUsersTC: () => void
    SET_SEARCH: () => void
}

const UsersContainer: React.FC<PropsType> = (props) => {


    useEffect(() => {
        props.getUsersTC()
    }, [])

    const visibleUsers = props.users?.filter(user => {
        return user.name.toLowerCase().includes(props.search.name.toLowerCase()) &&
            user.username.toLowerCase().includes(props.search.username.toLowerCase()) &&
            user.phone.toLowerCase().includes(props.search.phone.toLowerCase()) &&
            user.address.city.toLowerCase().includes(props.search.city.toLowerCase()) &&
            user.company.name.toLowerCase().includes(props.search.company.toLowerCase())

    })

    const sortUsers = (type: string, sortKey: string) => {
        switch (sortKey) {
            case "address":
                if (type == "asc") {
                    visibleUsers.sort((a, b) => a[sortKey].city.localeCompare(b[sortKey].city))
                } else {
                    visibleUsers.sort((a, b) => b[sortKey].city.localeCompare(a[sortKey].city))
                }
                break
            case "company":
                if (type == "asc") {
                    visibleUsers.sort((a, b) => a[sortKey].name.localeCompare(b[sortKey].name))
                } else {
                    visibleUsers.sort((a, b) => b[sortKey].name.localeCompare(a[sortKey].name))
                }
                break
            default:
                if (type == "asc") {
                    visibleUsers.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
                } else {
                    visibleUsers.sort((a, b) => b[sortKey].localeCompare(a[sortKey]))
                }
                break
        }
    }

    return (
        <>
            {props.loading ? <Preloader></Preloader> : null}
            <main className="main">
                <UsersSearchForm search={props.search} SET_SEARCH={props.SET_SEARCH}></UsersSearchForm>
                <Users users={visibleUsers} sortUsers={sortUsers}></Users>
            </main>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        search: state.users.search,
        sort: state.users.sort,
        loading: state.users.loading
    }
}

export default connect(mapStateToProps, { getUsersTC, SET_SEARCH, SET_SORT })(UsersContainer)