import './trajetoria.css';
import prediogoogle from '../../assets/predio 3.jpeg'

function Trajetoria() {
    return(
        <section className="container-home" id="trajetoria">
            <div className="container-content">
                <div className="conteudo">
                    <div className="container-alltext">
                        <h2 className="texto-h2">Nossa trajetória</h2>
                        <div className="container-onlytext">
                            <p className="text-1">
                                A EMPR SERVIÇOS tem mais de 10 anos de experiência no mercado, especializada na prestação e terceirização de serviços, além do fornecimento de mão de obra qualificada em diversos setores. Nossa missão é oferecer soluções personalizadas que atendam às necessidades exclusivas de cada cliente, independentemente do seu ramo de atividade.
                            </p>
                            <p className="text-padding">
                                Localizada na Zona Norte de São Paulo, a EMPR SERVIÇOS possui uma forte presença nesta região, atendendo a uma vasta base de clientes locais. Nossa estrutura administrativa e operacional, compacta e eficiente, nos permite oferecer preços competitivos, mantendo a alta qualidade dos nossos serviços.
                            </p>
                            <p className="text-3">
                                Nossa área operacional conta com uma dedicada equipe de supervisores, que realiza rondas noturnas e diurnas constantes. Isso garante um acompanhamento minucioso dos serviços prestados e suporte imediato em situações de urgência, assegurando que os clientes recebam o melhor atendimento possível.
                            </p>
                            <p className="text-padding">Nossos Serviços:</p>
                            <ul className="text-padding">
                                <li>Portaria e Controle de Acesso</li>
                                <li>Limpeza e Conservação</li>
                                <li>Recepção</li>
                                <li>Zeladoria</li>
                            </ul>
                            <p className="text-padding">
                                A EMPR SERVIÇOS se dedica a fornecer excelência em cada um desses serviços, com foco na qualidade e na satisfação do cliente.
                            </p>      
                        </div>
                    </div>
                    <div className="container-fotos">
                        <img src={prediogoogle}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trajetoria;