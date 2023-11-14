
import preloaderImg from './../../assets/icon/preloader.gif'

let Preloader = (props) => {
    return <img src={preloaderImg} className={`${props.style} `} alt='preloader' />
}

export default Preloader;