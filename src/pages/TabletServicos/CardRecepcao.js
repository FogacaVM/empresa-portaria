import recepcionista from '../../assets/recepcionista.jpg'


function CardRecepcao () {
    return (
        <div className="container-all-">
            <div className='container-left-tablet'>
                <img src={recepcionista} className='image-tablet'></img>
            </div>
            <div className='container-right-tablet'>
                                    <p className='text-tablet'>
                                        A recepção é o cartão de visita de qualquer negócio. Compreendemos a importância de causar uma excelente primeira impressão. Por isso, nossos recepcionistas são treinados para oferecer:
                                    </p>
                                    <ul>
                                        <li className='text-tablet-1'>
                                            Simpatia e cordialidade: Recebendo visitantes com um sorriso e atenção.
                                        </li>
                                        <li className='text-tablet-1'>
                                            Profissionalismo: Conhecimento adequado dos equipamentos e normas do local.
                                        </li>
                                        <li className='text-tablet-1'>
                                            Eficiência: Capacidade de lidar com diversas situações com agilidade.
                                        </li>
                                    </ul>
            </div>
        </div>
    )
} 

export default CardRecepcao;