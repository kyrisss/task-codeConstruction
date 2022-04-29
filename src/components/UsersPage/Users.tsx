import { useState } from "react"
import { UserType } from "../redux/usersReducer"
import './style.scss'
//@ts-ignore
import User from "./User.tsx"


interface PropsType {
    users: UserType[]
    sortUsers: ( type: string, sortKey: string) => void
}

const Users: React.FC<PropsType> = (props) => {

    const mapUsers = props.users?.map(user => {
        return <User key={user.id} 
            name={user.name}
            username={user.username}
            city={user.address.city}
            phone={user.phone}
            company={user.company.name}>
        </User>
    })

    const [sortType, setSortType] = useState("asc")

    const theadHandler = (e) => {
        if(sortType == "asc"){
            setSortType("dsc")
        }else{
            setSortType("asc")
        }
        props.sortUsers(sortType, e.target.dataset.sort)
    }


    return (

        <table className="main-users-table users">
            <thead className="users__title" onClick={theadHandler}>
                <tr>
                    <td data-sort="name">Имя</td>
                    <td data-sort="username">Никнейм</td>
                    <td data-sort="address">Город</td>
                    <td data-sort="phone">Телефон</td>
                    <td data-sort="company">Компания</td>
                </tr>
            </thead>
            <tbody className="users__items">
                {mapUsers}
            </tbody>
        </table>
    )
}

export default Users

