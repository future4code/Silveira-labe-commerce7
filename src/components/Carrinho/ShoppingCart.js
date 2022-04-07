import React from 'react';
import styled from 'styled-components'
import ShoppingCartItem from './ShoppingCartItem';

const ContainerCarrinho = styled.div`
    margin: 10px;

`

const ValorTotal = styled.p`
    text-align: center;
    margin-right: 10px;

`
const H3 = styled.h3`
display: flex;
align-items:center;
justify-content: center;
margin-top: 1px;
position: relative;
bottom: 25px ;


`

const ListaCarrinho = styled.div`
    display: grid;
    gap: 10px;
    
`
const ImgCarrinho = styled.img`
    width: 4vw;
    margin-right: 15px;
    position: relative;
    top: 20px;
`

const DivCarrinho = styled.div`
background-color: #66cdaa;


`

export default class ShoppingCart extends React.Component{

    calculaValorTotal = () =>{
        let valorTotal =0

        for(let produto of this.props.produtosNoCarrinho){

            valorTotal = valorTotal +(produto.preco * produto.qtd)
        }
        return valorTotal;
    }


    render(){
        return(
            <ContainerCarrinho>
                
                <DivCarrinho class="imagemcarrinho">
                    <ImgCarrinho src={'https://cdn-icons-png.flaticon.com/512/2331/2331970.png'} />
                    <H3>Carrinho</H3>
                </DivCarrinho>

                <ListaCarrinho>
                    {this.props.produtosNoCarrinho.map((produto)=> {
                        return <ShoppingCartItem 
                                    itemCarrinho={produto}
                                    onRemoveProduto={this.props.onRemoveProduto}
                                />
                    })}

                </ListaCarrinho>
                <ValorTotal>Valor total \_:=:_/ Maria Eduarda Lopes R${this.calculaValorTotal()},00</ValorTotal>
            </ContainerCarrinho>
    
        )}
}