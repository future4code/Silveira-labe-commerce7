import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    align-items: center;
    gap: 6px;
    grid-auto-flow: column;
    margin: 10px ;
  
`


export default class ShoppingCartItem extends React.Component{


    render(){
        return(
            <Container>
                <p>{this.props.itemCarrinho.quantidade}x</p>
                <p>{this.props.itemCarrinho.nome}</p>
                <button onClick ={() => this.props.onRemoveProduto(this.props.itemCarrinho.id)}>Remover</button>
            </Container>
        );
    }

}