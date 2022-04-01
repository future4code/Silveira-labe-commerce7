import React from 'react';
import ProdutosCard from './ProdutosCard'

export default class Produtos extends React.Component {

    render() {
        const listaDeProdutos = this.props.listaDeProdutos
        return (
            <>
                <span> Quantidade de produtos: {listaDeProdutos.length} </span>

                <div>
                    {listaDeProdutos.map((produto) => {
                        return <ProdutosCard produtos={listaDeProdutos} adicionarProduto={this.props.adicionarProduto(produto)}/>
                    })};
                </div>

            </>
        )
    }
}