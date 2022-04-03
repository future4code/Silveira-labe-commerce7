import React from 'react'
import styled from 'styled-components'

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  border: 2px solid black;
  width: 70%;
  height: 38%;
  margin-left: 10px;
  margin-top: 10px;
`

const Input = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`

const H3 = styled.h3`
display: flex;
align-items:center;
justify-content: center;

`

export default class Filters extends React.Component {


  render() {
    return <FiltersContainer>

      <H3>Filtros</H3>
      <Input>
        <p>Valor minimo:</p>
        <input
          type="number"
          value={this.props.minFilter}
          onChange={this.props.onChangeMinFilter}
        />
      </Input>

      <Input>
        <p>Valor maximo:</p>
        <input
          type="number"
          value={this.props.maxFilter}
          onChange={this.props.onChangeMaxFilter}
        />
      </Input>

      <Input>
        <p>Busca por nome:</p>
        <input
          type="text"
          value={this.props.nameFilter}
          onChange={this.props.onChangeNameFilter}
        />

      </Input>

    </FiltersContainer>

  }
}