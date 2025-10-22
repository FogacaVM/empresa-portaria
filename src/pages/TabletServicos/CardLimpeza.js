import limpeza from '../../assets/limpeza.jpeg'


function CardLimpeza () {
    return (
        <div className="container-all-">
            <div className='container-left-tablet'>
                <img src={limpeza} className='image-tablet'></img>
            </div>
            <div className='container-right-tablet'>
                <p className='text-tablet'>
                    Nosso serviço de limpeza é desenvolvido para entregar sofisticação e eficiência. Com uma equipe experiente e altamente qualificada, ajustamos cada projeto às exigências específicas do cliente, assegurando um ambiente limpo e bem cuidado. Escolher a EMPR para suas necessidades de limpeza significa contar com:
                </p>
                <ul>
                    <li className='text-tablet-1'>
                        Padrão de execução superior: Tarefas realizadas com dedicação e atenção aos detalhes.
                    </li>
                    <li className='text-tablet-1'>
                        Benefícios financeiros: Redução de custos com a contratação direta de pessoal e otimização de recursos.
                    </li>
                    <li className='text-tablet-1'>
                        Serviço customizado: Soluções adaptadas às suas demandas.
                    </li>
                    <li className='text-tablet-1'>
                        Qualidade incomparável: Compromisso com a satisfação total do cliente.
                    </li>
                </ul>
            </div>

        </div>
    )
} 

export default CardLimpeza;