import { SearchFormType } from '../redux/usersReducer'
import './style.scss'

interface PropsType {
    search: SearchFormType,
    SET_SEARCH: (obj: SearchFormType) => void
}


const SearchForm: React.FC<PropsType> = (props) => {

    const inputHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        props.SET_SEARCH({[name]: value})
    }

    return (
        <div className="main__search search">
            <form className='search__form'>
                <input name="name"  className="form__input" value={props.search.name} onChange={inputHandler} placeholder='Имя' />
                <input name="username" className="form__input" value={props.search.username} onChange={inputHandler} placeholder='Никнейм' />
                <input name="city" className="form__input" value={props.search.city} onChange={inputHandler} placeholder='Город' />
                <input name="phone" className="form__input" value={props.search.phone} onChange={inputHandler} placeholder='Телефон' />
                <input name="company" className="form__input" value={props.search.company} onChange={inputHandler} placeholder='Компания' />
            </form>
        </div>
    )
}

export default SearchForm