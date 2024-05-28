import styled from "styled-components";
import Produto from "../Produto";
import { useContext } from "react";
import { ProdutosContext } from "../../context/ProdutosContext";

const breakPoints = {
    desktop: '1024px'
};

const Section = styled.section`
    display: flex;
    padding: 150px 120px;
    flex-wrap: wrap;
    gap: 30px;
    background-color: #E5E5E5;
    justify-content: center;

    @media (max-width: ${breakPoints.desktop}) {
        padding: 100px 50px;
    }
`

const ExibeProdutos = () => {
    const { produtos } = useContext(ProdutosContext);

    return (
        <Section>
            {produtos.map(produto => <Produto key={produto.id} produto={produto}/>)}
        </Section>
    )
    
}

export default ExibeProdutos;