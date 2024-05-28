import styled from 'styled-components';
import IconeExclui from '../../../assets/IconeFechar.png'
import { useContext } from 'react';
import { ProdutosContext } from '../../../context/ProdutosContext';
import { formatadorMoeda } from '../../../utils/FormataMoeda';

const breakPoints = {
    mobile: '480px',
    tablet: '768px',
};

const DivItemCarrinho = styled.div`
    display: flex;
    background-color: #FFFFFF;
    padding: 10px;
    flex-direction: column;
    border-radius: 20px;
    font-size: 20px;

    @media (max-width: ${breakPoints.tablet}) {
        font-size: 16px;
    }

    @media (max-width: ${breakPoints.mobile}) {
        font-size: 10px;
        padding: 7px;
    }
`

const DivConteudoProduto = styled.div`
    display: flex;
    color: #000000;
    justify-content: space-between;
    align-items: center;
    word-break: break-all;
    flex-wrap: wrap;
    gap: 5px;
`

const ImgProduto = styled.img`
    width: 65px;
    height: 75px;
    border-radius: 10px;
`

const H3Titulo = styled.h3`
    font-weight: 500;
`

const DivQuantidade = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: ${breakPoints.tablet}) {
        gap: 7px;
    }

    @media (max-width: ${breakPoints.mobile}) {
        gap: 4px;
    }
`

const BotaoAdSub = styled.button`
    width: 28px;
    height: auto;
    text-align: center;
    background-color: #FFFFFF;
    border: solid 1px #000000;
    font-size: 25px;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;

    @media (max-width: ${breakPoints.tablet}) {
        width: 24px;
        font-size: 21px;
    }

    @media (max-width: ${breakPoints.mobile}) {
        font-size: 15px;
    }
`

const PQuantidade = styled.p`
    font-weight: bold;
`

const H3Preco = styled.h3`
    font-weight: bold;
`

const ImgExcluiProduto = styled.img`
    width: 18px;
    height: 18px;
    position: relative;
    top: -12px;
    left: -12px;
    margin: 0;
    padding: 0;
    cursor: pointer;
`

const ItemModalCarrinho = ({ produto }) => {
    const {
        removeProdutoCarrinho,
        adicionaProdutoCarrinho,
        removerQuantidade } = useContext(ProdutosContext)

    return (
        <DivItemCarrinho>
            <ImgExcluiProduto
                onClick={
                    () => removeProdutoCarrinho(produto.id)
                }
                src={IconeExclui}
                alt='Icone X branco com fundo preto arredondado'
            />
            <DivConteudoProduto>
                <ImgProduto src={produto.src} alt={produto.alt} />
                <H3Titulo>{produto.nome}</H3Titulo>
                <DivQuantidade>
                    <BotaoAdSub 
                        onClick={
                            () => removerQuantidade(produto.id)
                        }
                    >
                        -
                    </BotaoAdSub>
                    <PQuantidade>{produto.quantidade}</PQuantidade>
                    <BotaoAdSub 
                        onClick={
                            () => adicionaProdutoCarrinho(produto)
                        }
                    >
                        +
                    </BotaoAdSub>
                </DivQuantidade>
                <H3Preco>{formatadorMoeda(produto.precoCarrinho)}</H3Preco>
            </DivConteudoProduto>
        </DivItemCarrinho>
    )
}

export default ItemModalCarrinho;