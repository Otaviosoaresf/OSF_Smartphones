import styled from "styled-components";
import IconeCarrinho from '../../assets/IconeCarrinho.png'
import { useContext, useState } from "react";
import ModalCarrinho from "../ModalCarrinho";
import { ProdutosContext } from "../../context/ProdutosContext";

const colors = {
    verde: '#006769',
    branco: '#FFFFFF',
    preto: '#000000'
}

const breakPoints = {
    mobile: '480px',
    tablet: '768px',
};

const HeaderPagina = styled.div`
  background-color: ${colors.verde};
  font-family: 'Montserrat', sans-serif;
  color: ${colors.branco};
  height: 101px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakPoints.tablet}){
    padding: 0 30px;
  }

  @media (max-width: ${breakPoints.mobile}){
    padding: 0 10px;
  }
`

const P = styled.p`
    font-size: 20px;
    font-weight: 300;
    display: flex;
    align-items: baseline;

    @media (max-width: ${breakPoints.mobile}) {
        font-size: 12px;
    }
`
const Span = styled.span`
    font-size: 40px;
    font-weight: 700;
    margin-right: 7px;

    @media (max-width: ${breakPoints.mobile}) {
        font-size: 30px;
    }
`

const Carrinho = styled.div`
    background-color: ${colors.branco};
    width: 90px;
    height: 45px;
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    img {
        max-width: 19px;
        max-height: 18px;
    }
    p {
        font-size: 18;
        font-weight: 900;
        color: ${colors.preto}
    }
`


const Cabecalho = () => {
    const [abrirModal, setAbrirModal] = useState(false);
    const { totalProdutosNoCarrinho } = useContext(ProdutosContext);

    const aoClicarNoCarrinho = () => {
        setAbrirModal(!abrirModal);
    };

    return (
        <HeaderPagina>
            <P><Span>OSF</Span>Smartphones</P>
            <Carrinho onClick={aoClicarNoCarrinho}>
                <img src={IconeCarrinho} alt="Icone de carrinho de compras" />
                <p>{totalProdutosNoCarrinho}</p>
            </Carrinho>
            {abrirModal && <ModalCarrinho fecharModal={aoClicarNoCarrinho} />}
        </HeaderPagina>
    )
}

export default Cabecalho;