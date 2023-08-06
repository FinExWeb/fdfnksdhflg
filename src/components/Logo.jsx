import Logotipe from '../assets/Logo.svg'

const Logo = ({ logotipe }) => {
    return (
        <img className='img-fluid' src={logotipe || Logotipe} alt="site logo" />
    )
}

export default Logo