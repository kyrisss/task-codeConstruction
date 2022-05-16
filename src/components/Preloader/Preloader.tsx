import './style.scss'
//@ts-ignore
import preloader from './Rocket.gif'

const Preloader = () => {

    return (
        <div className='preloader' >
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export default Preloader;