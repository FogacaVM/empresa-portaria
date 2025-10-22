import './header.css'
import logo from '../../assets/logo.png'


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

function Header() {
    return(
        <section id='header'>
            <header className='nav-bar'>
                <div className="header-container">
                    <img src={logo} className='logo'/>
                    <nav className='menu-options'>
                        <a className='options' href='#trajetoria'>Empresa</a>
                        <a className='options' href='#servicos'>Serviços</a>
                        <a className='options' href='#galeria'>Galeria</a>
                        <a className='options' href='#contato'>Contato</a>
                    </nav>

                </div>
            </header>
        </section>
    )
}

export default Header;