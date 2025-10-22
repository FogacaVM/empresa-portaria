import portaria from '../../assets/portaria 4.jpeg'

function CardPortaria () {
    return (
        <div className="container-all-">
            <div className='container-left-tablet'>
                <img src={portaria} className='image-tablet'></img>
            </div>
            <div className='container-right-tablet'>
                                    <p className='text-tablet'>
                                        Em nossos serviços de portaria, garantimos segurança e organização para diversos ambientes, incluindo empresas, condomínios, e escritórios. Oferecemos:
                                    </p>
                                    <ul>
                                        <li className='text-tablet-1'>
                                            Controle rigoroso: Verificação de autorizações e monitoramento de entradas e saídas.
                                        </li>
                                        <li className='text-tablet-1'>
                                            Atendimento ao público: Orientação e registro de visitantes, além de monitoramento de áreas delimitadas.
                                        </li>
                                        <li className='text-tablet-1'>
                                            Compromisso: Soluções pontuais e um atendimento que se adapta a cada necessidade específica.
                                        </li>
                                    </ul>
            </div>
        </div>
    )
} 

export default CardPortaria;