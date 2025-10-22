import './proposito.css'
import globo from '../../assets/globo.png'
import olho from '../../assets/olho.png'
import estrela from '../../assets/estrela.png'

function Proposito () {
    return (
        <section className="container-all" id='proposito'>
            <div className='container-content'>
                <div className='titulo'>
                    <h2 className='titulo-h2'>Nosso Propósito</h2>
                </div>
                <div className='container-cards'>
                        <div className="card">
                            <div>
                                <div className='container-img'>
                                    <img src={globo}></img>
                                </div>
                                <div className='container-h3-globo'>
                                    <h3>MISSÃO</h3>
                                </div>
                                <div className='container-text'>
                                    <p>Ser reconhecida pela excelência em Terceirização de Serviços.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className='container-img-olho'>
                                    <img src={olho}></img>
                                </div>
                                <div className='container-h3-visao'>
                                    <h3>VISÃO</h3>
                                </div>
                                <div className='container-text'>
                                    <p>Entender as necessidades de cada cliente e oferecer o melhor atendimento.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className='container-img'>
                                    <img src={estrela}></img>
                                </div>
                                <div className='container-h3-estrela'>
                                    <h3>VALORES</h3>
                                </div>
                                <div className='container-text'>
                                    <p>Ética e honestidade em todos os âmbitos, respeito às pessoas e suas diferenças.</p>
                                </div>
                            </div>
                        </div>
                </div>


            </div>
        </section>
    )
}

export default Proposito;