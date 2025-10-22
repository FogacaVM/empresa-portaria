import './galeria.css'
import portaria3 from '../../assets/portaria 3.jpeg'
import portaria1 from '../../assets/portaria 1.jpeg'
import predio3 from '../../assets/predio 3.jpeg'
import zelador2 from '../../assets/zelador 2.png'
import predio2 from '../../assets/predio 2.jpeg'
import portaria2 from '../../assets/portaria 2.jpeg'
import predio1 from '../../assets/predio 1.jpeg'
import zelador1 from '../../assets/zelador 1.jpg'
import portaria4 from '../../assets/portaria 4.jpeg'
import predio4 from '../../assets/predio 4.jpeg'

function Galeria () {
    return (
        <div>
            <section className='container-all-galeria' id='galeria'>
                <div>
                    <div className='container-text-galeria'>
                        <h2 className='text-galeria'>Galeria</h2>
                    </div> 
                    <div className='container-card-galeria-content' id='foto1'> 
                        <div className='container-card-galeria'>
                            <a className='content-card-galeria' href='#foto1'>
                                <img src={portaria3}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto2'> 
                            <a className='content-card-galeria' href='#foto2'>
                                <img src={portaria1}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto3'>
                            <a className='content-card-galeria' href='#foto3'>
                                <img src={predio3}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto4'>
                            <a className='content-card-galeria' href='#foto4'>
                                <img src={zelador2}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto5'>
                            <a className='content-card-galeria' href='#foto5'>
                                <img src={predio2}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto6'>
                            <a className='content-card-galeria' href='#foto6'>
                                <img src={portaria2}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto7'>
                            <a className='content-card-galeria' href='#foto7'>
                                <img src={predio1}/>   
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto8'>
                            <a className='content-card-galeria' href='#foto8'>
                                <img src={zelador1}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto9'>
                            <a className='content-card-galeria' href='#foto9'>
                                <img src={portaria4}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>

                        <div className='container-card-galeria' id='foto10'>
                            <a className='content-card-galeria' href='#foto10'>
                                <img src={predio4}/>
                            </a>
                            <div className='detalhes'>
                                <a href='#fechar'>Fechar</a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Galeria;