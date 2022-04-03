
import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
`
const CardInfo = styled.div`
display: flex;
flex-direction: column;
padding: 16px;

p {
    margin: 4px 0;
}
`
const ImagemProduto = styled.img`
background-color: black;
max-width: 220px;
`

const BotaoDeAdicionar = styled.button`
align-self: center;
`
export default class ProdutosCard extends React.Component {

    render () {
        const produto = this.props.produto
        return (
            <ContainerCard>
                <ImagemProduto src={produto.foto}/>
                <CardInfo>
                    <p> {produto.nome} </p>
                    <p> {produto.preco} </p>
                    <BotaoDeAdicionar onClick={() => this.props.adicionandoAoCarrinho(produto.id)}> Adicionar ao carrinho </BotaoDeAdicionar>
                </CardInfo>
            
            </ContainerCard> 
        )
    }
}