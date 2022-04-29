import './style.scss'
import { connect } from "react-redux"
import { useEffect } from "react";
//@ts-ignore
import SearchForm from "../SearchForm/SearchForm.tsx"
//@ts-ignore
import { PostType, SET_SEARCH, SET_CURRENT_PAGE, getPostsTC } from '../redux/postsReducer.ts';
//@ts-ignore
import Posts from "./Posts.tsx";
//@ts-ignore
import Paginator from '../Paginator/Paginator.tsx';

interface PropsType {
    posts: PostType[]
    search: string
    totalCount: number,
    pageSize: number
    currentPage: number
    SET_SEARCH: (data: string) => void
    SET_CURRENT_PAGE: (data: number) => void
    getPostsTC: () => void
}

const PostsContainer: React.FC<PropsType> = (props) => {

    useEffect(() => {
        props.getPostsTC()
    }, [])

    const filterPosts = props.posts.filter(post => post.title.includes(props.search) || post.body.includes(props.search))
    const leftBorder = (props.currentPage - 1) * props.pageSize
    const rightBorder = props.currentPage * props.pageSize
    const filterPage = filterPosts.filter((post, index) => index >= leftBorder && index < rightBorder)

    return (
        <main className="main">
            <SearchForm search={props.search} SET_SEARCH={props.SET_SEARCH}></SearchForm>
            <Posts posts={filterPage}></Posts>
            <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} setCurrentPage={props.SET_CURRENT_PAGE}></Paginator>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        search: state.posts.search,
        totalCount: state.posts.totalCount,
        pageSize: state.posts.pageSize,
        currentPage: state.posts.currentPage
    }
}

export default connect(mapStateToProps, {SET_SEARCH, SET_CURRENT_PAGE, getPostsTC})(PostsContainer)