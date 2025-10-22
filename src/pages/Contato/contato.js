import './contato.css'
import instagram from '../../assets/instagram.png'
import email from '../../assets/email.png'
import telefone from '../../assets/whatsapp-social-media-svgrepo-com 1.png'

function Contato () {
    return (
        <section id='contato'>
            <div className='container-banner-contato'>
                <div className='container-content-contato'>
                    <div className='container-h2-contato'>
                        <h2>Contato</h2>
                    </div>
                    <div className='container-icons-contato'>
                        <a href='https://wa.me/5511941527333' className='content-icons-contato'>
                            <img src={telefone}></img>
                            <p>(11) 94152 7333</p>
                        </a>
                        <a href='mailto:comercial@servicosempr.com.br'  className='content-icons-contato'>
                            <img src={email}></img>
                            <p>comercial@servicosempr.com.br</p>
                        </a>
                    </div>
                    <div className='container-icons-contato'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato;