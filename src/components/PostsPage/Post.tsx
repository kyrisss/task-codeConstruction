
interface PropsType{
    userId: number,
    key: number,
    title: string,
    body: string
}

const Post: React.FC<PropsType>= (props) => {
    return(
        <div className="posts__post post">
            <h3 className="post__user">{`Пользователь ${props.userId}`}</h3>
            <h4 className="post__title">{props.title}</h4>
            <p className="post__body">{props.body}</p>
        </div>


    )
}

export default Post