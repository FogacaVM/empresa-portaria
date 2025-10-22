import './botao.css'
import flecha from '../../assets/flecha para cima.png'

function Botao () {
    return(
            <a className='container-button' href='#header'>
                <button className='button'>
                    <img src={flecha}></img>
                </button>
            </a>
    )
}

export default Botao;