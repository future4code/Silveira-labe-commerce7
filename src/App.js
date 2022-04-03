import React from 'react';
import styled from 'styled-components'
import Filters from './components/Filters';
import ProdutosJson from './data/produtos.json';
import ShoppingCart from './components/Carrinho/ShoppingCart';
import CardProdutos from './components/Produtos/ProdutosCard'

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


  onRemoveProduto = (idProduto) => {
    const upProdutosNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {

      if (produto.id === idProduto) {
        return {
          ...produto,
          qtd: produto.qtd - 1
        }
      }
      return produto;
    }).filter((produto) => produto.qtd > 0)

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

          <span>
            <label for="sort">Ordenação: </label>
            <select
              value={this.state.sortingParameter}
              onChange={this.onChangeSortingParameter}
              name="sort"
            >
              <option value="nome">Nome</option>
              <option value="preco">Preço</option>
            </select>
          </span>



          {produtosFiltrados}
        </AppContainer>
{/* 
          <CardProdutos foto={'https://images-americanas.b2w.io/produtos/4746981095/imagens/camiseta-masculina-cinza-raglan-plus-size-estampada-astronauta-planeta-ceu-lua-nave-espacial-estrelas-g2/4746981141_1_xlarge.jpg'} nome={'Camisa Astronauta'} preco={'200,00'} />
          <CardProdutos foto={'https://cdn.awsli.com.br/600x700/236/236627/produto/964997251f5945b9b4.jpg'} nome={'Camisa Macaco'} preco={'200,00'} />
          <CardProdutos foto={'https://i.pinimg.com/originals/e6/e2/c5/e6e2c51180e67e213a9e53e087102b3c.png'} nome={'Camisa Meu Uber Chegou'} preco={'200,00'} />
          <CardProdutos foto={'https://images.tcdn.com.br/img/img_prod/737444/camiseta_nao_tem_vida_inteligente_aqui_nave_espacial_abduzido_131117_1_20200427181639.jpg'} nome={'Camisa Beam Me'} preco={'200,00'} />
*/}
   
         <Carrinho className="carrinho"> 
          <ShoppingCart produtosNoCarrinho={this.state.produtosNoCarrinho} 
          onRemoveProduto={this.onRemoveProduto} />
         

        </Carrinho> 


      </App1>
    )
  }
}



export default App;
