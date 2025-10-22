import Header from "../Header/header";
import Trajetoria from "../Trajetoria/trajetoria";
import Proposito from "../Proposito/proposito";
import Servicos from "../Servicos/servicos";
import Tablet from "../TabletServicos/tablet";
import Galeria from "../Galeria/galeria";
import Contato from "../Contato/contato";
import Botao from "../ButtonToTheTop/botao";

function Home () {
    return (
        <div>
            <Header></Header>
            <Trajetoria></Trajetoria>
            <Proposito></Proposito>
            <Servicos></Servicos>
            <Tablet></Tablet>
            <Galeria></Galeria>
            <Contato></Contato>
            <Botao></Botao>
        </div>
    )
}

export default Home;