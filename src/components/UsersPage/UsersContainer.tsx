import { useEffect, useState } from "react";
import { connect } from "react-redux"
import './style.scss'
//@ts-ignore
import { getUsersTC, UserType, SET_SEARCH, SET_SORT } from './../redux/usersReducer.ts';
//@ts-ignore
import Users from "./Users.tsx";
//@ts-ignore
import SearchForm from './../SearchForm/SearchForm.tsx';


interface PropsType {
    users: UserType[] | null
    search: string
    getUsersTC: () => void
    SET_SEARCH: () => void
}

const UsersContainer: React.FC<PropsType> = (props) => {


    useEffect(() => {
        props.getUsersTC()
    }, [])

    const visibleUsers = props.users?.filter(user => {
        return user.name.toLowerCase().includes(props.search.toLowerCase())
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
                    visibleUsers.sort((a, b) => {
                        console.log(a[sortKey].name)
                        console.log(a)
                        return a[sortKey].name.localeCompare(b[sortKey].name)
                        }
                        )
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
        <main className="main">
            <SearchForm search={props.search} SET_SEARCH={props.SET_SEARCH}></SearchForm>
            <Users users={visibleUsers} sortUsers={sortUsers}></Users>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        search: state.users.search,
        sort: state.users.sort
    }
}

export default connect(mapStateToProps, { getUsersTC, SET_SEARCH, SET_SORT })(UsersContainer)