import zeladoria from '../../assets/zelador 2 - Copia.png'


function CardManutencao () {
    return (
        <div className="container-all-">
            <div className='container-left-tablet'>
                <img src={zeladoria} className='image-tablet'></img>
            </div>
            <div className='container-right-tablet'>
                                    <p className='text-tablet'>
                                        O zelador é a espinha dorsal de qualquer empreendimento, e nossos serviços de zeladoria asseguram que o cotidiano flua de maneira tranquila e organizada. Os profissionais da EMPR Serviços são treinados para:
                                    </p>
                                    <ul>
                                        <li className='text-tablet-1'>
                                            Gerenciar com eficiência: Coordenação de tarefas e supervisão contínua.
                                        </li>
                                        <li className='text-tablet-1'>
                                            Liderança: Postura proativa e habilidade de lidar com situações adversas.
                                        </li>
                                        <li className='text-tablet-1'>
                                            Confiabilidade: Figura central para usuários e moradores, garantindo que todas as necessidades sejam atendidas prontamente.
                                        </li>
                                    </ul>
            </div>
        </div>
    )
} 

export default CardManutencao;