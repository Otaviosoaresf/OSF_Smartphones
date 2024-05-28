import styled from "styled-components";
import IconeFechar from '../../assets/IconeFechar.png';
import ItemModalCarrinho from "./ItemModalCarrinho";
import { useContext } from "react";
import { ProdutosContext } from "../../context/ProdutosContext";
import { formatadorMoeda } from "../../utils/FormataMoeda";

const breakPoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
};

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 40%;
    background-color: #006769;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: translateX(0%);
    font-size: 20px;

    @media (max-width: ${breakPoints.desktop}) {
        font-size: 18px;
    }

    @media (max-width: ${breakPoints.tablet}) {
        width: 60%;
        font-size: 16px;
    }

    @media (max-width: ${breakPoints.mobile}) {
        width: 75%;
        font-size: 14px;
    }
`

const ConteudoModal = styled.div`
    padding: 20px;

`

const DivTituloBotao = styled.div`
    display: flex;
    justify-content: space-between;
`

const ModalTitulo = styled.h2`
    color: #FFFFFF;
`

const BotaoFechar = styled.button`
    background-color: #006769;
    border: none;
    cursor: pointer;
`

const DivItensCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 65vh;
    overflow-y: auto;
    padding: 15px 5px;
`

const DivTotal = styled.div`
    display: flex;
    justify-content: space-between;
`

const ModalCarrinho = ({ fecharModal }) => {
    const { carrinho, valorTotalNoCarrinho } = useContext(ProdutosContext);

    return (
        <ModalContainer>
            <ConteudoModal>

                <DivTituloBotao>
                    <ModalTitulo>Carrinho</ModalTitulo>
                    <BotaoFechar 
                        onClick={fecharModal}
                    >
                        <img src={IconeFechar} 
                            alt="Icone X branco com fundo preto arredondado"
                        />
                    </BotaoFechar>
                </DivTituloBotao>

                <DivItensCarrinho>
                    {carrinho.map(item => 
                        <ItemModalCarrinho key={item.id} produto={item} />
                        )
                    }
                </DivItensCarrinho>

                <DivTotal>
                    <ModalTitulo>Total:</ModalTitulo>
                    <ModalTitulo>
                        {formatadorMoeda(valorTotalNoCarrinho)}
                    </ModalTitulo>
                </DivTotal>

            </ConteudoModal>
        </ModalContainer>
    )
}

export default ModalCarrinho;