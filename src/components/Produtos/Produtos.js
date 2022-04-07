import React from "react"
import styled from "styled-components"
import CardProdutos from "./ProdutosCard"


const BlocoDeProdutos = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`

export default class Produtos extends React.Component{

    render () {

        return (
                <BlocoDeProdutos>
                   {this.props.produtosFiltrados.map((produto) => {
                       console.log(produto)
                       return <CardProdutos produto={produto} adicionandoAoCarrinho={this.props.adicionandoAoCarrinho}/>
                   })}
                </BlocoDeProdutos>
        )
    }
}