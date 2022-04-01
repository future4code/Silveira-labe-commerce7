import React from 'react';
import styled from 'styled-components'


const Img = styled.img`
 width: 200px;   
 box-shadow: 3px 3px 3px 3px darkgray; 
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 10px;
`

function CardProdutos(props) {

    return (
        <div>
            <Img src={props.foto} />
            <p>{props.nome}</p>
            <p>R${props.preco}</p>
            <button onClick={''}>Adicionar no carrinho</button>
        </div>
    )

}
export default CardProdutos;

