import React from "react";
import styled from 'styled-components'
import ProdutosCard from "./ProdutosCard";


const BlocoDeProdutos = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`

export default class Produtos extends React.Component{

    render () {

        return (
                <BlocoDeProdutos>
                    <p> quantidade de produtos{this.props.produtos.length}</p>
                   {this.props.produtos.map((produto) => {
                       return <ProdutosCard produto={produto} adicionandoAoCarrinho={this.props.adicionandoAoCarrinho}/>
                   })}
                </BlocoDeProdutos>
        )
    }
}
