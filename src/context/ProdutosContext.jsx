import { createContext, useEffect, useState } from "react";
import listaDeProdutos from "../mocks/produtos.json";

export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        setProdutos(listaDeProdutos)
    }, []);


    const removeProdutoCarrinho = (id) => {
        setCarrinho(carrinho.filter(produto => produto.id != id))
    }

    const adicionaProdutoCarrinho = (produto) => {
        const temNoCarrinho = carrinho.find((item) => item.id === produto.id);

        if (temNoCarrinho) {
            setCarrinho(carrinho.map((item) =>
                item.id === produto.id ?
                    {
                        ...item, quantidade: item.quantidade + 1,
                        precoCarrinho: (item.quantidade + 1) * produto.preco
                    }
                    : item
            ))
        }
        else {
            setCarrinho([...carrinho,
            {
                ...produto, quantidade: 1,
                precoCarrinho: produto.preco
            }
            ])
        }
    }

    const removerQuantidade = (id) => {
        const produto1 = carrinho.find((item) => item.id === id)

        if (produto1.quantidade === 1) {
            removeProdutoCarrinho(id)
        }

        else {
            setCarrinho(carrinho.map(produto => produto.id === produto1.id ?
                {
                    ...produto, quantidade: produto.quantidade - 1,
                    precoCarrinho: (produto.quantidade - 1) * produto.preco
                }
                : produto
            ))
        }
    }


    const totalProdutosNoCarrinho = carrinho.reduce(
        (soma, item) => soma + item.quantidade, 0
    )
    
    const valorTotalNoCarrinho = carrinho.reduce(
        (soma, item) => soma + item.precoCarrinho, 0
    )

    return (
        <ProdutosContext.Provider value={
            {
                produtos,
                carrinho,
                removeProdutoCarrinho,
                adicionaProdutoCarrinho,
                removerQuantidade,
                totalProdutosNoCarrinho,
                valorTotalNoCarrinho
            }
        }>
            {children}
        </ProdutosContext.Provider>
    )
}