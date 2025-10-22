import './tablet.css'
import React, {useState, useEffect} from 'react';
import martelo from '../../assets/martelo.png'
import vassoura from '../../assets/vassoura.png'
import portao from '../../assets/portao.png'
import sino from '../../assets/sino.png'
import CardLimpeza from './CardLimpeza';
import CardRecepcao from './CardRecepcao';
import CardPortaria from './CardPortaria';
import CardManutencao from './CardManutencao';


function Tablet () {
    const [conteudo, setConteudo] = useState(CardLimpeza);

    function trocarConteudo(origem) {
        const abaLimpeza = document.getElementById('aba-limpeza')
        const abaRecepcao = document.getElementById('aba-recepcao')
        const abaPortaria = document.getElementById('aba-portaria')
        const abaManutencao = document.getElementById('aba-manutencao')

        if (origem == 'limpeza') {
            setConteudo(CardLimpeza)
            abaLimpeza.classList.add('box-img-selected')
            abaRecepcao.classList.remove('box-img-selected')
            abaPortaria.classList.remove('box-img-selected')
            abaManutencao.classList.remove('box-img-selected')
        }
        if (origem == 'recepcao'){
            setConteudo(CardRecepcao)
            abaLimpeza.classList.remove('box-img-selected')
            abaRecepcao.classList.add('box-img-selected')
            abaPortaria.classList.remove('box-img-selected')
            abaManutencao.classList.remove('box-img-selected')
        }
        if (origem == 'portaria'){
            setConteudo(CardPortaria)
            abaLimpeza.classList.remove('box-img-selected')
            abaRecepcao.classList.remove('box-img-selected')
            abaPortaria.classList.add('box-img-selected')
            abaManutencao.classList.remove('box-img-selected')
        }
        if (origem == 'manutencao'){
            setConteudo(CardManutencao)
            abaLimpeza.classList.remove('box-img-selected')
            abaRecepcao.classList.remove('box-img-selected')
            abaPortaria.classList.remove('box-img-selected')
            abaManutencao.classList.add('box-img-selected')
        }
    };
    


    useEffect(() => {
        
    }, [conteudo]);
    
    return (
        <div>
            <div className='container-tablet-header'>
                <div className='container-img-header'>
                    <a className='box-img box-img-selected' onClick={()=>{trocarConteudo('limpeza')}} id='aba-limpeza'>
                        <img src={vassoura} className='images-tablet'></img>
                    </a>
                    <a className='box-img' onClick={()=>{trocarConteudo('recepcao')}} id='aba-recepcao'>
                        <img src={sino} className='images-tablet'></img>
                    </a>
                    <a className='box-img' onClick={()=>{trocarConteudo('portaria')}} id='aba-portaria'>
                        <img src={portao} className='images-tablet'></img>
                    </a>
                    <a className='box-img' onClick={()=>{trocarConteudo('manutencao')}} id='aba-manutencao'>
                        <img src={martelo} className='images-tablet'></img>
                    </a>
                </div>
                <div className='container-tablet'>
                    <div className='container-all-'>
                        {
                            (
                                conteudo
                            )
                        }
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default Tablet;

