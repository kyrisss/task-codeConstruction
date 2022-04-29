
import { PostType } from './../redux/postsReducer';
//@ts-ignore
import Post from './Post.tsx';

interface PropsType {
    posts: PostType[]
}

const Posts: React.FC<PropsType> = (props) => {

    const mapPosts = props.posts.map(post => {
        return <Post userId={post.userId}
            key={post.id}
            title={post.title}
            body={post.body} >
        </Post>
    })

    return (
        <div className="main__posts posts">
            {mapPosts}
        </div>
    )
}

export default Posts