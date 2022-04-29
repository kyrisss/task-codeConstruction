import './style.scss'

interface PropsType{

    totalCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (data: number) => void
}

const Paginator: React.FC<PropsType> = (props) => {

    const countOnPage = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for(let i = 1; i <= countOnPage; i++){
        pages.push(i)
    }


    const mapPages = pages.map(p => <div key={p} 
                                        className={p == props.currentPage ? `paginator__page paginator__page_active`: `paginator__page`}
                                        onClick={()=> props.setCurrentPage(p)}>{p}</div> )

    return(
        <div className="main__paginator paginator">
            {mapPages}
        </div>
    )
}

export default Paginator