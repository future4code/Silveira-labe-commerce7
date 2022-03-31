import React from 'react'
import styled from 'styled-components'

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  border: 2px solid black;
  width: 70%;
  height: 55%;
  margin-left: 30px;
  margin-top: 30px;
`;

const Input = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
`



export default class Filters extends React.Component{

    render(){
        return <FiltersContainer>
        
            <h3>Filtros</h3>
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