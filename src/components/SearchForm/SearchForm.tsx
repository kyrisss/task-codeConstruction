import './style.scss'

interface PropsType {
    search:string,
    SET_SEARCH: (str: string) => void
}


const SearchForm: React.FC<PropsType> = (props) => {
    
    const inputHandler = (e) => {
        props.SET_SEARCH(e.target.value)
    }

    return (
        <div className="main__search search">
            <label htmlFor="search">Поиск:</label>
            <input type="text" id="search" className="search__input" value={props.search} onChange={inputHandler}/>
        </div>
    )
}

export default SearchForm