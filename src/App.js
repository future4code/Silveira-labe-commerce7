import React from 'react';
import styled from 'styled-components'
import Produtos from './components/Produtos/Produtos';
import Filters from './components/Filters';



const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  padding: 16px;
  gap: 30px 30px;
  margin-top: 5px;
  margin-right: 50px;

`;

const App1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
`

const Carrinho = styled.h2`
  border: 2px solid black;
  width: 80%;
  height: 60%;
  margin-top: 30px;
  margin-left: 20px;

`
const H2 = styled.h2`
display: grid;
grid-template-columns: 100px;
margin-top: 180px;
margin-left: 90px;
`
const listaDeProdutos = [
  {
    id: Date.now(),
    imagem: 'https://cdn.awsli.com.br/600x700/236/236627/produto/964997251f5945b9b4.jpg',
    nome: "Camisa macaco",
    preco: "200,00"
  },
  {
    id: Date.now(),
    imagem: 'https://cdn.awsli.com.br/600x700/236/236627/produto/964997251f5945b9b4.jpg',
    nome: "Camisa meu uber chegou",
    preco: "280,00"
  },
  {
    id: Date.now(),
    imagem: 'https://cdn.awsli.com.br/600x700/236/236627/produto/964997251f5945b9b4.jpg',
    nome: 'camisa macaco',
    preco: "300,00"
  },
  {
    id: Date.now(),
    imagem: 'https://cdn.awsli.com.br/600x700/236/236627/produto/964997251f5945b9b4.jpg',
    nome: "Camisa meu uber chegou",
    preco: "100,00"
  }
]

class App extends React.Component {
  state = {
    minFilter: 100,
    maxFilter: 1000,
    nameFilter: "",
    sortingParameter: "",
    produtosNoCarrinho: [],
    quantidade: " "
  }

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value })
  }

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value })
  }

  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value })
  }

  onChangeSortingParameter = (event) => {
    this.setState({
      sortingParameter: event.target.value
    })
  }

  adicionarProdutos = ((produtosId) => { 
    const produtosParadicionar = listaDeProdutos.find(produto => produtosId === produto.id)
    const novaListaDeProdutosNoCarrinho = [...this.state.produtosNoCarrinho, {...produtosParadicionar, quantidade: "1"}];

    this.setState({produtosNoCarrinho: novaListaDeProdutosNoCarrinho});
  })


  render() {

    return (
      <App1>

        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        />

        <AppContainer>
         
          <label for="sort">Ordenação: </label>
          <select name="sort">
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>

          <Produtos
            listaDeProdutos= {listaDeProdutos}
            adicionarProdutos={this.adicionarProdutos}
          />
        </AppContainer>


        <Carrinho className="carrinho">
          <H2>Carrinho</H2>
        </Carrinho>


      </App1>
    )
  }
}



export default App;
