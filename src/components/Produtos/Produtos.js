import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components'
import CardProdutos from './ProdutosCard';



export class Produtos extends React.Component{




}

export default Produtos;
=======
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
>>>>>>> master
