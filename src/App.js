import React from 'react';
import styled from 'styled-components'
import Filters from './components/Filters';
import ProdutosJson from './data/produtos.json';
import ShoppingCart from './components/Carrinho/ShoppingCart';
import CardProdutos from './components/Produtos/ProdutosCard'
import Produtos from './components/Produtos/Produtos';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 16px;
  gap: 30px 30px;
  margin-top: 5px;
  margin-right: 50px;

`;

const HeaderApp = styled.div`
display:flex;
margin: auto;
align-items: center;
justify-content: space-evenly;
`

const App1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  min-height: 100vh;

`

const Carrinho = styled.h2`
  border: 2px solid black;
  width: 80%;
  height: 40%;
  margin-top: 10px;
  margin-left: 10px;
`

class App extends React.Component {
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: "",
    sortingParameter: "nome",
    produtos: ProdutosJson,
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

  
  adicionandoAoCarrinho = (produtoId) => {
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)
    if(produtoNoCarrinho) {
      const novosProdutosNoCarrinho = this.state.produtosNoCarrinho.map(produto => {
        if(produtoId === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto 
      })
      this.setState({produtosNoCarrinho: novosProdutosNoCarrinho})
    } else {
      
      const produtoParaAdicionar = this.state.produtos.find(produto => produtoId === produto.id)

      const novosProdutosNoCarrinho = [this.state.produtosNoCarrinho, {...produtoParaAdicionar, quantidade: 1}]

      this.setState({produtosNoCarrinho: novosProdutosNoCarrinho})
    }

  }


  onRemoveProduto = (idProduto) => {
    const upProdutosNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {

      if (produto.id === idProduto) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto;
    }).filter((produto) => produto.quantidade > 0)

    this.setState({ produtosNoCarrinho: upProdutosNoCarrinho })

  }



  render() {

    const produtosFiltrados = this.state.produtos.filter(produto => {
      return produto.nome.includes(this.state.nameFilter)
    }).filter(produto => {
      return this.state.minFilter === "" || this.state.minFilter <= produto.preco
    }).filter(produto => {
      return this.state.maxFilter === "" || this.state.maxFilter >= produto.preco
    }).sort((produtoAtual, proximoProduto) => {
      switch (this.state.sortingParameter) {
        case "nome":
          return produtoAtual.nome.localeCompare(proximoProduto.nome)
        case "preco":
          return produtoAtual.preco - proximoProduto.preco
        default:
          return produtoAtual.nome.localeCompare(proximoProduto.nome)
      }
    })
      .map(produto => {
        return <CardProdutos foto={produto.foto} nome={produto.nome} preco={produto.preco} />
      })
      .sort((a, b) => {
        return b.preco - a.preco
      })
    return (

    <>
      <HeaderApp>
            <p> Quantidade de produtos: {produtosFiltrados.length} </p>
            <label for="sort">Ordenação:
              <select
                value={this.state.sortingParameter}
                onChange={this.onChangeSortingParameter}
                name="sort"
              >
                <option value="nome">Nome</option>
                <option value="preco">Preço</option>
              </select>
            </label>
        </HeaderApp>

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
          
          <Produtos
          produtosFiltrados={produtosFiltrados}
          adicionandoAoCarrinho={this.adicionandoAoCarrinho}
          />
        </AppContainer>

        <Carrinho className="carrinho"> 
          <ShoppingCart produtosNoCarrinho={this.state.produtosNoCarrinho} 
          onRemoveProduto={this.onRemoveProduto} />
        </Carrinho> 

      </App1>
    </>
    )
  }
}



export default App;
