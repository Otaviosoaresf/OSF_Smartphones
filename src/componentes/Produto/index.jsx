import { useContext } from "react";
import styled from "styled-components";
import { ProdutosContext } from "../../context/ProdutosContext";
import { formatadorMoeda } from "../../utils/FormataMoeda";

const breakPoints = {
    desktop: '1024px'
};

const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 50vh;
    border-radius: 10px;
    justify-content: space-between;

    @media (max-width: ${breakPoints.desktop}) {
        width: 210px;
        height: 55vh;
    }
`

const Img = styled.img`
    width: 100%;
    height: 30vh;
    border-radius: 10px;
`

const ContainerConteudo = styled.div`
    display: flex;
    padding: 0 10px;
    word-wrap: break-word;
    justify-content: space-around;
    align-items: center;
    
`

const H3Nome = styled.h3`
    font-weight: 400;
`

const H3Preco = styled.h3`
    background-color: #373737;
    color: #FFFFFF;
    padding: 7px;
`

const BotaoProduto = styled.button`
    background-color: #006769;
    color: #FFFFFF;
    border: none;
    font-size: 20px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
`

const Produto = ({ produto }) => {
    const { adicionaProdutoCarrinho } = useContext(ProdutosContext);

    const aoClicado = () => {
        adicionaProdutoCarrinho(produto)
        alert(`${produto.nome} adicionado ao carrinho!`)
    }

    return (
        <Container>
            <Img src={produto.src} alt={produto.alt} />
            <ContainerConteudo>
                <H3Nome>{produto.nome}</H3Nome>
                <H3Preco>{formatadorMoeda(produto.preco)}</H3Preco>
            </ContainerConteudo>
            <BotaoProduto onClick={aoClicado}>Add Carrinho</BotaoProduto>
        </Container>
    )
}

export default Produto;