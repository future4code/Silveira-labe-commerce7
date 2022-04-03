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

<<<<<<< HEAD
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

=======
export default class ProdutosCard extends React.Component {
    render () {
            const produtos = this.props.listaDeProdutos
            const funcaoDeAcionar = this.props.adicionarProduto
        return (
            <div>
                <Img src={produtos.foto}/>
                <p> {produtos.nome} </p>
                <p> {produtos.preco} </p>
                <button onClick={funcaoDeAcionar}> Adicionar ao carrinho </button> 
            </div>
        )
    }
}
>>>>>>> master
