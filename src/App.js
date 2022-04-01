import React from 'react';
import styled from 'styled-components'
import CardProdutos from './components/Produtos/ProdutosCard';
import Filters from './components/Filters';
import Produtos from './components/Produtos/Produtos';



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


const H1 = styled.h1`
display: grid;
grid-template-columns: 100px;
margin-top: 200px;
margin-left: 160px;

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
const arrayProdutos = [
{
  id: 1,
  nome: 'Camisa Macaco',
  preco: 50,
  foto: 'https://images-americanas.b2w.io/produtos/4746981095/imagens/camiseta-masculina-cinza-raglan-plus-size-estampada-astronauta-planeta-ceu-lua-nave-espacial-estrelas-g2/4746981141_1_xlarge.jpg'
},

{
  id: 2,
  nome: 'Camisa Meu Uber Chegou',
  preco: 80,
  foto: 'https://cdn.awsli.com.br/600x700/236/236627/produto/964997251f5945b9b4.jpg'
},
{
  id: 3,
  nome: 'Camisa Beam Me',
  preco: 120,
  foto: 'https://i.pinimg.com/originals/e6/e2/c5/e6e2c51180e67e213a9e53e087102b3c.png',
},  
{
  id: 4,
  nome: 'Camisa Astronauta',
  preco: 150,
  foto: 'https://images.tcdn.com.br/img/img_prod/737444/camiseta_nao_tem_vida_inteligente_aqui_nave_espacial_abduzido_131117_1_20200427181639.jpg'
}
]



class App extends React.Component {
  state = {
    minFilter: 100,
    maxFilter: 1000,
    nameFilter: "",
    sortingParameter: "titulo",
    products: arrayProdutos 
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


  render() {

    const produtoOrdenado = 
                 arrayProdutos
              .sort((produtoAtual, proximoProduto) => {
                switch (this.state.sortingParameter) {
                  case "titulo":
                    return produtoAtual.nome.localeCompare(proximoProduto.nome)
                  default:
                    return produtoAtual.preco - proximoProduto.preco
                }
              })
             
             

    return (


      <App1>
        {/* {this.state.sortingParameter} */}

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

          <div>

          </div>




          <CardProdutos foto={'https://images-americanas.b2w.io/produtos/4746981095/imagens/camiseta-masculina-cinza-raglan-plus-size-estampada-astronauta-planeta-ceu-lua-nave-espacial-estrelas-g2/4746981141_1_xlarge.jpg'} nome={'Camisa Astronauta'} preco={'150,00'} />
          <CardProdutos foto={'https://cdn.awsli.com.br/600x700/236/236627/produto/964997251f5945b9b4.jpg'} nome={'Camisa Macaco'} preco={'50,00'} />
          <CardProdutos foto={'https://i.pinimg.com/originals/e6/e2/c5/e6e2c51180e67e213a9e53e087102b3c.png'} nome={'Camisa Meu Uber Chegou'} preco={'80,00'} />
          <CardProdutos foto={'https://images.tcdn.com.br/img/img_prod/737444/camiseta_nao_tem_vida_inteligente_aqui_nave_espacial_abduzido_131117_1_20200427181639.jpg'} nome={'Camisa Beam Me'} preco={'120,00'} />

        </AppContainer>


        <Carrinho className="carrinho">
          <H2>Carrinho</H2>
        </Carrinho>


      </App1>
    )
  }
}



export default App;
