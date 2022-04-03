import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
 width: 200px;   
 box-shadow: 3px 3px 3px 3px darkgray; 
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 10px;
`

const BotaoDeAdicionar = styled.button`
align-self: center;
`

export default class CardProdutos extends React.Component {

    render () {
        const produto = this.props.produto
        console.log(produto)
        return (
            <div>
            <Img src={produto.props.foto}/>
            <p> {produto.props.nome} </p>
            <p> {produto.props.preco} </p>
            <BotaoDeAdicionar onClick={() => this.props.adicionandoAoCarrinho(produto.props.id)}> Adicionar ao carrinho </BotaoDeAdicionar>
            </div>
        )
    }
}

