
interface PropsType {
    key: number
    name: string
    username: string
    city: string
    phone: string
    company: string
}
const User: React.FC<PropsType> = (props) => {
    return(
        <tr className="users__item">
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.city}</td>
            <td>{props.phone}</td>
            <td>{props.company}</td>
        </tr>
    )
}

export default User